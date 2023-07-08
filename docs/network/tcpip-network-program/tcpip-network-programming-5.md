---
title: 《TCP/IP网络编程》第15-17章学习笔记
date: 2021-07-18 18:23:56
updated: 2021-07-18 18:23:56
tags:
- 网络
categories:
- 网络
description: ch15.套接字和标准I/O，ch16. 关于I/O流分离的其他内容，ch17.优于 select 的 epoll
toc:
  enable: true
  number: false
---

注：博主只关注编程实现的方面以及linux部分，部分网络原理讲解和windows实现部分跳过


## 第 15 章  套接字和标准I/O

### 15.1  标准I/O函数的优点

- c15p247:标准 IO 函数和系统函数文件复制程序的性能对比
    - 标准 IO 函数stdcpy.c

        - ```c
          #include <stdio.h>
          #define BUF_SIZE 3
          
          int main()
          {
              FILE * fp1;
              FILE * fp2;
              char buf[BUF_SIZE];
          
              fp1 = fopen("news.txt", "r");
              fp2 = fopen("cpy1.txt", "w");
          
              while (fgets(buf, BUF_SIZE, fp1) != NULL) {
                  fputs(buf, fp2);
              }
          
              fclose(fp1);
              fclose(fp2);
              return 0;
          }
          ```

    - 系统函数syscpy.c

        - ```c
          #include <stdio.h>
          #include <fcntl.h>
          #define BUF_SIZE 3
          
          int main()
          {
              int fd1, fd2;
              int len;
              char buf[BUF_SIZE];
          
              fd1 = open("news.txt", O_RDONLY);
              fd2 = open("cpy.txt", O_WRONLY|O_CREAT|O_TRUNC);
          
              while ((len = read(fd1, buf, sizeof(buf))) > 0) {
                  write(fd2, buf, len);
              }
              close(fd1);
              close(fd2);
              return 0;
          }
          ```

    - 编译运行
    - 比对的时候发现问题，标准 IO 复制后的文件和原文件不对

    - ```shell
      shiqi@pc:~/network/ch15$ ll -h
      -rw-r--r--  1 shiqi shiqi 330M Aug  8 20:04 news.txt
      shiqi@pc:~/network/ch15$ gcc syscpy.c -o syscpy
      shiqi@pc:~/Devel/network/ch15$ time ./syscpy
      real	3m2.397s
      user	0m55.517s
      sys	2m6.619s
      shiqi@pc:~/network/ch15$ gcc stdcpy.c -o stdcpy
      shiqi@pc:~/network/ch15$ time ./stdcpy
      real	0m6.822s
      user	0m5.014s
      sys	0m0.208s
      shiqi@pc:~/network/ch15$ ll -h
      total 986M
      -rw-rw-r--  1 shiqi shiqi 327M Aug  8 20:11 cpy1.txt
      -rwxrwxrwx  1 shiqi shiqi 330M Aug  8 20:08 cpy.txt*
      -rw-r--r--  1 shiqi shiqi 330M Aug  8 20:04 news.txt
      ```


### 15.2  使用标准I/O函数

- c15p249:将创建套接字返回的文件描述符转换为标准 IO 函数中使用的 FILE 结构体指针的 fdopen 函数原型

    - ```c
      #include <stdio.h>
      FILE * fdopen(int fildes, const char * mode);
      // fildes: 需要转换的文件描述符
      // mode: 将要创建的 FILE 结构体指针的模式(mode)信息
      // 成功时返回转换的 FILE 结构体指针，失败时返回 NULL
      ```


- c15p250:fdopen 的函数使用示例 desto.c

    - ```c
      #include <stdio.h>
      #include <fcntl.h>
      
      int main()
      {
          FILE * fp;
          int fd = open("data.dat", O_WRONLY|O_CREAT|O_TRUNC);
          if (fd == -1) {
              fputs("file open error", stdout);
              return -1;
          }
      
          fp = fdopen(fd, "w");
          fputs("Network C programming\n", fp);
          fclose(fp);
      
          return 0;
      }
      ```


    - ```shell
      shiqi@pc:~/network/ch15$ gcc desto.c -o desto
      shiqi@pc:~/network/ch15$ ./desto
      shiqi@pc:~/network/ch15$ chmod 755 data.dat
      shiqi@pc:~/network/ch15$ cat data.dat
      Network C programming
      ```


- c15p250:将创建的标准 IO 函数中使用的 FILE 结构体指针转换为套接字返回的文件描述符的 fileno 函数原型

    - ```c
      #include <stdio.h>
      int fileno(FILE * stream);
      // 成功时返回转换的 FILE 结构体指针，失败时返回 NULL
      ```


- c15p251:fileno 的程序示例 todes.c

    - ```c
      #include <stdio.h>
      #include <fcntl.h>
      
      int main()
      {
          FILE * fp;
          int fd = open("data.dat", O_WRONLY|O_CREAT|O_TRUNC);
          if (fd == -1) {
              fputs("file open error", stdout);
              return -1;
          }
      
          printf("First file descriptor: %d\n", fd);
          fp = fdopen(fd, "w");
          fputs("TCP/IP SOCKET PROGRAMMING\n", fp);
          printf("Second file descriptor: %d\n", fileno(fp));
          fclose(fp);
      
          return 0;
      }
      ```


    - ```shell
      shiqi@pc:~/network/ch15$ gcc todes.c -o todes
      shiqi@pc:~/network/ch15$ ./todes
      First file descriptor: 3
      Second file descriptor: 3
      ```


### 15.3  基于套接字的标准 I/O函数使用

- c15p256:基于标准 IO 函数分离流的目的？
    - 为了将 FILE 指针按读模式和写模式加以区分
    - 可通过区分读写模式降低实现难度
    - 通过区分 IO 缓冲提高缓冲性能

- c15p252:基于标准 IO 函数的回声服务端和客户端程序示例
    - 服务端 echo_stdserv.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define BUF_SIZE 1024
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char * argv[])
          {
              int serv_sock, clnt_sock;
              char message[BUF_SIZE];
              int str_len, i;
          
              struct sockaddr_in serv_adr, clnt_adr;
              socklen_t clnt_adr_sz;
              FILE * readfp;
              FILE * writefp;
          
              if (argc != 2) {
                  printf("Usage : %s <port>\n", argv[0]);
                  exit(1);
              }
          
              serv_sock = socket(PF_INET, SOCK_STREAM, 0);
              if (serv_sock == -1) {
                  error_handling("socket() error");
              }
          
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              serv_adr.sin_port = htons(atoi(argv[1]));
          
              if (bind(serv_sock, (struct sockaddr *)&serv_adr, sizeof(serv_adr)) == -1) {
                  error_handling("bind() error");
              }
          
              if (listen(serv_sock, 5) == -1) {
                  error_handling("listen() error");
              }
          
              clnt_adr_sz = sizeof(clnt_adr);
              for (i = 0; i < 5; ++i) {
                  clnt_sock = accept(serv_sock, (struct sockaddr *)&clnt_adr, &clnt_adr_sz);
                  if (clnt_sock == -1) {
                      error_handling("accept() error");
                  } else {
                      printf("Connected client %d \n", i+1);
                  }
          
                  readfp = fdopen(clnt_sock, "r");
                  writefp = fdopen(clnt_sock, "w");
                  while (!feof(readfp)) {
                      fgets(message, BUF_SIZE, readfp);
                      fputs(message, writefp);
                      fflush(writefp);
                  }
                  fclose(readfp);
                  fclose(writefp);
              }
              close(serv_sock);
          
              return 0;
          }
          ```

    - 客户端 echo_client

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define BUF_SIZE 1024
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char * argv[])
          {
              int sock;
              char message[BUF_SIZE];
              int str_len;
              struct sockaddr_in serv_adr;
              FILE * readfp;
              FILE * writefp;
          
              if (argc != 3) {
                  printf("Usage : %s <IP> <port>\n", argv[0]);
                  exit(1);
              }
          
              sock = socket(PF_INET, SOCK_STREAM, 0);
              if (sock == -1) {
                  error_handling("socket() error");
              }
          
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = inet_addr(argv[1]);
              serv_adr.sin_port = htons(atoi(argv[2]));
            
              if (connect(sock, (struct sockaddr *)&serv_adr, sizeof(serv_adr)) == -1) {
                  error_handling("connect() error!");
              } else {
                  puts("Connceted........");
              }
          
              readfp = fdopen(sock, "r");
              writefp = fdopen(sock, "w");
              while (1) {
                  fputs("Input message(Q to quit): ", stdout);
                  fgets(message, BUF_SIZE, stdin);
          
                  if (!strcmp(message, "q\n") || !strcmp(message, "Q\n")) {
                      break;
                  }
          
                  fputs(message, writefp);
                  fflush(writefp);
                  fgets(message, BUF_SIZE, readfp);
                  printf("Message from server: %s", message);
              }
              close(sock);
          
              return 0;
          }
          ```

    - 编译运行

        - ```shell
          shiqi@pc:~/network/ch15$ gcc echo_stdserv.c -o serv
          shiqi@pc:~/network/ch15$ ./serv 9190
          Connected client 1
          ^C
          ```


        - ```shell
          shiqi@pc:~/network/ch15$ gcc echo_client.c -o clnt
          shiqi@pc:~/network/ch15$ ./clnt 127.0.0.1 9190
          Connceted........
          Input message(Q to quit): uz
          Message from server: uz
          Input message(Q to quit): pdu
          Message from server: pdu
          Input message(Q to quit): q
          ```


## 第 16 章  关于I/O流分离的其他内容

### 16.1  分离I/O流

### 16.2  文件描述符的复制和半关闭

- c16p261:文件描述符的复制函数原型 dup 和 dup2

    - ```c
      #include <unistd.h>
      int dup(int fildes);
      int dup2(int fildes, int fildes2);
      // fildes: 需要复制的文件描述符
      // fildes2: 明确指定的文件描述符整数值
      // 成功时返回复制的文件描述符，失败时返回-1
      ```


- c16p262:dup的程序示例 dup.c

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      
      int main()
      {
          int cfd1, cfd2;
          char str1[] = "Hi~ \n";
          char str2[] = "It's nice day~ \n";
      
          cfd1 = dup(1);
          cfd2 = dup2(cfd1, 7);
      
          printf("fd1=%d, fd2=%d\n", cfd1, cfd2);
          write(cfd1, str1, sizeof(str1));
          write(cfd2, str2, sizeof(str2));
      
          close(cfd1);
          close(cfd2);
          write(1, str1, sizeof(str1));
          close(1);
          write(1, str1, sizeof(str2));
          return 0;
      }
      ```


    - ```shell
      shiqi@pc:~/network/ch16$ gcc dup.c -o dup
      shiqi@pc:~/network/ch16$ ./dup
      fd1=3, fd2=7
      Hi~
      It's nice day~
      Hi~
      ```


- c16p263:复制文件描述符后「流」分离的服务端客户端程序示例 sep_serv.c 和 sep_clnt.c，可通过服务器端的半关闭状态接收客户端最后发送的字符串
    - 没做到流分离的服务端 sep_serv.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define BUF_SIZE 1024
          
          int main(int argc, char * argv[])
          {
              int serv_sock, clnt_sock;
              FILE * readfp;
              FILE * writefp;
          
              struct sockaddr_in serv_adr, clnt_adr;
              socklen_t clnt_adr_sz;
              char buf[BUF_SIZE] = {0,};
          
              serv_sock = socket(PF_INET, SOCK_STREAM, 0);
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              serv_adr.sin_port = htons(atoi(argv[1]));
          
              bind(serv_sock, (struct sockaddr *)&serv_adr, sizeof(serv_adr));
              listen(serv_sock, 5);
              clnt_adr_sz = sizeof(clnt_adr);
              clnt_sock = accept(serv_sock, (struct sockaddr *)&clnt_adr, &clnt_adr_sz);
          
              readfp = fdopen(clnt_sock, "r");
              writefp = fdopen(clnt_sock, "w");
          
              fputs("FROM SERVER: Hi~ client?\n", writefp);
              fputs("I love all of the world\n", writefp);
              fputs("You are awesome!\n", writefp);
              fflush(writefp);
          
              fclose(writefp);
              fgets(buf, sizeof(buf), readfp);
              fputs(buf, stdout);
              fclose(readfp);
          
              return 0;
          }
          ```

    - 流分离的服务端 sep_serv2.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define BUF_SIZE 1024
          
          int main(int argc, char * argv[])
          {
              int serv_sock, clnt_sock;
              FILE * readfp;
              FILE * writefp;
          
              struct sockaddr_in serv_adr, clnt_adr;
              socklen_t clnt_adr_sz;
              char buf[BUF_SIZE] = {0,};
          
              serv_sock = socket(PF_INET, SOCK_STREAM, 0);
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              serv_adr.sin_port = htons(atoi(argv[1]));
          
              bind(serv_sock, (struct sockaddr *)&serv_adr, sizeof(serv_adr));
              listen(serv_sock, 5);
              clnt_adr_sz = sizeof(clnt_adr);
              clnt_sock = accept(serv_sock, (struct sockaddr *)&clnt_adr, &clnt_adr_sz);
          
              readfp = fdopen(clnt_sock, "r");
              // 注意此处的 dup
              writefp = fdopen(dup(clnt_sock), "w");
          
              fputs("FROM SERVER: Hi~ client?\n", writefp);
              fputs("I love all of the world\n", writefp);
              fputs("You are awesome!\n", writefp);
              fflush(writefp);
          
              // 服务端进入半关闭状态，并向客户端发送 EOF
              shutdown(fileno(writefp), SHUT_WR);
              fclose(writefp);
              fgets(buf, sizeof(buf), readfp);
              fputs(buf, stdout);
              fclose(readfp);
          
              return 0;
          }
          ```

    - 客户端 sep_clnt.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define BUF_SIZE 1024
          
          int main(int argc, char * argv[])
          {
              int sock;
              char buf[BUF_SIZE];
              struct sockaddr_in serv_addr;
          
              FILE * readfp;
              FILE * writefp;
          
              sock = socket(PF_INET, SOCK_STREAM, 0);
              memset(&serv_addr, 0, sizeof(serv_addr));
              serv_addr.sin_family = AF_INET;
              serv_addr.sin_addr.s_addr = inet_addr(argv[1]);
              serv_addr.sin_port = htons(atoi(argv[2]));
          
              connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr));
              readfp = fdopen(sock, "r");
              writefp = fdopen(sock, "w");
          
              while (1) {
                  if (fgets(buf, sizeof(buf), readfp) == NULL) {
                      break;
                  }
                  fputs(buf, stdout);
                  fflush(stdout);
              }
          
              fputs("FROM CLIENT: Thank you!\n", writefp);
              fflush(writefp);
              fclose(writefp);
              fclose(readfp);
          
              return 0;
          }
          ```

    - 编译运行

        - ```shell
          shiqi@pc:~/network/ch16$ gcc sep_serv.c -o serv
          shiqi@pc:~/network/ch16$ ./serv 9190
          
          shiqi@pc:~/network/ch16$ gcc sep_clnt.c -o clnt
          shiqi@pc:~/network/ch16$ ./clnt 127.0.0.1 9190
          FROM SERVER: Hi~ client?
          I love all of the world
          You are awesome!
          ```


        - ```shell
          shiqi@pc:~/network/ch16$ gcc sep_serv2.c -o serv
          shiqi@pc:~/network/ch16$ ./serv 9190
          FROM CLIENT: Thank you!
          
          shiqi@pc:~/network/ch16$ ./clnt 127.0.0.1 9190
          FROM SERVER: Hi~ client?
          I love all of the world
          You are awesome!
          ```


## 第 17 章 优于 select 的 epoll

### 17.1 epoll 理解及应用

- c17p265:基于 select 的 I/O 复用技术速度慢的原因
    - 调用 select 函数后常见的针对所有文件描述符的循环语句
    - 每次调用 select 函数时都需要向该函数传递监视对象信息

- c17p266:epoll的优点
    - 无需编写以监视状态变化为目的的针对所有文件描述符的循环语句
    - 调用对应于select函数的epoll_wait函数时无需每次传递监视对象信息

- Q:select 和 epoll 的区别

- c17p267:epoll的3个函数
    - epoll_create: 创建保存epoll文件描述符的空间
    - epoll_ctl: 向空间注册并注销文件描述符
    - epoll_wait: 与select函数类似，等待文件描述符发生变化
    - epoll 由操作系统负责保存监视对象文件描述符，因此需要向操作系统请求创建保存文件描述符的空间，此时用的函数就是 epoll_create
    - 为了添加和删除监视对象文件描述符，通过 epoll_ctl 函数请求操作系统完成
    - epoll调用epoll_wait函数等待文件描述符的变化

- c17p267:epoll中将发生变化的文件描述符单独集中到一起的epoll_event结构体

    - ```c
      struct epoll_event {
          __uint32_t events;
          epoll_data_t data;
      };
      typedef union epoll_data {
          void * ptr;
          int fd;
          __uint32_t u32;
          __uint64_t u64;
      } epoll_data_t;
      ```

    - 声明epoll_event结构体数组后，传递给epoll_wait 函数时，发生变化的文件描述符信息将被填入数组

- c17p268:epoll_create 的函数原型

    - ```c
      #include <sys/epoll.h>
      int epoll_create(int size);
      // size: epoll实例的大小
      // 成功时返回 epoll 的文件描述符，失败时返回 -1
      ```

    - 调用 epoll_create 函数时创建的文件描述符保存空间称为「epoll 例程」，通过参数 size 传递的值决定 epoll 例程的大小，但该值只是向操作系统提出的建议。换言之，size 并不用来决定 epoll 的大小，而仅供操作系统参考
    - Linux 2.6.8 之后的内核将完全忽略传入 epoll_create 函数的 size 函数，因此内核会根据情况调整 epoll 例程大小
    - epoll_create 函数创建的资源与套接字相同，也由操作系统管理。因此，该函数和创建套接字的情况相同，也会返回文件描述符，也就是说返回的文件描述符主要用于区分 epoll 例程。需要终止时，与其他文件描述符相同，也要调用 close 函数

- c17p268:epoll_ctl 的函数原型
    - 生成例程后，应在其内部注册监视对象文件描述符，此时使用 epoll_ctl 函数

    - ```c
      #include <sys/epoll.h>
      int epoll_ctl(int epfd, int op, int fd,
                    struct epoll_event *event);
      // epfd: 用于注册监视对象的epoll例程的文件描述符
      // op: 用于指定监视对象的添加、删除或更改等操作
      // fd: 需要注册的监视对象文件描述符
      // event: 监视对象的事件类型
      // 成功时返回 0 ，失败时返回 -1
      ```

    - 用法举例：
        - `epoll_ctl(A,EPOLL_CTL_ADD,B,C);`：epoll 例程 A 中注册文件描述符 B ，主要目的是为了监视参数 C 中的事件
        - `epoll_ctl(A,EPOLL_CTL_DEL,B,NULL);`：从 epoll 例程 A 中删除文件描述符 B
    - 第二个参数op:
        - EPOLL_CTL_ADD：将文件描述符注册到epoll例程
        - EPOLL_CTL_DEL：从epoll例程中删除文件描述符
        - EPOLL_CTL_MOD：更改注册的文件描述符的关注事件发生情况
    - epoll_event结构体在epoll_ctl函数中的应用

    - ```c
      struct epoll_event event;
      ...
      event.events = EPOLLIN;
      event.data.fd = sockfd;
      epoll_ctl(opfd, EPOLL_CTL_ADD, sockfd, &event);
      ...
      ```

    - 上述代码将sockfd注册到epoll例程epfd中，并在需要读取数据的情况下产生相应事件。

- Q:epoll_event成员events中可保存的常量和所指的事件类型
    - EPOLLIN: 需要读取数据的情况
    - EPOLLOUT: 输出缓冲为空，可以立即发送数据的情况
    - EPOLLPRI: 收到OOB数据的情况
    - EPOLLRDHUP: 断开连接或半关闭的情况，在边缘触发方式下非常有用
    - EPOLLERR: 发生错误的情况
    - EPOLLET: 以边缘触发的方式得到事件通知
    - EPOLLONESHOT: 发生一次事件后，相应文件描述符不再收到事件通知。因此需向epoll_ctl函数的第二个参数传递EPOLL_CTL_MOD，再次设置事件
    - 可通过位或运算同时传递多个上述参数

- c17p270:epoll_wait 的函数原型

    - ```c
      #include <sys/epoll.h>
      int epoll_wait(int epfd, struct epoll_event * events,
                     int maxevents, int timeout);
      // epfd: 表示事件发生监视范围的epoll例程的文件描述符
      // events: 保存发生事件的文件描述符集合的结构体地址值
      // maxevents: 第二个参数中可以保存的最大事件数
      // timeout: 以1/1000秒为单位的等待时间，传递-1时，
      //          一直等待直到发生事件
      // 成功时返回发生事件的文件描述符，失败时返回 -1
      ```

    - 调用方式：注意第二个参数所指缓冲需要动态分配

    - ```c
      int event_cnt;
      struct epoll_event *op_events;
      ...
      // EPOLL_SIZE是宏常量
      ep_events = malloc(sizeof(struct epoll_event)*EPOLL_SIZE);
      ...
      event_cnt = epoll_wait(epfd, ep_events, EPOLL_SIZE, -1);
      ...
      ```

    - 调用函数后，返回发生事件的文件描述符数，同时第二个参数指向的缓冲中保存发生事件的文件描述符集合

- Q:epoll回声服务器端条件触发示例echo_epollserv.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <string.h>
      #include <unistd.h>
      #include <arpa/inet.h>
      #include <sys/socket.h>
      #include <sys/epoll.h>
      
      #define BUF_SIZE 100
      #define EPOLL_SIZE 50
      
      void error_handling(char *message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      int main(int argc, char *argv[])
      {
          int serv_sock, clnt_sock;
          struct sockaddr_in serv_adr, clnt_adr;
          socklen_t adr_sz;
          int str_len, i;
          char buf[BUF_SIZE];
      
          struct epoll_event *ep_events;
          struct epoll_event event;
          int epfd, event_cnt;
      
          if (argc != 2) {
              printf("Usage : %s <port>\n", argv[0]);
              exit(1);
          }
      
          serv_sock = socket(PF_INET, SOCK_STREAM, 0);
          memset(&serv_adr, 0, sizeof(serv_adr));
          serv_adr.sin_family = AF_INET;
          serv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
          serv_adr.sin_port = htons(atoi(argv[1]));
      
          if (bind(serv_sock, (struct sockaddr *)&serv_adr, sizeof(serv_adr)) == -1) {
              error_handling("bind() error");
          }
          if (listen(serv_sock, 5) == -1) {
              error_handling("listen() error");
          }
      
          epfd = epoll_create(EPOLL_SIZE);
          ep_events = malloc(sizeof(struct epoll_event)*EPOLL_SIZE);
      
          event.events = EPOLLIN;
          event.data.fd = serv_sock;
          epoll_ctl(epfd, EPOLL_CTL_ADD, serv_sock, &event);
      
          while (1) {
              event_cnt = epoll_wait(epfd, ep_events, EPOLL_SIZE, -1);
              if (event_cnt == -1) {
                  puts("epoll_wait() error");
                  break;
              }
      
              for (i = 0; i < event_cnt; ++i) {
                  if (ep_events[i].data.fd == serv_sock) {
                      adr_sz = sizeof(clnt_adr);
                      clnt_sock = accept(serv_sock,
                                         (struct sockaddr *)&clnt_adr,
                                         &adr_sz);
                      event.events = EPOLLIN;
                      event.data.fd = clnt_sock;
                      epoll_ctl(epfd, EPOLL_CTL_ADD, clnt_sock, &event);
                      printf("connected client: %d \n", clnt_sock);
                  } else {
                      str_len = read(ep_events[i].data.fd, buf, BUF_SIZE);
                      if (str_len == 0) {
                          epoll_ctl(epfd, EPOLL_CTL_DEL,
                                    ep_events[i].data.fd, NULL);
                          close(ep_events[i].data.fd);
                          printf("closed client: %d \n", ep_events[i].data.fd);
                      } else {
                          write(ep_events[i].data.fd, buf, str_len);
                      }
                  }
              }
          }
          close(serv_sock);
          close(epfd);
          return 0;
      }
      ```


    - ```shell
      shiqi@inspiron:~/network$ gcc echo_epollserv.c -o echo_epollserv
      shiqi@inspiron:~/network$ ./echo_epollserv 9190
      connected client: 5
      connected client: 6
      ```


    - ```shell
      shiqi@inspiron:~/network$ ./eclient2 127.0.0.1 9190
      Connceted........
      Input message(Q to quit): xp
      Message from server: xp
      Input message(Q to quit): q
      ```


### 17.2 条件触发和边缘触发

- c17p274:条件触发(Level Trigger)和边缘触发(Edge Trigger)的特性
    - 条件触发方式中，只要输入缓冲有数据就会一直通知该事件；只要输入缓冲中还剩有数据，就将以事件方式再次注册
    - 边缘触发中输入缓冲收到数据时仅注册 1 次该事件。即使输入缓冲中还留有数据，也不会再进行注册

- c17p274:条件触发和边缘触发的程序示例比较 echo_EPLTserv.c
    - 条件触发每次收到客户端数据时，都会注册该事件，并因此多次调用 epoll_wait 函数，切换为边缘触发后，仅注册一次事件
    - 服务端 echo_EPLTserv.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          #include <sys/epoll.h>
          
          // 减少缓冲大小以阻止服务器端一次性读取接收的数据
          #define BUF_SIZE 4
          #define EPOLL_SIZE 50
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char *argv[])
          {
              int serv_sock, clnt_sock;
              struct sockaddr_in serv_adr, clnt_adr;
              socklen_t adr_sz;
              int str_len, i;
              char buf[BUF_SIZE];
          
              struct epoll_event *ep_events;
              struct epoll_event event;
              int epfd, event_cnt;
          
              if (argc != 2) {
                  printf("Usage : %s <port>\n", argv[0]);
                  exit(1);
              }
          
              serv_sock = socket(PF_INET, SOCK_STREAM, 0);
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              serv_adr.sin_port = htons(atoi(argv[1]));
          
              if (bind(serv_sock, (struct sockaddr *)&serv_adr, sizeof(serv_adr)) == -1) {
                  error_handling("bind() error");
              }
              if (listen(serv_sock, 5) == -1) {
                  error_handling("listen() error");
              }
          
              epfd = epoll_create(EPOLL_SIZE);
              ep_events = malloc(sizeof(struct epoll_event)*EPOLL_SIZE);
          
              event.events = EPOLLIN;
              event.data.fd = serv_sock;
              epoll_ctl(epfd, EPOLL_CTL_ADD, serv_sock, &event);
          
              while (1) {
                  event_cnt = epoll_wait(epfd, ep_events, EPOLL_SIZE, -1);
                  if (event_cnt == -1) {
                      puts("epoll_wait() error");
                      break;
                  }
          
                  for (i = 0; i < event_cnt; ++i) {
                      if (ep_events[i].data.fd == serv_sock) {
                          adr_sz = sizeof(clnt_adr);
                          clnt_sock = accept(serv_sock,
                                             (struct sockaddr *)&clnt_adr,
                                             &adr_sz);
                          event.events = EPOLLIN;
                          //event.events = EPOLLIN | EPOLLET;
                          event.data.fd = clnt_sock;
                          epoll_ctl(epfd, EPOLL_CTL_ADD, clnt_sock, &event);
                          printf("connected client: %d \n", clnt_sock);
                      } else {
                          str_len = read(ep_events[i].data.fd, buf, BUF_SIZE);
                          if (str_len == 0) {
                              epoll_ctl(epfd, EPOLL_CTL_DEL,
                                        ep_events[i].data.fd, NULL);
                              close(ep_events[i].data.fd);
                              printf("closed client: %d \n", ep_events[i].data.fd);
                          } else {
                              write(ep_events[i].data.fd, buf, str_len);
                          }
                      }
                  }
              }
              close(serv_sock);
              close(epfd);
              return 0;
          }
          ```

    - 编译测试

        - ```shell
          47@pc:~/network/ch17$ gcc echo_EPLTserv.c -o serv
          47@pc:~/network/ch17$ ./serv 9190
          return epoll_wait
          connected client: 5
          return epoll_wait
          return epoll_wait
          return epoll_wait
          return epoll_wait
          return epoll_wait
          return epoll_wait
          
          return epoll_wait
          return epoll_wait
          return epoll_wait
          return epoll_wait
          return epoll_wait
          return epoll_wait
          closed client: 5
          
          47@pc:~/network/ch04$ ./eclient 127.0.0.1 9190
          Connceted........
          Input message(Q to quit): eeeeeeeee
          Message from server: eeeeeeeee
          Input message(Q to quit): 12345678
          Message from server: 12345678Input message(Q to quit): 1234
          Message from server:
          Input message(Q to quit): 1
          Message from server: 1234
          Input message(Q to quit): 222
          Message from server: 1
          Input message(Q to quit): q
          ```

        - 把代码 71 行取消注释，注释 70 行后

        - ```shell
          47@pc:~/network/ch17$ gcc echo_EPTLserv.c -o serv
          47@pc:~/network/ch17$ ./serv 9190
          return epoll_wait
          connected client: 5
          return epoll_wait
          return epoll_wait
          return epoll_wait
          return epoll_wait
          return epoll_wait
          return epoll_wait
          
          47@pc:~/network/ch04$ ./eclient 127.0.0.1 9190
          Connceted........
          Input message(Q to quit): 12345678
          Message from server: 1234Input message(Q to quit): 999999
          Message from server: 5678Input message(Q to quit): 9999999999esh
          Message from server:
          999Input message(Q to quit): 67890
          Message from server: 999
          Input message(Q to quit): q
          ```


- c17p278:更改或读取文件属性的 fcntl 函数原型

    - ```c
      #include <fcntl.h>
      int fcntl(int fieldes, int cmd, ...);
      // filedes: 属性更改目标的文件描述符
      // cmd: 表示函数调用的目的
      // 成功时返回 cmd 参数相关值，失败时返回-1
      ```

    - fcntl 具有可变参数的形式，如果向第二个参数传递 F_GETFL，可以获得第一个参数所指的文件描述符属性(int 型)。反之，如果传递 F_SETTL，可以更改文件描述符属性

- c17p278:将文件(套接字)改为非阻塞模式的代码

    - ```c
      int flag = fcntl(fd, F_GETFL, 0);
      fcntl(fd, F_SETFL, flag|O_NONBLOCK);
      ```

    - 通过第一条语句获取之前设置的属性信息，通过第二条语句在此基础上添加非阻塞 O_ NONBLOCK 标志。调用 read & write 函数时，无论是否存在数据，都会形成非阻塞文件(套接字)

- c17p279:实现边缘触发的回声服务器的程序示例 echo_EPETserv.c
    - 边缘触发接收数据仅注册 1 次事件，所以一旦发生输入相关事件就应该读取输入缓冲中的全部数据。其终止条件是验证输入缓冲是否为空：read 函数返回 -1，变量 errno 中的值为 EAGAIN时，说明没有数据可读
    - echo_EPETserv.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          #include <sys/epoll.h>
          #include <fcntl.h>
          #include <errno.h>
          
          #define BUF_SIZE 4
          #define EPOLL_SIZE 50
          
          void setnonblockingmode(int fd)
          {
              int flag = fcntl(fd, F_GETFL, 0);
              fcntl(fd, F_SETFL, flag|O_NONBLOCK);
          }
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char *argv[])
          {
              int serv_sock, clnt_sock;
              struct sockaddr_in serv_adr, clnt_adr;
              socklen_t adr_sz;
              int str_len, i;
              char buf[BUF_SIZE];
          
              struct epoll_event *ep_events;
              struct epoll_event event;
              int epfd, event_cnt;
          
              if (argc != 2) {
                  printf("Usage : %s <port>\n", argv[0]);
                  exit(1);
              }
          
              serv_sock = socket(PF_INET, SOCK_STREAM, 0);
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              serv_adr.sin_port = htons(atoi(argv[1]));
          
              if (bind(serv_sock, (struct sockaddr *)&serv_adr, sizeof(serv_adr)) == -1) {
                  error_handling("bind() error");
              }
              if (listen(serv_sock, 5) == -1) {
                  error_handling("listen() error");
              }
          
              epfd = epoll_create(EPOLL_SIZE);
              ep_events = malloc(sizeof(struct epoll_event)*EPOLL_SIZE);
          
              event.events = EPOLLIN;
              event.data.fd = serv_sock;
              epoll_ctl(epfd, EPOLL_CTL_ADD, serv_sock, &event);
          
              while (1) {
                  event_cnt = epoll_wait(epfd, ep_events, EPOLL_SIZE, -1);
                  if (event_cnt == -1) {
                      puts("epoll_wait() error");
                      break;
                  }
                  
                  puts("return epoll_wait");
                  for (i = 0; i < event_cnt; ++i) {
                      if (ep_events[i].data.fd == serv_sock) {
                          adr_sz = sizeof(clnt_adr);
                          clnt_sock = accept(serv_sock,
                                             (struct sockaddr *)&clnt_adr,
                                             &adr_sz);
                          setnonblockingmode(clnt_sock);
                          event.events = EPOLLIN | EPOLLET;
                          event.data.fd = clnt_sock;
                          epoll_ctl(epfd, EPOLL_CTL_ADD, clnt_sock, &event);
                          printf("connected client: %d \n", clnt_sock);
                      } else {
                          while (1) {
                              str_len = read(ep_events[i].data.fd, buf, BUF_SIZE);
                              if (str_len == 0) {
                                  epoll_ctl(epfd, EPOLL_CTL_DEL,
                                            ep_events[i].data.fd, NULL);
                                  close(ep_events[i].data.fd);
                                  printf("closed client: %d \n", 
                                         ep_events[i].data.fd);
                                  break;
                              } else if (str_len < 0) {
                                  if (errno == EAGAIN) {
                                      break;
                                  }
                              } else {
                                  write(ep_events[i].data.fd, buf, str_len);
                              }
                          }
                      }
                  }
              }
              close(serv_sock);
              close(epfd);
              return 0;
          }
          ```

    - 编译运行

        - ```shell
          47@pc:~/Devel/network/ch17$ gcc echo_EPETserv.c -o serv
          47@pc:~/Devel/network/ch17$ ./serv 9190
          return epoll_wait
          connected client: 5
          return epoll_wait
          return epoll_wait
          return epoll_wait
          closed client: 5
          
          47@pc:~/Devel/network/ch04$ ./eclient 127.0.0.1 9190
          Connceted........
          Input message(Q to quit): 123456789
          Message from server: 123456789
          Input message(Q to quit): 987ehem
          Message from server: 987ehem
          Input message(Q to quit): q
          ```


- c17p282:边缘触发相比条件触发的优点是什么？
    - 可以分离接收数据和处理数据的时间点
