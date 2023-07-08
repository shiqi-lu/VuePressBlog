---
title: 《TCP/IP网络编程》第1-5章学习笔记
date: 2021-02-11 15:21:55
updated: 2021-02-11 15:21:55
tags:
- 网络
categories:
- 网络
description: ch1.理解网络编程和套接字，ch2.套接字类型与协议设置，ch3.地址族与数据序列，ch4、5.基于 TCP 的服务端/客户端
toc:
  enable: true
  number: false
---

注：博主只关注编程实现的方面以及linux部分，部分网络原理讲解和windows实现部分跳过



## 第1章 理解网络编程和套接字

### 1.1 理解网络编程和套接字

- Q:网络编程中接受连接请求的套接字创建过程？
    - ![](https://img.shiqi-lu.tech/20210213171357.png?imageView2/2/h/400)
    - 1.调用 socket 函数创建套接字

        - ```c
          #include <sys/socket.h>
          int socket(int domain, int type, int protocol);
          // domain：套接字中使用的协议族(Protocol Family)信息
          // type：套接字数据传输类型信息
          // protocol：计算机间通信中使用的协议信息
          // 成功时返回文件描述符，失败时返回-1
          ```

    - 2.调用 bind 函数分配IP地址和端口号

        - ```c
          #include <sys/socket.h>
          int bind(int sockfd, 
                   struct sockaddr *myaddr, 
                   socklen_t addrlen);
          // sockfd：要分配地址信息(IP地址和端口号)的套接字文件描述符
          // myaddr：存有地址信息的结构体变量地址值
          // addrlen：第二个结构体变量的长度
          // 成功时返回0，失败时返回-1
          ```

    - 3.调用 listen 函数转换为可接受请求状态

        - ```c
          #include <sys/socket.h>
          int listen(int sockfd, int backlog);
          // sock：希望进入等待连接请求状态的套接字文件描述符，
          //       传递的描述符套接字参数成为服务端套接字（监听套接字）
          // backlog：连接请求等待队列的长度，若为5，则队列长度为5，
          //          表示最多使5个连接请求进入队列
          // 成功时返回0，失败时返回-1
          ```

    - 4.调用 accept 函数受理套接字请求

        - ```c
          #include <sys/socket.h>
          int accept(int sockfd,
                     struct sockaddr *addr,
                     socklen_t *addrlen);
          // sockfd: 服务端套接字的文件描述符
          // addr: 保存发起连接请求的客户端地址信息的变量地址值
          //       调用函数后向传递来的地址变量参数填充客户端地址信息
          // addrlen: 第二个参数addr结构体的长度，但是存放有长度的变量地址。
          //          函数调用完成后，该变量即被填入客户端地址长度
          // 成功时返回文件描述符，失败时返回-1
          ```

        - accept 函数受理连接请求队列中待处理的客户端连接请求。函数调用成功时，accept 函数内部将产生用于数据I/O的套接字，并返回其文件描述符
        - 需要强调的是，套接字是自动创建的，并自动与发起连接请求的客户端建立连接

- Q:请求连接客户端程序的套接字的创建过程？
    - ![](https://img.shiqi-lu.tech/20210213180234.png?imageView2/2/h/300)
    - 1.调用 socket 函数 和 connect 函数

        - ```c
          #include <sys/socket.h>
          int conncet(int sockfd, 
                      struct sockaddr *serv_addr,
                      socklen_t addrlen);
          // sockfd: 客户端套接字文件描述符
          // servaddr: 保存目标服务器端地址信息的变量地址值
          // addrlen: 以字节为单位传递给第二个结构体参数 servaddr 的变量地址长度
          // 成功时返回0，失败时返回-1
          ```

        - 客户端调用 connect 函数候，发生以下函数之一才会返回（完成函数调用）:
            - 服务器接受连接请求
            - 发生断网等异常情况而中断连接请求
        - 注意：「接受连接」并不代表服务端调用accept函数，其实是服务端把连接请求信息记录到等待队列。因此 connect 函数返回后并不立即进行数据交换
    - 2.与服务端共同运行以收发字符串数据

- Q:Hello World服务端和客户端的例子
    - 服务端hello_server.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char *argv[])
          {
              int serv_sock;
              int clnt_sock;
          
              struct sockaddr_in serv_addr;
              struct sockaddr_in clnt_addr;
              socklen_t clnt_addr_size;
          
              char message[] = "Hello World!";
          
              if (argc != 2) {
                  printf("Usage : %s <port>\n", argv[0]);
                  exit(1);
              }
          
              // 调用 socket 函数创建套接字
              serv_sock = socket(PF_INET, SOCK_STREAM, 0);
              if (serv_sock == -1) {
                  error_handling("socket() error");
              }
          
              memset(&serv_addr, 0, sizeof(serv_addr));
              serv_addr.sin_family = AF_INET;
              serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);
              serv_addr.sin_port = htons(atoi(argv[1]));
            
              // 调用 bind 函数分配ip地址和端口号
              if (bind(serv_sock, 
                       (struct sockaddr*)&serv_addr, 
                       sizeof(serv_addr)) == -1) {
                  error_handling("bind() error");
              }
          
              // 调用 listen 函数将套接字转为可接受连接状态
              if (listen(serv_sock, 5) == -1) {
                  error_handling("listen() error");
              }
          
              clnt_addr_size = sizeof(clnt_addr);
              // 调用 accept 函数受理连接请求。
              // 如果在没有连接请求的情况下调用该函数，
              // 则不会返回，直到有连接请求为止
              clnt_sock = accept(serv_sock, 
                                 (struct sockaddr*)&clnt_addr, 
                                 &clnt_addr_size);
              if (clnt_sock == -1) {
                  error_handling("accept() error");
              }
          
              // write 函数用于传输数据，若程序经过 accept 这一行执行到本行，
              // 则说明已经有了连接请求
              write(clnt_sock, message, sizeof(message));
              close(clnt_sock);
              close(serv_sock);
          
              return 0;
          }
          ```

    - 客户端hello_client.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char *argv[])
          {
              int sock;
              struct sockaddr_in serv_addr;
              char message[30];
              int str_len;
          
              if (argc != 3) {
                  printf("Usage : %s <IP> <port>\n", argv[0]);
                  exit(1);
              }
          
              // 创建套接字，此时套接字并不马上分为服务端和客户端
              // 如果紧接着调用 bind,listen 函数，将成为服务器套接字
              // 如果调用 connect 函数，将成为客户端套接字
              sock = socket(PF_INET, SOCK_STREAM, 0);
              if (sock == -1) {
                  error_handling("socket() error");
              }
          
              memset(&serv_addr, 0, sizeof(serv_addr));
              serv_addr.sin_family = AF_INET;
              serv_addr.sin_addr.s_addr = inet_addr(argv[1]);
              serv_addr.sin_port = htons(atoi(argv[2]));
          
              // 调用 connect 函数向服务器发送连接请求
              if (connect(sock, 
                          (struct sockaddr *)&serv_addr, 
                          sizeof(serv_addr)) == -1) {
                  error_handling("connect() error!");
              }
          
              str_len = read(sock, message, sizeof(message) - 1);
              if (str_len == -1) {
                  error_handling("read() error!");
              }
          
              printf("Message from server : %s \n", message);
              close(sock);
          
              return 0;
          }
          ```

    - 编译运行
        - 服务端

        - ```shell
          shiqi@inspiron:~/network$ gcc hello_server.c -o hserver
          shiqi@inspiron:~/network$ ./hserver 9190
          ```

        - 客户端

        - ```shell
          shiqi@inspiron:~/network$ gcc hello_client.c -o hclient
          shiqi@inspiron:~/network$ ./hclient 127.0.0.1 9190
          Message from server : Hello World!
          ```


### 1.2 基于 Linux 的文件操作

- Q:分配给标准输入输出及标准错误的文件描述符
    - 0：标准输入(Standard Input)
    - 1：标准输出(Standard Output)
    - 2：标准错误(Standard Error)

- Q:打开文件

    - ```c
      #include <sys/types.h>
      #include <sys/stat.h>
      #include <fcntl.h>
      
      int open(const char * path, int flag);
      // path：文件名的字符串地址
      // flag：文件打开模式（文件特性信息）
      // 成功时返回文件描述符，失败时返回-1
      ```

    - 文件打开模式，如需传递多个参数，可通过位或运算符组合传递
    - O_CREAT：必要时创建文件
    - O_TRUNC：删除全部现有数据
    - O_APPEND：维持现有数据，保存到其后面
    - O_RDONLY：只读打开
    - O_WRONLY：只写打开
    - O_RDWR：读写打开

- Q:关闭文件

    - ```c
      #include <unistd.h>
      
      int close(int fd);
      // fd：需要关闭的文件或套接字的文件描述符
      // 成功时返回 0 ，失败时返回 -1
      ```


- Q:将数据写入文件

    - ```c
      #include <unistd.h>
      
      ssize_t write(int fd, const void * buf, size_t nbytes);
      // fd：显示数据传输对象的文件描述符
      // buf：保存要传输数据的缓冲值地址
      // nbytes：要传输数据的字节数
      // 成功时返回写入的字节数 ，失败时返回 -1
      ```

    - 在此函数的定义中，size_t 是通过 typedef 声明的 unsigned int 类型。对 ssize_t 来说，ssize_t 前面多加的 s 代表 signed ，即 ssize_t 是通过 typedef 声明的 signed int 类型

- Q:创建新文件并保存数据示例low_open.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <fcntl.h>
      #include <unistd.h>
      
      void error_handling(char *message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      int main()
      {
          char buf[] = "Let's go!\n";
          int fd;
      
          // O_CREAT | O_WRONLY | O_TRUNC 是文件打开模式，将创建新文件，并且只能写
          // 如存在 data.txt 文件，则清空文件中的全部数据
          fd = open("data.txt", O_CREAT|O_WRONLY|O_TRUNC);
          if (fd == -1) {
              error_handling("open() error!");
          }
          printf("file descriptor: %d \n", fd);
      
          // 向对应 fd 中保存的文件描述符的文件传输 buf 中保存的数据
          if (write(fd, buf, sizeof(buf)) == -1) {
              error_handling("write() error!");
          }
          close(fd);
      
          return 0;
      }
      ```


    - ```shell
      shiqi@inspiron:~/network$ gcc low_open.c -o lopen
      shiqi@inspiron:~/network$ ./lopen
      file descriptor: 3
      shiqi@inspiron:~/network$ cat data.txt
      Let's go!
      ```


- Q:读取文件中的数据

    - ```c
      #include <unistd.h>
      
      ssize_t read(int fd, void *buf, size_t nbytes);
      // fd： 显示数据接收对象的文件描述符
      // buf： 要保存接收的数据的缓冲地址值。
      // nbytes： 要接收数据的最大字节数
      // 成功时返回接收的字节数（但遇到文件结尾则返回 0），失败时返回 -1
      ```


- Q:通过read()读取data.txt中的数据示例low_read.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <fcntl.h>
      #include <unistd.h>
      
      #define BUF_SIZE 100
      
      void error_handling(char *message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      int main()
      {
          char buf[BUF_SIZE];
          int fd = open("data.txt", O_RDONLY);
          if (fd == -1) {
              error_handling("open() error!");
          }
          printf("file descriptor: %d \n", fd);
      
          if (read(fd, buf, sizeof(buf)) == -1) {
              error_handling("read() error!");
          }
          printf("file data: %s", buf);
          close(fd);
          return 0;
      }
      ```


    - ```shell
      shiqi@inspiron:~/network$ gcc low_read.c -o lread
      shiqi@inspiron:~/network$ ./lread
      file descriptor: 3
      file data: Let's go!
      ```


- Q:同时创建文件和套接字，并用整数型态比较返回的文件描述符的值，程序示例fd_seri.c

    - ```c
      #include <stdio.h>
      #include <fcntl.h>
      #include <unistd.h>
      #include <sys/socket.h>
      
      int main()
      {
          int fd1 = socket(PF_INET, SOCK_STREAM, 0);
          int fd2 = open("test.dat", O_CREAT | O_WRONLY | O_TRUNC);
          int fd3 = socket(PF_INET, SOCK_DGRAM, 0);
      
          printf("fd1: %d\n", fd1);
          printf("fd2: %d\n", fd2);
          printf("fd3: %d\n", fd3);
      
          close(fd1);
          close(fd2);
          close(fd3);
      
          return 0;
      }
      ```


    - ```shell
      shiqi@inspiron:~/network$ gcc fd_seri.c -o fds
      shiqi@inspiron:~/network$ ./fds
      fd1: 3
      fd2: 4
      fd3: 5
      ```


### 1.3 基于 Windows 平台的实现

### 1.4 基于 Windows 的套接字相关函数及示例

## 第 2 章 套接字类型与协议设置

### 2.1 套接字协议及数据传输特性

- Q:头文件 sys/socket.h 中声明的协议族有哪些
    - 通过 socket 函数的第一个参数传递套接字中使用的协议分类信息，即协议族(Protocol Family)
    - PF_INET：IPV4互联网协议族
    - PF_INET6：IPV6互联网协议族
    - PF_LOCAL：本地通信 Unix 协议族
    - PF_PACKET：底层套接字的协议族
    - PF_IPX：IPX Novel 协议族
    - 套接字中实际采用的最终的协议信息是通过 socket 函数的第三个参数传递的。在指定的协议族范围内通过第一个参数决定第三个参数

- Q:套接字类型1：面向连接的套接字(SOCK_STREAM)的3个特点是什么
    - 特点
        - 传输过程中数据不会消失
        - 按序传输数据
        - 传输的数据不存在数据边界（Boundary）
    - 收发数据的套接字内部有缓冲（buffer），即字节数组。通过套接字传输的数据将保存到该数组。因此收到数据并不意味着马上调用 read 函数。只要不超过数组容量，则有可能在数据填充满缓冲后通过一次或多次 read 函数调用读取
    - 在面向连接的套接字中，read、write 函数的调用次数无太大意义，即为不存在数据边界
    - 面向连接的套接字可总结为：可靠的、按序传递的、基于字节的面向连接的数据传输方式的套接字

- Q:套接字类型2：面向消息的套接字(SOCK_DGRAM)的4个特点是什么
    - 特点
        - 强调快速传输而非传输有序
        - 传输的数据可能丢失也可能损毁
        - 传输的数据有边界
        - 限制每次传输数据的大小
    - 面向消息的套接字比面向连接的套接字具有更快的传输速度，但无法避免数据丢失或损毁。另外，每次传输的数据大小具有一定限制，并存在数据边界。存在数据边界意味着接收数据的次数应和传输次数相同
    - 面向消息的套接字特性总结：不可靠的、不按序传递的、以数据的高速传输为目的的套接字

- Q:socket 函数中，如何用第三个参数选择最终的协议
    - socket 函数的第三个参数决定最终采用的协议。因同一协议族中存在多个数据传输方式相同的协议，需要通过第三个参数指定具体的协议
    - 创建IPv4协议族(PF_INET)中面向连接的套接字(SOCK_STREAM)，满足这两个条件的协议为 IPPROTO_TCP，即TCP套接字
    - `int tcp_socket = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP)`
    - 创建IPv4协议族(PF_INET)中面向消息的套接字(SOCK_DGRAM)，满足这两个条件的协议为 IPPROTO_UDP，即UDP套接字
    - `int udp_socket = socket(PF_INET, SOCK_DGRAM, IPPROTO_UDP)`

- Q:面向连接的套接字:TCP套接字示例
    - 服务端tcp_server.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char *argv[])
          {
              int serv_sock;
              int clnt_sock;
          
              struct sockaddr_in serv_addr;
              struct sockaddr_in clnt_addr;
              socklen_t clnt_addr_size;
          
              char message[] = "Hello World!";
          
              if (argc != 2) {
                  printf("Usage : %s <port>\n", argv[0]);
                  exit(1);
              }
          
              // 调用 socket 函数创建套接字
              serv_sock = socket(PF_INET, SOCK_STREAM, 0);
              if (serv_sock == -1) {
                  error_handling("socket() error");
              }
          
              memset(&serv_addr, 0, sizeof(serv_addr));
              serv_addr.sin_family = AF_INET;
              serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);
              serv_addr.sin_port = htons(atoi(argv[1]));
            
              // 调用 bind 函数分配ip地址和端口号
              if (bind(serv_sock, 
                       (struct sockaddr*)&serv_addr, 
                       sizeof(serv_addr)) == -1) {
                  error_handling("bind() error");
              }
          
              // 调用 listen 函数将套接字转为可接受连接状态
              if (listen(serv_sock, 5) == -1) {
                  error_handling("listen() error");
              }
          
              clnt_addr_size = sizeof(clnt_addr);
              // 调用 accept 函数受理连接请求。如果在没有连接请求的情况下调用该函数，
              // 则不会返回，直到有连接请求为止
              clnt_sock = accept(serv_sock, 
                                 (struct sockaddr*)&clnt_addr, 
                                 &clnt_addr_size);
              if (clnt_sock == -1) {
                  error_handling("accept() error");
              }
          
              // write 函数用于传输数据，若程序经过 accept 这一行执行到本行，
              // 则说明已经有了连接请求
              write(clnt_sock, message, sizeof(message));
              close(clnt_sock);
              close(serv_sock);
          
              return 0;
          }
          ```

    - 客户端tcp_client.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char *argv[])
          {
              int sock;
              struct sockaddr_in serv_addr;
              char message[30];
              int str_len = 0;
              int idx = 0, read_len = 0;
          
              if (argc != 3) {
                  printf("Usage : %s <IP> <port>\n", argv[0]);
                  exit(1);
              }
          
              // 创建TCP套接字，此时套接字并不马上分为服务端和客户端
              // 如果紧接着调用 bind,listen 函数，将成为服务器套接字
              // 如果调用 connect 函数，将成为客户端套接字
              //
              // 若前两个参数使用PF_INET 和 SOCK_STREAM，
              // 则可以省略第三个参数 IPPROTO_TCP
              sock = socket(PF_INET, SOCK_STREAM, 0);
              if (sock == -1) {
                  error_handling("socket() error");
              }
          
              memset(&serv_addr, 0, sizeof(serv_addr));
              serv_addr.sin_family = AF_INET;
              serv_addr.sin_addr.s_addr = inet_addr(argv[1]);
              serv_addr.sin_port = htons(atoi(argv[2]));
          
              // 调用 connect 函数向服务器发送连接请求
              if (connect(sock, 
                          (struct sockaddr *)&serv_addr, 
                          sizeof(serv_addr)) == -1) {
                  error_handling("connect() error!");
              }
          
              // while循环中反复调用read函数，每次读取1个字节。
              // 如果read返回0，即文件末尾，则循环结束
              while (read_len = read(sock, &message[idx++], 1)) {
                  if (str_len == -1) {
                      error_handling("read() error!");
                  }
                  str_len += read_len;
              }
          
              printf("Message from server : %s \n", message);
              printf("Function read call count : %d \n", str_len);
              close(sock);
          
              return 0;
          }
          ```

    - 编译运行
        - 服务端

        - ```shell
          shiqi@inspiron:~/network$ gcc tcp_server.c -o hserver
          shiqi@inspiron:~/network$ ./hserver 9191
          ```

        - 客户端

        - ```shell
          shiqi@inspiron:~/network$ gcc tcp_client.c -o hclient
          shiqi@inspiron:~/network$ ./hclient 127.0.0.1 9191
          Message from server : Hello World!
          Function read call count : 13
          ```


## 第 3 章 地址族与数据序列

### 3.1 分配给套接字的 IP 地址与端口号

### 3.2 地址信息的表示

- Q: POSIX中定义了哪些数据类型
    - ![](https://img.shiqi-lu.tech/20210213152341.png)

- Q:表示IPv4地址的结构体 sockaddr_in 和 in_addr

    - ```c
      struct sockaddr_in {
          sa_family_t    sin_family;  // 地址族（Address Family）
          uint16_t       sin_port;    // 16位TCP/UDP端口号
          struct in_addr sin_addr;    // 32位IP地址
          char           sin_zero[8]; // 不使用
      };
      
      struct in_addr {
          in_addr_t s_addr; // 32位IPv4地址，同uint32_t
      };
      ```

    - sin_family：指定每种协议族适用的地址族(Address Family)
        - AF_INET：IPV4用的地址族
        - AF_INET6：IPV6用的地址族
        - AF_LOCAL：本地通信中采用的 Unix 协议的地址族
    - sin_port
        - 保持16位端口号，以网络字节序保存
    - sin_addr
        - 保存32位IP地址信息，且以网络字节序保存，可同时观察结构体in_addr，其中声明为uint32_t，只需当作32位整数型即可
    - sin_zero
        - 无特殊含义。只是为使结构体sockaddr_in的大小与sockaddr结构体保持一致而插入的成员。必需填充为0，否则无法得到想要的结果
        - sockaddr_in结构体变量地址值将以如下方式传递给bind函数

        - ```c
          struct sockaddr_in serv_addr;
          ...
          if (bind(serv_sock, 
                   (struct sockaddr *)&serv_addr,
                   sizeof(serv_addr)) == -1) {
              error_handling("bind() error");
          }
          ```

        - 此处 bind 第二个参数期望得到的是 sockaddr 结构体变量的地址值，包括地址族、端口号、IP地址等

        - ```c
          struct sockaddr {
              sa_family_t sin_family; // 地址族(Address Family)
              char sa_data[14];       // 地址信息
          }
          ```

        - 该结构体成员 sa_data 保存的地址信息中需包含IP地址和端口号，剩余部分应填充0。而这对于包含地址的信息非常麻烦，所以有sockaddr_in结构体，最后转换为sockaddr 型的结构体变量，再传递给 bind 函数

### 3.3 网络字节序与地址变换

- Q:CPU向内存保存数据的2种方式
    - 大端序（Big Endian）：高位字节存放到低位地址
    - 小端序（Little Endian）：高位字节存放到高位地址
    - ![](https://img.shiqi-lu.tech/20210213160004.png)
    - 网络传输数据时约定统一为大端序，即网络字节序(Network Byte Order)

- Q:字节序转换(Endian Conversions)函数

    - ```c
      #include <netinet/in.h>
      unsigned short htons(unsigned short);
      unsigned short ntohs(unsigned short);
      unsigned long htonl(unsigned long);
      unsigned long ntohl(unsigned long);
      ```

    - h：主机（host）字节序
    - n：主机（host）字节序
    - s：2个字节short，用于端口号转换
    - l：4个字节long，用于IP地址转换

- Q:字节序转换示例程序endian_conv.c

    - ```c
      #include <stdio.h>
      #include <arpa/inet.h>
      
      int main()
      {
          unsigned short host_port = 0x1234;
          unsigned short net_port = htons(host_port);
          unsigned long host_addr = 0x12345678;
          unsigned long net_addr = htonl(host_addr);
      
          printf("Host ordered port: %#x \n", host_port);
          printf("Network ordered port: %#x \n", net_port);
          printf("Host ordered address: %#lx \n", host_addr);
          printf("Network ordered address: %#lx \n", net_addr);
      
          return 0;
      }
      ```


    - ```shell
      shiqi@inspiron:~/network$ gcc endian_conv.c -o conv
      shiqi@inspiron:~/network$ ./conv
      Host ordered port: 0x1234
      Network ordered port: 0x3412
      Host ordered address: 0x12345678
      Network ordered address: 0x78563412
      ```


### 3.4 网络地址的初始化与分配

- Q:将字符串形式的IP地址转换成32位整数型数据，并同时进行网络字节序转换的inet_addr

    - ```c
      #include <arpa/inet.h>
      in_addr_t inet_addr(const char * string);
      // 成功时返回32位大端序整数型值，失败时返回INADDR_NONE
      ```

    - 示例inet_addr.c

    - ```c
      #include <stdio.h>
      #include <arpa/inet.h>
      
      int main()
      {
          char * addr1 = "1.2.3.4";
          char * addr2 = "1.2.3.256";
      
          unsigned long conv_addr = inet_addr(addr1);
          if (conv_addr == INADDR_NONE) {
              printf("Error occured!\n");
          } else {
              printf("Network ordered integer addr: %#lx \n", conv_addr);
          }
      
          conv_addr = inet_addr(addr2);
          if (conv_addr == INADDR_NONE) {
              printf("Error occured!\n");
          } else {
              printf("Network ordered integer addr: %#lx \n", conv_addr);
          }
      
          return 0;
      }
      ```


    - ```shell
      shiqi@inspiron:~/network$ gcc inet_addr.c -o addr
      shiqi@inspiron:~/network$ ./addr
      Network ordered integer addr: 0x4030201
      Error occured!
      ```


- Q:利用了in_addr结构体将字符串形式IP地址转换为32位网络字节序整数返回的inet_aton函数

    - ```c
      #include <arpa/inet.h>
      int inet_aton(const char * string, struct in_addr * addr);
      // string：含有需转换的IP地址信息的字符串地址值
      // addr：将保存转换结果的in_addr结构体变量的地址值
      // 成功时返回 1 ，失败时返回 0
      ```

    - 示例inet_aton.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <arpa/inet.h>
      
      void error_handling(char *message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      int main()
      {
          char * addr = "127.232.124.79";
          struct sockaddr_in addr_inet;
      
          if (!inet_aton(addr, &addr_inet.sin_addr)) {
              error_handling("Conversion error");
          } else {
              printf("Network ordered integer addr: %#x \n",
                     addr_inet.sin_addr.s_addr);
          }
      
          return 0;
      }
      ```


    - ```shell
      shiqi@inspiron:~/network$ gcc inet_aton.c -o aton
      shiqi@inspiron:~/network$ ./aton
      Network ordered integer addr: 0x4f7ce87f
      ```


- Q:把网络字节序整数型IP地址转换为字符串形式的inet_ntoa函数

    - ```c
      #include <arpa/inet.h>
      char * inet_ntoa(struct in_addr adr);
      // 成功时返回转换的字符串地址值，失败时返回-1
      ```

    - 注意，返回值为char指针。返回字符串地址意味着字符串已经保存在内存空间，但是该函数未向程序员要求分配内存，而是在内部申请了内存保存了字符串
    - 即调用完该函数候要立即把字符串信息复制到其他内存空间。原因是若再次调用inet_ntoa函数可能会覆盖之前保存的字符串信息。即再次调用 inet_ntoa 函数前返回的字符串地址是有效的。长期保存则应复制到其它内存空间
    - 示例inet_ntoa.c

    - ```c
      #include <stdio.h>
      #include <string.h>
      #include <arpa/inet.h>
      
      int main()
      {
          struct sockaddr_in addr1, addr2;
          char * str_ptr;
          char str_arr[20];
      
          addr1.sin_addr.s_addr = htonl(0x1020304);
          addr2.sin_addr.s_addr = htonl(0x1010101);
      
          str_ptr = inet_ntoa(addr1.sin_addr);
          strcpy(str_arr, str_ptr);
          printf("Dotted-Decimal notation1: %s \n", str_ptr);
      
          inet_ntoa(addr2.sin_addr);
          printf("Dotted-Decimal notation2: %s \n", str_ptr);
          printf("Dotted-Decimal notation3: %s \n", str_arr);
      
          return 0;
      }
      ```


    - ```shell
      shiqi@inspiron:~/network$ gcc inet_ntoa.c -o ntoa
      shiqi@inspiron:~/network$ ./ntoa
      Dotted-Decimal notation1: 1.2.3.4
      Dotted-Decimal notation2: 1.1.1.1
      Dotted-Decimal notation3: 1.2.3.4
      ```


- Q:套接字创建过程中常见的网络地址信息初始化方法

    - ```c
      struct sockaddr_in addr;
      char * serv_ip = "211.217.168.13"; // 声明IP地址字符串
      char * serv_port = "9190";         // 声明端口号字符串
      memset(&addr, 0, sizeof(addr));    // 结构体变量 addr 的所有成员初始化为0
      addr.sin_family = AF_INET;                 // 指定地址族
      addr.sin_addr.s_addr = inet_addr(serv_ip); // 基于字符串的IP地址初始化
      addr.sin_port = htons(atoi(serv_port));    // 基于字符串的IP地址端口号初始化
      ```

    - 服务器端声明sockaddr_in结构体，将其初始化为赋予服务器端IP和套接字的端口号，然后调用bind函数
    - 客户端声明sockaddr_in结构体，并初始化为要与之连接的服务器端套接字的IP和端口号，然后调用connect函数

- Q:服务器端使用INADDR_ANY自动获取运行服务器端的计算机IP地址

    - ```c
      struct sockaddr_in addr;
      char * serv_port = "9190";
      memset(&addr, 0, sizeof(addr));
      addr.sin_family = AF_INET;
      addr.sin_addr.s_addr = htonl(INADDR_ANY); // 注意这里
      addr.sin_port = htons(atoi(serv_port));
      ```

    - 若同一计算机已分配多个IP地址(多宿主(Multi-homed)计算机，一般路由器属于这一类)，则只要端口号一致，即可从不同IP地址接受数据。服务器优先考虑这种方式

## 第 4 章 基于 TCP 的服务端/客户端（1）

### 4.1 理解 TCP 和 UDP

### 4.2 实现基于 TCP 的服务器/客户端

- Q:基于 TCP 的服务端/客户端函数调用关系
    - ![](https://img.shiqi-lu.tech/20210213181511.png?imageView2/2/h/400)
    - 1.服务器端创建套接字后连续调用bind、listen函数进入等待状态
    - 2.客户端通过调用connect函数发起连接请求。(只能等到服务器端调用listen函数后才能调connect函数，客户端调用connect函数前，服务器端可能率先调用accept函数。当然此时服务器端在调用accept函数时进入阻塞(blocking)状态，知道客户端调connect函数为止)

### 4.3 实现迭代服务端/客户端：服务端将客户端传输的字符串数据原封不动的传回客户端

- Q:迭代服务器端的流程
    - 通过插入循环语句反复调用accept函数，可实现继续处理后续客户端连接请求
    - ![](https://img.shiqi-lu.tech/20210213182055.png)
    - 目前该程序同一时刻只能服务于一个客户端

- Q:迭代回升服务器端/客户端程序(不完美版本)
    - 服务端echo_server.c

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
          
              if (bind(serv_sock, 
                       (struct sockaddr *)&serv_adr, 
                       sizeof(serv_adr)) == -1) {
                  error_handling("bind() error");
              }
          
              if (listen(serv_sock, 5) == -1) {
                  error_handling("listen() error");
              }
          
              clnt_adr_sz = sizeof(clnt_adr);
              for (i = 0; i < 5; ++i) {
                  clnt_sock = accept(serv_sock, 
                                     (struct sockaddr *)&clnt_adr, 
                                     &clnt_adr_sz);
                  if (clnt_sock == -1) {
                      error_handling("accept() error");
                  } else {
                      printf("Connected client %d \n", i+1);
                  }
          
                  // 客户端套接字若调用close函数，这一个循环条件变成假
                  while ((str_len = read(clnt_sock, 
                                         message, 
                                         BUF_SIZE)) != 0) {
                      write(clnt_sock, message, str_len);
                  }
                  // 针对套接字调用close函数，向连接的相应套接字发送EOF
                  close(clnt_sock);
              }
              close(serv_sock);
          
              return 0;
          }
          ```

    - 客户端echo_client.c

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
          
              if (connect(sock, 
                          (struct sockaddr *)&serv_adr, 
                          sizeof(serv_adr)) == -1) {
                  error_handling("connect() error!");
              } else {
                  puts("Connceted........");
              }
          
              while (1) {
                  fputs("Input message(Q to quit): ", stdout);
                  fgets(message, BUF_SIZE, stdin);
          
                  if (!strcmp(message, "q\n") 
                      || !strcmp(message, "Q\n")) {
                      break;
                  }
          
                  write(sock, message, strlen(message));
                  str_len = read(sock, message, BUF_SIZE-1);
                  message[str_len] = '\0';
                  printf("Message from server: %s", message);
              }
              close(sock);
          
              return 0;
          }
          ```

    - 编译运行
        - 服务端

        - ```shell
          shiqi@inspiron:~/network$ gcc echo_server.c -o eserver
          shiqi@inspiron:~/network$ ./eserver 9190
          Connected client 1
          Connected client 2
          ```

        - 客户端

        - ```shell
          shiqi@inspiron:~/network$ gcc echo_client.c -o eclient
          shiqi@inspiron:~/network$ ./eclient 127.0.0.1 9190
          Connceted........
          Input message(Q to quit): Hi
          Message from server: Hi
          Input message(Q to quit): cd
          Message from server: cd
          Input message(Q to quit): q
          ```

    - 存在问题
        - 在客户端的代码中

        - ```c
          write(sock, message, strlen(message));
          str_len = read(sock, message, BUF_SIZE-1);
          message[str_len] = '\0';
          printf("Message from server: %s", message);
          ```

        - 以上代码有个错误的假设「每次调用 read、write函数时都会以字符串为单位执行实际 I/O 操作」
        - 注意「TCP不存在数据边界」，上述客户端是基于 TCP 的，因此多次调用 write 函数传递的字符串有可能一次性传递到服务端。此时客户端有可能从服务端收到多个字符串。即需要考虑服务端「字符串太长，需要分2个数据包发送」
        - 服务端希望通过调用 1 次 write 函数传输数据，但是如果数据太大，操作系统就有可能把数据分成多个数据包发送到客户端。另外，在此过程中，客户端可能在尚未收到全部数据包时就调用 read 函数
        - 以上的问题都是源自 TCP 的传输特性

## 第 5 章 基于 TCP 的服务端/客户端（2）

### 5.1 回声客户端的完美实现

- Q:回声客户端的完美实现
    - 因可提前确定接收数据的大小，使用循环控制即可

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
          int str_len, recv_len, recv_cnt;
          struct sockaddr_in serv_adr;
      
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
      
          if (connect(sock, 
                      (struct sockaddr *)&serv_adr, 
                      sizeof(serv_adr)) == -1) {
              error_handling("connect() error!");
          } else {
              puts("Connceted........");
          }
      
          while (1) {
              fputs("Input message(Q to quit): ", stdout);
              fgets(message, BUF_SIZE, stdin);
      
              if (!strcmp(message, "q\n") 
                  || !strcmp(message, "Q\n")) {
                  break;
              }
      
              str_len = write(sock, message, strlen(message));
              recv_len = 0;
              while (recv_len < str_len) {
                  recv_cnt = read(sock, message, BUF_SIZE-1);
                  if (recv_cnt == -1) {
                      error_handling("read() error!");
                  }
                  recv_len += recv_cnt;
              }
              message[str_len] = '\0';
              printf("Message from server: %s", message);
          }
          close(sock);
      
          return 0;
      }
      ```


- Q:计算器服务端客户端实现
    - ![](https://img.shiqi-lu.tech/20210811145456.png)
    - 客户端 op_client.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define BUF_SIZE 1024
          #define RLT_SIZE 4
          #define OPSZ 4
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int main(int argc, char * argv[])
          {
              int sock;
              char opmsg[BUF_SIZE];
              int result, opnd_cnt, i;
              struct sockaddr_in serv_adr;
          
              if (argc != 3) {
                  printf("Usage: %s <IP> <port>\n", argv[0]);
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
          
              if (connect(sock,
                          (struct sockaddr *)&serv_adr,
                          sizeof(serv_adr)) == -1) {
                  error_handling("connect() error!");
              } else {
                  puts("Connected....");
              }
          
              fputs("Operand count: ", stdout);
              scanf("%d", &opnd_cnt);
              opmsg[0] = (char)opnd_cnt;
          
              for (i = 0; i < opnd_cnt; ++i) {
                  printf("Operand %d: ", i+1);
                  scanf("%d", (int*)&opmsg[i*OPSZ+1]);
              }
              fgetc(stdin);
              fputs("Operator:", stdout);
              scanf("%c", &opmsg[opnd_cnt*OPSZ+1]);
              write(sock, opmsg, opnd_cnt*OPSZ+2);
              read(sock, &result, RLT_SIZE);
          
              printf("Operation result: %d\n", result);
              close(sock);
          
              return 0;
          }
          ```

    - 服务端 op_server.c

        - ```c
          #include <stdio.h>
          #include <stdlib.h>
          #include <string.h>
          #include <unistd.h>
          #include <arpa/inet.h>
          #include <sys/socket.h>
          
          #define BUF_SIZE 1024
          #define OPSZ 4
          
          void error_handling(char *message)
          {
              fputs(message, stderr);
              fputc('\n', stderr);
              exit(1);
          }
          
          int calculate(int opnum, int opnds[], char op)
          {
              int result = opnds[0], i;
              switch (op) {
                  case '+':
                      for (i = 1; i < opnum; ++i) {
                          result += opnds[i];
                      }
                      break;
                  case '-':
                      for (i = 1; i < opnum; ++i) {
                          result -= opnds[i];
                      }
                      break;
                  case '*':
                      for (i = 1; i < opnum; ++i) {
                          result *= opnds[i];
                      }
                      break;
              }
              return result;
          }
          
          int main(int argc, char * argv[])
          {
              int serv_sock, clnt_sock;
              char opinfo[BUF_SIZE];
              int result, opnd_cnt, i;
              int recv_cnt, recv_len;
              struct sockaddr_in serv_adr, clnt_adr;
              socklen_t clnt_adr_sz;
          
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
          
              if (bind(serv_sock,
                       (struct sockaddr*)&serv_adr,
                       sizeof(serv_adr)) == -1) {
                  error_handling("bind() error");
              }
          
              if (listen(serv_sock, 5) == -1) {
                  error_handling("listen() error");
              }
              clnt_adr_sz = sizeof(clnt_adr);
            
              for (i = 0; i < 5; ++i) {
                  opnd_cnt = 0;
                  clnt_sock = accept(serv_sock, (struct sockaddr *)&clnt_adr, & clnt_adr_sz);
                  read(clnt_sock, &opnd_cnt, 1);
          
                  recv_len = 0;
                  while ((opnd_cnt*OPSZ+1) > recv_len) {
                      recv_cnt = read(clnt_sock, &opinfo[recv_len], BUF_SIZE-1);
                      recv_len += recv_cnt;
                  }
                  result = calculate(opnd_cnt, (int *)opinfo, opinfo[recv_len-1]);
                  write(clnt_sock, (char *)&result, sizeof(result));
                  close(clnt_sock);
              }
              close(serv_sock);
          
              return 0;
          }
          ```

    - 编译运行

        - ```shell
          47@pc:~/network/ch05$ gcc op_server.c -o serv
          47@pc:~/network/ch05$ ./serv 9190
          
          47@pc:~/network/ch05$ gcc op_client.c -o clnt
          47@pc:~/network/ch05$ ./clnt 127.0.0.1 9190
          Connected....
          Operand count: 3
          Operand 1: 8
          Operand 2: 9
          Operand 3: 10
          Operator:*
          Operation result: 720
          ```


### 5.2 TCP 原理
