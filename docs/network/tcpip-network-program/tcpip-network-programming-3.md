---
title: 《TCP/IP网络编程》第9-11章学习笔记
date: 2021-07-04 17:44:38
updated: 2021-07-04 17:44:38
tags:
- 网络
categories:
- 网络
description: ch9.套接字的多种可选项，ch10.多进程服务器端，ch11.进程间通信
toc:
  enable: true
  number: false
---

注：博主只关注编程实现的方面以及linux部分，部分网络原理讲解和windows实现部分跳过


## 第 9 章 套接字的多种可选项

### 9.1 套接字可选项和 I/O 缓冲大小

- Q:套接字有哪些常用设置选项？
    - ![](https://img.shiqi-lu.tech/20210623205237.png)

- Q:用于读取套接字可选项的函数getsockopt

    - ```c
      #include <sys/socket.h>
      int getsockopt(int sock, int level, int optname,
                     void *optval, socklen_t *optlen);
      // sock：用于查看选项套接字文件描述符
      // level：要查看的可选项的协议层
      // optname：要查看的可选项名
      // optval：保存查看结果的缓冲地址值
      // optlen：向第四个参数optval传递的缓冲大小。调用函数后，
      //        该变量中保存通过第四个参数返回的可选项信息的字节数
      // 成功时返回0，失败时返回-1
      ```


- Q:用于更改套接字可选项的函数setsockopt

    - ```c
      #include <sys/socket.h>
      int setsockopt(int sock, int level, int optname,
                     const void *optval, socklen_t optlen);
      // sock：用于更改选项套接字文件描述符
      // level：要更改的可选项的协议层
      // optname：要更改的可选项名
      // optval：保存要更改的选项信息的缓冲地址值
      // optlen：向第四个参数optval传递的可选项信息的字节数
      // 成功时返回0，失败时返回-1
      ```


- Q:用协议层为SOL_SOCKET、名为SO_TYPE的可选项查看套接字类型(TCP或UDP)的程序示例sock_type.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <unistd.h>
      #include <sys/socket.h>
      
      void error_handling(char * message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      int main(int argc, char *argv[])
      {
          int tcp_sock, udp_sock;
          int sock_type;
          socklen_t optlen;
          int state;
      
          optlen = sizeof(sock_type);
          // 分别生成TCP、UDP套接字
          tcp_sock = socket(PF_INET, SOCK_STREAM, 0);
          udp_sock = socket(PF_INET, SOCK_DGRAM, 0);
          // 输出创建TCP、UDP套接字时传入的SOCK_STREAM、SOCK_DGRAM
          printf("SOCK_STREAM: %d\n", SOCK_STREAM);
          printf("SOCK_DGRAM: %d\n", SOCK_DGRAM);
      
          // 获取套接字类型信息
          // 如果是TCP套接字，将获得SOCK_STREAM常数值1
          state = getsockopt(tcp_sock, SOL_SOCKET, SO_TYPE,
                             (void*)&sock_type, &optlen);
          if (state) {
              error_handling("getsockopt() error!");
          }
          printf("Socket type one: %d\n", sock_type);
      
          // 如果是UDP套接字，则获得SOCK_DGRAM的常数值2
          state = getsockopt(tcp_sock, SOL_SOCKET, SO_TYPE,
                             (void*)&sock_type, &optlen);
          if (state) {
              error_handling("getsockopt() error!");
          }
          printf("Socket type two: %d\n", sock_type);
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch09$ gcc sock_type.c -o socktype
      shiqi@pc:~/network/ch09$ ./socktype
      SOCK_STREAM: 1
      SOCK_DGRAM: 2
      Socket type one: 1
      Socket type two: 1
      ```


- Q:读取创建套接字时默认的I/O缓冲大小的实例程序get_buf.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <unistd.h>
      #include <sys/socket.h>
      
      void error_handling(char * message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      int main(int argc, char *argv[])
      {
          int sock;
          int snd_buf, rcv_buf, state;
          socklen_t len;
      
          sock = socket(PF_INET, SOCK_STREAM, 0);
          len = sizeof(snd_buf);
          state = getsockopt(sock, SOL_SOCKET, SO_SNDBUF,
                             (void *)&snd_buf, &len);
          if (state) {
              error_handling("getsockopt() error");
          }
          printf("Output buffer size: %d\n", snd_buf);
      
          len = sizeof(rcv_buf);
          state = getsockopt(sock, SOL_SOCKET, SO_RCVBUF,
                             (void *)&rcv_buf, &len);
          if (state) {
              error_handling("getsockopt() error");
          }
          printf("Input buffer size: %d\n", rcv_buf);
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch09$ gcc get_buf.c -o getbuf
      shiqi@pc:~/network/ch09$ ./getbuf
      Output buffer size: 16384
      Input buffer size: 131072
      ```


- Q:更改套接字I/O缓冲大小的示例程序set_buf.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <unistd.h>
      #include <sys/socket.h>
      
      void error_handling(char * message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      int main(int argc, char *argv[])
      {
          int sock;
          int snd_buf = 1024*3, rcv_buf = 1024*3;
          int state;
          socklen_t len;
      
          sock = socket(PF_INET, SOCK_STREAM, 0);
          // 更改 I/O 接收缓冲大小
          state = setsockopt(sock, SOL_SOCKET, 
                             SO_RCVBUF, (void *)&rcv_buf, 
                             sizeof(rcv_buf));
          if (state) {
              error_handling("setockopt() error!");
          }
      
          // 更改 I/O 发送缓冲大小
          state = setsockopt(sock, SOL_SOCKET, SO_SNDBUF, 
                             (void *)&snd_buf, sizeof(snd_buf));
          if (state) {
              error_handling("setockopt() error!");
          }
      
          len = sizeof(snd_buf);
          // 读取 I/O 发送缓冲大小
          state = getsockopt(sock, SOL_SOCKET, SO_SNDBUF,
                             (void *)&snd_buf, &len);
          if (state) {
              error_handling("getsockopt() error");
          }
          printf("Output buffer size: %d\n", snd_buf);
      
          len = sizeof(rcv_buf);
          // 读取 I/O 接收缓冲大小
          state = getsockopt(sock, SOL_SOCKET, SO_RCVBUF,
                             (void *)&rcv_buf, &len);
          if (state) {
              error_handling("getsockopt() error");
          }
          printf("Input buffer size: %d\n", rcv_buf);
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch09$ gcc set_buf.c -o setbuf
      shiqi@pc:~/network/ch09$ ./setbuf
      Output buffer size: 6144
      Input buffer size: 6144
      ```


### 9.2 SO_REUSEADDR

- Q:Time-wait状态下，服务器发生bind() error错误程序示例reuseadr_eserver.c
    - 如果在服务器端和客户端已建立连接的状态下，向服务器端控制台输入CTRL+C，即强制关闭服务器端。相当于模拟服务器端向客户端发送 FIN 消息。以这种方式终止程序，服务端若用统一端口号重新运行，将输出「bind() error」，无法再次运行，这种情况下，大约过3分钟即可重新运行服务器端
    - 解决方案可在套接字的可选项中更改 SO_REUSEADDR 为1，可将 Time-wait 状态下的套接字端口号重新分配给新的套接字，把程序中的注释去掉即可

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <string.h>
      #include <unistd.h>
      #include <arpa/inet.h>
      #include <sys/socket.h>
      
      #define TRUE 1
      #define FALSE 0
      
      void error_handling(char * message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      int main(int argc, char *argv[])
      {
          int serv_sock, clnt_sock;
          char message[30];
          int option, str_len;
          socklen_t optlen, clnt_adr_sz;
          struct sockaddr_in serv_adr, clnt_adr;
          if (argc != 2) {
              printf("Usage: %s <port>\n", argv[0]);
              exit(1);
          }
      
          serv_sock = socket(PF_INET, SOCK_STREAM, 0);
          if (serv_sock == -1) {
              error_handling("socket() error");
          }
      
          /*
          optlen = sizeof(option);
          option = TRUE;
          setsockopt(serv_sock, SOL_SOCKET, SO_REUSEADDR,
                     (void *)&option, optlen);
          */
      
          memset(&serv_adr, 0, sizeof(serv_adr));
          serv_adr.sin_family = AF_INET;
          serv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
          serv_adr.sin_port = htons(atoi(argv[1]));
      
          if (bind(serv_sock,
                   (struct sockaddr *)&serv_adr,
                   sizeof(serv_adr))) {
              error_handling("bind() error");
          }
          if (listen(serv_sock, 5) == -1) {
              error_handling("listen() error");
          }
          clnt_adr_sz = sizeof(clnt_adr);
          clnt_sock = accept(serv_sock,
                             (struct sockaddr *)&clnt_adr,
                             &clnt_adr_sz);
          while ((str_len = read(clnt_sock,
                                 message,
                                 sizeof(message))) != 0) {
              write(clnt_sock, message, str_len);
              write(1, message, str_len);
          }
          close(clnt_sock);
          close(serv_sock);
      
          return 0;
      }
      ```

    - 编译运行，客户端使用第四章的客户端即可

    - ```shell
      shiqi@pc:~/network/ch09$ gcc reuseadr_eserver.c -o eserver
      shiqi@pc:~/network/ch09$ ./eserver 9898
      mmu
      ^C
      shiqi@pc:~/network/ch09$ ./eserver 9898
      bind() error
      ```


### 9.3 TCP_NODELAY

- Q:Naggle算法是什么？
    - ![](https://img.shiqi-lu.tech/20210625213956.png)
    - TCP 套接字默认使用 Nagle 算法交换数据，只有收到前一数据的 ACK 消息时，Nagle算法才发送下一数据，在此之前会最大限度地进行缓冲
    - 如左图，为了发送字符串「Nagle」, 将其传递到输出缓冲。这时头字符「N」之前没有其他数据(没有需接收的ACK )，因此立即传输。之后开始等待字符「N」的ACK消息，等待过程中，剩下的「agle」填入输出缓冲。接下来，收到字符「N」的ACK消息后，将输出缓冲的「agle」装入一个数据包发送。也就是说，共需传递4个数据包以传输1个字符串
    - 右图是未使用Nagle算法时发送字符串「Nagle」的过程。假设字符「N」到「e」依序传到输出缓冲。此时的发送过程与ACK接收与否无关，因此数据到达输出缓冲后将立即被发送出去，可以看到，发送字符串「Nagle」时共需10个数据包
    - 由此可知，不使用Nagle算法将对网络流量(Traffic:指网络负载或混杂程度)产生负面影响。即使只传输1个字节的数据，其头信息都有可能是几十个字节。因此，为了提高网络传输效率，必须使用Nagle算法

- Q:什么时候可以禁用 Nagle 算法？
    - 网络流量并未受太大影响时，不使用Nagle算法要比使用它时传输速度快
    - 最典型的是「传输大文件数据」，将文件数据传入输出缓冲不会花太多时间，因此，即便不使用 Nagle 算法，也会在装满输出缓冲时传输数据包。这不仅不会增加数据包的数量，反而会在无需等待 ACK 的前提下连续传输，因此可以大大提高传输速度
    - 一般情况下，不使用 Nagle 算法可以提高传输速度。但如果无条件放弃使用 Nagle 算法，就会增加过多的网络流量，反而会影响传输。因此，未准确判断数据特性时不应禁用 Nagle 算法

- Q:如何禁用 Nagle 算法
    - 把套接字可选项 TCP_NODELAY 改为1(True)即可

    - ```c
      int opt_val = 1;
      setsockopt(sock, IPPROTO_TCP, TCP_NODELAY,
                 (void *)&opt_val, sizeof(opt_val));
      ```


- Q:如何查看 Nagle 算法的设置状态
    - 查看 TCP_NODELAY 的值，如果正在使用 Nagle 算法，opt_val 变量中会保存 0，禁用保存 1

    - ```c
      int opt_val;
      socklen_t opt_len;
      opt_len = sizeof(opt_val);
      getsockopt(sock, IPPROTO_TCP, TCP_NODELAY,
                 (void *)&opt_val, &opt_len);
      ```


## 第 10 章 多进程服务器端

### 10.1 进程概念及应用

- Q:具有代表性的并发服务端的实现模型和方法
    - 多进程服务器：通过创建多个进程提供服务
    - 多路复用服务器：通过捆绑并统一管理 I/O 对象提供服务
    - 多线程服务器：通过生成与客户端等量的线程提供服务

- Q:通过fork函数创建进程

    - ```c
      #include <unistd.h>
      pid_t fork(void);
      // 成功时返回进程ID, 失败时返回 -1
      ```

    - fork函数将创建调用的进程副本。即并非根据完全不同的程序创建进程，而是复制正在运行的、调用 fork 函数的进程。
    - 两个进程都将执行fork函数调用后的语句(准确说是fork函数返回后)。但因通过同一个进程、复制相同的内存空间，之后的程序流要根据fork函数的返回值加以区分
    - 父进程(Parent Process)，即原进程，为调用fork函数的主体：fork函数返回子进程ID
    - 子进程(Child Process)，即通过父进程调用 fork 函数复制出的进程：fork函数返回0
    - ![](https://img.shiqi-lu.tech/20210217162244.png)

- Q:fork函数示意fork.c

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      
      int gval = 10;
      
      int main()
      {
          pid_t pid;
          int lval = 20;
          ++gval, lval += 5;
      
          pid = fork();
          if (pid == 0) {
              // 子进程
              gval += 2, lval += 2;
          } else {
              // 父进程
              gval -= 2, lval -= 2;
          }
      
          if (pid == 0) {
              printf("Child Proc: [%d,%d] \n", gval, lval);
          } else {
              printf("Parent Proc: [%d,%d] \n", gval, lval);
          }
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@inspiron:~/network$ gcc fork.c -o fork
      shiqi@inspiron:~/network$ ./fork
      Parent Proc: [9,23]
      Child Proc: [13,27]
      ```


### 10.2 进程和僵尸进程

- Q:产生僵尸进程的原因
    - 调用fork函数产生子进程的两种终止方式
        - 传递参数并调用exit函数
        - main函数中执行return语句并返回值
    - 向 exit 函数传递的参数值和 main 函数的 return 语句返回的值都回传递给操作系统。而操作系统不会销毁子进程，直到把这些值传递给产生该子进程的父进程，处在这种状态下的进程就是僵尸进程
    - 即将子进程变成僵尸进程的是操作系统
    - 僵尸进程被销毁的时机是，操作系统向创建子进程的父进程传递子进程的 exit 参数值或 return 语句的返回值后
    - 操作系统不会主动把这些值传递给父进程。只有父进程主动发起请求（函数调用）的时候，操作系统才会传递该值，即如果父进程未主动要求获得子进程结束状态值，操作系统将一直保存，并让子进程长时间处于僵尸进程状态

- Q:创建僵尸进程示例zombie.c

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      
      int main()
      {
          pid_t pid = fork();
          if (pid == 0) {
              //子进程
              puts("Hi, I am a child process");
          } else {
              // 父进程
              // 输出子进程ID，可通过该值查看子进程状态（是否为僵尸进程）
              printf("Child Process ID: %d \n", pid);
              // 如果父进程终止，处于僵尸状态的子进程将同时销毁
              // 因此延缓父进程的执行以验证僵尸进程
              sleep(30);
          }
      
          if (pid == 0) {
              puts("End child proess");
          } else {
              puts("End parent process");
          }
      
          return 0;
      }
      ```


    - ```shell
      shiqi@inspiron:~/network$ gcc zombie.c -o zombie
      shiqi@inspiron:~/network$ ./zombie
      Child Process ID: 24767
      Hi, I am a child process
      End child proess
      End parent process
      ```


    - ```shell
      (base) shiqi@inspiron:~/network$ ps aux
      USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
      shiqi    24766  0.0  0.0   4504   720 pts/1    S+   16:42   0:00 ./zombie
      shiqi    24767  0.0  0.0      0     0 pts/1    Z+   16:42   0:00 [zombie] <defunct>
      ```


- Q:销毁僵尸进程 1：利用 wait 函数

    - ```c
      #include <sys/wait.h>
      pid_t wait(int * statloc);
      // 成功时返回终止的子进程 ID ,失败时返回 -1
      ```

    - 调用此函数时如果已有子进程终止，那么子进程终止时传递的返回值（exit 函数的参数返回值，main 函数的 return 返回值）将保存到该函数的参数所指的内存空间。但函数参数指向的单元中还包含其他信息，因此需要用下列宏进行分离
        - WIFEXITED：子进程正常终止时返回真
        - WEXITSTATUS：返回子进程的返回值
    - 即向 wait 函数传递变量 status 的地址时，调用 wait 函数后应编写如下代码：

    - ```c
      if (WIFEXITED(status)) {
          // 是正常终止的吗？
          puts("Normal termination!");
          // 获取返回值
          printf("Child pass num: %d", WEXITSTATUS(status));
      }
      ```

    - 调用 wait 函数时，如果没有已经终止的子进程，那么程序将阻塞（Blocking）直到有子进程终止，因此要谨慎调用该函数

- Q:wait函数示例wait.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <unistd.h>
      #include <sys/wait.h>
      
      int main()
      {
          int status;
          // 这里的子进程将通过 return 语句终止
          pid_t pid = fork();
      
          if (pid == 0) {
              return 3;
          } else {
              printf("Child PID: %d \n", pid);
              // 这里的子进程将通过 exit() 函数终止
              pid = fork();
              if (pid == 0) {
                  exit(7);
              } else {
                  printf("Child PID: %d \n", pid);
      
                  // 之前终止的子进程相关信息将被保存到 status 中
                  // 同时相关子进程被完全销毁
                  wait(&status);
                  // 通过 WIFEXITED 来验证子进程是否正常终止
                  // 如果正常终止，则调用 WEXITSTATUS 宏输出子进程返回值
                  if (WIFEXITED(status)) {
                      printf("Child send one: %d \n", WEXITSTATUS(status));
                  }
      
                  // 因为之前创建了两个进程，所以再次调用 wait 函数和宏
                  wait(&status);
                  if (WIFEXITED(status)) {
                      printf("Child send two: %d \n", WEXITSTATUS(status));
                  }
                  // 暂停父进程，此时可查看子进程的状态
                  sleep(30);
              }
          }
      
          return 0;
      }
      ```


    - ```shell
      shiqi@inspiron:~/network$ gcc wait.c -o wait
      shiqi@inspiron:~/network$ ./wait
      Child PID: 24876
      Child PID: 24877
      Child send one: 3
      Child send two: 7
      ```


- Q:销毁僵尸进程 2：使用 waitpid 函数
    - waitpid可以防止阻塞

    - ```c
      #include <sys/wait.h>
      pid_t waitpid(pid_t pid, int * statloc, int options);
      // pid: 等待终止的目标子进程的ID，若传递-1，则与wait函数相同
      //      可以等待任意子进程终止
      // statloc: 与wait函数的statloc参数一样
      // options: 传递头文件 sys/wait.h 中声明的常量WNOHANG,
      //          即使没有终止的子进程也不会进入阻塞状态，
      //          而是返回0并退出函数
      // 成功时返回终止的子进程ID 或 0 ，失败时返回 -1
      ```


- Q:waitpid函数示例waitpid.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <unistd.h>
      #include <sys/wait.h>
      
      int main()
      {
          int status;
          // 这里的子进程将通过 return 语句终止
          pid_t pid = fork();
      
          if (pid == 0) {
              return 3;
          } else {
              printf("Child PID: %d \n", pid);
              // 这里的子进程将通过 exit() 函数终止
              pid = fork();
              if (pid == 0) {
                  exit(7);
              } else {
                  printf("Child PID: %d \n", pid);
      
                  // 之前终止的子进程相关信息将被保存到 status 中
                  // 同时相关子进程被完全销毁
                  wait(&status);
                  // 通过 WIFEXITED 来验证子进程是否正常终止
                  // 如果正常终止，则调用 WEXITSTATUS 宏输出子进程返回值
                  if (WIFEXITED(status)) {
                      printf("Child send one: %d \n", 
                             WEXITSTATUS(status));
                  }
      
                  // 因为之前创建了两个进程，所以再次调用 wait 函数和宏
                  wait(&status);
                  if (WIFEXITED(status)) {
                      printf("Child send two: %d \n", 
                             WEXITSTATUS(status));
                  }
                  // 暂停父进程，此时可查看子进程的状态
                  sleep(30);
              }
          }
      
          return 0;
      }
      ```


    - ```shell
      shiqi@pc:~/network$ gcc waitpid.c -o waitpid
      shiqi@pc:~/network$ ./waitpid
      sleep 3 sec.
      sleep 3 sec.
      sleep 3 sec.
      sleep 3 sec.
      sleep 3 sec.
      Child send 24
      ```


### 10.3 信号处理

- Q:信号注册函数原型signal

    - ```c
      #include <signal.h>
      void (*signal(int signo, void (*func)(int)))(int);
      // 为了在产生信号时调用，返回之前注册的函数指针
      // 函数名: signal
      // 参数: int signo, void(*func)(int)
      // 返回类型: 参数为int型，返回void型函数指针
      ```

    - 第一个参数是特殊情况信息，第二个参数为特殊情况下将要调用的函数的地址值(指针)。发生第一个参数代表的情况时，调用第二个参数所指的函数
    - 可以在 signal 函数中注册的部分特殊情况和对应的函数
        - SIGALRM：已到通过调用 alarm 函数注册时间
        - SIGINT：输入 ctrl+c
        - SIGCHLD：子进程终止

- Q:alarm函数原型

    - ```c
      #include <unistd.h>
      unsigned int alarm(unsigned int seconds);
      // 返回 0 或以秒为单位的距 SIGALRM 信号发生所剩时间
      ```

    - 如果调用该函数的同时向它传递一个正整形参数，相应时间后(以秒为单位)将产生 SIGALRM 信号
    - 若向该函数传递为 0 ，则之前对 SIGALRM 信号的预约将取消
    - 如果通过该函数预约信号后未指定该信号对应的处理函数，则（通过调用 signal 函数）终止进程，不做任何处理

- Q:信号处理示例signal.c

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      #include <signal.h>
      
      // 信号处理器(Handler)
      void timeout(int sig)
      {
          if (sig == SIGALRM) {
              puts("Time out!");
          }
          // 每隔2秒重复产生 SIGALRM 信号
          alarm(2);
      }
      
      void keycontrol(int sig)
      {
          if (sig == SIGINT) {
              puts("CTRL+C pressed");
          }
      }
      
      int main()
      {
          int i;
          // 注册 SIGALRM、SIGINT 信号及相应处理器
          signal(SIGALRM, timeout);
          signal(SIGINT, keycontrol);
          alarm(2);
      
          for (i = 0; i < 3; ++i) {
              puts("wait...");
              sleep(100);
          }
      
          return 0;
      }
      ```

    - 产生信号时，将唤醒由于调用 sleep 函数而进入阻塞状态的进程，进程一旦被唤醒，就不会再进入睡眠状态，即使还未到 sleep 函数中规定的时间也是如此
    - 编译运行，第一次运行是没有任何输入的运行结果，第二次在运行过程中输入CTRL+C

    - ```shell
      shiqi@pc:~/network/ch10$ gcc signal.c -o signal
      shiqi@pc:~/network/ch10$ ./signal
      wait...
      Time out!
      wait...
      Time out!
      wait...
      Time out!
      shiqi@pc:~/network/ch10$ ./signal
      wait...
      ^CCTRL+C pressed
      wait...
      ^CCTRL+C pressed
      wait...
      Time out!
      ```


- Q:信号处理函数sigaction

    - ```c
      #include <signal.h>
      int sigaction(int signo, const struct sigaction * act,
                    struct sigaction * oldact);
      // signo：传递信号信息，同signal函数
      // act：对应于第一个参数的信号处理函数（信号处理器）信息
      // oldact：通过此参数获取之前注册的信号处理函数指针，若不需要则传递0
      // 成功时返回 0 ，失败时返回 -1
      ```

    - 需要声明并初始化 sigaction 结构体变量来调用 sigaction

    - ```c
      struct sigaction {
          void (*sa_handler)(int);
          sigset_t sa_mask;
          int sa_flags;
      }
      // sa_handler：保存信号处理函数的指针值
      // sa_mask和sa_flags：用于指定信号相关的选项和特性，
      //                   所有位均初始化为0即可
      ```


- Q:sigaction函数的程序示例

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      #include <signal.h>
      
      void timeout(int sig)
      {
          if (sig == SIGALRM) {
              puts("Time out!");
          }
          alarm(2);
      }
      
      int main()
      {
          int i;
      
          // 为了注册信号处理函数，声明 sigaction 结构体变量
          // 并在 sa_handler 成员中保存函数指针值
          struct sigaction act;
          act.sa_handler = timeout;
          // sigemptyset 函数将 sa_mask 成员的所有位初始化为0
          sigemptyset(&act.sa_mask);
          act.sa_flags = 0;
          sigaction(SIGALRM, &act, 0);
      
          // 注册 SIGALRM 信号的处理器。
          // 调用 alarm 函数预约2秒后发生 SIGALRM 信号
          alarm(2);
      
          for (int i = 0; i < 3; ++i) {
              puts("wait...");
              sleep(100);
          }
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch10$ gcc sigaction.c -o sigaction
      shiqi@pc:~/network/ch10$ ./sigaction
      wait...
      Time out!
      wait...
      Time out!
      wait...
      Time out!
      ```


- Q:使用信号处理技术消灭僵尸进程的示例程序remove_zombie.c
    - 使用子进程终止时会向父进程产生SIGCHLD信号的特性

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <unistd.h>
      #include <signal.h>
      #include <sys/wait.h>
      
      void read_childproc(int sig)
      {
          int status;
          pid_t id = waitpid(-1, &status, WNOHANG);
          if (WIFEXITED(status)) {
              printf("Removed proc id: %d \n", id);
              printf("Child send: %d \n", WEXITSTATUS(status));
          }
      }
      
      int main(int argc, char *argv[])
      {
          pid_t pid;
          struct sigaction act;
          act.sa_handler = read_childproc;
          sigemptyset(&act.sa_mask);
          act.sa_flags = 0;
          sigaction(SIGCHLD, &act, 0);
      
          pid = fork();
          if (pid == 0) {
              // 子进程执行区域
              puts("Hi, I'm child process");
              sleep(10);
              return 12;
          } else {
              // 父进程执行区域
              printf("Child proc id: %d\n", pid);
              pid = fork();
              if (pid == 0) {
                  // 另一子程序执行区域
                  puts("Hi! I'm child process2");
                  sleep(5);
                  exit(24);
              } else {
                  int i;
                  printf("Child proc id: %d\n", pid);
                  for (i = 0; i < 5; ++i) {
                      puts("wait...");
                      sleep(5);
                  }
              }
          }
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch10$ gcc remove_zombie.c -o zombie
      shiqi@pc:~/network/ch10$ ./zombie
      Child proc id: 24086
      Hi, I'm child process
      Child proc id: 24087
      wait...
      Hi! I'm child process2
      wait...
      Removed proc id: 24087
      Child send: 24
      wait...
      Removed proc id: 24086
      Child send: 12
      wait...
      wait...
      ```


### 10.4  基于多任务的并发服务器

- Q:基于进程的并发服务器模型是怎样的？实现步骤是怎样
    - ![](https://img.shiqi-lu.tech/20210626184246.png)
    - 每当有客户端请求服务(连接请求)时，回声服务器端都创建子进程以提供服务
    - 1.回声服务器端(父进程)通过调用 accept 函数受理连接请求
    - 2.此时获取的套接字文件描述符创建并传递给子进程
    - 3.子进程利用传递来的文件描述符提供服务

- Q:实现并发服务器的基于多进程实现的回声服务器echo_mpserv.c
    - 注意，在调用 fork 函数后，要将无关的套接字文件描述符关掉
    - ![](https://img.shiqi-lu.tech/20210626191027.png)

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <string.h>
      #include <unistd.h>
      #include <signal.h>
      #include <sys/wait.h>
      #include <arpa/inet.h>
      #include <sys/socket.h>
      
      #define BUF_SIZE 30
      
      void error_handling(char *message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      void read_childproc(int sig)
      {
          pid_t pid;
          int status;
          pid = waitpid(-1, &status, WNOHANG);
          printf("removed proc id: %d \n", pid);
      }
      
      int main(int argc, char * argv[])
      {
          int serv_sock, clnt_sock;
          struct sockaddr_in serv_adr, clnt_adr;
      
          pid_t pid;
          struct sigaction act;
          socklen_t adr_sz;
          int str_len, state;
          char buf[BUF_SIZE];
        
          if (argc != 2) {
              printf("Usage: %s <port>\n", argv[0]);
              exit(1);
          }
      
          // 防止产生僵尸进程
          act.sa_handler = read_childproc;
          sigemptyset(&act.sa_mask);
          act.sa_flags = 0;
          state = sigaction(SIGCHLD, &act, 0);
      
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
        
          while (1) {
              adr_sz  = sizeof(clnt_adr);
              // 这个套接字fork之后，父子进程均会有
              clnt_sock = accept(serv_sock,
                                 (struct sockaddr *)&clnt_adr,
                                 &adr_sz);
              if (clnt_sock == -1) {
                  continue;
              } else {
                  puts("new client connected...");
              }
              pid = fork();
              if (pid == -1) {
                  close(clnt_sock);
                  continue;
              } else if (pid == 0) {
                  // 子进程运行区域
                  // 服务器套接字文件描述符同样也传递到子进程中
                  close(serv_sock);
                  while ((str_len = read(clnt_sock, buf, BUF_SIZE)) != 0) {
                      write(clnt_sock, buf, str_len);
                  }
                  close(clnt_sock);
                  puts("client disconnected...");
                  return 0;
              } else {
                  close(clnt_sock);
              }
          }
          close(serv_sock);
          return 0;
      }
      ```

    - 编译运行
    - 服务端

    - ```shell
      shiqi@pc:~/network/ch10$ gcc echo_mpserv.c -o mpserv
      shiqi@pc:~/network/ch10$ ./mpserv 9190
      new client connected...
      new client connected...
      client disconnected...
      removed proc id: 24342
      client disconnected...
      removed proc id: 24227
      ```

    - 客户端1

    - ```shell
      shiqi@pc:~/network/ch04$ ./eclient 127.0.0.1 9190
      Connceted........
      Input message(Q to quit): zz
      Message from server: zz
      Input message(Q to quit): ad
      Message from server: ad
      Input message(Q to quit): q
      ```

    - 客户端2

    - ```shell
      shiqi@pc:~/network/ch04$ ./eclient 127.0.0.1 9190
      Connceted........
      Input message(Q to quit): zmmz
      Message from server: zmmz
      Input message(Q to quit): q
      ```


### 10.5  分割TCP的I/O程序

- Q:分割I/O程序是什么？
    - 分割数据收发过程，分割后，不同进程分别负责输入和输出
    - 优点：
    - 1.程序的实现更简单
    - 2.提高频繁交换数据的程序性能
    - ![](https://img.shiqi-lu.tech/20210626192821.png)
    - 图10-6左侧演示的是之前的回声客户端数据交换方式，右侧演示的是分割IO后的客户端数据传输方式。服务器端相同，不同的是客户端区域。分割I/O后的客户端发送数据时不必考虑接收数据的情况，因此可以连续发送数据，由此提高同一时间内传输的数据量。这种差异在网速较慢时尤为明显

- Q:回声客户端的I/O程序分割示例echo_mpclient.c

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
      
      void read_routine(int sock, char *buf)
      {
          while (1) {
              int str_len = read(sock, buf, BUF_SIZE);
              if (str_len == 0) {
                  return;
              }
              buf[str_len] = 0;
              printf("Message from server: %s", buf);
          }
      }
      
      void write_routine(int sock, char *buf)
      {
          while (1) {
              fgets(buf, BUF_SIZE, stdin);
              if (!strcmp(buf, "q\n") || !strcmp(buf, "Q\n")) {
                  // 调用shutdown函数向服务器端传递EOF
                  // return后即可调用主函数的close函数传递EOF
                  // 因为主函数的fork函数复制了文件描述符，
                  // 无法通过1次close函数调用传递EOF，
                  // 因此需要通过shutdown函数另外传递
                  shutdown(sock, SHUT_WR);
                  return;
              }
              write(sock, buf, strlen(buf));
          }
      }
      
      int main(int argc, char *argv[])
      {
          int sock;
          pid_t pid;
          char buf[BUF_SIZE];
          struct sockaddr_in serv_adr;
      
          if (argc != 3) {
              printf("Usage : %s <IP> <port>\n", argv[0]);
              exit(1);
          }
      
          sock = socket(PF_INET, SOCK_STREAM, 0);
          memset(&serv_adr, 0, sizeof(serv_adr));
          serv_adr.sin_family = AF_INET;
          serv_adr.sin_addr.s_addr = inet_addr(argv[1]);
          serv_adr.sin_port = htons(atoi(argv[2]));
      
          if (connect(sock,
                      (struct sockaddr *)&serv_adr,
                      sizeof(serv_adr)) == -1) {
              error_handling("connect() error!");
          }
      
          pid = fork();
          if (pid == 0) {
              write_routine(sock, buf);
          } else {
              read_routine(sock, buf);
          }
          close(sock);
      
          return 0;
      }
      ```

    - 编译运行，服务端可用本章的echo_mpserv.c

    - ```shell
      shiqi@pc:~/network/ch10$ gcc echo_mpclient.c -o mpclient
      shiqi@pc:~/network/ch10$ ./mpclient 127.0.0.1 9190
      px
      Message from server: px
      rt
      Message from server: rt
      q
      ```


## 第11章  进程间通信

### 11.1  进程间通信的基本概念

- Q:创建管道的pipe函数原型

    - ```c
      #include <unistd.h>
      int pipe(int filedes[2]);
      // filedes[0]：通过管道接收数据时使用的文件描述符，即管道出口
      // filedes[1]：通过管道传输数据时使用的文件描述符，即管道入口
      // 成功时返回0，失败时返回-1
      ```


- Q:pipe函数的示例程序pipe1.c，父进程与子进程进行数据交换

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      
      #define BUF_SIZE 30
      
      int main(int argc, char *argv[])
      {
          int fds[2];
          char str[] = "Who are you?";
          char buf[BUF_SIZE];
          pid_t pid;
      
          pipe(fds);
          pid = fork();
          if (pid == 0) {
              write(fds[1], str, sizeof(str));
          } else {
              read(fds[0], buf, BUF_SIZE);
              puts(buf);
          }
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch11$ gcc pipe1.c -o pipe
      shiqi@pc:~/network/ch11$ ./pipe
      Who are you?
      ```


- Q:2个进程使用1个管道进行双向数据交换的程序示例pipe2.c

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      
      #define BUF_SIZE 30
      
      int main(int argc, char *argv[])
      {
          int fds[2];
          char str1[] = "Who are you?";
          char str2[] = "Thank you for your message";
          char buf[BUF_SIZE];
          pid_t pid;
      
          pipe(fds);
          pid = fork();
          if (pid == 0) {
              write(fds[1], str1, sizeof(str1));
              // 这个不能注释，注释后，下一个read会把管道内数据取走
              // 而父进程则阻塞在read函数中无限等待
              sleep(2);
              read(fds[0], buf, BUF_SIZE);
              printf("Child proc output: %s\n", buf);
          } else {
              read(fds[0], buf, BUF_SIZE);
              printf("Parent proc output: %s\n", buf);
              write(fds[1], str2, sizeof(str2));
              sleep(3);
          }
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch11$ gcc pipe2.c -o pipe2
      shiqi@pc:~/network/ch11$ ./pipe2
      Parent proc output: Who are you?
      Child proc output: Thank you for your message
      ```


- Q:2个进程使用2个管道进行双向数据交换的程序示例pipe3.c

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      
      #define BUF_SIZE 30
      
      int main(int argc, char *argv[])
      {
          int fds1[2], fds2[2];
          char str1[] = "Who are you?";
          char str2[] = "Thank you for your message";
          char buf[BUF_SIZE];
          pid_t pid;
      
          pipe(fds1);
          pipe(fds2);
          pid = fork();
          if (pid == 0) {
              write(fds1[1], str1, sizeof(str1));
              read(fds2[0], buf, BUF_SIZE);
              printf("Child proc output: %s\n", buf);
          } else {
              read(fds1[0], buf, BUF_SIZE);
              printf("Parent proc output: %s\n", buf);
              write(fds2[1], str2, sizeof(str2));
              sleep(3);
          }
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch11$ gcc pipe3.c -o pipe3
      shiqi@pc:~/network/ch11$ ./pipe3
      Parent proc output: Who are you?
      Child proc output: Thank you for your message
      ```


### 11.2  运用进程间通信

- Q:使用多进程的回声服务器端，并将回声客户端传输的字符串按序保持到文件中的程序示例echo_storeserv.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <string.h>
      #include <unistd.h>
      #include <signal.h>
      #include <sys/wait.h>
      #include <arpa/inet.h>
      #include <sys/socket.h>
      
      #define BUF_SIZE 30
      
      void error_handling(char *message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      void read_childproc(int sig)
      {
          pid_t pid;
          int status;
          pid = waitpid(-1, &status, WNOHANG);
          printf("removed proc id: %d \n", pid);
      }
      
      int main(int argc, char * argv[])
      {
          int serv_sock, clnt_sock;
          struct sockaddr_in serv_adr, clnt_adr;
          int fds[2];
      
          pid_t pid;
          struct sigaction act;
          socklen_t adr_sz;
          int str_len, state;
          char buf[BUF_SIZE];
      
          if (argc != 2) {
              printf("Usage : %s <port>\n", argv[0]);
              exit(1);
          }
      
          act.sa_handler = read_childproc;
          sigemptyset(&act.sa_mask);
          act.sa_flags = 0;
          state = sigaction(SIGCHLD, &act, 0);
      
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
      
          pipe(fds);
          pid = fork();
          if (pid == 0) {
              FILE * fp = fopen("echomsg.txt", "wt");
              char msgbuf[BUF_SIZE];
              int i, len;
      
              for (i = 0; i < 10; ++i) {
                  len = read(fds[0], msgbuf, BUF_SIZE);
                  fwrite((void *)msgbuf, 1, len, fp);
              }
              fclose(fp);
              return 0;
          }
        
          while (1) {
              adr_sz = sizeof(clnt_adr);
              clnt_sock = accept(serv_sock,
                                 (struct sockaddr *)&clnt_adr,
                                 &adr_sz);
              if (clnt_sock == -1) {
                  continue;
              } else {
                  puts("new client connected...");
              }
      
              pid = fork();
              if (pid == 0) {
                  close(serv_sock);
                  while ((str_len = read(clnt_sock, buf, BUF_SIZE)) != 0) {
                      write(clnt_sock, buf, str_len);
                      write(fds[1], buf, str_len);
                  }
                  close(clnt_sock);
                  puts("client disconnected...");
                  return 0;
              } else {
                  close(clnt_sock);
              }
          }
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch11$ gcc echo_storeserv.c -o serv
      shiqi@pc:~/network/ch11$ ./serv 9190
      new client connected...
      client disconnected...
      removed proc id: 25075
      ```

