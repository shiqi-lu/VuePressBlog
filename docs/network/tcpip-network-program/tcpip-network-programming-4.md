---
title: 《TCP/IP网络编程》第12-14章学习笔记
date: 2021-07-10 18:10:09
updated: 2021-07-10 18:10:09
tags:
- 网络
categories:
- 网络
description: ch12.I/O复用，ch13.多种I/O函数，ch14.多播与广播
toc:
  enable: true
  number: false
---

注：博主只关注编程实现的方面以及linux部分，部分网络原理讲解和windows实现部分跳过


## 第 12 章 I/O 复用

### 12.1 基于 I/O 复用的服务器端

### 12.2 理解 select 函数并实现服务端

- Q:select函数将多个文件描述符集中到一起统一监视的3个项目是
    - 是否存在套接字接收数据？
    - 无需阻塞传输数据的套接字有哪些
    - 哪些套接字发生了异常

- Q:select函数的调用方法和顺序
    - 1.设置文件描述符、指定监视范围、设置超时
    - 2.调用select函数
    - 3.查看调用结果

- Q:操作select中的fd_set数组有哪四个宏？
    - `FD_ZERO(fd_set *fdset)`：将 fd_set 变量的所有位初始化为0
    - `FD_SET(int fd, fd_set * fdset)`：在参数 fdset 指向的变量中注册文件描述符 fd 的信息
    - `FD_CLR(int fd, fd_set * fdset)`：从参数 fdset 指向的变量中清除文件描述符 fd 的信息
    - `FD_ISSET(int fd, fd_set * fdset)`：若参数 fdset 指向的变量中包含文件描述符 fd 的信息，则返回「真」
    - ![](https://img.shiqi-lu.tech/20210627202414.png)

- c12p199:select函数原型是怎样？

    - ```c
      #include <sys/select.h>
      #include <sys/time.h>
      int select(int maxfd, 
                 fd_set * readset,
                 fd_set * writeset,
                 fd_set * exceptset,
                 const struct timeval * timeout);
      // maxfd：监视对象文件描述符数量
      // readset：将所有关注「是否存在待读取数据」的文件描述符
      //          注册到 fd_set 型变量，并传递其地址值
      // writeset：将所有关注「是否可传输无阻塞数据」的文件描述符
      //          注册到 fd_set 型变量，并传递其地址值
      // exceptset：将所有关注「是否发生异常」的文件描述符
      //          注册到 fd_set 型变量，并传递其地址值
      // timeout：调用 select 函数后，为防止陷入无限阻塞的状态，
      //         传递超时（time-out）信息
      // 返回值：1.发生错误时返回 -1，
      //        2.超时返回时返回 0
      //        3.因发生关注的事件返回时，返回大于 0 的值，
      //          该值是发生事件的文件描述符数
      ```

    - select 函数用来验证 3 种监视项的变化情况。根据监视声明 3 个 fd_set 型变量，分别向其注册文件描述符信息，并把变量的地址值传递到上述函数的第二到第四个参数
    - 文件描述符的监视范围：
        - select 函数要求通过第一个参数传递监视对象文件描述符的数量。因每次新建文件描述符时，其值都会增1，故只需将最大的文件描述符值加 1 再传递即可，加 1 是因为文件描述符的值从 0 开始
    - select 函数的超时时间：
        - timeout传递NULL，select 函数只有在监视的文件描述符发生变化时才返回。如果未发生变化，就会进入阻塞状态。
        - 只要过了设置的超时时间，也可返回，此时返回值为 0

        - ```c
          struct timeval {
              long tv_sec; // seconds
              long tv_usec; // microseconds
          }
          ```

    - select 函数返回正整数时，向其传递的 fd_set 变量将发生变化，可通过值为 1 的位置上的文件描述符获知哪些 fd 发生了变化
    - ![](https://img.shiqi-lu.tech/20210628200050.png)

- c12p201:select调用示例select.c

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      #include <sys/time.h>
      #include <sys/select.h>
      
      #define BUF_SIZE 30
      
      int main()
      {
          fd_set reads, temps;
          int result, str_len;
          char buf[BUF_SIZE];
          struct timeval timeout;
      
          // 初始化变量
          FD_ZERO(&reads);
          // 将文件描述符0对应的位设置为1
          // 即监视标准输入的变化
          FD_SET(0, &reads);
      
          while (1) {
              // 将准备好的fd_set变量reads的内容复制到temps变量，
              // 因为调用select函数后，除发生变化的文件描述符对应位外，
              // 剩下的位将初始化为0。为了记住初始化值，必须复制
              temps = reads;
              // 设置select函数的超时，因调用select后，timeval的成员的值
              // 将被替换为超时前剩余时间。所以在调用select前均需初始化
              timeout.tv_sec = 5;
              timeout.tv_usec = 0;
              // 如果控制台输入数据会返回大于0的整数
              // 如果没有输入数据而引发超时，返回0
              result = select(1, &temps, 0, 0, &timeout);
              if (result == -1) {
                  puts("select() error!");
                  break;
              } else if (result == 0) {
                  puts("Time-out!");
              } else {
                  if (FD_ISSET(0, &temps)) {
                      // 验证发生变化的文件描述符是否为标准输入
                      // 若是，从标准输入读取数据并向控制台输出
                      str_len = read(0, buf, BUF_SIZE);
                      buf[str_len] = 0;
                      printf("message from concole: %s", buf);
                  }
              }
          }
      
          return 0;
      }
      ```


    - ```shell
      shiqi@pc:~/network/ch12$ gcc select.c -o select
      shiqi@pc:~/network/ch12$ ./select
      Hi~~
      message from concole: Hi~~
      hahaahhaha
      message from concole: hahaahhaha
      Time-out!
      Time-out!
      ^C
      ```


- Q:select函数实现I/O复用服务器端
    - 服务端echo_selectserv.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          #include <sys/time.h>
          #include <sys/select.h>
          
          #define BUF_SIZE 100
          
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
              struct timeval timeout;
              fd_set reads, cpy_reads;
          
              socklen_t adr_sz;
              int fd_max, str_len, fd_num, i;
              char buf[BUF_SIZE];
          
              if (argc != 2) {
                  printf("Usage : %s <port>\n", argv[0]);
                  exit(1);
              }
          
              serv_sock = socket(PF_INET, SOCK_STREAM, 0);
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              serv_adr.sin_port = htons(atoi(argv[1]));
          
              if (bind(serv_sock, 
                       (struct sockaddr *)&serv_adr, 
                       sizeof(serv_adr)) == -1) {
                  error_handling("bind() error");
              }
              if (listen(serv_sock, 5) == -1) {
                  error_handling("listen() error");
              }
          
              FD_ZERO(&reads);
              // 注册服务端套接字
              FD_SET(serv_sock, &reads);
              fd_max = serv_sock;
            
              while (1) {
                  cpy_reads = reads;
                  timeout.tv_sec = 5;
                  timeout.tv_usec = 5000;
          
                  if ((fd_num = select(fd_max+1, &cpy_reads, 
                                       0, 0, &timeout)) == -1) {
                      break;
                  }
                  if (fd_num == 0) {
                      continue;
                  }
          
                  for (i = 0; i < fd_max + 1; ++i) {
                      if (!FD_ISSET(i, &cpy_reads)) {
                          // 查找发生状态变化的(有接收数据套接字的)
                          // 文件描述符
                          continue;
                      }
                      if (i == serv_sock) {
                          // 服务端套接字有变化，受理连接请求
                          adr_sz = sizeof(clnt_adr);
                          clnt_sock = accept(serv_sock,
                                             (struct sockaddr *)&clnt_adr,
                                             &adr_sz);
                          // 注册与客户端连接的套接字文件描述符
                          FD_SET(clnt_sock, &reads);
                          if (fd_max < clnt_sock) {
                              fd_max = clnt_sock;
                          }
                          printf("connected client: %d \n", clnt_sock);
                      } else {
                          str_len = read(i, buf, BUF_SIZE);
                          // 确认接收的数据是字符串还是断开连接的EOF
                          if (str_len == 0) {
                              FD_CLR(i, &reads);
                              close(i);
                              printf("closed client: %d \n", i);
                          } else {
                              write(i, buf, str_len);
                          }
                      }
                  }
              }
              close(serv_sock);
              return 0;
          }
          ```

    - 客户端同ehco_client.c
    - 编译运行

        - ```shell
          shiqi@pc:~/network/ch12$ gcc echo_selectserv.c -o selserv
          shiqi@pc:~/network/ch12$ ./selserv 9190
          connected client: 4
          connected client: 5
          closed client: 5
          closed client: 4
          ```


        - ```shell
          shiqi@pc:~/network/ch04$ ./eclient2 127.0.0.1 9190
          Connceted........
          Input message(Q to quit): ur
          Message from server: ur
          Input message(Q to quit): d
          Message from server: d
          Input message(Q to quit): q
          ```


        - ```shell
          shiqi@pc:~/network/ch04$ ./eclient2 127.0.0.1 9190
          Connceted........
          Input message(Q to quit): x
          Message from server: x
          Input message(Q to quit): p
          Message from server: p
          Input message(Q to quit): m
          Message from server: m
          Input message(Q to quit): a
          Message from server: a
          Input message(Q to quit): q
          ```


## 第 13 章  多种I/O函数

### 13.1  send＆recv函数

- c13p211：linux send函数原型

    - ```c
      #include <sys/socket.h>
      ssize_t send(int sockfd, const void * buf,
                   size_t nbytes, int flags);
      // sockfd：表示与数据传输对象的连接的套接字文件描述符
      // buf：保存待传输数据的缓冲地址值
      // nbytes：待传输的字节数
      // flags：传输数据时指定的可选项信息
      // 成功时返回发送的字节数，失败时返回 -1
      ```


- c13p212：linux write函数原型

    - ```c
      #include <sys/socket.h>
      ssize_t recv(int sockfd, void * buf,
                   size_t nbytes, int flags);
      // sockfd：表示数据接收对象的连接的套接字文件描述符
      // buf：保存接收数据的缓冲地址值
      // nbytes：可接收的最大字节数
      // flags：接收数据时指定的可选项信息
      // 成功时返回接收的字节数(收到EOF时返回0)，失败时返回 -1
      ```


- c13p212：send和recv函数最后一个 flag 参数的可选项有哪些？
    - 该可选项可利用位或(bit OR)运算(|运算符)传递多个信息
    - ![](https://img.shiqi-lu.tech/20210628211019.png)

- c13p212：使用 MSG_OOB 发送紧急消息的程序示例 oob_send.c 和 oob_recv.c
    - oob_send.c

        - ```c
          #include <stdio.h>
          #include <unistd.h>
          #include <stdlib.h>
          #include <string.h>
          #include <sys/socket.h>
          #include <arpa/inet.h>
          
          #define BUF_SIZE 30
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char * argv[])
          {
              int sock;
              struct sockaddr_in recv_adr;
              if (argc != 3) {
                  printf("Usage: %s <IP> <port>\n", argv[0]);
                  exit(1);
              }
          
              sock = socket(PF_INET, SOCK_STREAM, 0);
              memset(&recv_adr, 0, sizeof(recv_adr));
              recv_adr.sin_family = AF_INET;
              recv_adr.sin_addr.s_addr = inet_addr(argv[1]);
              recv_adr.sin_port = htons(atoi(argv[2]));
          
              if (connect(sock,
                          (struct sockaddr *)&recv_adr,
                          sizeof(recv_adr)) == -1) {
                  error_handling("connect() error!");
              }
          
              // 此处使用 send 紧急传输数据
              write(sock, "123", strlen("123"));
              send(sock, "4", strlen("4"), MSG_OOB);
              write(sock, "567", strlen("567"));
              send(sock, "890", strlen("890"), MSG_OOB);
              close(sock);
          
              return 0;
          }
          ```

    - oob_recv.c

        - ```c
          #include <stdio.h>
          #include <unistd.h>
          #include <stdlib.h>
          #include <string.h>
          #include <signal.h>
          #include <sys/socket.h>
          #include <netinet/in.h>
          #include <fcntl.h>
          
          #define BUF_SIZE 30
          
          int acpt_sock;
          int recv_sock;
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          void urg_handler(int signo)
          {
              int str_len;
              char buf[BUF_SIZE];
              str_len = recv(recv_sock, buf, sizeof(buf)-1, MSG_OOB);
              buf[str_len] = 0;
              printf("Urgent message: %s\n", buf);
          }
          
          int main(int argc, char * argv[])
          {
              struct sockaddr_in recv_adr, serv_adr;
              int str_len, state;
              socklen_t serv_adr_sz;
              struct sigaction act;
              char buf[BUF_SIZE];
              if (argc != 2) {
                  printf("Usage : %s <port>\n", argv[0]);
                  exit(1);
              }
          
              act.sa_handler = urg_handler;
              sigemptyset(&act.sa_mask);
              act.sa_flags = 0;
          
              acpt_sock = socket(PF_INET, SOCK_STREAM, 0);
              memset(&recv_adr, 0, sizeof(recv_adr));
              recv_adr.sin_family = AF_INET;
              recv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              recv_adr.sin_port = htons(atoi(argv[1]));
          
              if (bind(acpt_sock,
                       (struct sockaddr *)&recv_adr,
                       sizeof(recv_adr)) == -1) {
                  error_handling("bind() error");
              }
              listen(acpt_sock, 5);
          
              serv_adr_sz = sizeof(serv_adr);
              recv_sock = accept(acpt_sock,
                                 (struct sockaddr *)&serv_adr,
                                 &serv_adr_sz);
          
              // 指定当前进程为处理 SIGURG 信号的主体
              fcntl(recv_sock, F_SETOWN, getpid());
              state = sigaction(SIGURG, &act, 0);
          
              while ((str_len = recv(recv_sock, buf, sizeof(buf), 0)) != 0) {
                  if (str_len == -1) {
                      continue;
                  }
                  buf[str_len] = 0;
                  puts(buf);
              }
          
              close(recv_sock);
              close(acpt_sock);
              return 0;
          }
          ```

    - 编译运行

        - ```shell
          shiqi@pc:~/network/ch13$ gcc oob_recv.c -o recv
          shiqi@pc:~/network/ch13$ ./recv 9190
          Urgent message: 0
          123456789
          shiqi@pc:~/network/ch13$ ./recv 9190
          123456789
          ```


        - ```shell
          shiqi@pc:~/network/ch13$ gcc oob_send.c -o send
          shiqi@pc:~/network/ch13$ ./send 127.0.0.1 9190
          ```


- c13p217：紧急模式的工作原理是怎样？
    - 调用如下函数后的输出缓冲状态如下图：
    - `send(sock, "890", strlen("890"), MSG_OOB)`
    - ![](https://img.shiqi-lu.tech/20210808173857.png)
    - 如果将缓冲最左端的位置视作偏移量为 0，字符 0 保存与偏移量为 2 的位置。另外，字符 0 右侧偏移量为 3 的位置存有紧急指针(Urgent Pointer)。紧急指针指向紧急消息的下一个位置。
    - 实际只用 1 个字节表示紧急消息信息，见如下 TCP 数据包结构
    - ![](https://img.shiqi-lu.tech/20210808174605.png)
    - 指定 MSG_OOB 选项的数据包本身就是紧急数据包，并通过紧急紧急指针表示紧急消息所在位置
    - 除紧急指针的前面 1 个字节外，数据接收方将通过调用常用输入函数读取剩余部分

- c13p218：同时设置 MSG_PEEK 和 MSG_DONTWAIT 选项来验证输入缓冲中是否存在接收的数据的程序示例 peek_send.c 和 peek_recv.c
    - 设置 MSG_PEEK 选项并调用 recv 函数时，即使读取了输入缓冲中的数据也不会删除。因此通常与 MSG_DONTWAIT 合作，用于非阻塞方式验证待读数据存在与否
    - 通过运行结果可以验证，仅发送1次的数据被读取了2次，因为第一次调用recv函数时设置了MSG_PEEK可选项。以上就是MSG_PEEK可选项的功能
    - peek_send.c

        - ```c
          #include <stdio.h>
          #include <unistd.h>
          #include <stdlib.h>
          #include <string.h>
          #include <sys/socket.h>
          #include <arpa/inet.h>
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char * argv[])
          {
              int sock;
              struct sockaddr_in send_adr;
              if (argc != 3) {
                  printf("Usage : %s <IP> <port>\n", argv[0]);
                  exit(1);
              }
          
              sock = socket(PF_INET, SOCK_STREAM, 0);
              memset(&send_adr, 0, sizeof(send_adr));
              send_adr.sin_family = AF_INET;
              send_adr.sin_addr.s_addr = inet_addr(argv[1]);
              send_adr.sin_port = htons(atoi(argv[2]));
          
              if (connect(sock,
                          (struct sockaddr *)&send_adr,
                          sizeof(send_adr)) == -1) {
                  error_handling("connect() error!");
              }
          
              write(sock, "123", strlen("123"));
              close(sock);
              return 0;
          }
          ```

    - peek_recv.c

        - ```c
          #include <stdio.h>
          #include <unistd.h>
          #include <stdlib.h>
          #include <string.h>
          #include <sys/socket.h>
          #include <arpa/inet.h>
          
          #define BUF_SIZE 30
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char *argv[])
          {
              int acpt_sock, recv_sock;
              struct sockaddr_in acpt_adr, recv_adr;
              int str_len, state;
              socklen_t recv_adr_sz;
              char buf[BUF_SIZE];
          
              if (argc != 2) {
                  printf("Usage: %s <port>\n", argv[0]);
                  exit(1);
              }
          
              acpt_sock = socket(PF_INET, SOCK_STREAM, 0);
              memset(&acpt_adr, 0, sizeof(acpt_adr));
              acpt_adr.sin_family = AF_INET;
              acpt_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              acpt_adr.sin_port = htons(atoi(argv[1]));
          
              if (bind(acpt_sock,
                       (struct sockaddr *)&acpt_adr,
                       sizeof(acpt_adr)) == -1) {
                  error_handling("bind() error");
              }
          
              listen(acpt_sock, 5);
          
              recv_adr_sz = sizeof(recv_adr);
              recv_sock = accept(acpt_sock, (struct sockaddr *)&recv_adr, &recv_adr_sz);
          
              while (1) {
                  str_len = recv(recv_sock, buf, sizeof(buf)-1, MSG_PEEK|MSG_DONTWAIT);
                  if (str_len > 0) {
                      break;
                  }
              }
          
              buf[str_len] = '\0';
              printf("Buffering %d byets: %s\n", str_len, buf);
          
              str_len = recv(recv_sock, buf, sizeof(buf)-1, 0);
              buf[str_len] = '\0';
              printf("Read again: %s\n", buf);
              close(acpt_sock);
              close(recv_sock);
          
              return 0;
          }
          ```

    - 编译运行

        - ```shell
          shiqi@pc:~/network/ch13$ gcc peek_recv.c -o recv
          shiqi@pc:~/network/ch13$ ./recv 9190
          Buffering 3 byets: 123
          Read again: 123
          ```


        - ```shell
          shiqi@pc:~/network/ch13$ gcc peek_send.c -o send
          shiqi@pc:~/network/ch13$ ./send 127.0.0.1 9190
          ```


### 13.2  readv＆writev函数

- c13p221:将分散保存在多个缓冲中的数据一并发送的 writev 函数

    - ```c
      #include <sys/uio.h>
      ssize_t writev(int filedes, 
                     const struct iovec * iov, 
                     int iovcnt);
      // filedes: 表示数据传输对象的套接字文件描述符。但该函数并不只
      //          限于套接字，因此可以像 read 函数一样向其传递文件或
      //          标准输出描述符
      // iov: iovec 结构体数组的地址值，结构体 iovec 中包含待发送
      //      数据的位置和大小信息
      // iovcnt: 向第二个参数传递的数组长度
      // 成功时返回发送的字节数，失败时返回-1
      
      struct iovec {
          void * iov_base; // 缓冲地址
          size_t iov_len; // 缓冲大小
      }
      ```

    - ![](https://img.shiqi-lu.tech/20210808180034.png)
    - 如图，writev 第一个参数 1 是文件描述符，向控制台输出数据，ptr 是存有待发送数据信息的 iovec 数组指针。第三个参数是 2，即从 ptr 指向的地址开始，共浏览 2 个 iovec 结构体变量，发送这些指针指向的缓冲数据。

- c13p222:writev 函数的使用示例 writev.c

    - ```c
      #include <stdio.h>
      #include <sys/uio.h>
      
      int main(int argc, char * argv[])
      {
          struct iovec vec[2];
          char buf1[] = "ABCDEFG";
          char buf2[] = "1234567";
          int str_len;
          vec[0].iov_base = buf1;
          vec[0].iov_len = 3;
          vec[1].iov_base = buf2;
          vec[1].iov_len = 4;
      
          str_len = writev(1, vec, 2);
          puts("");
          printf("Write byets: %d\n", str_len);
          return 0;
      }
      ```


    - ```shell
      shiqi@pc:~/network/ch13$ gcc writev.c -o wv
      shiqi@pc:~/network/ch13$ ./wv
      ABC1234
      Write byets: 7
      ```


- c13p223:由多个缓冲分别接收的 readv 函数

    - ```c
      #inclde <sys/uio.h>
      ssize_t readv(int filedes,
                    const struct iovec * iov,
                    int iovcnt);
      // filedes: 表示数据传输对象的套接字文件描述符
      // iov: iovec 结构体数组的地址值
      // iovcnt: 向第二个参数传递的数组长度
      // 成功时返回发送的字节数，失败时返回-1
      ```


- c13p223:readv 函数的使用示例 readv.c

    - ```c
      #include <stdio.h>
      #include <sys/uio.h>
      
      #define BUF_SIZE 100
      
      int main()
      {
          struct iovec vec[2];
          char buf1[BUF_SIZE] = {0,};
          char buf2[BUF_SIZE] = {0,};
          int str_len;
      
          vec[0].iov_base = buf1;
          vec[0].iov_len = 5;
          vec[1].iov_base = buf2;
          vec[1].iov_len = BUF_SIZE;
      
          str_len = readv(0, vec, 2);
          printf("Read bytes: %d\n", str_len);
          printf("First message: %s\n", buf1);
          printf("Second message: %s\n", buf2);
      
          return 0;
      }
      ```


    - ```shell
      shiqi@:~/network/ch13$ gcc readv.c -o rv
      shiqi@:~/network/ch13$ ./rv
      I want to fly~~~~~~~~~~~. gogogo!
      Read bytes: 34
      First message: I wan
      Second message: t to fly~~~~~~~~~~~. gogogo!
      ```


## 第 14 章  多播与广播

### 14.1  多播

- c14p230:多播的数据传输特点是什么？
    - 1.多播服务器端针对特定多播组，只发送 1 次数据
    - 2.即使只发送一次数据，但所有的客户端都会收到数据
    - 3.多播组数可在 IP 范围内任意增加
    - 4.加入特定组即可接收发往该多播组的数据
    - 5.多播是基于 UDP 完成的，当其向网络传递 1 个多播数据包时，路由器将复制该数据包并传递到多个主机

- c14p232：如何在代码中设置 TTL?
    - 协议层是 IPPROTO_IP，选项名为 IP_MULTICAST_TTL

    - ```c
      int send_sock;
      int time_live = 64;
      ...
      send_sock = socket(PF_INET, SOCK_DGRAM, 0);
      setsockopt(send_sock, IPPROTO_IP, 
                 IP_MULTICAST_TTL, (void *)&time_live,
                 sizeof(time_live));
      ...
      ```


- c14p232:加入多播组的代码是怎样？
    - 协议层是 IPPROTO_IP，选项名为 IP_ADD_MEMBERSHIP

    - ```c
      int send_sock;
      struct ip_mreq join_adr;
      ...
      send_sock = socket(PF_INET, SOCK_DGRAM, 0);
      ...
      join_adr.imr_multiaddr.s_addr = "多播组地址信息";
      join_adr.imr_imterface.s_addr = "加入多播组的主机地址信息";
      setsockopt(send_sock, IPPROTO_IP, 
                 IP_ADD_MEMBERSHIP, (void *)&join_adr,
                 sizeof(join_adr));
      ...
      ```

    - 其中 ip_mreq 的定义为

    - ```c
      struct ip_mreq {
          // 写入加入的组 IP 地址
          struct in_addr imr_multiaddr;
          // 加入该组的套接字所属主机的 IP 地址，也可用 INADDR_ANy
          struct in_addr imr_interface;
      }
      ```


- c14p233:实现多播 Sender 和 Receiver 的程序示例 news_sender.c 和 news_receiver.c
    - Sender：向AAA组广播( Broadcasting )文件中保存的新闻信息，news_sender.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define TTL 64
          #define BUF_SIZE 30
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char * argv[])
          {
              int send_sock;
              struct sockaddr_in mul_adr;
              int time_live = TTL;
              FILE * fp;
              char buf[BUF_SIZE];
          
              if (argc != 3) {
                  printf("Usage : %s <GroupIP> <PORT>\n", argv[0]);
                  exit(1);
              }
          
              send_sock = socket(PF_INET, SOCK_DGRAM, 0);
              memset(&mul_adr, 0, sizeof(mul_adr));
              mul_adr.sin_family = AF_INET;
              mul_adr.sin_addr.s_addr = inet_addr(argv[1]);
              mul_adr.sin_port = htons(atoi(argv[2]));
          
              setsockopt(send_sock, IPPROTO_IP,
                         IP_MULTICAST_TTL, (void *)&time_live,
                         sizeof(time_live));
              if ((fp = fopen("news.txt", "r")) == NULL) {
                  error_handling("fopen() error");
              }
          
              while (!feof(fp)) {
                  fgets(buf, BUF_SIZE, fp);
                  sendto(send_sock, buf, strlen(buf),
                         0, (struct sockaddr *)&mul_adr, sizeof(mul_adr));
                  sleep(2);
              }
              fclose(fp);
              close(send_sock);
          
              return 0;
          }
          ```

    - Receiver：接收传递到AAA组的新闻信息，news_receiver.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define BUF_SIZE 30
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char * argv[])
          {
              int recv_sock;
              int str_len;
              char buf[BUF_SIZE];
              struct sockaddr_in adr;
              struct ip_mreq join_adr;
              if (argc != 3)
              {
                  printf("Usage : %s <GroupIP> <PORT>\n", argv[0]);
                  exit(1);
              }
              recv_sock = socket(PF_INET, SOCK_DGRAM, 0);
              memset(&adr, 0, sizeof(adr));
              adr.sin_family = AF_INET;
              adr.sin_addr.s_addr = htonl(INADDR_ANY);
              adr.sin_port = htons(atoi(argv[2]));
          
              if (bind(recv_sock, (struct sockaddr*)&adr, sizeof(adr)) == -1) {
                  error_handling("bind() error");
              }
          
              join_adr.imr_multiaddr.s_addr = inet_addr(argv[1]);
              join_adr.imr_interface.s_addr = htonl(INADDR_ANY);
          
              setsockopt(recv_sock, IPPROTO_IP,
                         IP_ADD_MEMBERSHIP, (void *)&join_adr,
                         sizeof(join_adr));
          
              while (1) {
                  str_len = recvfrom(recv_sock, buf, BUF_SIZE-1 , 0, NULL, 0);
                  if (str_len < 0) {
                      break;
                  }
                  buf[str_len] = 0;
                  fputs(buf, stdout);
              }
              close(recv_sock);
              return 0;
          }
          ```

    - 编译运行

        - ```shell
          shiqi@pc:~/network/ch14$ cat news.txt
          111111111111
          222222222
          3333
          shiqi@pc:~/network/ch14$ gcc news_receiver.c -o receiver
          shiqi@pc:~/network/ch14$ ./receiver 224.1.1.2 9190
          111111111111
          222222222
          3333
          3333
          shiqi@pc:~/network/ch14$ gcc news_sender.c -o sender
          shiqi@pc:~/network/ch14$ ./sender 224.1.1.2 9190
          ```


### 14.2  广播

- c14p237:如何代码设置进行数据广播？
    - 调用 setsockopt，将 SO_BROADCAST 设置为 bcast 变量中的 1

    - ```c
      int send_sock;
      int bcast = 1;
      ...
      send_sock = socket(PF_INET, SOCK_DGRAM, 0);
      ...
      setsockopt(send_sock, SOL_SOCKET, SO_BROADCAST,
                 (void*)&bcast, sizeof(bcast));
      ```


- c14p237:实现广播 Sender 和 Receiver 的程序示例 news_sender_brd.c 和 news_receiver_brd.c
    - news_receiver_brd.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define BUF_SIZE 30
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char * argv[])
          {
              int recv_sock;
              int str_len;
              char buf[BUF_SIZE];
              struct sockaddr_in adr;
              if (argc != 2)
              {
                  printf("Usage : %s <PORT>\n", argv[0]);
                  exit(1);
              }
              recv_sock = socket(PF_INET, SOCK_DGRAM, 0);
              memset(&adr, 0, sizeof(adr));
              adr.sin_family = AF_INET;
              adr.sin_addr.s_addr = htonl(INADDR_ANY);
              adr.sin_port = htons(atoi(argv[1]));
          
              if (bind(recv_sock, (struct sockaddr*)&adr, sizeof(adr)) == -1) {
                  error_handling("bind() error");
              }
          
              while (1) {
                  str_len = recvfrom(recv_sock, buf, BUF_SIZE-1 , 0, NULL, 0);
                  if (str_len < 0) {
                      break;
                  }
                  buf[str_len] = 0;
                  fputs(buf, stdout);
              }
              close(recv_sock);
              return 0;
          }
          ```

    - news_sender_brd.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define BUF_SIZE 30
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char * argv[])
          {
              int send_sock;
              struct sockaddr_in mul_adr;
              FILE * fp;
              char buf[BUF_SIZE];
              int so_brd = 1;
          
              if (argc != 3) {
                  printf("Usage : %s <Broadcast IP> <PORT>\n", argv[0]);
                  exit(1);
              }
          
              send_sock = socket(PF_INET, SOCK_DGRAM, 0);
              memset(&mul_adr, 0, sizeof(mul_adr));
              mul_adr.sin_family = AF_INET;
              mul_adr.sin_addr.s_addr = inet_addr(argv[1]);
              mul_adr.sin_port = htons(atoi(argv[2]));
          
              setsockopt(send_sock, SOL_SOCKET,
                         SO_BROADCAST, (void *)&so_brd,
                         sizeof(so_brd));
              if ((fp = fopen("news.txt", "r")) == NULL) {
                  error_handling("fopen() error");
              }
          
              while (!feof(fp)) {
                  fgets(buf, BUF_SIZE, fp);
                  sendto(send_sock, buf, strlen(buf),
                         0, (struct sockaddr *)&mul_adr, sizeof(mul_adr));
                  sleep(2);
              }
              fclose(fp);
              close(send_sock);
          
              return 0;
          }
          ```

    - 编译运行

        - ```shell
          shiqi@pc:~/network/ch14$ cat news.txt
          111111111111
          222222222
          3333
          shiqi@pc:~/network/ch14$ gcc news_receiver_brd.c -o receiver
          shiqi@pc:~/network/ch14$ ./receiver 9190
          111111111111
          222222222
          3333
          3333
          shiqi@pc:~/network/ch14$ gcc news_sender_brd.c -o sender
          shiqi@pc:~/network/ch14$ ./sender 9190
          Usage : ./sender <Broadcast IP> <PORT>
          shiqi@pc:~/network/ch14$ ./sender 255.255.255.255 9190
          ```

