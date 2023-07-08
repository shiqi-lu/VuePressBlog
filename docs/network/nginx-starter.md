---
title: nginx学习笔记
date: 2021-11-06 14:23:20
updated: 2021-11-06 14:23:20
tags:
- 网络
categories:
- 网络
description: 整理B站尚硅谷 nginx 的视频学习笔记
toc:
  enable: true
  number: false
---

## 第 2 章 Nginx 安装
- 0.官网下载 nginx：http://nginx.org/
- 1.安装 pcre 依赖
```shell
wget http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz
tar –xvf pcre-8.37.tar.gz
./configure
完成后，回到 pcre 目录下执行 make && make install
```
- 2.安装 openssl 、zlib 、 gcc 依赖
    - `yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel`
- 3.安装 nginx
```shell
./configure
make && make install
```
- 4.防火墙
```shell
查看开放的端口号
firewall-cmd --list-all

设置开放的端口号
firewall-cmd --add-service=http --permanent
firewall-cmd --add-port=80/tcp --permanent

重启防火墙
firewall-cmd –reload
```

## 第 3 章 nginx 常用的命令和配置文件
### nginx 常用命令
- 进入 `/usr/local/nginx/sbin`
- 启动：`./nginx`
- 关闭：`./nginx -s stop`
- 重新加载：`./nginx -s reload`

### nginx 的配置文件的位置和内容
- 位置：`/usr/local/nginx/conf/nginx.conf`
- 包含三部分内容：
    - 全局块：配置服务器整体运行的配置指令
    - events 块：影响 Nginx 服务器与用户的网络连接
    - http 块：代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里
        - http 全局块：括文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等
        - server 块：和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的

## 第 4 章 nginx 配置实例-反向代理
### 反向代理实例一
- 实现效果：使用 nginx 反向代理，访问 www.123.com 直接跳转到 127.0.0.1:8080
- 1.启动一个 tomcat 配置为 127.0.0.1:8080
- 2.修改本地 host 文件，将 www.123.com 映射到 127.0.0.1(如果nginx不是在一台机器要把这个 ip 修改到nginx对应机器上)
- 3.配置更改
```plain text
server {
    listen 80;
    server_name www.123.com;
    
    location / {
        proxy_pass http:///127.0.0.1:8080;
        index index.html index.htm index.jsp;
    }
}
```

### 反向代理实例二
- 实现效果
    - 使用 nginx 反向代理，根据访问的路径跳转到不同端口的服务中
    - nginx 监听端口为 9001，
    - 访问 http://127.0.0.1:9001/edu/ 直接跳转到 127.0.0.1:8081
    - 访问 http://127.0.0.1:9001/vod/ 直接跳转到 127.0.0.1:8082
- 1.准备两个tomcat，一个 8001 端口，一个 8002 端口，并准备好测试的页面
- 2.配置更改
    - ![](https://img.shiqi-lu.tech/20211109113836.png)

### location 指令说明
- 该指令用于匹配 URL。语法如下
```plain text
location [ = | ~ | ~* | ^~ ] uri {
      
}
```
- = ：用于不含正则表达式的 uri 前，要求请求字符串与 uri 严格匹配，如果匹配成功，就停止继续向下搜索并立即处理该请求
- ~：用于表示 uri 包含正则表达式，并且区分大小写
- ~*：用于表示 uri 包含正则表达式，并且不区分大小写
- ^~：用于不含正则表达式的 uri 前，要求 Nginx 服务器找到标识 uri 和请求字符串匹配度最高的 location 后，立即使用此 location 处理请求，而不再使用 location 块中的正则 uri 和请求字符串做匹配

## 第 5 章 nginx 配置实例-负载均衡
### 配置负载均衡
- 配置更改
```plain text
http {
    ...
    upstream myserver {
        ip_hash;
        server 192.168.5.21;
        server 192.168.5.22;
    }
    ...
    server {
        location / {
            ...
            proxy_pass http://myserver;
            proxy_connect_timeout 10;
        }
        ...
    }
}
```

### nginx 提供的负载均衡分配策略
- 1.轮询（默认）：每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉，能自动剔除
- 2.weight：代表权,重默认为 1,权重越高被分配的客户端越多，指定轮询几率，weight 和访问比率成正比，用于后端服务器性能不均的情况
```plain text
upstream server_pool {
  server 192.168.5.21 weight = 10;
  server 192.168.5.22 weight = 10;
}
```
- 3.ip_hash：每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决 session 的问题
```plain text
upstream server_pool {
  ip_hash;
  server 192.168.5.21;
  server 192.168.5.22;
}
```
- 4.fair（第三方）：按后端服务器的响应时间来分配请求，响应时间短的优先分配
```plain text
upstream server_pool {
  server 192.168.5.21;
  server 192.168.5.22;
  fair;
}
```

## 第 6 章 nginx 配置实例-动静分离
### 配置动静分离
```plain text
server {
    listen 80;
    server_name 192.168.17.129;
    
    location /www/ {
        root /data/;
        index index.html index.htm;
    }
    
    location /image/ {
        root /data/;
        autoindex on; # 这个选项用于在浏览器上看文件目录
    }
}
```

## 第 7 章 nginx 原理与优化参数配置
- master-workers 的机制的好处
    - 1.可以使用 nginx –s reload 热部署，利用 nginx 进行热部署操作
    - 2.每个 woker 是独立的进程，如果有其中的一个 woker 出现问题，其他 woker 独立的，继续进行争抢，实现请求过程，不会造成服务中断
- 设置多少个 woker 合适
    - worker 数和服务器的 cpu 数相等是最为适宜的
- 发送请求，占用了 woker 的几个连接数worker_connection？
    - 2 或者 4 个
- nginx 有一个 master，有四个 woker，每个 woker 支持最大的连接数 1024，支持的最大并发数是多少？
    - 普通的静态访问最大并发数是： worker_connections * worker_processes / 2
    - 而如果是 HTTP 作 为反向代理来说，最大并发数量应该是 worker_connections * worker_processes/4

## 第 8 章 nginx 搭建高可用集群
### Keepalived+Nginx 高可用集群（主从模式）
- 准备
    - 1.需要两台服务器 192.168.17.129 和 192.168.17.131
    - 2.在两台服务器安装 nginx
    - 3.在两台服务器安装 keepalived
        - yum install keepalived –y
        - 安装之后，在 etc 里面生成目录 keepalived，有文件 keepalived.conf
- 修改/etc/keepalived/keepalivec.conf 配置文件
```plain text
global_defs {
    notification_email {
        acassen@firewall.loc
        failover@firewall.loc
        sysadmin@firewall.loc
    }
    notification_email_from Alexandre.Cassen@firewall.loc
    smtp_server 192.168.17.129
    smtp_connect_timeout 30
    router_id LVS_DEVEL
}

vrrp_script chk_http_port {
    script "/usr/local/src/nginx_check.sh"
    interval 2
    #（检测脚本执行的间隔）
    weight 2
}

vrrp_instance VI_1 {
    state BACKUP # 备份服务器上将 MASTER 改为 BACKUP
    interface ens33 //网卡
    virtual_router_id 51 # 主、备机的 virtual_router_id 必须相同
    priority 90 # 主、备机取不同的优先级，主机值较大，备份机值较小
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.17.50 // VRRP H 虚拟地址
    }
}
```
- 在/usr/local/src 添加检测脚本
```shell
#!/bin/bash
A=`ps -C nginx –no-header |wc -l`
if [ $A -eq 0 ];then
    /usr/local/nginx/sbin/nginx
    sleep 2
    if [ `ps -C nginx --no-header |wc -l` -eq 0 ];then
        killall keepalived
    fi
fi
```
- 把两台服务器上 nginx 和 keepalived 启动
    - 启动 nginx：./nginx
    - 启动 keepalived：systemctl start keepalived
