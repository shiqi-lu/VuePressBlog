---
title: 《TCP/IP网络编程》第6-8章学习笔记
date: 2021-06-30 15:21:55
updated: 2021-06-30 15:21:55
tags:
- 网络
categories:
- 网络
description: ch6.基于 UDP 的服务端/客户端，ch7.优雅的断开套接字的连接，ch8.域名及网络地址
toc:
  enable: true
  number: false
---

注：博主只关注编程实现的方面以及linux部分，部分网络原理讲解和windows实现部分跳过


## 第 6 章 基于 UDP 的服务端/客户端

### 6.1 理解 UDP

- Q:UDP原理和使用
    - UDP比TCP简单，编程难度较小，性能比TCP高。TCP相对UDP的主要区别是流控制
    - ![](https://img.shiqi-lu.tech/20210213210402.png)
    - IP 的作用就是让离开主机 B 的 UDP 数据包准确传递到主机 A 。但是把 UDP 数据包最终交给主机 A 的某一 UDP 套接字的过程是由 UDP 完成的。UDP 的最重要的作用就是根据端口号将传到主机的数据包交付给最终的 UDP 套接字
    - UDP 也具有一定的可靠性。在网络实时传递的视频或者音频的场景下，丢失一部分多媒体数据也没有太大问题，这只是会暂时引起画面抖动，或者出现细微的杂音。但是要提供实时服务，速度就成为了一个很重要的因素。此时TCP流控制就显得有一点多余，这时就要考虑使用 UDP 
    - TCP 比 UDP 慢的原因主要有以下两点：
        - 收发数据前后进行的连接设置及清除过程
        - 收发过程中为保证可靠性而添加的流控制
    - 如果收发的数据量小但是需要频繁连接时，UDP 比 TCP 更高效

### 6.2 实现基于 UDP 的服务端/客户端

- Q:基于 UDP 的服务端/客户端的特点
    - UDP 的服务端和客户端无需经过连接过程，只有创建套接字和数据交换的过程
    - UDP 的服务端和客户端均只需1个套接字

- Q:基于 UDP 的数据 I/O 函数
    - UDP 套接字不会保持连接状态，因此每次传输数据时都需要添加目标的地址信息

    - ```c
      # include <sys/socket.h>
      ssize_t sendto(int sock, 
                     void * buff,
                     size_t nbytes, 
                     int flags, 
                     struct sockaddr * to,
                     socklen_t addrlen);
      // sock：用于传输数据的UDP套接字文件描述符
      // buff：保存待传输数据的缓冲地址值
      // nbytes：待传输的数据长度，以字节为单位
      // flags：可选参数，若没有则传递0
      // to：存有目标地址信息的sockaddr结构体变量的地址值
      // addrlen：传递给参数to的地址值结构体变量长度
      // 成功时返回传输的字节数，失败时返回 -1
      ```

    - UDP 数据的发送端并不固定，因此该函数定义为可接收发送端信息的形式，也就是将同时返回 UDP 数据包中的发送端信息

    - ```c
      # include <sys/socket.h>
      ssize_t recvfrom(int sock, 
                       void * buff,
                       size_t nbytes, 
                       int flags,
                       struct sockaddr * from,
                       socklen_t * addrlen);
      // sock：用于传输数据的UDP套接字文件描述符
      // buff：保存接收数据的缓冲地址值
      // nbytes：可接收的最大字节数，故无法超过参数buff所指的缓冲大小
      // flags：可选项参数，若没有则传递0
      // from：存有发送端地址信息的sockaddr结构体变量的地址值
      // addrlen：保存参数from的结构体变量长度的变量地址值
      // 成功时返回接收的字节数，失败时返回 -1
      ```


- Q:基于 UDP 的服务端/客户端的程序实现
    - 服务端uecho_server.c

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
              int serv_sock;
              char message[BUF_SIZE];
              int str_len;
              socklen_t clnt_adr_sz;
              struct sockaddr_in serv_adr, clnt_adr;
          
              if (argc != 2) {
                  printf("Usage : %s <port>\n", argv[0]);
                  exit(1);
              }
          
              // 创建 UDP 套接字后，向 socket 的第二个参数传递 SOCK_DGRAM
              serv_sock = socket(PF_INET, SOCK_DGRAM, 0);
              if (serv_sock == -1) {
                  error_handling("UDP socket creation error");
              }
          
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              serv_adr.sin_port = htons(atoi(argv[1]));
          
              // 分配地址接受数据，不限制数据传输对象
              if (bind(serv_sock, 
                       (struct sockaddr *)&serv_adr, 
                       sizeof(serv_adr)) == -1) {
                  error_handling("bind() error");
              }
          
              while (1) {
                  clnt_adr_sz = sizeof(clnt_adr);
                  str_len = recvfrom(serv_sock, message, 
                                     BUF_SIZE, 0,
                                     (struct sockaddr *)&clnt_adr, 
                                     &clnt_adr_sz);
                  // 通过上面的函数调用同时获取数据传输端的地址。
                  // 正是利用该地址进行逆向重传
                  sendto(serv_sock, message, str_len, 0,
                         (struct sockaddr *)&clnt_adr, clnt_adr_sz);
          
              }
              // 上面未加入break语句，因此无限循环，下面不会执行
              close(serv_sock);
          
              return 0;
          }
          ```

    - 客户端uecho_client.c

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
              int sock;
              char message[BUF_SIZE];
              int str_len;
              socklen_t adr_sz;
          
              struct sockaddr_in serv_adr, from_adr;
              if (argc != 3) {
                  printf("Usage : %s <IP> <port>\n", argv[0]);
                  exit(1);
              }
          
              sock = socket(PF_INET, SOCK_DGRAM, 0);
              if (sock == -1) {
                  error_handling("socket() error");
              }
          
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = inet_addr(argv[1]);
              serv_adr.sin_port = htons(atoi(argv[2]));
          
              while (1) {
                  fputs("Insert message(q to quit): ", stdout);
                  fgets(message, sizeof(message), stdin);
                  if (!strcmp(message, "q\n") || !strcmp(message, "Q\n")) {
                      break;
                  }
                  sendto(sock, message, strlen(message), 0,
                         (struct sockaddr *)&serv_adr, sizeof(serv_adr));
                  adr_sz = sizeof(from_adr);
                  str_len = recvfrom(sock, message, BUF_SIZE, 0,
                                     (struct sockaddr *)&from_adr, &adr_sz);
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
              shiqi@inspiron:~/network$ gcc uecho_server.c -o userver
              shiqi@inspiron:~/network$ ./userver 9190
              ```

        - 客户端

            - ```shell
              shiqi@inspiron:~/network$ gcc uecho_client.c -o uclient
              shiqi@inspiron:~/network$ ./uclient 127.0.0.1 9190
              Insert message(q to quit): xp
              Message from server: xp
              Insert message(q to quit): q
              ```


- Q:UDP 客户端套接字的地址分配
    - 在首次调用sendto函数时，发现尚未分配地址信息，则给相应套接字自动分配 IP 和端口，此时分配的地址一直保留到程序结束为止

### 6.3 UDP 的数据传输特性和调用 connect 函数

- Q:存在数据边界的UDP套接字程序示例
    - bound_host1.c

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
              int sock;
              char message[BUF_SIZE];
              struct sockaddr_in my_adr, your_adr;
              socklen_t adr_sz;
              int str_len, i;
          
              if (argc != 2) {
                  printf("Usage : %s <port>\n", argv[0]);
                  exit(1);
              }
          
              sock = socket(PF_INET, SOCK_DGRAM, 0);
              if (sock == -1) {
                  error_handling("socket() error");
              }
          
              memset(&my_adr, 0, sizeof(my_adr));
              my_adr.sin_family = AF_INET;
              my_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              my_adr.sin_port = htons(atoi(argv[1]));
          
              if (bind(sock, 
                       (struct sockaddr *)&my_adr, 
                       sizeof(my_adr)) == -1) {
                  error_handling("bind() error");
              }
          
              for (i = 0; i < 3; ++i) {
                  sleep(5);
                  adr_sz = sizeof(your_adr);
                  str_len = recvfrom(sock, message, BUF_SIZE, 0,
                                     (struct sockaddr *)&your_adr, 
                                     &adr_sz);
          
                  printf("Message %d: %s \n", i + 1, message);
              }
          
              return 0;
          }
          ```

    - bound_host2.c

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
              int sock;
              char msg1[] = "Hi!";
              char msg2[] = "I'm another UDP host!";
              char msg3[] = "Nice to meet you";
          
              struct sockaddr_in your_adr;
              socklen_t your_adr_sz;
              if (argc != 3) {
                  printf("Usage : %s <IP> <port>\n", argv[0]);
                  exit(1);
              }
          
              sock = socket(PF_INET, SOCK_DGRAM, 0);
              if (sock == -1) {
                  error_handling("socket() error");
              }
          
              memset(&your_adr, 0, sizeof(your_adr));
              your_adr.sin_family = AF_INET;
              your_adr.sin_addr.s_addr = inet_addr(argv[1]);
              your_adr.sin_port = htons(atoi(argv[2]));
          
              sendto(sock, msg1, sizeof(msg1), 0,
                     (struct sockaddr *)&your_adr, 
                     sizeof(your_adr));
              sendto(sock, msg2, sizeof(msg2), 0,
                     (struct sockaddr *)&your_adr, 
                     sizeof(your_adr));
              sendto(sock, msg2, sizeof(msg2), 0,
                     (struct sockaddr *)&your_adr, 
                     sizeof(your_adr));
          
              close(sock);
              return 0;
          }
          ```

    - 编译运行
        - bound_host1

        - ```shell
          shiqi@inspiron:~/network$ gcc bound_host1.c -o host1
          shiqi@inspiron:~/network$ ./host1 9190
          Message 1: Hi!
          Message 2: I'm another UDP host!
          Message 3: I'm another UDP host!
          ```

        - bound_host2

        - ```shell
          shiqi@inspiron:~/network$ gcc bound_host2.c -o host2
          shiqi@inspiron:~/network$ ./host2 127.0.0.1 9190
          ```


- Q:sendto 函数传输数据的过程的 3 个阶段
    - 向 UDP 套接字注册目标 IP 和端口号
    - 传输数据
    - 删除 UDP 套接字中注册的目标地址信息

- Q:未连接UDP套接字和已连接UDP套接字
    - 未连接UDP套接字：未注册目标地址信息的套接字，每次都变更目标地址，可重复利用同一 UDP 套接字向不同目标传递数据
    - 已连接UDP套接字：注册了目标地址的套接字，要与同一主机长时间通信时，将UDP套接字变成已连接套接字会提高效率

- Q:针对UDP套接字调用connect函数创建已连接UDP套接字

    - ```c
      sock = socket(PF_INET, SOCK_DGRAM, 0);
      memset(&adr, 0, sizeof(adr));
      adr.sin_family = AF_INET;
      adr.sin_addr.s_addr = ...
      adr.sin_port = ...
      connect(sock, (struct sockaddr *)&adr, sizeof(adr));
      ```

    - 因已经指定了收发对象，所以不仅可以使用 sendto、recvfrom 函数，还可以使用 write、read 函数进行通信

- Q:已连接UDP套接字程序示例
    - 服务端同uecho_server.c
    - 客户端uecho_con_client.c

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
              int sock;
              char message[BUF_SIZE];
              int str_len;
          
              struct sockaddr_in serv_adr;
              if (argc != 3) {
                  printf("Usage : %s <IP> <port>\n", argv[0]);
                  exit(1);
              }
          
              sock = socket(PF_INET, SOCK_DGRAM, 0);
              if (sock == -1) {
                  error_handling("socket() error");
              }
          
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = inet_addr(argv[1]);
              serv_adr.sin_port = htons(atoi(argv[2]));
          
              connect(sock, 
                      (struct sockaddr *)&serv_adr, 
                      sizeof(serv_adr));
          
              while (1) {
                  fputs("Insert message(q to quit): ", stdout);
                  fgets(message, sizeof(message), stdin);
                  if (!strcmp(message, "q\n") 
                      || !strcmp(message, "Q\n")) {
                      break;
                  }
                  write(sock, message, strlen(message));
                  str_len = read(sock, 
                                 message, 
                                 sizeof(message) - 1);
                  message[str_len] = '\0';
                  printf("Message from server: %s", message);
              }
              close(sock);
          
              return 0;
          }
          ```

    - 编译运行同echo的udp服务器

## 第 7 章 优雅的断开套接字的连接

### 7.1 基于 TCP 的半关闭

- Q:单方面断开连接带来的问题
    - Linux 的 close 函数意味着完全断开连接。即不仅无法传输数据，而且也不能接收数据。因此在某些情况下，通信一方单方面的断开套接字连接，显得不太优雅
    - 断开一部分连接，即可以传输数据但是无法接收，或可以接受数据但无法传输。即关闭流的一半

- Q:针对优雅断开的 shutdown 函数原型

    - ```c
      #include <sys/socket.h>
      int shutdown(int sock, int howto);
      // sock：需要断开的套接字文件描述符
      // howto：传递断开方式信息
      // 成功时返回 0 ，失败时返回 -1
      ```

    - 第二个参数决定断开连接的方式
        - SHUT_RD：断开输入流
        - SHUT_WR：断开输出流
        - SHUT_RDWR：同时断开I/O流

- Q:基于半关闭的文件传输程序
    - 服务端file_server.c

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
              int serv_sd, clnt_sd;
              FILE * fp;
              char buf[BUF_SIZE];
              int read_cnt;
          
              struct sockaddr_in serv_adr, clnt_adr;
              socklen_t clnt_adr_sz;
          
              if (argc != 2) {
                  printf("Usage : %s <port>\n", argv[0]);
                  exit(1);
              }
              fp = fopen("file_server.c", "rb");
              serv_sd = socket(PF_INET, SOCK_STREAM, 0);
          
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = htonl(INADDR_ANY);
              serv_adr.sin_port = htons(atoi(argv[1]));
          
              bind(serv_sd, 
                   (struct sockaddr *)&serv_adr, 
                   sizeof(serv_adr));
              listen(serv_sd, 5);
          
              clnt_adr_sz = sizeof(clnt_adr);
              clnt_sd = accept(serv_sd, 
                               (struct sockaddr *)&clnt_adr, 
                               &clnt_adr_sz);
          
              while (1) {
                  read_cnt = fread((void *)buf, 1, BUF_SIZE, fp);
                  if (read_cnt < BUF_SIZE) {
                      write(clnt_sd, buf, read_cnt);
                      break;
                  }
                  write(clnt_sd, buf, BUF_SIZE);
              }
            
              shutdown(clnt_sd, SHUT_WR);
              read(clnt_sd, buf, BUF_SIZE);
              printf("Message from client: %s \n", buf);
          
              fclose(fp);
              close(clnt_sd);
              close(serv_sd);
          
              return 0;
          }
          ```

    - 客户端file_client.c

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
              int sd;
              FILE *fp;
          
              char buf[BUF_SIZE];
              int read_cnt;
              struct sockaddr_in serv_adr;
          
              if (argc != 3)
              {
                  printf("Usage : %s <IP> <port>\n", argv[0]);
                  exit(1);
              }
          
              fp = fopen("receive.dat", "wb");
              sd = socket(PF_INET, SOCK_STREAM, 0);
          
              memset(&serv_adr, 0, sizeof(serv_adr));
              serv_adr.sin_family = AF_INET;
              serv_adr.sin_addr.s_addr = inet_addr(argv[1]);
              serv_adr.sin_port = htons(atoi(argv[2]));
          
              connect(sd, 
                      (struct sockaddr *)&serv_adr, 
                      sizeof(serv_adr));
          
              while ((read_cnt = read(sd, buf, BUF_SIZE)) != 0) {
                  fwrite((void *)buf, 1, read_cnt, fp);
              }
          
              puts("Received file data");
              write(sd, "Thank you", 10);
              fclose(fp);
              close(sd);
          
              return 0;
          }
          ```

    - 编译运行
        - 服务端

        - ```shell
          shiqi@inspiron:~/network$ gcc file_server.c -o fserver
          shiqi@inspiron:~/network$ ./fserver 9190
          Message from client: Thank you
          ```

        - 客户端

        - ```shell
          shiqi@inspiron:~/network$ gcc file_client.c -o fclient
          shiqi@inspiron:~/network$ ./fclient 127.0.0.1 9190
          Received file data
          ```


## 第 8 章 域名及网络地址

### 8.1 域名系统

### 8.2 IP地址和域名之间的转换

- Q:利用域名获取IP地址的函数gethostbyname

    - ```c
      #include <netdb.h>
      struct hostent * gethostbyname(const char * hostname);
      // 成功时返回 hostent 结构体地址，失败时返回 NULL 指针
      ```

    - 只要传递字符串，就可以返回域名对应的IP地址。返回时地址信息装入 hostent 结构体

    - ```c
      struct hostent {
          char * h_name;       // official name
          char ** h_aliases;   // alias list
          int h_addrtype;      // host address type
          int h_length;        // address length
          char ** h_addr_list; // address list
      }
      ```

    - h_name：该变量中存有官方域名（Official domain name）。即代表某一主页，但实际上，一些著名公司的域名并没有用官方域名注册
    - h_aliases：可通过多个域名访问同一主页。同一IP可以绑定多个域名，因此，除官方域名外还可以指定其他域名。这些信息可以通过 h_aliases 获得
    - h_addrtype：gethostbyname 函数不仅支持 IPV4 还支持 IPV6 。因此可以通过此变量获取保存在 h_addr_list 的IP地址族信息。若是 IPV4 ，则此变量中存有 AF_INET
    - h_length：保存IP地址长度。若是 IPV4 地址，因为是 4 个字节，则保存4；IPV6 时，因为是 16 个字节，故保存 16
    - h_addr_list：通过此变量以整数形式保存域名对应的IP地址。另外，用户较多的网站有可能分配多个IP给同一域名，利用多个服务器进行负载均衡。此时同样可通过此变量获取IP地址信息，注意，字符串指针数组中的元素实际指向的是 in_addr 结构体变量地址值而非字符串，所以需要进行类型转换，并调用 inet_ntoa 函数
    - 调用 gethostbyname 函数后，返回的结构体变量如图所示
    - ![](https://img.shiqi-lu.tech/20210217153812.png)

- Q:gethostbyname函数示例gethostbyname.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <unistd.h>
      #include <arpa/inet.h>
      #include <netdb.h>
      
      void error_handling(char *message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      int main(int argc, char *argv[])
      {
          int i;
          struct hostent * host;
          if (argc != 2) {
              printf("Usage : %s <addr>\n", argv[0]);
              exit(1);
          }
      
          host = gethostbyname(argv[1]);
          if (!host) {
              error_handling("gethost... error");
          }
      
          // 输出官方域名
          printf("Official name: %s \n", host->h_name);
      
          // 输出除官方域名以外的域名
          for (i = 0; host->h_aliases[i]; ++i) {
              printf("Aliases %d: %s \n", i+1, host->h_aliases[i]);
          }
      
          // 看看是不是ipv4
          printf("Address type: %s \n",
                 (host->h_addrtype == AF_INET)? "AF_INET": "AF_INET6");
      
          // 输出ip地址信息
          for (i = 0; host->h_addr_list[i]; ++i) {
              printf("IP addr %d: %s \n", i+1,
                     inet_ntoa(*(struct in_addr *)host->h_addr_list[i]));
          }
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@inspiron:~/network$ gcc gethostbyname.c -o hostname
      shiqi@inspiron:~/network$ ./hostname www.naver.com
      Official name: www.naver.com.gccdn.net
      Aliases 1: www.naver.com
      Aliases 2: www.naver.com.nheos.com
      Address type: AF_INET
      IP addr 1: 43.243.234.60
      shiqi@inspiron:~/network$ ./hostname www.baidu.com
      Official name: www.a.shifen.com
      Aliases 1: www.baidu.com
      Address type: AF_INET
      IP addr 1: 220.181.38.149
      IP addr 2: 220.181.38.150
      ```


- Q:利用IP地址获取域名gethostbyaddr函数

    - ```c
      #include <netdb.h>
      struct hostent * gethostbyaddr(const char * addr, 
                                     socklen_t len,
                                     int family);
      // addr: 含有IP地址信息的 in_addr 结构体指针。
      //       为了同时传递IPv4地址之外的其它信息，
      //       该变量的类型声明为char指针
      // len: 向第一个参数传递的地址信息的字节数，IPV4 时为 4，IPV6 时为 16
      // family: 传递地址族信息，ipv4 是 AF_INET ，IPV6是 AF_INET6
      // 成功时返回 hostent 结构体变量地址值，失败时返回 NULL 指针
      ```


- Q:gethostbyaddr函数示例gethostbyaddr.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <string.h>
      #include <unistd.h>
      #include <arpa/inet.h>
      #include <netdb.h>
      
      void error_handling(char *message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      int main(int argc, char *argv[])
      {
          int i;
          struct hostent *host;
          struct sockaddr_in addr;
          if (argc != 2) {
              printf("Usage : %s <IP>\n", argv[0]);
              exit(1);
          }
      
          memset(&addr, 0, sizeof(addr));
          addr.sin_addr.s_addr = inet_addr(argv[1]);
          host = gethostbyaddr((char *)&addr.sin_addr, 4, AF_INET);
          if (!host) {
              error_handling("gethost... error");
          }
      
          // 输出官方域名
          printf("Official name: %s \n", host->h_name);
      
          // 输出除官方域名以外的域名
          for (i = 0; host->h_aliases[i]; ++i) {
              printf("Aliases %d: %s \n", i+1, host->h_aliases[i]);
          }
      
          // 看看是不是ipv4
          printf("Address type: %s \n",
                 (host->h_addrtype == AF_INET)? "AF_INET": "AF_INET6");
      
          // 输出ip地址信息
          for (i = 0; host->h_addr_list[i]; ++i) {
              printf("IP addr %d: %s \n", i+1,
                     inet_ntoa(*(struct in_addr *)host->h_addr_list[i]));
          }
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@inspiron:~/network$ gcc gethostbyaddr.c -o hostaddr
      shiqi@inspiron:~/network$ ./hostaddr 8.8.8.8
      Official name: dns.google
      Address type: AF_INET
      IP addr 1: 8.8.8.8
      shiqi@inspiron:~/network$ ./hostaddr 114.114.114.114
      Official name: public1.114dns.com
      Address type: AF_INET
      IP addr 1: 114.114.114.114
      ```

