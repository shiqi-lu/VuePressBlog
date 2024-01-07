import{_ as n,o as i,c as e,e as a}from"./app-n0xwCUxG.js";const l={},s=a(`<h2 id="第-2-章-nginx-安装" tabindex="-1"><a class="header-anchor" href="#第-2-章-nginx-安装" aria-hidden="true">#</a> 第 2 章 Nginx 安装</h2><ul><li>0.官网下载 nginx：http://nginx.org/</li><li>1.安装 pcre 依赖</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz
<span class="token function">tar</span> –xvf pcre-8.37.tar.gz
./configure
完成后，回到 pcre 目录下执行 <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.安装 openssl 、zlib 、 gcc 依赖 <ul><li><code>yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel</code></li></ul></li><li>3.安装 nginx</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.防火墙</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>查看开放的端口号
firewall-cmd --list-all

设置开放的端口号
firewall-cmd --add-service<span class="token operator">=</span>http <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>

重启防火墙
firewall-cmd –reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第-3-章-nginx-常用的命令和配置文件" tabindex="-1"><a class="header-anchor" href="#第-3-章-nginx-常用的命令和配置文件" aria-hidden="true">#</a> 第 3 章 nginx 常用的命令和配置文件</h2><h3 id="nginx-常用命令" tabindex="-1"><a class="header-anchor" href="#nginx-常用命令" aria-hidden="true">#</a> nginx 常用命令</h3><ul><li>进入 <code>/usr/local/nginx/sbin</code></li><li>启动：<code>./nginx</code></li><li>关闭：<code>./nginx -s stop</code></li><li>重新加载：<code>./nginx -s reload</code></li></ul><h3 id="nginx-的配置文件的位置和内容" tabindex="-1"><a class="header-anchor" href="#nginx-的配置文件的位置和内容" aria-hidden="true">#</a> nginx 的配置文件的位置和内容</h3><ul><li>位置：<code>/usr/local/nginx/conf/nginx.conf</code></li><li>包含三部分内容： <ul><li>全局块：配置服务器整体运行的配置指令</li><li>events 块：影响 Nginx 服务器与用户的网络连接</li><li>http 块：代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里 <ul><li>http 全局块：括文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等</li><li>server 块：和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的</li></ul></li></ul></li></ul><h2 id="第-4-章-nginx-配置实例-反向代理" tabindex="-1"><a class="header-anchor" href="#第-4-章-nginx-配置实例-反向代理" aria-hidden="true">#</a> 第 4 章 nginx 配置实例-反向代理</h2><h3 id="反向代理实例一" tabindex="-1"><a class="header-anchor" href="#反向代理实例一" aria-hidden="true">#</a> 反向代理实例一</h3><ul><li>实现效果：使用 nginx 反向代理，访问 www.123.com 直接跳转到 127.0.0.1:8080</li><li>1.启动一个 tomcat 配置为 127.0.0.1:8080</li><li>2.修改本地 host 文件，将 www.123.com 映射到 127.0.0.1(如果nginx不是在一台机器要把这个 ip 修改到nginx对应机器上)</li><li>3.配置更改</li></ul><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>server {
    listen 80;
    server_name www.123.com;
    
    location / {
        proxy_pass http:///127.0.0.1:8080;
        index index.html index.htm index.jsp;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反向代理实例二" tabindex="-1"><a class="header-anchor" href="#反向代理实例二" aria-hidden="true">#</a> 反向代理实例二</h3><ul><li>实现效果 <ul><li>使用 nginx 反向代理，根据访问的路径跳转到不同端口的服务中</li><li>nginx 监听端口为 9001，</li><li>访问 http://127.0.0.1:9001/edu/ 直接跳转到 127.0.0.1:8081</li><li>访问 http://127.0.0.1:9001/vod/ 直接跳转到 127.0.0.1:8082</li></ul></li><li>1.准备两个tomcat，一个 8001 端口，一个 8002 端口，并准备好测试的页面</li><li>2.配置更改 <ul><li><img src="https://img.shiqi-lu.tech/20211109113836.png" alt=""></li></ul></li></ul><h3 id="location-指令说明" tabindex="-1"><a class="header-anchor" href="#location-指令说明" aria-hidden="true">#</a> location 指令说明</h3><ul><li>该指令用于匹配 URL。语法如下</li></ul><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>location [ = | ~ | ~* | ^~ ] uri {
      
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>= ：用于不含正则表达式的 uri 前，要求请求字符串与 uri 严格匹配，如果匹配成功，就停止继续向下搜索并立即处理该请求</li><li>~：用于表示 uri 包含正则表达式，并且区分大小写</li><li>~*：用于表示 uri 包含正则表达式，并且不区分大小写</li><li>^~：用于不含正则表达式的 uri 前，要求 Nginx 服务器找到标识 uri 和请求字符串匹配度最高的 location 后，立即使用此 location 处理请求，而不再使用 location 块中的正则 uri 和请求字符串做匹配</li></ul><h2 id="第-5-章-nginx-配置实例-负载均衡" tabindex="-1"><a class="header-anchor" href="#第-5-章-nginx-配置实例-负载均衡" aria-hidden="true">#</a> 第 5 章 nginx 配置实例-负载均衡</h2><h3 id="配置负载均衡" tabindex="-1"><a class="header-anchor" href="#配置负载均衡" aria-hidden="true">#</a> 配置负载均衡</h3><ul><li>配置更改</li></ul><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>http {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-提供的负载均衡分配策略" tabindex="-1"><a class="header-anchor" href="#nginx-提供的负载均衡分配策略" aria-hidden="true">#</a> nginx 提供的负载均衡分配策略</h3><ul><li>1.轮询（默认）：每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉，能自动剔除</li><li>2.weight：代表权,重默认为 1,权重越高被分配的客户端越多，指定轮询几率，weight 和访问比率成正比，用于后端服务器性能不均的情况</li></ul><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>upstream server_pool {
  server 192.168.5.21 weight = 10;
  server 192.168.5.22 weight = 10;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3.ip_hash：每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决 session 的问题</li></ul><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>upstream server_pool {
  ip_hash;
  server 192.168.5.21;
  server 192.168.5.22;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.fair（第三方）：按后端服务器的响应时间来分配请求，响应时间短的优先分配</li></ul><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>upstream server_pool {
  server 192.168.5.21;
  server 192.168.5.22;
  fair;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第-6-章-nginx-配置实例-动静分离" tabindex="-1"><a class="header-anchor" href="#第-6-章-nginx-配置实例-动静分离" aria-hidden="true">#</a> 第 6 章 nginx 配置实例-动静分离</h2><h3 id="配置动静分离" tabindex="-1"><a class="header-anchor" href="#配置动静分离" aria-hidden="true">#</a> 配置动静分离</h3><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>server {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第-7-章-nginx-原理与优化参数配置" tabindex="-1"><a class="header-anchor" href="#第-7-章-nginx-原理与优化参数配置" aria-hidden="true">#</a> 第 7 章 nginx 原理与优化参数配置</h2><ul><li>master-workers 的机制的好处 <ul><li>1.可以使用 nginx –s reload 热部署，利用 nginx 进行热部署操作</li><li>2.每个 woker 是独立的进程，如果有其中的一个 woker 出现问题，其他 woker 独立的，继续进行争抢，实现请求过程，不会造成服务中断</li></ul></li><li>设置多少个 woker 合适 <ul><li>worker 数和服务器的 cpu 数相等是最为适宜的</li></ul></li><li>发送请求，占用了 woker 的几个连接数worker_connection？ <ul><li>2 或者 4 个</li></ul></li><li>nginx 有一个 master，有四个 woker，每个 woker 支持最大的连接数 1024，支持的最大并发数是多少？ <ul><li>普通的静态访问最大并发数是： worker_connections * worker_processes / 2</li><li>而如果是 HTTP 作 为反向代理来说，最大并发数量应该是 worker_connections * worker_processes/4</li></ul></li></ul><h2 id="第-8-章-nginx-搭建高可用集群" tabindex="-1"><a class="header-anchor" href="#第-8-章-nginx-搭建高可用集群" aria-hidden="true">#</a> 第 8 章 nginx 搭建高可用集群</h2><h3 id="keepalived-nginx-高可用集群-主从模式" tabindex="-1"><a class="header-anchor" href="#keepalived-nginx-高可用集群-主从模式" aria-hidden="true">#</a> Keepalived+Nginx 高可用集群（主从模式）</h3><ul><li>准备 <ul><li>1.需要两台服务器 192.168.17.129 和 192.168.17.131</li><li>2.在两台服务器安装 nginx</li><li>3.在两台服务器安装 keepalived <ul><li>yum install keepalived –y</li><li>安装之后，在 etc 里面生成目录 keepalived，有文件 keepalived.conf</li></ul></li></ul></li><li>修改/etc/keepalived/keepalivec.conf 配置文件</li></ul><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>global_defs {
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
    script &quot;/usr/local/src/nginx_check.sh&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在/usr/local/src 添加检测脚本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx –no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    /usr/local/nginx/sbin/nginx
    <span class="token function">sleep</span> <span class="token number">2</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx --no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">killall</span> keepalived
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>把两台服务器上 nginx 和 keepalived 启动 <ul><li>启动 nginx：./nginx</li><li>启动 keepalived：systemctl start keepalived</li></ul></li></ul>`,45),d=[s];function r(c,v){return i(),e("div",null,d)}const t=n(l,[["render",r],["__file","nginx-starter.html.vue"]]);export{t as default};
