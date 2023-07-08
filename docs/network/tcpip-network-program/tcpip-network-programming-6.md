---
title: 《TCP/IP网络编程》第18、24章学习笔记
date: 2021-07-26 18:43:00
updated: 2021-07-26 18:43:00
tags:
- 网络
categories:
- 网络
description: ch18.多线程服务器端的实现，ch24.制作HTTP服务器端
toc:
  enable: true
  number: false
---

注：博主只关注编程实现的方面以及linux部分，部分网络原理讲解和windows实现部分跳过


## 第 18 章  多线程服务器端的实现

### 18.1  理解线程的概念

### 18.2  线程创建及运行

- c18p287:线程创建的 pthread_create 函数

    - ```c
      #include <pthread.h>
      int pthread_create(pthread_t * restrict thread,
                         const pthread_attr_t * restrict attr,
                         void *(* start_routine)(void *),
                         void * restrict arg);
      // thread：保存新创建线程 ID 的变量地址值。
      // attr：用于传递线程属性的参数，传递 NULL 时，创建默认属性的线程
      // start_routine：相当于线程 main 函数的、
      //                在单独执行流中执行的函数指针
      // arg：通过第三个参数传递调用函数时包含传递参数信息的变量地址值
      // 成功返回 0，失败返回其他值
      ```


- c18p187:线程创建的 pthread_create 函数的程序示例 thread1.c

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      #include <pthread.h>
      
      // 这里的 arg 参数是 pthread_create 的第 4 个参数
      void * thread_main(void * arg)
      {
          int i;
          int cnt = *((int *)arg);
          for (i = 0; i < cnt; ++i) {
              sleep(1);
              puts("running thread");
          }
          return NULL;
      }
      
      int main(int argc, char * argv[])
      {
          pthread_t t_id;
          int thread_param = 5;
      
          if (pthread_create(&t_id,
                             NULL,
                             thread_main,
                             (void *)&thread_param) != 0) {
              puts("thread_create() error");
              return -1;
          }
          // 为了延迟进程的终止时间
          sleep(10);
          puts("end of main");
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch18$ gcc thread1.c -o tr1 -lpthread
      shiqi@pc:~/network/ch18$ ./tr1
      running thread
      running thread
      running thread
      running thread
      running thread
      end of main
      ```


- c18p290:让调用线程的进程(或线程)等待的 pthread_join 函数

    - ```c
      #include <pthread.h>
      int pthread_join(pthread_t thread, void ** status);
      // thread：该参数值 ID 的线程终止后才会从该函数返回
      // status：保存线程的 main 函数返回值的指针变量地址值
      // 成功返回 0，失败返回其他值
      ```

    - 调用该函数的进程(或线程)将进入等待状态，直到第一个参数为 ID 的线程终止为止，并且可以得到线程的 main 函数返回值

- c18p290:线程创建的 pthread_create + pthread_join 函数的程序示例 thread2.c

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      #include <stdlib.h>
      #include <string.h>
      #include <pthread.h>
      
      void * thread_main(void * arg)
      {
          int i;
          int cnt = *((int *)arg);
          char * msg = (char *)malloc(sizeof(char)*50);
          strcpy(msg, "hello, I'm thread ~\n");
      
          for (i = 0; i < cnt; ++i) {
              sleep(1);
              puts("running thread");
          }
          return (void *)msg;
      }
      
      int main(int argc, char * argv[])
      {
          pthread_t t_id;
          int thread_param = 5;
          void * thr_ret;
      
          if (pthread_create(&t_id,
                             NULL,
                             thread_main,
                             (void *)&thread_param) != 0) {
              puts("pthread_create() error");
              return -1;
          }
      
          // 注意此处获取返回值的方法
          // 注意返回值是 thread_main 函数内部动态分配的内存空间地址值
          if (pthread_join(t_id, &thr_ret) != 0) {
              puts("pthread_join() error");
              return -1;
          }
      
          printf("Thread return message: %s\n", (char *)thr_ret);
          free(thr_ret);
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch18$ gcc thread2.c -o tr2 -lpthread
      shiqi@pc:~/network/ch18$ ./tr2
      running thread
      running thread
      running thread
      running thread
      running thread
      Thread return message: hello, I'm thread ~
      ```


- c18p292:如何通过加宏定义把平台定义的非线程安全函数改为线程安全函数？
    - 头文件`#define _REENTRANT` 或 `gcc -D_REENTRANT`

- c18p293:工作线程模型示例程序 thread3.c

    - ```c
      #include <stdio.h>
      #include <pthread.h>
      
      int sum = 0;
      
      void * thread_summation(void * arg)
      {
          int start = ((int *)arg)[0];
          int end = ((int *)arg)[1];
      
          while (start <= end) {
              sum += start;
              ++start;
          }
      }
      
      int main(int argc, char * argv[])
      {
      
          pthread_t id_t1, id_t2;
          int range1[] = {1, 5};
          int range2[] = {6, 10};
      
          pthread_create(&id_t1, NULL, thread_summation, (void *)range1);
          pthread_create(&id_t2, NULL, thread_summation, (void *)range2);
      
          pthread_join(id_t1, NULL);
          pthread_join(id_t2, NULL);
      
          printf("result: %d\n", sum);
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch18$ gcc thread3.c -D_REENTRANT -lpthread -o tr3
      shiqi@pc:~/network/ch18$ ./tr3
      result: 55
      ```


- c18p293:工作线程模型示例程序 thread4.c，验证临界区错误

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      #include <stdlib.h>
      #include <pthread.h>
      
      #define NUM_THREAD 100
      
      long long num = 0;
      
      void * thread_inc(void * arg)
      {
          int i;
          for (i = 0; i < 50000000; ++i) {
              ++num;
          }
          return NULL;
      }
      
      void * thread_des(void * arg)
      {
      
          int i;
          for (i = 0; i < 50000000; ++i) {
              --num;
          }
          return NULL;
      }
      
      int main(int argc, char * argv[])
      {
          pthread_t thread_id[NUM_THREAD];
          int i;
      
          printf("sizeof long long: %ld\n", sizeof(long long));
          for (i = 0; i < NUM_THREAD; ++i) {
              if (i % 2) {
                  pthread_create(&(thread_id[i]), NULL, thread_inc, NULL);
              } else {
                  pthread_create(&(thread_id[i]), NULL, thread_des, NULL);
              }
          }
      
          for (i = 0; i < NUM_THREAD; ++i) {
              pthread_join(thread_id[i], NULL);
          }
          printf("result: %lld\n", num);
      
          return 0;
      }
      ```

    - 上述示例中共创建了100个线程，其中一半执行thread_ inc函数中的代码，另一半则执行thread_des函数中的代码。全局变量num经过增减过程后应等于0，通过运行结果观察是否真能得到
    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch18$ gcc thread4.c -D_REENTRANT -lpthread -o tr4
      shiqi@pc:~/network/ch18$ ./tr4
      sizeof long long: 8
      result: 11790109
      shiqi@pc:~/network/ch18$ ./tr4
      sizeof long long: 8
      result: 804248
      ```


### 18.3  线程存在的问题和临界区

### 18.4  线程同步

- c18p300:互斥量的创建和销毁函数原型 pthread_mutex_init 和 pthread_mutex_destroy

    - ```c
      #include <pthread.h>
      int pthread_mutex_init(pthread_mutex_t * mutex,
                             const pthread_mutexattr_t * attr);
      int pthread_mutex_destroy(pthread_mutex_t * mutex);
      // mutex：创建/销毁互斥量时传递互斥量的变量地址值
      // attr：传递即将创建的互斥量属性，没有特别需要指定的属性时传递 NULL
      // 成功时返回 0，失败时返回其他值
      ```

    - 使用前先声明：`pthread_mutex_t mutex;`
    - 如果不需要配置特殊的互斥量属性，则向第二个参数传递 NULL 时，可利用 PTHREAD_MUTEX_INITIALIZER 宏声明：
    - `pthread_mutex_t mutex mutex = PTHREAD_MUTEX_INITIALIZER;`

- c18p301:互斥量的锁住和释放函数原型 pthread_mutex_lock 和  pthread_mutex_unlock

    - ```c
      #include <pthread.h>
      int pthread_mutex_lock(pthread_mutex_t *mutex);
      int pthread_mutex_unlock(pthread_mutex_t *mutex);
      // 成功时返回 0，失败时返回其他值
      ```


- c18p302:互斥量使用的示例程序 mutex.c

    - ```c
      #include <stdio.h>
      #include <unistd.h>
      #include <stdlib.h>
      #include <pthread.h>
      
      #define NUM_THREAD 100
      
      long long num = 0;
      pthread_mutex_t mutex;
      
      void * thread_inc(void * arg)
      {
          int i;
          pthread_mutex_lock(&mutex);
          for (i = 0; i < 50000000; ++i) {
              ++num;
          }
          pthread_mutex_unlock(&mutex);
          return NULL;
      }
      
      void * thread_des(void * arg)
      {
          int i;
          pthread_mutex_lock(&mutex);
          for (i = 0; i < 50000000; ++i) {
              --num;
          }
          pthread_mutex_unlock(&mutex);
          return NULL;
      }
      
      int main(int argc, char * argv[])
      {
          pthread_t thread_id[NUM_THREAD];
          int i;
      
          pthread_mutex_init(&mutex, NULL);
      
          for (i = 0; i < NUM_THREAD; ++i) {
              if (i % 2) {
                  pthread_create(&(thread_id[i]), NULL, thread_inc, NULL);
              } else {
                  pthread_create(&(thread_id[i]), NULL, thread_des, NULL);
              }
          }
      
          for (i = 0; i < NUM_THREAD; ++i) {
              pthread_join(thread_id[i], NULL);
          }
          printf("result: %lld\n", num);
          pthread_mutex_destroy(&mutex);
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch18$ gcc mutex.c -D_REENTRANT -lpthread -o mutex
      shiqi@pc:~/network/ch18$ ./mutex
      result: 0
      ```


- c18p304:信号量的创建和销毁函数原型 sem_init 和 sem_destroy

    - ```c
      #include <semaphore.h>
      int sem_init(sem_t * sem, int pshared, 
                   unsigned int value);
      int sem_destroy(sem_t * sem);
      // sem: 创建信号量时传递保存信号量的变量地址值，
      //      销毁时传递需要销毁的信号量的变量地址值
      // pshared: 传递其它值时，创建可由多个进程共享的信号量
      //          传递 0 时，创建只允许 1 个进程内部使用的信号量
      // value: 指定新创建的信号量初始值
      // 成功时返回 0，失败时返回其他值
      ```


- c18p304:信号量使用的函数原型 sem_post 和 sem_wait

    - ```c
      #include <semaphore.h>
      int sem_post(sem_t * sem);
      int sem_wait(sem_t * sem);
      // sem: 传递保存信号量读取值的变量地址值，
      //      传递给 sem_post 时信号量增 1，
      //      传递给 sem_wait 时信号量减 1
      // 成功时返回 0，失败时返回其他值
      ```

    - 信号量的值不能小于 0，因此在信号量为 0 的情况下调用 sem_wait 函数时，调用函数的线程将进入阻塞状态。只有当有其它线程调用 sem_post 函数将信号量变为 1 时，原本阻塞的线程可以将该信号量重新减为 0 并跳出阻塞状态

- c18p305:信号量使用示例 semaphore.c

    - ```c
      #include <stdio.h>
      #include <pthread.h>
      #include <semaphore.h>
      
      static sem_t sem_one;
      static sem_t sem_two;
      static int num;
      
      void * read(void * arg)
      {
          int i;
          for (i = 0; i < 5; ++i) {
              fputs("Input num: ", stdout);
              sem_wait(&sem_two);
              scanf("%d", &num);
              sem_post(&sem_one);
          }
          return NULL;
      }
      
      void * accu(void * arg)
      {
          int sum = 0;
          int i;
          for (i = 0; i < 5; ++i) {
              sem_wait(&sem_one);
              sum += num;
              sem_post(&sem_two);
          }
          printf("Result: %d \n", sum);
          return NULL;
      }
      
      int main(int argc, char * argv[])
      {
          pthread_t id_t1, id_t2;
          sem_init(&sem_one, 0, 0);
          sem_init(&sem_two, 0, 1);
      
          pthread_create(&id_t1, NULL, read, NULL);
          pthread_create(&id_t2, NULL, accu, NULL);
      
          pthread_join(id_t1, NULL);
          pthread_join(id_t2, NULL);
      
          sem_destroy(&sem_one);
          sem_destroy(&sem_two);
      
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch18$ gcc semaphore.c -D_REENTRANT -lpthread -o sema
      shiqi@pc:~/network/ch18$ ./sema
      Input num: 1
      Input num: 2
      Input num: 3
      Input num: 4
      Input num: 5
      Result: 15
      ```


### 18.5  线程的销毁和多线程并发服务器端的实现

- c18p307:销毁线程的 3 种方法
    - 调用 pthread_join
        - 调用pthread_join函数时，不仅会等待线程终止，还会引导线程销毁。但该函数的问题是，线程终止前，调用该函数的线程将进人阻塞状态
    - 调用 pthread_detach
        - pthread_detach 不会引起线程终止或进入阻塞状态，可以通过该函数引导销毁线程创建的内存空间

- c18p307:pthread_detach 函数原型

    - ```c
      #include <pthread.h>
      int pthread_detach(pthread_t thread);
      // thread: 终止时需要销毁的线程 ID
      // 成功时返回 0，失败时返回其他值
      ```


- c18p307:多线程并发聊天服务器的实现 chat_server.c，chat_clnt.c
    - 服务端 chat_server.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <unistd.h>
      #include <string.h>
      #include <arpa/inet.h>
      #include <sys/socket.h>
      #include <netinet/in.h>
      #include <pthread.h>
      
      #define BUF_SIZE 100
      #define MAX_CLNT 256
      
      int clnt_cnt = 0;
      int clnt_socks[MAX_CLNT];
      pthread_mutex_t mutx;
      
      void error_handling(char *msg)
      {
          fputs(msg, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      void send_msg(char * msg, int len)
      {
          int i;
          pthread_mutex_lock(&mutx);
          for (i = 0; i < clnt_cnt; ++i) {
              write(clnt_socks[i], msg, len);
          }
          pthread_mutex_unlock(&mutx);
      }
      
      void * handle_clnt(void * arg)
      {
          int clnt_sock = *((int *)arg);
          int str_len = 0;
          int i;
          char msg[BUF_SIZE];
      
          while ((str_len = read(clnt_sock, msg, sizeof(msg))) != 0) {
              send_msg(msg, str_len);
          }
          pthread_mutex_lock(&mutx);
          for (i = 0; i < clnt_cnt; ++i) {
              if (clnt_sock == clnt_socks[i]) {
                  while (i < clnt_cnt - 1) {
                      i += 1;
                      clnt_socks[i] = clnt_socks[i+1];
                  }
                  break;
              }
          }
          --clnt_cnt;
          pthread_mutex_unlock(&mutx);
          close(clnt_sock);
          return NULL;
      }
      
      int main(int argc, char * argv[])
      {
          int serv_sock, clnt_sock;
          struct sockaddr_in serv_adr, clnt_adr;
          int clnt_adr_sz;
          pthread_t t_id;
      
          if (argc != 2) {
              printf("Usage: %s <port>\n", argv[0]);
              exit(1);
          }
      
          pthread_mutex_init(&mutx, NULL);
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
              clnt_adr_sz = sizeof(clnt_adr);
              clnt_sock = accept(serv_sock,
                                 (struct sockaddr *)&clnt_adr,
                                 &clnt_adr_sz);
              pthread_mutex_lock(&mutx);
              clnt_socks[clnt_cnt++] = clnt_sock;
              pthread_mutex_unlock(&mutx);
      
              pthread_create(&t_id, NULL, handle_clnt, (void *)&clnt_sock);
              pthread_detach(t_id);
              printf("Connceted client IP: %s\n", inet_ntoa(clnt_adr.sin_addr));
          }
          close(serv_sock);
          return 0;
      }
      ```

    - 客户端 chat_clnt.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <unistd.h>
      #include <string.h>
      #include <arpa/inet.h>
      #include <sys/socket.h>
      #include <pthread.h>
      
      #define BUF_SIZE 100
      #define NAME_SIZE 20
      
      char name[NAME_SIZE] = "[DEFAULT]";
      char msg[BUF_SIZE];
      
      void error_handling(char *msg)
      {
          fputs(msg, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      void * send_msg(void * arg)
      {
          int sock = *((int *)arg);
          char name_msg[NAME_SIZE+BUF_SIZE];
          while (1) {
              fgets(msg, BUF_SIZE, stdin);
              if (!strcmp(msg, "q\n") || !strcmp(msg, "Q\n")) {
                  close(sock);
                  exit(0);
              }
              sprintf(name_msg, "%s %s", name, msg);
              write(sock, name_msg, strlen(name_msg));
          }
          return NULL;
      }
      
      void * recv_msg(void * arg) {
          int sock = *((int *)arg);
          char name_msg[NAME_SIZE+BUF_SIZE];
          int str_len;
          while (1) {
              str_len = read(sock, name_msg, NAME_SIZE+BUF_SIZE-1);
              if (str_len == -1) {
                  return (void *)-1;
              }
              name_msg[str_len] = 0;
              fputs(name_msg, stdout);
          }
          return NULL;
      }
      
      int main(int argc, char * argv[])
      {
          int sock;
          struct sockaddr_in serv_addr;
          pthread_t snd_thread, rcv_thread;
          void * thread_return;
      
          if (argc != 4) {
              printf("Usage: %s <IP> <port> <name>\n", argv[0]);
              exit(1);
          }
      
          sprintf(name, "[%s]", argv[3]);
          sock = socket(PF_INET, SOCK_STREAM, 0);
      
          memset(&serv_addr, 0, sizeof(serv_addr));
          serv_addr.sin_family = AF_INET;
          serv_addr.sin_addr.s_addr = inet_addr(argv[1]);
          serv_addr.sin_port = htons(atoi(argv[2]));
      
          if (connect(sock,
                      (struct sockaddr *)&serv_addr,
                      sizeof(serv_addr)) == -1) {
              error_handling("connect() error");
          }
      
          pthread_create(&snd_thread, NULL, send_msg, (void *)&sock);
          pthread_create(&rcv_thread, NULL, recv_msg, (void *)&sock);
          pthread_join(snd_thread, &thread_return);
          pthread_join(rcv_thread, &thread_return);
      
          close(sock);
          return 0;
      }
      ```

    - 编译运行

    - ```shell
      shiqi@pc:~/network/ch18$ gcc chat_server.c -D_REENTRANT -lpthread -o cserv
      shiqi@pc:~/network/ch18$ gcc chat_clnt.c -D_REENTRANT -lpthread -o cclnt
      shiqi@pc:~/network/ch18$ ./cserv 9190
      Connceted client IP: 127.0.0.1
      Connceted client IP: 127.0.0.1
      Connceted client IP: 127.0.0.1
      
      shiqi@pc:~/network/ch18$ ./cclnt 127.0.0.1 9190 zhangsan
      hi boys
      [zhangsan] hi boys
      [lisi] hi I'm lisi
      [wangwu] well, who am i?
      
      shiqi@pc:~/network/ch18$ ./cclnt 127.0.0.1 9190 lisi
      [zhangsan] hi boys
      hi I'm lisi
      [lisi] hi I'm lisi
      [wangwu] well, who am i?
      
      shiqi@pc:~/network/ch18$ ./cclnt 127.0.0.1 9190 wangwu
      [zhangsan] hi boys
      [lisi] hi I'm lisi
      well, who am i?
      [wangwu] well, who am i?
      ```


## 第 24 章  制作HTTP服务器端

### 24.1  HTTP概要

### 24.2  实现简单的Web服务器端

- c24p298:实现基于 Linux 的多线程 Web 服务器端的程序示例 webserv_linux.c

    - ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <unistd.h>
      #include <string.h>
      #include <arpa/inet.h>
      #include <sys/socket.h>
      #include <pthread.h>
      
      #define BUF_SIZE 1024
      #define SMALL_BUF 100
      
      void send_error(FILE * fp)
      {
          char protocol[] = "HTTP/1.0 400 Bad Request\r\n";
          char server[] = "Server:Linux Web Server \r\n";
          char cnt_len[] = "Content-length:2048\r\n";
          char cnt_type[] = "Content-type:text/html\r\n\r\n";
          char content[] = "<html><head><title>NETWORK</title></head>"
              "<body><font size=+5><br> 发生错误！查看请求文件名和请求方式！"
              "</font></body></html>";
      
          fputs(protocol, fp);
          fputs(server, fp);
          fputs(cnt_len, fp);
          fputs(cnt_type, fp);
          fputs(content, fp);
          fflush(fp);
      }
      
      void send_data(FILE * fp, char * ct, char * file_name)
      {
          char protocol[] = "HTTP/1.0 200 OK\r\n";
          char server[] = "Server:Linux Web Server \r\n";
          char cnt_len[] = "Content-length:2048\r\n";
          char cnt_type[SMALL_BUF];
          char buf[BUF_SIZE];
          FILE * send_file;
      
          sprintf(cnt_type, "Content-type:%s\r\n\r\n", ct);
          send_file = fopen(file_name, "r");
          if (send_file == NULL) {
              send_error(fp);
              return;
          }
      
          // 传输头信息
          fputs(protocol, fp);
          fputs(server, fp);
          fputs(cnt_len, fp);
          fputs(cnt_type, fp);
      
          // 传输请求数据
          while (fgets(buf, BUF_SIZE, send_file) != NULL) {
              fputs(buf, fp);
              fflush(fp);
          }
          fflush(fp);
          fclose(fp);
      }
      
      char * content_type(char * file)
      {
          char extension[SMALL_BUF];
          char file_name[SMALL_BUF];
          strcpy(file_name, file);
          strtok(file_name, ".");
          strcpy(extension, strtok(NULL, "."));
      
          if (!strcmp(extension, "html") || !strcmp(extension, "htm")) {
              return "text/html";
          } else {
              return "text/plain";
          }
      }
      
      void error_handling(char * message)
      {
          fputs(message, stderr);
          fputc('\n', stderr);
          exit(1);
      }
      
      void * request_handler(void * arg)
      {
          int clnt_sock = *((int *)arg);
          char req_line[SMALL_BUF];
          FILE * clnt_read;
          FILE * clnt_write;
      
          char method[10];
          char ct[15];
          char file_name[30];
      
          clnt_read = fdopen(clnt_sock, "r");
          clnt_write = fdopen(dup(clnt_sock), "w");
          fgets(req_line, SMALL_BUF, clnt_read);
          if (strstr(req_line, "HTTP/") == NULL) {
              send_error(clnt_write);
              fclose(clnt_read);
              fclose(clnt_write);
              return NULL;
          }
          strcpy(method, strtok(req_line, " /"));
          strcpy(file_name, strtok(NULL, " /"));
          strcpy(ct, content_type(file_name));
          if (strcmp(method, "GET") != 0) {
              send_error(clnt_write);
              fclose(clnt_read);
              fclose(clnt_write);
              return NULL;
          }
      
          fclose(clnt_read);
          send_data(clnt_write, ct, file_name);
      }
      
      int main(int argc, char * argv[])
      {
          int serv_sock, clnt_sock;
          struct sockaddr_in serv_adr, clnt_adr;
          int clnt_adr_size;
          char buf[BUF_SIZE];
          pthread_t t_id;
      
          if (argc != 2) {
              printf("Usage: %s <port>\n", argv[0]);
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
          if (listen(serv_sock, 20) == -1) {
              error_handling("listen() error");
          }
      
          while (1) {
              clnt_adr_size = sizeof(clnt_adr);
              clnt_sock = accept(serv_sock,
                                 (struct sockaddr *)&clnt_adr,
                                 &clnt_adr_size);
              printf("Connection Request: %s:%d\n",
                     inet_ntoa(clnt_adr.sin_addr), ntohs(clnt_adr.sin_port));
              pthread_create(&t_id, NULL, request_handler, &clnt_sock);
              pthread_detach(t_id);
          }
          close(serv_sock);
          return 0;
      }
      ```

    - 写完才知道写一个完备的 http 服务器其实不容易
    - 编译运行，同时要在这建一个 index.html 文件，假设里面都是「hhhhhhhhhhhhhhh」

    - ```shell
      shiqi@pc:~/network/ch24$ gcc webserv_linux.c -D_REENTRANT -lpthread -o webs
      shiqi@pc:~/network/ch24$ ./webs 9190
      Connection Request: 127.0.0.1:53270
      Connection Request: 127.0.0.1:53272
      ```


    - ```shell
      shiqi@pc:~/network/ch24$ curl localhost:9190/index.html
      hhhhhhhhhhhhhhhhhhhh
      curl: (18) transfer closed with 2027 bytes remaining to read
      ```

