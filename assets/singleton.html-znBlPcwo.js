import{_ as n,o as s,c as a,e as t}from"./app-n0xwCUxG.js";const e={},p=t(`<h1 id="单例模式-singleton" tabindex="-1"><a class="header-anchor" href="#单例模式-singleton" aria-hidden="true">#</a> 单例模式 (Singleton)</h1><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><ul><li><p>确保一个类只有一个实例，并提供一个全局访问点来访问这个唯一实例</p></li><li><p>Ensure a class has only one instance, and provide a global point of access to it</p></li></ul><h2 id="设计时需考虑的点" tabindex="-1"><a class="header-anchor" href="#设计时需考虑的点" aria-hidden="true">#</a> 设计时需考虑的点</h2><ul><li><p>1.考虑对象创建时的线程安全问题</p></li><li><p>2.考虑是否支持延迟加载</p></li><li><p>3.考虑 getInstance() 性能是否高(是否加锁)</p></li><li><p>4.构造函数必须具有private访问权限，才能避免通过关键字new创建实例</p></li></ul><h2 id="实现的3点注意" tabindex="-1"><a class="header-anchor" href="#实现的3点注意" aria-hidden="true">#</a> 实现的3点注意</h2><ul><li><p>1.单例类构造函数的可见性为private，这样才能避免外部通过 new 创建实例</p></li><li><p>2.提供一个类型为自身的静态私有成员变量</p></li><li><p>3.提供一个公有的静态工厂方法</p></li></ul><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><ul><li><p>1.提供了对唯一实例的受控访问。因为单例类封装了它的唯一实例，所以它可以严格控制客户怎样以及何时访问它，并为设计及开发团队提供了共享的概念</p></li><li><p>2.由于在内存中只存在一个对象，因此可以节约系统资源，对于一些需要频繁创建和销毁的对象，可提高系统性能</p></li><li><p>3.允许可变数目的实例。基于单例模式可以进行扩展，使用与控制单例对象相似的方法来获得指定个数的实例对象</p></li></ul><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2><ul><li><p>1.由于单例模式中没有抽象层，因此单例类的扩展有很大的困难</p></li><li><p>2.单例类的职责过重，在一定程度上违背了单一职责原则，因为单例类既提供了业务方法，又提供了创建对象的方法（工厂方法），将对象的创建和对象本身的功能耦合在一起</p></li><li><p>3.现在很多面向对象语言(如Java、C# )的运行环境都提供了自动垃圾回收技术，因此如果实例化的共享对象长时间不被利用，系统会认为它是垃圾,会自动销毁并回收资源，下次利用时又将重新实例化，这将导致共享的单例对象状态的丢失</p></li><li><p>4.该模式在多线程环境下需要进行特殊处理， 避免多个线程多次创建单例对象</p></li><li><p>5.单例的客户端代码单元测试可能会比较困难， 因为许多测试框架以基于继承的方式创建模拟对象。 由于单例类的构造函数是私有的， 而且绝大部分语言无法重写静态方法， 所以你需要想出仔细考虑模拟单例的方法。 要么干脆不编写测试代码， 或者不使用单例模式</p></li></ul><h2 id="适用环境" tabindex="-1"><a class="header-anchor" href="#适用环境" aria-hidden="true">#</a> 适用环境</h2><ul><li><p>1.系统只需要一个实例对象，例如系统要求提供一个唯一的序列号生成器或资源管理器，或者因为资源消耗太大而只允许创建一个对象</p></li><li><p>2.客户调用类的单个实例只允许使用一个公共访问点，除了该公共访问点，不能通过其他途径访问该实例</p></li><li><p>3.需要更加严格控制全局变量</p></li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li><p>https://www.digitalocean.com/community/tutorials/java-singleton-design-pattern-best-practices-examples</p></li><li><p>https://zhuanlan.zhihu.com/p/37534850</p></li><li><p>https://refactoringguru.cn/design-patterns/singleton</p></li></ul><h2 id="懒汉式单例类" tabindex="-1"><a class="header-anchor" href="#懒汉式单例类" aria-hidden="true">#</a> 懒汉式单例类</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><ul><li><p>在调用静态工厂方法时实例化单例类，在类加载的时候没有创建单例对象，同时要注意，要处理多线程的环境</p></li><li><p><img src="https://img.shiqi-lu.tech/20200905182333.png" alt=""></p></li></ul><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><ul><li><p>python</p><ul><li><p>使用函数装饰器实现单例</p><ul><li><p>使用不可变的类地址作为键，实例作为值，每次创建实例时，首先查看该类是否存在实例，存在的话直接返回该实例即可，否则新建一个实例并存放在字典中</p></li><li><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">singleton</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls <span class="token keyword">not</span> <span class="token keyword">in</span> _instance<span class="token punctuation">:</span>
            _instance<span class="token punctuation">[</span>cls<span class="token punctuation">]</span> <span class="token operator">=</span> cls<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> _instance<span class="token punctuation">[</span>cls<span class="token punctuation">]</span>

    <span class="token keyword">return</span> inner

<span class="token decorator annotation punctuation">@singleton</span>
<span class="token keyword">class</span> <span class="token class-name">Cls</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

cls1 <span class="token operator">=</span> Cls<span class="token punctuation">(</span><span class="token punctuation">)</span>
cls2 <span class="token operator">=</span> Cls<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>cls1<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">id</span><span class="token punctuation">(</span>cls2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>输出：<code>True</code></p></li></ul></li><li><p>使用类装饰器实现单例</p><ul><li><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_cls <span class="token operator">=</span> cls
        self<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>_cls <span class="token keyword">not</span> <span class="token keyword">in</span> self<span class="token punctuation">.</span>_instance<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>_instance<span class="token punctuation">[</span>self<span class="token punctuation">.</span>_cls<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>_cls<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_instance<span class="token punctuation">[</span>self<span class="token punctuation">.</span>_cls<span class="token punctuation">]</span>

<span class="token decorator annotation punctuation">@Singleton</span>
<span class="token keyword">class</span> <span class="token class-name">Cls2</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

cls1 <span class="token operator">=</span> Cls2<span class="token punctuation">(</span><span class="token punctuation">)</span>
cls2 <span class="token operator">=</span> Cls2<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>cls1<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">id</span><span class="token punctuation">(</span>cls2<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 也可以这么使用：</span>
<span class="token keyword">class</span> <span class="token class-name">Cls3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

Cls3 <span class="token operator">=</span> Singleton<span class="token punctuation">(</span>Cls3<span class="token punctuation">)</span>
cls3 <span class="token operator">=</span> Cls3<span class="token punctuation">(</span><span class="token punctuation">)</span>
cls4 <span class="token operator">=</span> Cls3<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>cls3<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">id</span><span class="token punctuation">(</span>cls4<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>使用 <code>*new*</code> 关键字实现单例</p><ul><li><p>使用<code>*new*</code>方法在创造实例时进行干预</p></li><li><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    __instance <span class="token operator">=</span> <span class="token boolean">None</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> cls<span class="token punctuation">.</span> __instance<span class="token punctuation">:</span>
            cls<span class="token punctuation">.</span>__instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">,</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>__instance

a <span class="token operator">=</span> Singleton<span class="token punctuation">(</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> Singleton<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">id</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>使用 metaclass 实现单例(线程安全)</p><ul><li><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> threading <span class="token keyword">import</span> Lock<span class="token punctuation">,</span> Thread

<span class="token keyword">class</span> <span class="token class-name">SingletonMeta</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    _instances <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    _lock<span class="token punctuation">:</span> Lock <span class="token operator">=</span> Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
            <span class="token keyword">if</span> cls <span class="token keyword">not</span> <span class="token keyword">in</span> cls<span class="token punctuation">.</span>_instances<span class="token punctuation">:</span>
                instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__call__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
                cls<span class="token punctuation">.</span>_instances<span class="token punctuation">[</span>cls<span class="token punctuation">]</span> <span class="token operator">=</span> instance
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instances<span class="token punctuation">[</span>cls<span class="token punctuation">]</span>


<span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>SingletonMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    value<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> value

    <span class="token keyword">def</span> <span class="token function">some_business_logic</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>


<span class="token keyword">def</span> <span class="token function">test_singleton</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    singleton <span class="token operator">=</span> Singleton<span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>singleton<span class="token punctuation">.</span>value<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    process1 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>test_singleton<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;FOO&quot;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    process2 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>test_singleton<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;BAR&quot;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    process1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    process2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    s1 <span class="token operator">=</span> Singleton<span class="token punctuation">(</span><span class="token punctuation">)</span>
    s2 <span class="token operator">=</span> Singleton<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">id</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>输出：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>FOO
FOO
True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>c++</p><ul><li><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;thread&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token comment">// 注意构造函数必须用private,防止被初始化</span>
    <span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string value<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">value_</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token operator">~</span><span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">static</span> Singleton <span class="token operator">*</span>singleton_<span class="token punctuation">;</span>
    <span class="token keyword">static</span> std<span class="token double-colon punctuation">::</span>mutex mutex_<span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>string value_<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 禁止复制构造函数和赋值构造函数</span>
    <span class="token function">Singleton</span><span class="token punctuation">(</span>Singleton <span class="token operator">&amp;</span>other<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> Singleton <span class="token operator">&amp;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>

    <span class="token comment">// 注意使用静态方法控制对单例的访问，会在第一次执行时创建在静态区，</span>
    <span class="token comment">// 后续访问会直接返回该实例</span>
    <span class="token keyword">static</span> Singleton <span class="token operator">*</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>string <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value_<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Singleton <span class="token operator">*</span>Singleton<span class="token double-colon punctuation">::</span>singleton_ <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
std<span class="token double-colon punctuation">::</span>mutex Singleton<span class="token double-colon punctuation">::</span>mutex_<span class="token punctuation">;</span>

Singleton <span class="token operator">*</span><span class="token class-name">Singleton</span><span class="token double-colon punctuation">::</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用锁保证线程安全</span>
    std<span class="token double-colon punctuation">::</span>lock_guard<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>mutex<span class="token operator">&gt;</span> <span class="token function">lock</span><span class="token punctuation">(</span>mutex_<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>singleton_ <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        singleton_ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Singleton</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> singleton_<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">ThreadFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 模拟延迟初始化</span>
    std<span class="token double-colon punctuation">::</span>this_thread<span class="token double-colon punctuation">::</span><span class="token function">sleep_for</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span><span class="token function">milliseconds</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Singleton <span class="token operator">*</span>singleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token double-colon punctuation">::</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token string">&quot;FOO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> singleton<span class="token operator">-&gt;</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">ThreadBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>this_thread<span class="token double-colon punctuation">::</span><span class="token function">sleep_for</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span><span class="token function">milliseconds</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Singleton <span class="token operator">*</span>singleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token double-colon punctuation">::</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token string">&quot;BAR&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> singleton<span class="token operator">-&gt;</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>thread <span class="token function">t1</span><span class="token punctuation">(</span>ThreadFoo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>thread <span class="token function">t2</span><span class="token punctuation">(</span>ThreadBar<span class="token punctuation">)</span><span class="token punctuation">;</span>
    t1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    t2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>FOO
FOO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>输出表明，这里只创建了一个实例</p></li></ul></li><li><p>java</p><ul><li><p>缺点</p><ul><li>这里给 getInstance() 这个方法加了一把锁 (synchronized)，导致这个函数的并发度只有1，即串行操作，而这个函数在单例使用期间会一直被调用。若频繁使用时，频繁加锁、释放锁和并发度低等问题，会导致性能瓶颈</li></ul></li><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token comment">// 静态私有成员变量</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 私有构造函数</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token comment">// 静态公有工厂方法，返回唯一实例</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Singleton</span> s1 <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>go</p><ul><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> once sync<span class="token punctuation">.</span>Once

<span class="token keyword">type</span> single <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> singleInstance <span class="token operator">*</span>single

<span class="token keyword">func</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>single <span class="token punctuation">{</span>
	<span class="token keyword">if</span> singleInstance <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>
			<span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Creating single instance now.&quot;</span><span class="token punctuation">)</span>
				singleInstance <span class="token operator">=</span> <span class="token operator">&amp;</span>single<span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Single instance already created.&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> singleInstance
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Scanln is similar to Scan, but stops scanning at a newline and</span>
	<span class="token comment">// after the final item there must be a newline or EOF.</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>// go 输出
Creating single instance now.
Single instance already created.
Single instance already created.
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="饿汉式单例类" tabindex="-1"><a class="header-anchor" href="#饿汉式单例类" aria-hidden="true">#</a> 饿汉式单例类</h2><h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h3><ul><li><p>当类被加载时，静态变量instance会被初始化，此时类的私有构造函数会被调用，单例类的唯一实例将被创建</p></li><li><p>instance的创建过程是线程安全的。不过这样的实现方式不支持延迟加载</p></li><li><p><img src="https://img.shiqi-lu.tech/20200905182009.png" alt=""></p></li></ul><h3 id="讨论" tabindex="-1"><a class="header-anchor" href="#讨论" aria-hidden="true">#</a> 讨论</h3><ul><li><p>饿汉式的实现方式，将耗时的初始化操作，提前到程序启动的时候完成，这样能避免在程序运行的时候，再去初始化导致的性能问题</p></li><li><p>如果实例占用资源多，按照 fail-fast 的设计原则，就希望在程序启动时就将这个实例初始化好。如果资源不够，就会在程序启动的时候触发报错，此时可立即去修复。能避免在程序运行一段时间后，突然因为初始化这个实例占用资源过多，导致系统崩溃，影响系统的可用性</p></li></ul><h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h3><ul><li><p>java</p><ul><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EagerSingleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">EagerSingleton</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EagerSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">EagerSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">EagerSingleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>go</p><ul><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// Singleton 饿汉式单例</span>
<span class="token keyword">type</span> Singleton <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> singleton <span class="token operator">*</span>Singleton

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	singleton <span class="token operator">=</span> <span class="token operator">&amp;</span>Singleton<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Singleton <span class="token punctuation">{</span>
	<span class="token keyword">return</span> singleton
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Scanln is similar to Scan, but stops scanning at a newline and</span>
	<span class="token comment">// after the final item there must be a newline or EOF.</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="双重检测" tabindex="-1"><a class="header-anchor" href="#双重检测" aria-hidden="true">#</a> 双重检测</h2><h3 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h3><ul><li><p>这种单例实现方式既支持延迟加载、又支持高并发</p></li><li><p>只要 instance 被创建之后，即使再调用 getInstance() 函数也不会再进入到加锁逻辑中。这种方式解决了懒汉式并发度低的问题</p></li></ul><h3 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h3><ul><li><p>java</p><ul><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 此处为类级别的锁</span>
            <span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>go</p><ul><li><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> lock <span class="token operator">=</span> <span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> single <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> singleInstance <span class="token operator">*</span>single

<span class="token keyword">func</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>single <span class="token punctuation">{</span>
	<span class="token keyword">if</span> singleInstance <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">defer</span> lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> singleInstance <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Creating single instance now.&quot;</span><span class="token punctuation">)</span>
			singleInstance <span class="token operator">=</span> <span class="token operator">&amp;</span>single<span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Single instance already created.&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Single instance already created.&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> singleInstance
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Scanln is similar to Scan, but stops scanning at a newline and</span>
	<span class="token comment">// after the final item there must be a newline or EOF.</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>// 输出
Creating single instance now.
Single instance already created.
Single instance already created.
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h2><h3 id="介绍-3" tabindex="-1"><a class="header-anchor" href="#介绍-3" aria-hidden="true">#</a> 介绍</h3><ul><li>SingletonHolder 是一个静态内部类，当外部类 Singleton 被加载的时候， 并不会创建 SingletonHolder 实例对象。只有当调用 getInstance() 方法时，SingletonHolder 才会被加载，这个时候才会创建 instance。由 JVM 来保证 instance 的唯一性、创建过程的线程安全性</li></ul><h3 id="代码-3" tabindex="-1"><a class="header-anchor" href="#代码-3" aria-hidden="true">#</a> 代码</h3><ul><li><p>java</p><ul><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonHolder</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2><h3 id="介绍-4" tabindex="-1"><a class="header-anchor" href="#介绍-4" aria-hidden="true">#</a> 介绍</h3><ul><li>基于枚举类型的单例实现。这种实现方式通过java枚举类型本身的特性，保证了实例创建的线程安全性和实例的唯一性</li></ul><h3 id="代码-4" tabindex="-1"><a class="header-anchor" href="#代码-4" aria-hidden="true">#</a> 代码</h3><ul><li><p>java</p><ul><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">IdGenerator</span> <span class="token punctuation">{</span>
    <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicLong</span> id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">.</span><span class="token function">incermentAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,42),l=[p];function o(c,i){return s(),a("div",null,l)}const d=n(e,[["render",o],["__file","singleton.html.vue"]]);export{d as default};
