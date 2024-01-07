import{_ as n,o as s,c as a,e}from"./app-n0xwCUxG.js";const p={},t=e(`<h1 id="封装、抽象、继承、多态的多语言实现" tabindex="-1"><a class="header-anchor" href="#封装、抽象、继承、多态的多语言实现" aria-hidden="true">#</a> 封装、抽象、继承、多态的多语言实现</h1><h2 id="封装-encapsulation" tabindex="-1"><a class="header-anchor" href="#封装-encapsulation" aria-hidden="true">#</a> 封装（Encapsulation）</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><ul><li><p>封装也叫信息隐藏或数据访问保护。类通过暴露有限的访问接口，授权外部仅能通过类提供的方式(或叫函数)来访问内部信息或数据</p></li><li><p>封装这个特性，需要编程语言本身支持访问权限控制。如 private、public 等关键字就是 Java 语言中的访问权限控制语法。private 关键字修饰的属性只能类本身访问，可以保护其不被类之外的代码直接访问。否则任意外部代码都可以直接访问、修改属性，也就没办法达到隐藏信息和保护数据的目的了，也就无法支持封装特性了</p></li><li><p>即隐藏部分属性对外不可见</p></li></ul><h3 id="python-实现" tabindex="-1"><a class="header-anchor" href="#python-实现" aria-hidden="true">#</a> Python 实现</h3><ul><li><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__private_data <span class="token operator">=</span> <span class="token number">42</span>  <span class="token comment"># 使用双下划线开头定义私有属性</span>

    <span class="token comment"># 公有方法用于访问私有属性</span>
    <span class="token keyword">def</span> <span class="token function">get_private_data</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__private_data

    <span class="token keyword">def</span> <span class="token function">set_private_data</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__private_data <span class="token operator">=</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="c-实现" tabindex="-1"><a class="header-anchor" href="#c-实现" aria-hidden="true">#</a> C 实现</h3><ul><li><p>参考</p><ul><li>https://blog.csdn.net/qq_26768741/article/details/52563090</li></ul></li><li><p>利用头文件，在.h头文件中声明，在 .c 文件中定义，即可隐藏内部信息</p><ul><li><p>头文件 head.h</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">POINT_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">POINT_H</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Point</span><span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Point</span> point<span class="token punctuation">;</span>

point <span class="token operator">*</span> <span class="token function">new_project</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建对象</span>
<span class="token keyword">void</span> <span class="token function">free_point</span><span class="token punctuation">(</span>point <span class="token operator">*</span>point_<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//释放空间</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>源文件</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;head.h&quot;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>  <span class="token comment">//结构体中存在成员变量</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    <span class="token keyword">int</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

point <span class="token operator">*</span><span class="token function">new_point</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//相当于是一个构造函数</span>
    point <span class="token operator">*</span>new_point_ <span class="token operator">=</span> <span class="token punctuation">(</span>point <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> new_point_<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">free_point</span><span class="token punctuation">(</span>point <span class="token operator">*</span>point_<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//相当于是一个析构函数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>point_ <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">free</span><span class="token punctuation">(</span>point_<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>利用结构体模拟</p><ul><li><p>结合头文件隐藏即可达到封装的效果</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 定义结构体用于封装数据</span>
<span class="token keyword">struct</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> privateData<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 封装操作数据的函数</span>
<span class="token keyword">void</span> <span class="token function">setPrivateData</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">MyClass</span><span class="token operator">*</span> obj<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj<span class="token operator">-&gt;</span>privateData <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">getPrivateData</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">MyClass</span><span class="token operator">*</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> obj<span class="token operator">-&gt;</span>privateData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">MyClass</span> myObject<span class="token punctuation">;</span>
    <span class="token function">setPrivateData</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>myObject<span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Private data: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">getPrivateData</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>myObject<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Private data: 42</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="c-实现-1" tabindex="-1"><a class="header-anchor" href="#c-实现-1" aria-hidden="true">#</a> C++实现</h3><ul><li><p>通过关键字public、private和protected来实现</p></li><li><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> privateData<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 公有成员函数，用于访问和修改私有数据</span>
    <span class="token keyword">int</span> <span class="token function">getPrivateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> privateData<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">setPrivateData</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        privateData <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="java实现" tabindex="-1"><a class="header-anchor" href="#java实现" aria-hidden="true">#</a> Java实现</h3><ul><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> privateData<span class="token punctuation">;</span>

    <span class="token comment">// 公有方法用于访问私有数据</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getPrivateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> privateData<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPrivateData</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        privateData <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="go-实现" tabindex="-1"><a class="header-anchor" href="#go-实现" aria-hidden="true">#</a> Go 实现</h3><ul><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> MyStruct <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    PublicField  <span class="token builtin">int</span>    <span class="token comment">// 公有字段</span>
    privateField <span class="token builtin">string</span> <span class="token comment">// 私有字段</span>
<span class="token punctuation">}</span>

<span class="token comment">// 公有方法，可被外部包访问</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyStruct<span class="token punctuation">)</span> <span class="token function">PublicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 私有方法，只能在内部包内访问</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyStruct<span class="token punctuation">)</span> <span class="token function">privateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="javascript-实现" tabindex="-1"><a class="header-anchor" href="#javascript-实现" aria-hidden="true">#</a> JavaScript 实现</h3><ul><li><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_privateData <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// 使用下划线来表示私有属性</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 公有方法</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 私有方法</span>
    <span class="token function">_privateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myObject<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="抽象-abstraction" tabindex="-1"><a class="header-anchor" href="#抽象-abstraction" aria-hidden="true">#</a> 抽象（Abstraction）</h2><h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3><ul><li><p>主要讲如何隐藏方法的具体实现，让调用者只需要关心方法提供了哪些功能，并不需要知道这些功能是如何实现的</p></li><li><p>可通过编程语言提供的接口类（比如 Java 中的 interface 关键字语法）或者抽象类（比如 Java 中的 abstract 关键字语法）这两种语法机制，来实现抽象这一特性</p></li><li><p>即从更通用的角度设计类，并提供对外服务，使调用方不需了解具体实现</p></li><li><p>抽象类侧重代码复用，接口侧重解耦</p></li></ul><h3 id="python-实现-1" tabindex="-1"><a class="header-anchor" href="#python-实现-1" aria-hidden="true">#</a> Python 实现</h3><ul><li><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> abc <span class="token keyword">import</span> ABC<span class="token punctuation">,</span> abstractmethod

<span class="token comment"># 抽象类</span>
<span class="token keyword">class</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span>ABC<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 抽象方法</span>
    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">draw</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token comment"># 普通方法也可以有</span>
    <span class="token keyword">def</span> <span class="token function">common_function</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

<span class="token comment"># 实现抽象类的子类</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span>Shape<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">draw</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 绘制圆形</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Drawing a circle.&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span><span class="token punctuation">(</span>Shape<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">draw</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 绘制正方形</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Drawing a square.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="c实现" tabindex="-1"><a class="header-anchor" href="#c实现" aria-hidden="true">#</a> C实现</h3><ul><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 抽象示例</span>

<span class="token comment">// 定义抽象函数类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>AbstractFunction<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 实现具体的函数</span>
<span class="token keyword">void</span> <span class="token function">concreteFunctionA</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;This is concrete function A.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">concreteFunctionB</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;This is concrete function B.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用抽象函数指针</span>
<span class="token keyword">void</span> <span class="token function">useAbstractFunction</span><span class="token punctuation">(</span>AbstractFunction function<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    AbstractFunction funcPtr<span class="token punctuation">;</span>

    funcPtr <span class="token operator">=</span> concreteFunctionA<span class="token punctuation">;</span>
    <span class="token function">useAbstractFunction</span><span class="token punctuation">(</span>funcPtr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    funcPtr <span class="token operator">=</span> concreteFunctionB<span class="token punctuation">;</span>
    <span class="token function">useAbstractFunction</span><span class="token punctuation">(</span>funcPtr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="c-实现-2" tabindex="-1"><a class="header-anchor" href="#c-实现-2" aria-hidden="true">#</a> C++实现</h3><ul><li><p>抽象类中可以包含纯虚函数，即在类内只声明而不定义虚函数，要求派生类必须实现这些纯虚函数。抽象类不能被实例化，只能作为其他类的基类，通过继承实现具体功能</p></li><li><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 抽象类</span>
<span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 纯虚函数，要求派生类必须实现</span>
    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 普通函数也可以有</span>
    <span class="token keyword">void</span> <span class="token function">commonFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 派生类实现抽象类的纯虚函数</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Shape</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>
        <span class="token comment">// 绘制圆形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Shape</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>
        <span class="token comment">// 绘制正方形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="java实现-1" tabindex="-1"><a class="header-anchor" href="#java实现-1" aria-hidden="true">#</a> Java实现</h3><ul><li><p>抽象类</p></li><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 抽象类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token comment">// 抽象方法，要求子类必须实现</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 普通方法也可以有</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">commonFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现抽象类的子类</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 绘制圆形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 绘制正方形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>接口</p></li><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 定义一个接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 抽象方法</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现接口</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 绘制圆形的具体实现</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Drawing a circle.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 绘制正方形的具体实现</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Drawing a square.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Shape</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Shape</span> square <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 多态调用，根据实际对象的类型来选择正确的方法实现</span>
        circle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Drawing a circle.</span>
        square<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Drawing a square.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="go-实现-1" tabindex="-1"><a class="header-anchor" href="#go-实现-1" aria-hidden="true">#</a> Go 实现</h3><ul><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token comment">// 定义一个接口</span>
<span class="token keyword">type</span> Shape <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现接口的类型</span>
<span class="token keyword">type</span> Circle <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c Circle<span class="token punctuation">)</span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 绘制圆形</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Square <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Square<span class="token punctuation">)</span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 绘制正方形</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> shape Shape

    shape <span class="token operator">=</span> Circle<span class="token punctuation">{</span><span class="token punctuation">}</span>
    shape<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 绘制圆形</span>

    shape <span class="token operator">=</span> Square<span class="token punctuation">{</span><span class="token punctuation">}</span>
    shape<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 绘制正方形</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><ul><li><p>使用类的继承和构造函数可以实现抽象。还可以使用 static 关键字定义静态方法</p></li><li><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 抽象方法，需要在子类中实现</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Method not implemented&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">radius</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实现绘制圆形</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 静态方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="继承-inheritance" tabindex="-1"><a class="header-anchor" href="#继承-inheritance" aria-hidden="true">#</a> 继承（Inheritance）</h2><h3 id="定义-2" tabindex="-1"><a class="header-anchor" href="#定义-2" aria-hidden="true">#</a> 定义</h3><ul><li><p>继承用来表示类之间的is-a关系，分单继承和多继承</p></li><li><p>编程语言需要提供特殊的语法机制来支持，比如 Java 使用 extends 关键字来实现继承，C++ 使用冒号（class B : public A），Python 使用 parentheses ()，Ruby 使用 &lt;。不过，有些编程语言只支持单继承，不支持多重继承，比如 Java、PHP、C#、Ruby 等，而有些编程语言既支持单重继承，也支持多重继承，比如 C++、Python、Perl 等</p></li></ul><h3 id="python-实现-2" tabindex="-1"><a class="header-anchor" href="#python-实现-2" aria-hidden="true">#</a> Python 实现</h3><ul><li><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 基类</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># ...</span>
        <span class="token keyword">pass</span>

<span class="token comment"># 派生类继承基类</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">bark</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 狗的特有行为</span>
        <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">meow</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 猫的特有行为</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="c-实现-3" tabindex="-1"><a class="header-anchor" href="#c-实现-3" aria-hidden="true">#</a> C 实现</h3><ul><li><p>在 C 语言中，没有原生的继承机制，但可以通过结构体嵌套和函数指针来模拟实现继承的效果。我们可以在子结构体中嵌套基结构体，并使用函数指针来指向子结构体的特定实现</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 基类结构体</span>
<span class="token keyword">struct</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>sound<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 虚函数（函数指针）</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 子类结构体，继承自Animal</span>
<span class="token keyword">struct</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Animal</span> base<span class="token punctuation">;</span> <span class="token comment">// 嵌套基类结构体</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Animal</span> base<span class="token punctuation">;</span> <span class="token comment">// 嵌套基类结构体</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 基类的虚函数实现</span>
<span class="token keyword">void</span> <span class="token function">animalSound</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Animal makes a sound.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子类的虚函数实现</span>
<span class="token keyword">void</span> <span class="token function">dogSound</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Dog barks: Woof Woof!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">catSound</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Cat meows: Meow Meow!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Dog</span> myDog<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Cat</span> myCat<span class="token punctuation">;</span>

    <span class="token comment">// 设置虚函数指针</span>
    myDog<span class="token punctuation">.</span>base<span class="token punctuation">.</span>sound <span class="token operator">=</span> dogSound<span class="token punctuation">;</span>
    myCat<span class="token punctuation">.</span>base<span class="token punctuation">.</span>sound <span class="token operator">=</span> catSound<span class="token punctuation">;</span>

    <span class="token comment">// 调用虚函数，实现多态效果</span>
    myDog<span class="token punctuation">.</span>base<span class="token punctuation">.</span><span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Dog的声音</span>
    myCat<span class="token punctuation">.</span>base<span class="token punctuation">.</span><span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Cat的声音</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="c-实现-4" tabindex="-1"><a class="header-anchor" href="#c-实现-4" aria-hidden="true">#</a> C++实现</h3><ul><li><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 基类</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 派生类继承基类</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token comment">// 狗的特有行为</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">meow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token comment">// 猫的特有行为</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="java实现-2" tabindex="-1"><a class="header-anchor" href="#java实现-2" aria-hidden="true">#</a> Java实现</h3><ul><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 基类</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 派生类继承基类</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 狗的特有行为</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">meow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 猫的特有行为</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="go-实现-2" tabindex="-1"><a class="header-anchor" href="#go-实现-2" aria-hidden="true">#</a> Go 实现</h3><ul><li><p>在 Go 中，没有传统的类继承的概念，但我们可以使用组合来实现类似继承的效果。通过在一个结构体中嵌入另一个结构体，我们可以将嵌入结构体的字段和方法合并到外层结构体中，从而达到复用代码的目的</p></li><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token comment">// 基类</span>
<span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 派生类，通过嵌入 Animal 实现类似继承</span>
<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Animal
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d Dog<span class="token punctuation">)</span> <span class="token function">Bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 狗的特有行为</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="javascript-1" tabindex="-1"><a class="header-anchor" href="#javascript-1" aria-hidden="true">#</a> JavaScript</h3><ul><li><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> breed</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>breed <span class="token operator">=</span> breed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实现狗的声音</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="多态-polymorphism" tabindex="-1"><a class="header-anchor" href="#多态-polymorphism" aria-hidden="true">#</a> 多态（Polymorphism）</h2><h3 id="定义-3" tabindex="-1"><a class="header-anchor" href="#定义-3" aria-hidden="true">#</a> 定义</h3><ul><li><p>多态是指子类可以替换父类，在实际的代码运行过程中，调用子类的方法实现</p></li><li><p>可通过「继承加方法重写」、「接口类语法」、「duck-typing」三种方法实现多态</p></li><li><p>duck-typing</p><ul><li>只要两个类具有相同的方法，就可以实现多态，并不要求两个类之间有任何关系</li></ul></li></ul><h3 id="python-实现-3" tabindex="-1"><a class="header-anchor" href="#python-实现-3" aria-hidden="true">#</a> Python 实现</h3><ul><li><p>由于 Python 是动态类型语言，不需要显式指定类型，所以可以根据实际对象的类型来动态绑定方法</p></li><li><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 基类</span>
<span class="token keyword">class</span> <span class="token class-name">Shape</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">draw</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># ...</span>
        <span class="token keyword">pass</span>

<span class="token comment"># 子类实现方法</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span>Shape<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">draw</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 绘制圆形</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Drawing a circle.&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span><span class="token punctuation">(</span>Shape<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">draw</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 绘制正方形</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Drawing a square.&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 多态调用，根据引用指向的实际对象类型来选择正确的方法实现</span>
<span class="token keyword">def</span> <span class="token function">draw_shape</span><span class="token punctuation">(</span>shape<span class="token punctuation">)</span><span class="token punctuation">:</span>
    shape<span class="token punctuation">.</span>draw<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    circle <span class="token operator">=</span> Circle<span class="token punctuation">(</span><span class="token punctuation">)</span>
    square <span class="token operator">=</span> Square<span class="token punctuation">(</span><span class="token punctuation">)</span>

    draw_shape<span class="token punctuation">(</span>circle<span class="token punctuation">)</span>  <span class="token comment"># 输出：Drawing a circle.</span>
    draw_shape<span class="token punctuation">(</span>square<span class="token punctuation">)</span>  <span class="token comment"># 输出：Drawing a square.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="c实现-1" tabindex="-1"><a class="header-anchor" href="#c实现-1" aria-hidden="true">#</a> C实现</h3><ul><li><p>在 C 语言中，多态通常通过函数指针和函数回调来实现。函数指针允许在运行时动态绑定不同的函数实现，从而实现多态的效果</p></li><li><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 多态函数接口</span>
<span class="token keyword">typedef</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>PolymorphismFunction<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 多态函数</span>
<span class="token keyword">void</span> <span class="token function">dogSound</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Dog barks: Woof Woof!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">catSound</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Cat meows: Meow Meow!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    PolymorphismFunction animalSounds<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>dogSound<span class="token punctuation">,</span> catSound<span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> choice<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter 0 for dog or 1 for cat: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>choice<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 多态调用，根据选择调用不同的函数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>choice <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> choice <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        animalSounds<span class="token punctuation">[</span>choice<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid choice.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="c-实现-5" tabindex="-1"><a class="header-anchor" href="#c-实现-5" aria-hidden="true">#</a> C++实现</h3><ul><li><p>C++的多态还支持：</p><ul><li>C++语言允许函数重载和运算符重载</li><li>C++语言通过定义虚函数来支持动态联编，动态联编是多态性的一个重要的特征</li></ul></li><li><p>多态特性的工作依赖虚函数的定义，在需要解决多态问题的重载成员函数前，加上virtual关键字，那么该成员函数就变成了虚函数，从上例代码运行的结果看，系统成功的分辨出了对象的真实类型，成功的调用了各自的重载成员函数。如果在基类某些函数前面声明为virtual,则C++编译器会在内存对象模型前面插入一个虚函数指针，该指针指向一个虚函数表，正是因为我们可以改变虚函数指针所指函数表地址，从而实现其多态操作</p></li><li><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 基类</span>
<span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 虚函数</span>
    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 派生类实现虚函数</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Shape</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>
        <span class="token comment">// 绘制圆形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Shape</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>
        <span class="token comment">// 绘制正方形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 多态调用，根据指针所指向的具体对象的类型来选择正确的函数实现</span>
<span class="token keyword">void</span> <span class="token function">drawShape</span><span class="token punctuation">(</span><span class="token keyword">const</span> Shape<span class="token operator">*</span> shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    shape<span class="token operator">-&gt;</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Circle circle<span class="token punctuation">;</span>
    Square square<span class="token punctuation">;</span>

    <span class="token function">drawShape</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绘制圆形</span>
    <span class="token function">drawShape</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>square<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绘制正方形</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="java实现-3" tabindex="-1"><a class="header-anchor" href="#java实现-3" aria-hidden="true">#</a> Java实现</h3><ul><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 基类</span>
<span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子类实现方法</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 绘制圆形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 绘制正方形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 多态调用，根据引用指向的实际对象类型来选择正确的方法实现</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">drawShape</span><span class="token punctuation">(</span><span class="token class-name">Shape</span> shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        shape<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Shape</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Shape</span> square <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">drawShape</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绘制圆形</span>
        <span class="token function">drawShape</span><span class="token punctuation">(</span>square<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绘制正方形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="go-实现-3" tabindex="-1"><a class="header-anchor" href="#go-实现-3" aria-hidden="true">#</a> Go 实现</h3><ul><li><p>在 Go 中，多态是通过接口（interface）实现的。由于 Go 的接口是隐式实现的，不需要显式声明类型实现了哪个接口，只要一个类型实现了接口所需的方法，它就被视为实现了该接口。这使得在 Go 中实现多态更加简洁和灵活</p></li><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token comment">// 定义一个接口</span>
<span class="token keyword">type</span> Shape <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现接口的类型</span>
<span class="token keyword">type</span> Circle <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c Circle<span class="token punctuation">)</span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 绘制圆形</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Square <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Square<span class="token punctuation">)</span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 绘制正方形</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    shapes <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Shape<span class="token punctuation">{</span>Circle<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Square<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> shape <span class="token operator">:=</span> <span class="token keyword">range</span> shapes <span class="token punctuation">{</span>
        shape<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="javascript实现" tabindex="-1"><a class="header-anchor" href="#javascript实现" aria-hidden="true">#</a> JavaScript实现</h3><ul><li><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实现绘制圆形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实现绘制正方形</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> shapes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
shapes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">shape</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    shape<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 根据实际类型调用不同的绘制方法</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,61),c=[t];function i(o,l){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","object-oriented-compare.html.vue"]]);export{d as default};
