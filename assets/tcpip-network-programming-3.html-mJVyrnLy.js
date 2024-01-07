import{_ as n,o as s,c as a,e as p}from"./app-n0xwCUxG.js";const t={},e=p(`<p>注：博主只关注编程实现的方面以及linux部分，部分网络原理讲解和windows实现部分跳过</p><h2 id="第-9-章-套接字的多种可选项" tabindex="-1"><a class="header-anchor" href="#第-9-章-套接字的多种可选项" aria-hidden="true">#</a> 第 9 章 套接字的多种可选项</h2><h3 id="_9-1-套接字可选项和-i-o-缓冲大小" tabindex="-1"><a class="header-anchor" href="#_9-1-套接字可选项和-i-o-缓冲大小" aria-hidden="true">#</a> 9.1 套接字可选项和 I/O 缓冲大小</h3><ul><li><p>Q:套接字有哪些常用设置选项？</p><ul><li><img src="https://img.shiqi-lu.tech/20210623205237.png" alt=""></li></ul></li><li><p>Q:用于读取套接字可选项的函数getsockopt</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">getsockopt</span><span class="token punctuation">(</span><span class="token keyword">int</span> sock<span class="token punctuation">,</span> <span class="token keyword">int</span> level<span class="token punctuation">,</span> <span class="token keyword">int</span> optname<span class="token punctuation">,</span>
               <span class="token keyword">void</span> <span class="token operator">*</span>optval<span class="token punctuation">,</span> <span class="token class-name">socklen_t</span> <span class="token operator">*</span>optlen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// sock：用于查看选项套接字文件描述符</span>
<span class="token comment">// level：要查看的可选项的协议层</span>
<span class="token comment">// optname：要查看的可选项名</span>
<span class="token comment">// optval：保存查看结果的缓冲地址值</span>
<span class="token comment">// optlen：向第四个参数optval传递的缓冲大小。调用函数后，</span>
<span class="token comment">//        该变量中保存通过第四个参数返回的可选项信息的字节数</span>
<span class="token comment">// 成功时返回0，失败时返回-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:用于更改套接字可选项的函数setsockopt</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">setsockopt</span><span class="token punctuation">(</span><span class="token keyword">int</span> sock<span class="token punctuation">,</span> <span class="token keyword">int</span> level<span class="token punctuation">,</span> <span class="token keyword">int</span> optname<span class="token punctuation">,</span>
               <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>optval<span class="token punctuation">,</span> <span class="token class-name">socklen_t</span> optlen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// sock：用于更改选项套接字文件描述符</span>
<span class="token comment">// level：要更改的可选项的协议层</span>
<span class="token comment">// optname：要更改的可选项名</span>
<span class="token comment">// optval：保存要更改的选项信息的缓冲地址值</span>
<span class="token comment">// optlen：向第四个参数optval传递的可选项信息的字节数</span>
<span class="token comment">// 成功时返回0，失败时返回-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:用协议层为SOL_SOCKET、名为SO_TYPE的可选项查看套接字类型(TCP或UDP)的程序示例sock_type.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> message<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> tcp_sock<span class="token punctuation">,</span> udp_sock<span class="token punctuation">;</span>
    <span class="token keyword">int</span> sock_type<span class="token punctuation">;</span>
    <span class="token class-name">socklen_t</span> optlen<span class="token punctuation">;</span>
    <span class="token keyword">int</span> state<span class="token punctuation">;</span>

    optlen <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>sock_type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 分别生成TCP、UDP套接字</span>
    tcp_sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    udp_sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_DGRAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出创建TCP、UDP套接字时传入的SOCK_STREAM、SOCK_DGRAM</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;SOCK_STREAM: %d\\n&quot;</span><span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;SOCK_DGRAM: %d\\n&quot;</span><span class="token punctuation">,</span> SOCK_DGRAM<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取套接字类型信息</span>
    <span class="token comment">// 如果是TCP套接字，将获得SOCK_STREAM常数值1</span>
    state <span class="token operator">=</span> <span class="token function">getsockopt</span><span class="token punctuation">(</span>tcp_sock<span class="token punctuation">,</span> SOL_SOCKET<span class="token punctuation">,</span> SO_TYPE<span class="token punctuation">,</span>
                       <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>sock_type<span class="token punctuation">,</span> <span class="token operator">&amp;</span>optlen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;getsockopt() error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Socket type one: %d\\n&quot;</span><span class="token punctuation">,</span> sock_type<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果是UDP套接字，则获得SOCK_DGRAM的常数值2</span>
    state <span class="token operator">=</span> <span class="token function">getsockopt</span><span class="token punctuation">(</span>tcp_sock<span class="token punctuation">,</span> SOL_SOCKET<span class="token punctuation">,</span> SO_TYPE<span class="token punctuation">,</span>
                       <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>sock_type<span class="token punctuation">,</span> <span class="token operator">&amp;</span>optlen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;getsockopt() error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Socket type two: %d\\n&quot;</span><span class="token punctuation">,</span> sock_type<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch09$ gcc sock_type.c <span class="token parameter variable">-o</span> socktype
shiqi@pc:~/network/ch09$ ./socktype
SOCK_STREAM: <span class="token number">1</span>
SOCK_DGRAM: <span class="token number">2</span>
Socket <span class="token builtin class-name">type</span> one: <span class="token number">1</span>
Socket <span class="token builtin class-name">type</span> two: <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:读取创建套接字时默认的I/O缓冲大小的实例程序get_buf.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> message<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> sock<span class="token punctuation">;</span>
    <span class="token keyword">int</span> snd_buf<span class="token punctuation">,</span> rcv_buf<span class="token punctuation">,</span> state<span class="token punctuation">;</span>
    <span class="token class-name">socklen_t</span> len<span class="token punctuation">;</span>

    sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    len <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>snd_buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    state <span class="token operator">=</span> <span class="token function">getsockopt</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> SOL_SOCKET<span class="token punctuation">,</span> SO_SNDBUF<span class="token punctuation">,</span>
                       <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>snd_buf<span class="token punctuation">,</span> <span class="token operator">&amp;</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;getsockopt() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Output buffer size: %d\\n&quot;</span><span class="token punctuation">,</span> snd_buf<span class="token punctuation">)</span><span class="token punctuation">;</span>

    len <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>rcv_buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    state <span class="token operator">=</span> <span class="token function">getsockopt</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> SOL_SOCKET<span class="token punctuation">,</span> SO_RCVBUF<span class="token punctuation">,</span>
                       <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>rcv_buf<span class="token punctuation">,</span> <span class="token operator">&amp;</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;getsockopt() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Input buffer size: %d\\n&quot;</span><span class="token punctuation">,</span> rcv_buf<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch09$ gcc get_buf.c <span class="token parameter variable">-o</span> getbuf
shiqi@pc:~/network/ch09$ ./getbuf
Output buffer size: <span class="token number">16384</span>
Input buffer size: <span class="token number">131072</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:更改套接字I/O缓冲大小的示例程序set_buf.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> message<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> sock<span class="token punctuation">;</span>
    <span class="token keyword">int</span> snd_buf <span class="token operator">=</span> <span class="token number">1024</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">,</span> rcv_buf <span class="token operator">=</span> <span class="token number">1024</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> state<span class="token punctuation">;</span>
    <span class="token class-name">socklen_t</span> len<span class="token punctuation">;</span>

    sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 更改 I/O 接收缓冲大小</span>
    state <span class="token operator">=</span> <span class="token function">setsockopt</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> SOL_SOCKET<span class="token punctuation">,</span> 
                       SO_RCVBUF<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>rcv_buf<span class="token punctuation">,</span> 
                       <span class="token keyword">sizeof</span><span class="token punctuation">(</span>rcv_buf<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;setockopt() error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 更改 I/O 发送缓冲大小</span>
    state <span class="token operator">=</span> <span class="token function">setsockopt</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> SOL_SOCKET<span class="token punctuation">,</span> SO_SNDBUF<span class="token punctuation">,</span> 
                       <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>snd_buf<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>snd_buf<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;setockopt() error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    len <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>snd_buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 读取 I/O 发送缓冲大小</span>
    state <span class="token operator">=</span> <span class="token function">getsockopt</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> SOL_SOCKET<span class="token punctuation">,</span> SO_SNDBUF<span class="token punctuation">,</span>
                       <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>snd_buf<span class="token punctuation">,</span> <span class="token operator">&amp;</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;getsockopt() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Output buffer size: %d\\n&quot;</span><span class="token punctuation">,</span> snd_buf<span class="token punctuation">)</span><span class="token punctuation">;</span>

    len <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>rcv_buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 读取 I/O 接收缓冲大小</span>
    state <span class="token operator">=</span> <span class="token function">getsockopt</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> SOL_SOCKET<span class="token punctuation">,</span> SO_RCVBUF<span class="token punctuation">,</span>
                       <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>rcv_buf<span class="token punctuation">,</span> <span class="token operator">&amp;</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;getsockopt() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Input buffer size: %d\\n&quot;</span><span class="token punctuation">,</span> rcv_buf<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch09$ gcc set_buf.c <span class="token parameter variable">-o</span> setbuf
shiqi@pc:~/network/ch09$ ./setbuf
Output buffer size: <span class="token number">6144</span>
Input buffer size: <span class="token number">6144</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="_9-2-so-reuseaddr" tabindex="-1"><a class="header-anchor" href="#_9-2-so-reuseaddr" aria-hidden="true">#</a> 9.2 SO_REUSEADDR</h3><ul><li>Q:Time-wait状态下，服务器发生bind() error错误程序示例reuseadr_eserver.c <ul><li><p>如果在服务器端和客户端已建立连接的状态下，向服务器端控制台输入CTRL+C，即强制关闭服务器端。相当于模拟服务器端向客户端发送 FIN 消息。以这种方式终止程序，服务端若用统一端口号重新运行，将输出「bind() error」，无法再次运行，这种情况下，大约过3分钟即可重新运行服务器端</p></li><li><p>解决方案可在套接字的可选项中更改 SO_REUSEADDR 为1，可将 Time-wait 状态下的套接字端口号重新分配给新的套接字，把程序中的注释去掉即可</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;arpa/inet.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">TRUE</span> <span class="token expression"><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">FALSE</span> <span class="token expression"><span class="token number">0</span></span></span>

<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> message<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> serv_sock<span class="token punctuation">,</span> clnt_sock<span class="token punctuation">;</span>
    <span class="token keyword">char</span> message<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> option<span class="token punctuation">,</span> str_len<span class="token punctuation">;</span>
    <span class="token class-name">socklen_t</span> optlen<span class="token punctuation">,</span> clnt_adr_sz<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> serv_adr<span class="token punctuation">,</span> clnt_adr<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Usage: %s &lt;port&gt;\\n&quot;</span><span class="token punctuation">,</span> argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    serv_sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>serv_sock <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;socket() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    optlen = sizeof(option);
    option = TRUE;
    setsockopt(serv_sock, SOL_SOCKET, SO_REUSEADDR,
               (void *)&amp;option, optlen);
    */</span>

    <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>serv_adr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_adr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_family <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr <span class="token operator">=</span> <span class="token function">htonl</span><span class="token punctuation">(</span>INADDR_ANY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_port <span class="token operator">=</span> <span class="token function">htons</span><span class="token punctuation">(</span><span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">bind</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span>
             <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>serv_adr<span class="token punctuation">,</span>
             <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_adr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;bind() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">listen</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;listen() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    clnt_adr_sz <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>clnt_adr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    clnt_sock <span class="token operator">=</span> <span class="token function">accept</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span>
                       <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>clnt_adr<span class="token punctuation">,</span>
                       <span class="token operator">&amp;</span>clnt_adr_sz<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>str_len <span class="token operator">=</span> <span class="token function">read</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">,</span>
                           message<span class="token punctuation">,</span>
                           <span class="token keyword">sizeof</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">write</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">,</span> message<span class="token punctuation">,</span> str_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">write</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> str_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">close</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行，客户端使用第四章的客户端即可</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch09$ gcc reuseadr_eserver.c <span class="token parameter variable">-o</span> eserver
shiqi@pc:~/network/ch09$ ./eserver <span class="token number">9898</span>
mmu
^C
shiqi@pc:~/network/ch09$ ./eserver <span class="token number">9898</span>
bind<span class="token punctuation">(</span><span class="token punctuation">)</span> error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="_9-3-tcp-nodelay" tabindex="-1"><a class="header-anchor" href="#_9-3-tcp-nodelay" aria-hidden="true">#</a> 9.3 TCP_NODELAY</h3><ul><li><p>Q:Naggle算法是什么？</p><ul><li><img src="https://img.shiqi-lu.tech/20210625213956.png" alt=""></li><li>TCP 套接字默认使用 Nagle 算法交换数据，只有收到前一数据的 ACK 消息时，Nagle算法才发送下一数据，在此之前会最大限度地进行缓冲</li><li>如左图，为了发送字符串「Nagle」, 将其传递到输出缓冲。这时头字符「N」之前没有其他数据(没有需接收的ACK )，因此立即传输。之后开始等待字符「N」的ACK消息，等待过程中，剩下的「agle」填入输出缓冲。接下来，收到字符「N」的ACK消息后，将输出缓冲的「agle」装入一个数据包发送。也就是说，共需传递4个数据包以传输1个字符串</li><li>右图是未使用Nagle算法时发送字符串「Nagle」的过程。假设字符「N」到「e」依序传到输出缓冲。此时的发送过程与ACK接收与否无关，因此数据到达输出缓冲后将立即被发送出去，可以看到，发送字符串「Nagle」时共需10个数据包</li><li>由此可知，不使用Nagle算法将对网络流量(Traffic:指网络负载或混杂程度)产生负面影响。即使只传输1个字节的数据，其头信息都有可能是几十个字节。因此，为了提高网络传输效率，必须使用Nagle算法</li></ul></li><li><p>Q:什么时候可以禁用 Nagle 算法？</p><ul><li>网络流量并未受太大影响时，不使用Nagle算法要比使用它时传输速度快</li><li>最典型的是「传输大文件数据」，将文件数据传入输出缓冲不会花太多时间，因此，即便不使用 Nagle 算法，也会在装满输出缓冲时传输数据包。这不仅不会增加数据包的数量，反而会在无需等待 ACK 的前提下连续传输，因此可以大大提高传输速度</li><li>一般情况下，不使用 Nagle 算法可以提高传输速度。但如果无条件放弃使用 Nagle 算法，就会增加过多的网络流量，反而会影响传输。因此，未准确判断数据特性时不应禁用 Nagle 算法</li></ul></li><li><p>Q:如何禁用 Nagle 算法</p><ul><li><p>把套接字可选项 TCP_NODELAY 改为1(True)即可</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> opt_val <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">setsockopt</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> IPPROTO_TCP<span class="token punctuation">,</span> TCP_NODELAY<span class="token punctuation">,</span>
           <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>opt_val<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>opt_val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:如何查看 Nagle 算法的设置状态</p><ul><li><p>查看 TCP_NODELAY 的值，如果正在使用 Nagle 算法，opt_val 变量中会保存 0，禁用保存 1</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> opt_val<span class="token punctuation">;</span>
<span class="token class-name">socklen_t</span> opt_len<span class="token punctuation">;</span>
opt_len <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>opt_val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getsockopt</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> IPPROTO_TCP<span class="token punctuation">,</span> TCP_NODELAY<span class="token punctuation">,</span>
           <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>opt_val<span class="token punctuation">,</span> <span class="token operator">&amp;</span>opt_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="第-10-章-多进程服务器端" tabindex="-1"><a class="header-anchor" href="#第-10-章-多进程服务器端" aria-hidden="true">#</a> 第 10 章 多进程服务器端</h2><h3 id="_10-1-进程概念及应用" tabindex="-1"><a class="header-anchor" href="#_10-1-进程概念及应用" aria-hidden="true">#</a> 10.1 进程概念及应用</h3><ul><li><p>Q:具有代表性的并发服务端的实现模型和方法</p><ul><li>多进程服务器：通过创建多个进程提供服务</li><li>多路复用服务器：通过捆绑并统一管理 I/O 对象提供服务</li><li>多线程服务器：通过生成与客户端等量的线程提供服务</li></ul></li><li><p>Q:通过fork函数创建进程</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token class-name">pid_t</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 成功时返回进程ID, 失败时返回 -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>fork函数将创建调用的进程副本。即并非根据完全不同的程序创建进程，而是复制正在运行的、调用 fork 函数的进程。</p></li><li><p>两个进程都将执行fork函数调用后的语句(准确说是fork函数返回后)。但因通过同一个进程、复制相同的内存空间，之后的程序流要根据fork函数的返回值加以区分</p></li><li><p>父进程(Parent Process)，即原进程，为调用fork函数的主体：fork函数返回子进程ID</p></li><li><p>子进程(Child Process)，即通过父进程调用 fork 函数复制出的进程：fork函数返回0</p></li><li><p><img src="https://img.shiqi-lu.tech/20210217162244.png" alt=""></p></li></ul></li><li><p>Q:fork函数示意fork.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>

<span class="token keyword">int</span> gval <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>
    <span class="token keyword">int</span> lval <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token operator">++</span>gval<span class="token punctuation">,</span> lval <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span>

    pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 子进程</span>
        gval <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">,</span> lval <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 父进程</span>
        gval <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">,</span> lval <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child Proc: [%d,%d] \\n&quot;</span><span class="token punctuation">,</span> gval<span class="token punctuation">,</span> lval<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Parent Proc: [%d,%d] \\n&quot;</span><span class="token punctuation">,</span> gval<span class="token punctuation">,</span> lval<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@inspiron:~/network$ gcc fork.c <span class="token parameter variable">-o</span> fork
shiqi@inspiron:~/network$ ./fork
Parent Proc: <span class="token punctuation">[</span><span class="token number">9,23</span><span class="token punctuation">]</span>
Child Proc: <span class="token punctuation">[</span><span class="token number">13,27</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="_10-2-进程和僵尸进程" tabindex="-1"><a class="header-anchor" href="#_10-2-进程和僵尸进程" aria-hidden="true">#</a> 10.2 进程和僵尸进程</h3><ul><li><p>Q:产生僵尸进程的原因</p><ul><li>调用fork函数产生子进程的两种终止方式 <ul><li>传递参数并调用exit函数</li><li>main函数中执行return语句并返回值</li></ul></li><li>向 exit 函数传递的参数值和 main 函数的 return 语句返回的值都回传递给操作系统。而操作系统不会销毁子进程，直到把这些值传递给产生该子进程的父进程，处在这种状态下的进程就是僵尸进程</li><li>即将子进程变成僵尸进程的是操作系统</li><li>僵尸进程被销毁的时机是，操作系统向创建子进程的父进程传递子进程的 exit 参数值或 return 语句的返回值后</li><li>操作系统不会主动把这些值传递给父进程。只有父进程主动发起请求（函数调用）的时候，操作系统才会传递该值，即如果父进程未主动要求获得子进程结束状态值，操作系统将一直保存，并让子进程长时间处于僵尸进程状态</li></ul></li><li><p>Q:创建僵尸进程示例zombie.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">pid_t</span> pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//子进程</span>
        <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Hi, I am a child process&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 父进程</span>
        <span class="token comment">// 输出子进程ID，可通过该值查看子进程状态（是否为僵尸进程）</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child Process ID: %d \\n&quot;</span><span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果父进程终止，处于僵尸状态的子进程将同时销毁</span>
        <span class="token comment">// 因此延缓父进程的执行以验证僵尸进程</span>
        <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;End child proess&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;End parent process&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@inspiron:~/network$ gcc zombie.c <span class="token parameter variable">-o</span> zombie
shiqi@inspiron:~/network$ ./zombie
Child Process ID: <span class="token number">24767</span>
Hi, I am a child process
End child proess
End parent process
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> shiqi@inspiron:~/network$ <span class="token function">ps</span> aux
<span class="token environment constant">USER</span>       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
shiqi    <span class="token number">24766</span>  <span class="token number">0.0</span>  <span class="token number">0.0</span>   <span class="token number">4504</span>   <span class="token number">720</span> pts/1    S+   <span class="token number">16</span>:42   <span class="token number">0</span>:00 ./zombie
shiqi    <span class="token number">24767</span>  <span class="token number">0.0</span>  <span class="token number">0.0</span>      <span class="token number">0</span>     <span class="token number">0</span> pts/1    Z+   <span class="token number">16</span>:42   <span class="token number">0</span>:00 <span class="token punctuation">[</span>zombie<span class="token punctuation">]</span> <span class="token operator">&lt;</span>defunct<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:销毁僵尸进程 1：利用 wait 函数</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/wait.h&gt;</span></span>
<span class="token class-name">pid_t</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span> statloc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 成功时返回终止的子进程 ID ,失败时返回 -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>调用此函数时如果已有子进程终止，那么子进程终止时传递的返回值（exit 函数的参数返回值，main 函数的 return 返回值）将保存到该函数的参数所指的内存空间。但函数参数指向的单元中还包含其他信息，因此需要用下列宏进行分离</p><ul><li>WIFEXITED：子进程正常终止时返回真</li><li>WEXITSTATUS：返回子进程的返回值</li></ul></li><li><p>即向 wait 函数传递变量 status 的地址时，调用 wait 函数后应编写如下代码：</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">WIFEXITED</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 是正常终止的吗？</span>
    <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Normal termination!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取返回值</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child pass num: %d&quot;</span><span class="token punctuation">,</span> <span class="token function">WEXITSTATUS</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>调用 wait 函数时，如果没有已经终止的子进程，那么程序将阻塞（Blocking）直到有子进程终止，因此要谨慎调用该函数</p></li></ul></li><li><p>Q:wait函数示例wait.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/wait.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> status<span class="token punctuation">;</span>
    <span class="token comment">// 这里的子进程将通过 return 语句终止</span>
    <span class="token class-name">pid_t</span> pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child PID: %d \\n&quot;</span><span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里的子进程将通过 exit() 函数终止</span>
        pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child PID: %d \\n&quot;</span><span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 之前终止的子进程相关信息将被保存到 status 中</span>
            <span class="token comment">// 同时相关子进程被完全销毁</span>
            <span class="token function">wait</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 通过 WIFEXITED 来验证子进程是否正常终止</span>
            <span class="token comment">// 如果正常终止，则调用 WEXITSTATUS 宏输出子进程返回值</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">WIFEXITED</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child send one: %d \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">WEXITSTATUS</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 因为之前创建了两个进程，所以再次调用 wait 函数和宏</span>
            <span class="token function">wait</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">WIFEXITED</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child send two: %d \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">WEXITSTATUS</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 暂停父进程，此时可查看子进程的状态</span>
            <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@inspiron:~/network$ gcc wait.c <span class="token parameter variable">-o</span> <span class="token function">wait</span>
shiqi@inspiron:~/network$ ./wait
Child PID: <span class="token number">24876</span>
Child PID: <span class="token number">24877</span>
Child send one: <span class="token number">3</span>
Child send two: <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:销毁僵尸进程 2：使用 waitpid 函数</p><ul><li><p>waitpid可以防止阻塞</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/wait.h&gt;</span></span>
<span class="token class-name">pid_t</span> <span class="token function">waitpid</span><span class="token punctuation">(</span><span class="token class-name">pid_t</span> pid<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span> statloc<span class="token punctuation">,</span> <span class="token keyword">int</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// pid: 等待终止的目标子进程的ID，若传递-1，则与wait函数相同</span>
<span class="token comment">//      可以等待任意子进程终止</span>
<span class="token comment">// statloc: 与wait函数的statloc参数一样</span>
<span class="token comment">// options: 传递头文件 sys/wait.h 中声明的常量WNOHANG,</span>
<span class="token comment">//          即使没有终止的子进程也不会进入阻塞状态，</span>
<span class="token comment">//          而是返回0并退出函数</span>
<span class="token comment">// 成功时返回终止的子进程ID 或 0 ，失败时返回 -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:waitpid函数示例waitpid.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/wait.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> status<span class="token punctuation">;</span>
    <span class="token comment">// 这里的子进程将通过 return 语句终止</span>
    <span class="token class-name">pid_t</span> pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child PID: %d \\n&quot;</span><span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里的子进程将通过 exit() 函数终止</span>
        pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child PID: %d \\n&quot;</span><span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 之前终止的子进程相关信息将被保存到 status 中</span>
            <span class="token comment">// 同时相关子进程被完全销毁</span>
            <span class="token function">wait</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 通过 WIFEXITED 来验证子进程是否正常终止</span>
            <span class="token comment">// 如果正常终止，则调用 WEXITSTATUS 宏输出子进程返回值</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">WIFEXITED</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child send one: %d \\n&quot;</span><span class="token punctuation">,</span> 
                       <span class="token function">WEXITSTATUS</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 因为之前创建了两个进程，所以再次调用 wait 函数和宏</span>
            <span class="token function">wait</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">WIFEXITED</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child send two: %d \\n&quot;</span><span class="token punctuation">,</span> 
                       <span class="token function">WEXITSTATUS</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 暂停父进程，此时可查看子进程的状态</span>
            <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network$ gcc waitpid.c <span class="token parameter variable">-o</span> waitpid
shiqi@pc:~/network$ ./waitpid
<span class="token function">sleep</span> <span class="token number">3</span> sec.
<span class="token function">sleep</span> <span class="token number">3</span> sec.
<span class="token function">sleep</span> <span class="token number">3</span> sec.
<span class="token function">sleep</span> <span class="token number">3</span> sec.
<span class="token function">sleep</span> <span class="token number">3</span> sec.
Child send <span class="token number">24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="_10-3-信号处理" tabindex="-1"><a class="header-anchor" href="#_10-3-信号处理" aria-hidden="true">#</a> 10.3 信号处理</h3><ul><li><p>Q:信号注册函数原型signal</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;signal.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token function">signal</span><span class="token punctuation">(</span><span class="token keyword">int</span> signo<span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>func<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 为了在产生信号时调用，返回之前注册的函数指针</span>
<span class="token comment">// 函数名: signal</span>
<span class="token comment">// 参数: int signo, void(*func)(int)</span>
<span class="token comment">// 返回类型: 参数为int型，返回void型函数指针</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第一个参数是特殊情况信息，第二个参数为特殊情况下将要调用的函数的地址值(指针)。发生第一个参数代表的情况时，调用第二个参数所指的函数</p></li><li><p>可以在 signal 函数中注册的部分特殊情况和对应的函数</p><ul><li>SIGALRM：已到通过调用 alarm 函数注册时间</li><li>SIGINT：输入 ctrl+c</li><li>SIGCHLD：子进程终止</li></ul></li></ul></li><li><p>Q:alarm函数原型</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token keyword">unsigned</span> <span class="token keyword">int</span> <span class="token function">alarm</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span> seconds<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回 0 或以秒为单位的距 SIGALRM 信号发生所剩时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果调用该函数的同时向它传递一个正整形参数，相应时间后(以秒为单位)将产生 SIGALRM 信号</p></li><li><p>若向该函数传递为 0 ，则之前对 SIGALRM 信号的预约将取消</p></li><li><p>如果通过该函数预约信号后未指定该信号对应的处理函数，则（通过调用 signal 函数）终止进程，不做任何处理</p></li></ul></li><li><p>Q:信号处理示例signal.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;signal.h&gt;</span></span>

<span class="token comment">// 信号处理器(Handler)</span>
<span class="token keyword">void</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token keyword">int</span> sig<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sig <span class="token operator">==</span> SIGALRM<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Time out!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 每隔2秒重复产生 SIGALRM 信号</span>
    <span class="token function">alarm</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">keycontrol</span><span class="token punctuation">(</span><span class="token keyword">int</span> sig<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sig <span class="token operator">==</span> SIGINT<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;CTRL+C pressed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token comment">// 注册 SIGALRM、SIGINT 信号及相应处理器</span>
    <span class="token function">signal</span><span class="token punctuation">(</span>SIGALRM<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">signal</span><span class="token punctuation">(</span>SIGINT<span class="token punctuation">,</span> keycontrol<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">alarm</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;wait...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>产生信号时，将唤醒由于调用 sleep 函数而进入阻塞状态的进程，进程一旦被唤醒，就不会再进入睡眠状态，即使还未到 sleep 函数中规定的时间也是如此</p></li><li><p>编译运行，第一次运行是没有任何输入的运行结果，第二次在运行过程中输入CTRL+C</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch10$ gcc signal.c <span class="token parameter variable">-o</span> signal
shiqi@pc:~/network/ch10$ ./signal
wait<span class="token punctuation">..</span>.
Time out<span class="token operator">!</span>
wait<span class="token punctuation">..</span>.
Time out<span class="token operator">!</span>
wait<span class="token punctuation">..</span>.
Time out<span class="token operator">!</span>
shiqi@pc:~/network/ch10$ ./signal
wait<span class="token punctuation">..</span>.
^CCTRL+C pressed
wait<span class="token punctuation">..</span>.
^CCTRL+C pressed
wait<span class="token punctuation">..</span>.
Time out<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:信号处理函数sigaction</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;signal.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">sigaction</span><span class="token punctuation">(</span><span class="token keyword">int</span> signo<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">sigaction</span> <span class="token operator">*</span> act<span class="token punctuation">,</span>
              <span class="token keyword">struct</span> <span class="token class-name">sigaction</span> <span class="token operator">*</span> oldact<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// signo：传递信号信息，同signal函数</span>
<span class="token comment">// act：对应于第一个参数的信号处理函数（信号处理器）信息</span>
<span class="token comment">// oldact：通过此参数获取之前注册的信号处理函数指针，若不需要则传递0</span>
<span class="token comment">// 成功时返回 0 ，失败时返回 -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>需要声明并初始化 sigaction 结构体变量来调用 sigaction</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">sigaction</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>sa_handler<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">sigset_t</span> sa_mask<span class="token punctuation">;</span>
    <span class="token keyword">int</span> sa_flags<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// sa_handler：保存信号处理函数的指针值</span>
<span class="token comment">// sa_mask和sa_flags：用于指定信号相关的选项和特性，</span>
<span class="token comment">//                   所有位均初始化为0即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:sigaction函数的程序示例</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;signal.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token keyword">int</span> sig<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sig <span class="token operator">==</span> SIGALRM<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Time out!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">alarm</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token comment">// 为了注册信号处理函数，声明 sigaction 结构体变量</span>
    <span class="token comment">// 并在 sa_handler 成员中保存函数指针值</span>
    <span class="token keyword">struct</span> <span class="token class-name">sigaction</span> act<span class="token punctuation">;</span>
    act<span class="token punctuation">.</span>sa_handler <span class="token operator">=</span> timeout<span class="token punctuation">;</span>
    <span class="token comment">// sigemptyset 函数将 sa_mask 成员的所有位初始化为0</span>
    <span class="token function">sigemptyset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>act<span class="token punctuation">.</span>sa_mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
    act<span class="token punctuation">.</span>sa_flags <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">sigaction</span><span class="token punctuation">(</span>SIGALRM<span class="token punctuation">,</span> <span class="token operator">&amp;</span>act<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 注册 SIGALRM 信号的处理器。</span>
    <span class="token comment">// 调用 alarm 函数预约2秒后发生 SIGALRM 信号</span>
    <span class="token function">alarm</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;wait...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch10$ gcc sigaction.c <span class="token parameter variable">-o</span> sigaction
shiqi@pc:~/network/ch10$ ./sigaction
wait<span class="token punctuation">..</span>.
Time out<span class="token operator">!</span>
wait<span class="token punctuation">..</span>.
Time out<span class="token operator">!</span>
wait<span class="token punctuation">..</span>.
Time out<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:使用信号处理技术消灭僵尸进程的示例程序remove_zombie.c</p><ul><li><p>使用子进程终止时会向父进程产生SIGCHLD信号的特性</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;signal.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/wait.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">read_childproc</span><span class="token punctuation">(</span><span class="token keyword">int</span> sig<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> status<span class="token punctuation">;</span>
    <span class="token class-name">pid_t</span> id <span class="token operator">=</span> <span class="token function">waitpid</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>status<span class="token punctuation">,</span> WNOHANG<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">WIFEXITED</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Removed proc id: %d \\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child send: %d \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">WEXITSTATUS</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">sigaction</span> act<span class="token punctuation">;</span>
    act<span class="token punctuation">.</span>sa_handler <span class="token operator">=</span> read_childproc<span class="token punctuation">;</span>
    <span class="token function">sigemptyset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>act<span class="token punctuation">.</span>sa_mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
    act<span class="token punctuation">.</span>sa_flags <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">sigaction</span><span class="token punctuation">(</span>SIGCHLD<span class="token punctuation">,</span> <span class="token operator">&amp;</span>act<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 子进程执行区域</span>
        <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Hi, I&#39;m child process&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">12</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 父进程执行区域</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child proc id: %d\\n&quot;</span><span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 另一子程序执行区域</span>
            <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Hi! I&#39;m child process2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> i<span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child proc id: %d\\n&quot;</span><span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;wait...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch10$ gcc remove_zombie.c <span class="token parameter variable">-o</span> zombie
shiqi@pc:~/network/ch10$ ./zombie
Child proc id: <span class="token number">24086</span>
Hi, I<span class="token string">&#39;m child process
Child proc id: 24087
wait...
Hi! I&#39;</span>m child process2
wait<span class="token punctuation">..</span>.
Removed proc id: <span class="token number">24087</span>
Child send: <span class="token number">24</span>
wait<span class="token punctuation">..</span>.
Removed proc id: <span class="token number">24086</span>
Child send: <span class="token number">12</span>
wait<span class="token punctuation">..</span>.
wait<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="_10-4-基于多任务的并发服务器" tabindex="-1"><a class="header-anchor" href="#_10-4-基于多任务的并发服务器" aria-hidden="true">#</a> 10.4 基于多任务的并发服务器</h3><ul><li><p>Q:基于进程的并发服务器模型是怎样的？实现步骤是怎样</p><ul><li><img src="https://img.shiqi-lu.tech/20210626184246.png" alt=""></li><li>每当有客户端请求服务(连接请求)时，回声服务器端都创建子进程以提供服务</li><li>1.回声服务器端(父进程)通过调用 accept 函数受理连接请求</li><li>2.此时获取的套接字文件描述符创建并传递给子进程</li><li>3.子进程利用传递来的文件描述符提供服务</li></ul></li><li><p>Q:实现并发服务器的基于多进程实现的回声服务器echo_mpserv.c</p><ul><li><p>注意，在调用 fork 函数后，要将无关的套接字文件描述符关掉</p></li><li><p><img src="https://img.shiqi-lu.tech/20210626191027.png" alt=""></p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;signal.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/wait.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;arpa/inet.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">BUF_SIZE</span> <span class="token expression"><span class="token number">30</span></span></span>

<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>message<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">read_childproc</span><span class="token punctuation">(</span><span class="token keyword">int</span> sig<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>
    <span class="token keyword">int</span> status<span class="token punctuation">;</span>
    pid <span class="token operator">=</span> <span class="token function">waitpid</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>status<span class="token punctuation">,</span> WNOHANG<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;removed proc id: %d \\n&quot;</span><span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> serv_sock<span class="token punctuation">,</span> clnt_sock<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> serv_adr<span class="token punctuation">,</span> clnt_adr<span class="token punctuation">;</span>

    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">sigaction</span> act<span class="token punctuation">;</span>
    <span class="token class-name">socklen_t</span> adr_sz<span class="token punctuation">;</span>
    <span class="token keyword">int</span> str_len<span class="token punctuation">,</span> state<span class="token punctuation">;</span>
    <span class="token keyword">char</span> buf<span class="token punctuation">[</span>BUF_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Usage: %s &lt;port&gt;\\n&quot;</span><span class="token punctuation">,</span> argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 防止产生僵尸进程</span>
    act<span class="token punctuation">.</span>sa_handler <span class="token operator">=</span> read_childproc<span class="token punctuation">;</span>
    <span class="token function">sigemptyset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>act<span class="token punctuation">.</span>sa_mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
    act<span class="token punctuation">.</span>sa_flags <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    state <span class="token operator">=</span> <span class="token function">sigaction</span><span class="token punctuation">(</span>SIGCHLD<span class="token punctuation">,</span> <span class="token operator">&amp;</span>act<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    serv_sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>serv_adr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_adr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_family <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr <span class="token operator">=</span> <span class="token function">htonl</span><span class="token punctuation">(</span>INADDR_ANY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_port <span class="token operator">=</span> <span class="token function">htons</span><span class="token punctuation">(</span><span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">bind</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span>
             <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>serv_adr<span class="token punctuation">,</span>
             <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_adr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;bind() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">listen</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;listen() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        adr_sz  <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>clnt_adr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这个套接字fork之后，父子进程均会有</span>
        clnt_sock <span class="token operator">=</span> <span class="token function">accept</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span>
                           <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>clnt_adr<span class="token punctuation">,</span>
                           <span class="token operator">&amp;</span>adr_sz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>clnt_sock <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;new client connected...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">close</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 子进程运行区域</span>
            <span class="token comment">// 服务器套接字文件描述符同样也传递到子进程中</span>
            <span class="token function">close</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>str_len <span class="token operator">=</span> <span class="token function">read</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> BUF_SIZE<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">write</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> str_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">close</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;client disconnected...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">close</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><p>服务端</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch10$ gcc echo_mpserv.c <span class="token parameter variable">-o</span> mpserv
shiqi@pc:~/network/ch10$ ./mpserv <span class="token number">9190</span>
new client connected<span class="token punctuation">..</span>.
new client connected<span class="token punctuation">..</span>.
client disconnected<span class="token punctuation">..</span>.
removed proc id: <span class="token number">24342</span>
client disconnected<span class="token punctuation">..</span>.
removed proc id: <span class="token number">24227</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户端1</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch04$ ./eclient <span class="token number">127.0</span>.0.1 <span class="token number">9190</span>
Connceted<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
Input message<span class="token punctuation">(</span>Q to quit<span class="token punctuation">)</span>: zz
Message from server: zz
Input message<span class="token punctuation">(</span>Q to quit<span class="token punctuation">)</span>: ad
Message from server: ad
Input message<span class="token punctuation">(</span>Q to quit<span class="token punctuation">)</span>: q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户端2</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch04$ ./eclient <span class="token number">127.0</span>.0.1 <span class="token number">9190</span>
Connceted<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
Input message<span class="token punctuation">(</span>Q to quit<span class="token punctuation">)</span>: zmmz
Message from server: zmmz
Input message<span class="token punctuation">(</span>Q to quit<span class="token punctuation">)</span>: q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="_10-5-分割tcp的i-o程序" tabindex="-1"><a class="header-anchor" href="#_10-5-分割tcp的i-o程序" aria-hidden="true">#</a> 10.5 分割TCP的I/O程序</h3><ul><li><p>Q:分割I/O程序是什么？</p><ul><li>分割数据收发过程，分割后，不同进程分别负责输入和输出</li><li>优点：</li><li>1.程序的实现更简单</li><li>2.提高频繁交换数据的程序性能</li><li><img src="https://img.shiqi-lu.tech/20210626192821.png" alt=""></li><li>图10-6左侧演示的是之前的回声客户端数据交换方式，右侧演示的是分割IO后的客户端数据传输方式。服务器端相同，不同的是客户端区域。分割I/O后的客户端发送数据时不必考虑接收数据的情况，因此可以连续发送数据，由此提高同一时间内传输的数据量。这种差异在网速较慢时尤为明显</li></ul></li><li><p>Q:回声客户端的I/O程序分割示例echo_mpclient.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;arpa/inet.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">BUF_SIZE</span> <span class="token expression"><span class="token number">30</span></span></span>

<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>message<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">read_routine</span><span class="token punctuation">(</span><span class="token keyword">int</span> sock<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> str_len <span class="token operator">=</span> <span class="token function">read</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> BUF_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str_len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        buf<span class="token punctuation">[</span>str_len<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Message from server: %s&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">write_routine</span><span class="token punctuation">(</span><span class="token keyword">int</span> sock<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fgets</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> BUF_SIZE<span class="token punctuation">,</span> <span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">strcmp</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token string">&quot;q\\n&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">strcmp</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token string">&quot;Q\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 调用shutdown函数向服务器端传递EOF</span>
            <span class="token comment">// return后即可调用主函数的close函数传递EOF</span>
            <span class="token comment">// 因为主函数的fork函数复制了文件描述符，</span>
            <span class="token comment">// 无法通过1次close函数调用传递EOF，</span>
            <span class="token comment">// 因此需要通过shutdown函数另外传递</span>
            <span class="token function">shutdown</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> SHUT_WR<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">write</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token function">strlen</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> sock<span class="token punctuation">;</span>
    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>
    <span class="token keyword">char</span> buf<span class="token punctuation">[</span>BUF_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> serv_adr<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">!=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Usage : %s &lt;IP&gt; &lt;port&gt;\\n&quot;</span><span class="token punctuation">,</span> argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>serv_adr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_adr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_family <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr <span class="token operator">=</span> <span class="token function">inet_addr</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_port <span class="token operator">=</span> <span class="token function">htons</span><span class="token punctuation">(</span><span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">connect</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span>
                <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>serv_adr<span class="token punctuation">,</span>
                <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_adr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;connect() error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">write_routine</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">read_routine</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>sock<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行，服务端可用本章的echo_mpserv.c</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch10$ gcc echo_mpclient.c <span class="token parameter variable">-o</span> mpclient
shiqi@pc:~/network/ch10$ ./mpclient <span class="token number">127.0</span>.0.1 <span class="token number">9190</span>
px
Message from server: px
rt
Message from server: rt
q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="第11章-进程间通信" tabindex="-1"><a class="header-anchor" href="#第11章-进程间通信" aria-hidden="true">#</a> 第11章 进程间通信</h2><h3 id="_11-1-进程间通信的基本概念" tabindex="-1"><a class="header-anchor" href="#_11-1-进程间通信的基本概念" aria-hidden="true">#</a> 11.1 进程间通信的基本概念</h3><ul><li><p>Q:创建管道的pipe函数原型</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">pipe</span><span class="token punctuation">(</span><span class="token keyword">int</span> filedes<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// filedes[0]：通过管道接收数据时使用的文件描述符，即管道出口</span>
<span class="token comment">// filedes[1]：通过管道传输数据时使用的文件描述符，即管道入口</span>
<span class="token comment">// 成功时返回0，失败时返回-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:pipe函数的示例程序pipe1.c，父进程与子进程进行数据交换</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">BUF_SIZE</span> <span class="token expression"><span class="token number">30</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> fds<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Who are you?&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> buf<span class="token punctuation">[</span>BUF_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>

    <span class="token function">pipe</span><span class="token punctuation">(</span>fds<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">write</span><span class="token punctuation">(</span>fds<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> str<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">read</span><span class="token punctuation">(</span>fds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> BUF_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">puts</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch11$ gcc pipe1.c <span class="token parameter variable">-o</span> pipe
shiqi@pc:~/network/ch11$ ./pipe
Who are you?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:2个进程使用1个管道进行双向数据交换的程序示例pipe2.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">BUF_SIZE</span> <span class="token expression"><span class="token number">30</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> fds<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> str1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Who are you?&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> str2<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Thank you for your message&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> buf<span class="token punctuation">[</span>BUF_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>

    <span class="token function">pipe</span><span class="token punctuation">(</span>fds<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">write</span><span class="token punctuation">(</span>fds<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> str1<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这个不能注释，注释后，下一个read会把管道内数据取走</span>
        <span class="token comment">// 而父进程则阻塞在read函数中无限等待</span>
        <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">read</span><span class="token punctuation">(</span>fds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> BUF_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child proc output: %s\\n&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">read</span><span class="token punctuation">(</span>fds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> BUF_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Parent proc output: %s\\n&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">write</span><span class="token punctuation">(</span>fds<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> str2<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch11$ gcc pipe2.c <span class="token parameter variable">-o</span> pipe2
shiqi@pc:~/network/ch11$ ./pipe2
Parent proc output: Who are you?
Child proc output: Thank you <span class="token keyword">for</span> your message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Q:2个进程使用2个管道进行双向数据交换的程序示例pipe3.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">BUF_SIZE</span> <span class="token expression"><span class="token number">30</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> fds1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fds2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> str1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Who are you?&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> str2<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Thank you for your message&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> buf<span class="token punctuation">[</span>BUF_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>

    <span class="token function">pipe</span><span class="token punctuation">(</span>fds1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">pipe</span><span class="token punctuation">(</span>fds2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">write</span><span class="token punctuation">(</span>fds1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> str1<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">read</span><span class="token punctuation">(</span>fds2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> BUF_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child proc output: %s\\n&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">read</span><span class="token punctuation">(</span>fds1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> BUF_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Parent proc output: %s\\n&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">write</span><span class="token punctuation">(</span>fds2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> str2<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch11$ gcc pipe3.c <span class="token parameter variable">-o</span> pipe3
shiqi@pc:~/network/ch11$ ./pipe3
Parent proc output: Who are you?
Child proc output: Thank you <span class="token keyword">for</span> your message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="_11-2-运用进程间通信" tabindex="-1"><a class="header-anchor" href="#_11-2-运用进程间通信" aria-hidden="true">#</a> 11.2 运用进程间通信</h3><ul><li><p>Q:使用多进程的回声服务器端，并将回声客户端传输的字符串按序保持到文件中的程序示例echo_storeserv.c</p><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;signal.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/wait.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;arpa/inet.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">BUF_SIZE</span> <span class="token expression"><span class="token number">30</span></span></span>

<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>message<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">read_childproc</span><span class="token punctuation">(</span><span class="token keyword">int</span> sig<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>
    <span class="token keyword">int</span> status<span class="token punctuation">;</span>
    pid <span class="token operator">=</span> <span class="token function">waitpid</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>status<span class="token punctuation">,</span> WNOHANG<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;removed proc id: %d \\n&quot;</span><span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> serv_sock<span class="token punctuation">,</span> clnt_sock<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> serv_adr<span class="token punctuation">,</span> clnt_adr<span class="token punctuation">;</span>
    <span class="token keyword">int</span> fds<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">sigaction</span> act<span class="token punctuation">;</span>
    <span class="token class-name">socklen_t</span> adr_sz<span class="token punctuation">;</span>
    <span class="token keyword">int</span> str_len<span class="token punctuation">,</span> state<span class="token punctuation">;</span>
    <span class="token keyword">char</span> buf<span class="token punctuation">[</span>BUF_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Usage : %s &lt;port&gt;\\n&quot;</span><span class="token punctuation">,</span> argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    act<span class="token punctuation">.</span>sa_handler <span class="token operator">=</span> read_childproc<span class="token punctuation">;</span>
    <span class="token function">sigemptyset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>act<span class="token punctuation">.</span>sa_mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
    act<span class="token punctuation">.</span>sa_flags <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    state <span class="token operator">=</span> <span class="token function">sigaction</span><span class="token punctuation">(</span>SIGCHLD<span class="token punctuation">,</span> <span class="token operator">&amp;</span>act<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    serv_sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>serv_adr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_adr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_family <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr <span class="token operator">=</span> <span class="token function">htonl</span><span class="token punctuation">(</span>INADDR_ANY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    serv_adr<span class="token punctuation">.</span>sin_port <span class="token operator">=</span> <span class="token function">htons</span><span class="token punctuation">(</span><span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">bind</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span>
             <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>serv_adr<span class="token punctuation">,</span>
             <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_adr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;bind() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">listen</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;listen() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">pipe</span><span class="token punctuation">(</span>fds<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        FILE <span class="token operator">*</span> fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;echomsg.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> msgbuf<span class="token punctuation">[</span>BUF_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">,</span> len<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            len <span class="token operator">=</span> <span class="token function">read</span><span class="token punctuation">(</span>fds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> msgbuf<span class="token punctuation">,</span> BUF_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span>msgbuf<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">,</span> fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        adr_sz <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>clnt_adr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        clnt_sock <span class="token operator">=</span> <span class="token function">accept</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span>
                           <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>clnt_adr<span class="token punctuation">,</span>
                           <span class="token operator">&amp;</span>adr_sz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>clnt_sock <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;new client connected...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">close</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>str_len <span class="token operator">=</span> <span class="token function">read</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> BUF_SIZE<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">write</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> str_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">write</span><span class="token punctuation">(</span>fds<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> str_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">close</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;client disconnected...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">close</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编译运行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi@pc:~/network/ch11$ gcc echo_storeserv.c <span class="token parameter variable">-o</span> serv
shiqi@pc:~/network/ch11$ ./serv <span class="token number">9190</span>
new client connected<span class="token punctuation">..</span>.
client disconnected<span class="token punctuation">..</span>.
removed proc id: <span class="token number">25075</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,24),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","tcpip-network-programming-3.html.vue"]]);export{k as default};
