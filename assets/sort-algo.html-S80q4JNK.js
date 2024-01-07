import{_ as u,r as t,o as p,c as e,a as n,b as s,d as o,w as l,e as a}from"./app-n0xwCUxG.js";const r={},k=a(`<h2 id="冒泡排序-基础写法" tabindex="-1"><a class="header-anchor" href="#冒泡排序-基础写法" aria-hidden="true">#</a> 冒泡排序(基础写法)</h2><ul><li>核心思想：每一趟都通过按顺序两两比较的方法，把当前剩余元素的最大值移动到一端<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 超时</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sortArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        <span class="token comment"># 外层循环：从第0到n-2共n-1趟，比较是以当前元素和后一个元素比较</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 内层循环：从0到n-i-1，减i是因为每一趟结束均有一个已排好序的值</span>
            <span class="token comment"># 如进行第i=1趟时，意味着有1个数字已排好</span>
            <span class="token comment"># 如进行第i=n-2趟时(最后一趟)，此时i为n-2个数字已排好，</span>
            <span class="token comment"># 最后2个数字再比较一次即可</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token comment"># 交换当前元素和后一个元素</span>
                <span class="token keyword">if</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token keyword">return</span> nums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>最坏时间复杂度O(n^2)，平均时间复杂度O(n^2)，空间复杂度：O(1)</li></ul><h2 id="冒泡排序-基础改进写法" tabindex="-1"><a class="header-anchor" href="#冒泡排序-基础改进写法" aria-hidden="true">#</a> 冒泡排序(基础改进写法)</h2><ul><li>思想是如果一次排序中没有经过交换，则停止排序<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 超时</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sortArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        swapped <span class="token operator">=</span> <span class="token boolean">True</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> swapped<span class="token punctuation">:</span>
                <span class="token keyword">break</span>
            swapped <span class="token operator">=</span> <span class="token boolean">False</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    swapped <span class="token operator">=</span> <span class="token boolean">True</span>
                    nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token keyword">return</span> nums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>最坏时间复杂度O(n^2)，平均时间复杂度O(n^2)，空间复杂度：O(1)</li></ul><h2 id="冒泡排序-第三种写法" tabindex="-1"><a class="header-anchor" href="#冒泡排序-第三种写法" aria-hidden="true">#</a> 冒泡排序(第三种写法)</h2><ul><li>在第二种写法的基础上继续优化，下一轮比较时，只需比较到上一轮中，最后一次发生交换的位置即可。因为后面的所有元素都没有发生过交换，必然已经有序了<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 超时</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sortArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        swapped <span class="token operator">=</span> <span class="token boolean">True</span>
        <span class="token comment"># 最后一个没有经过排序的元素的下标</span>
        last_unsorted <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token comment"># 上次交换的位置</span>
        swapped_index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token keyword">while</span> swapped<span class="token punctuation">:</span>
            swapped <span class="token operator">=</span> <span class="token boolean">False</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>last_unsorted<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                    swapped <span class="token operator">=</span> <span class="token boolean">True</span>
                    swapped_index <span class="token operator">=</span> i
            <span class="token comment"># 最后一个没有经过排序的元素的下标就是</span>
            <span class="token comment"># 最后一次发生交换的位置</span>
            last_unsorted <span class="token operator">=</span> swapped_index
        <span class="token keyword">return</span> nums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>最坏时间复杂度O(n^2)，平均时间复杂度O(n^2)，空间复杂度：O(1)</li></ul><h2 id="选择排序-基本写法" tabindex="-1"><a class="header-anchor" href="#选择排序-基本写法" aria-hidden="true">#</a> 选择排序(基本写法)</h2><ul><li>对一个序列A中的元素A[0]~A[n-1]，令i从0到n-1枚举，进行第n趟操作，每趟从待排序部分[i,n-1]中选择最小的元素，令其与待排序部分的第一个元素A[i]进行交换，这样元素A[i]就会与当前有序区间[1,i-1]形成新的有序区间[1,i]。于是在n趟操作之后，所有的元素都是有序的，时间复杂度O(n^2)<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sortArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            min_index <span class="token operator">=</span> i
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> nums<span class="token punctuation">[</span>min_index<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
                    min_index <span class="token operator">=</span> j
            nums<span class="token punctuation">[</span>min_index<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>min_index<span class="token punctuation">]</span>
        <span class="token keyword">return</span> nums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>空间复杂度O(1)，时间复杂度O(n^2)</li></ul><h1 id="选择排序-改进写法" tabindex="-1"><a class="header-anchor" href="#选择排序-改进写法" aria-hidden="true">#</a> 选择排序(改进写法)</h1><ul><li>每次选择是记录最小值和最大值<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sortArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>length <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            min_index<span class="token punctuation">,</span> max_index <span class="token operator">=</span> i<span class="token punctuation">,</span> i
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> length <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> nums<span class="token punctuation">[</span>min_index<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
                    min_index <span class="token operator">=</span> j
                <span class="token keyword">if</span> nums<span class="token punctuation">[</span>max_index<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
                    max_index <span class="token operator">=</span> j
            <span class="token comment"># 若min_index和max_index相等，那么必定都等于i，</span>
            <span class="token comment"># 且后面的所有数字都与 nums[i] 相等，此时排序完成</span>
            <span class="token keyword">if</span> min_index <span class="token operator">==</span> max_index<span class="token punctuation">:</span>
                <span class="token keyword">break</span>
            nums<span class="token punctuation">[</span>min_index<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>min_index<span class="token punctuation">]</span>
            <span class="token comment"># 若最大值的下标刚好是i，由于nums[i]和nums[min_index]已</span>
            <span class="token comment"># 交换，所以这里要更新 max_index 的值</span>
            <span class="token keyword">if</span> max_index <span class="token operator">==</span> i<span class="token punctuation">:</span>
                max_index <span class="token operator">=</span> min_index
            last_index <span class="token operator">=</span> length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span>
            nums<span class="token punctuation">[</span>max_index<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>last_index<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>last_index<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>max_index<span class="token punctuation">]</span>
        <span class="token keyword">return</span> nums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>空间复杂度O(1)，时间复杂度O(n^2)</li></ul><h2 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h2><ul><li>对序列A的前n个元素A[0]到A[n-1]，令i从1到n-1枚举，进行n-1趟操作。假设某一趟时，序列A的前i-1个元素A[i]到A[i-1]已经有序，而范围[i,n-1]还未有序，那么从范围[1,i-1]中寻找某个位置j，是的将a[i]插入位置j后（此时A[j]到A[i-1]会后移一位至A[j+1]到A[i]），范围[1,i]有序<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sortArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">:</span>
            cur_num <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span>
            <span class="token comment"># 寻找插入位置的过程中，不断地将比cur_num大的数字向后挪</span>
            <span class="token keyword">while</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token keyword">and</span> cur_num <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
                nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                j <span class="token operator">-=</span> <span class="token number">1</span>
            <span class="token comment"># 跳出循环的两种情况:</span>
            <span class="token comment"># 1.遇到一个小于或等于cur_num的数字，跳出循环，</span>
            <span class="token comment"># curr_num就坐到它后面</span>
            <span class="token comment"># 2.已经走到数列头部，仍然没有遇到小于或等于cur_num的数字，</span>
            <span class="token comment"># 也会跳出循环，此时j等于-1，cur_num就坐到数列头部</span>
            nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur_num
        <span class="token keyword">return</span> nums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>空间复杂度O(1)，时间复杂度O(n^2)</li></ul><h2 id="希尔排序" tabindex="-1"><a class="header-anchor" href="#希尔排序" aria-hidden="true">#</a> 希尔排序</h2><pre><code>\`\`\`python
# 执行用时：568 ms, 在所有 Python3 提交中击败了5.08%的用户
# 内存消耗：17.9 MB, 在所有 Python3 提交中击败了58.54%的用户
class Solution:
    def get_gaps(self, length):
        gaps = []
        gap = length // 2
        while gap &gt; 0:
            gaps.append(gap)
            gap //= 2
        return gaps

    def sortArray(self, nums: List[int]) -&gt; List[int]:
        length = len(nums)
        # 间隔序列
        for gap in self.get_gaps(length):
            # 分组
            for group_index in range(gap):
                # 插入排序
                for cur_index in range(group_index+gap, length, gap):
                    cur_num = nums[cur_index]
                    pre_index = cur_index - gap
                    while pre_index &gt;= group_index and cur_num &lt; nums[pre_index]:
                        nums[pre_index + gap] = nums[pre_index]
                        pre_index -= gap
                    nums[pre_index + gap] = cur_num
        return nums
\`\`\`
</code></pre><ul><li>空间复杂度O(1)，时间复杂度O(n^1.3)，最坏时间复杂度O(n^2)</li></ul><h2 id="堆排序" tabindex="-1"><a class="header-anchor" href="#堆排序" aria-hidden="true">#</a> 堆排序</h2>`,16),d=n("li",null,[s("1.对于完全二叉树中的第 i 个数，它的左孩子下标是："),n("code",null,"left = 2i + 1")],-1),m=n("li",null,[s("2.对于完全二叉树中的第 i 个数，它的右孩子下标是："),n("code",null,"right = left + 1 = 2i + 2 = 2(i+1)")],-1),v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.526ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4210.4 1000","aria-hidden":"true"},b=n("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[n("g",{"data-mml-node":"math"},[n("g",{"data-mml-node":"mo"},[n("path",{"data-c":"230A",d:"M174 734Q174 735 175 737T177 740T180 744T184 747T189 749T196 750Q206 748 214 735V-210H310H373Q401 -210 411 -213T422 -230T411 -247T369 -251Q362 -251 338 -251T298 -250H190Q178 -246 174 -234V734Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mi",transform:"translate(444,0)"},[n("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(1044,0)"},[n("g",{"data-mml-node":"mo"},[n("path",{"data-c":"2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z",style:{"stroke-width":"3"}})])]),n("g",{"data-mml-node":"mn",transform:"translate(1544,0)"},[n("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mo",transform:"translate(2044,0)"},[n("path",{"data-c":"230B",d:"M229 734Q229 735 230 737T232 740T235 744T239 747T244 749T251 750Q262 748 269 735V-235Q266 -240 256 -249L147 -250H77Q43 -250 32 -247T21 -230T32 -213T72 -209Q79 -209 99 -209T133 -210H229V734Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mo",transform:"translate(2710.2,0)"},[n("path",{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mn",transform:"translate(3710.4,0)"},[n("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})])])],-1),h=[b],g=n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mo",{fence:"false",stretchy:"false"},"⌊"),n("mi",null,"n"),n("mrow",{"data-mjx-texclass":"ORD"},[n("mo",null,"/")]),n("mn",null,"2"),n("mo",{fence:"false",stretchy:"false"},"⌋"),n("mo",null,"−"),n("mn",null,"1")],-1),f=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#执行用时：1052 ms, 在所有 Python3 提交中击败了5.09%的用户</span>
<span class="token comment">#内存消耗：20.1 MB, 在所有 Python3 提交中击败了6.51%的用户</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sortArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token comment"># 构建初始大顶堆</span>
        nums <span class="token operator">=</span> self<span class="token punctuation">.</span>build_max_heap<span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 将最大值交换到数组最后</span>
            nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token comment"># 调整剩余数组，使其满足大顶堆</span>
            nums <span class="token operator">=</span> self<span class="token punctuation">.</span>max_heapify<span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token keyword">return</span> nums
    
    <span class="token keyword">def</span> <span class="token function">build_max_heap</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token comment"># 从最后一个非叶子结点开始调整大顶堆，</span>
        <span class="token comment"># 最后一个非叶子结点的下标是 len(nums) // 2 - 1</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">//</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            nums <span class="token operator">=</span> self<span class="token punctuation">.</span>max_heapify<span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> nums
    
    <span class="token comment"># 调整大顶堆，第三个参数表示剩余未排序的数字的数量，即剩余堆的大小</span>
    <span class="token keyword">def</span> <span class="token function">max_heapify</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> heap_size<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token comment"># 左右子节点下标</span>
        l<span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span>
        <span class="token comment"># 找到根节点、左右子树结点中的最大值下标</span>
        largest <span class="token operator">=</span> i
        <span class="token keyword">if</span> l <span class="token operator">&lt;</span> heap_size <span class="token keyword">and</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">:</span>
            largest <span class="token operator">=</span> l
        <span class="token keyword">if</span> r <span class="token operator">&lt;</span> heap_size <span class="token keyword">and</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">:</span>
            largest <span class="token operator">=</span> r
        <span class="token keyword">if</span> largest <span class="token operator">!=</span> i<span class="token punctuation">:</span>
            <span class="token comment"># 将最大值交换为根结点</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>largest<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token comment"># 再次调整交换数字后的大顶堆</span>
            nums <span class="token operator">=</span> self<span class="token punctuation">.</span>max_heapify<span class="token punctuation">(</span>nums<span class="token punctuation">,</span> largest<span class="token punctuation">,</span> heap_size<span class="token punctuation">)</span>
        <span class="token keyword">return</span> nums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y=n("li",null,"初始化堆(build_max_heap)的时间复杂度是O(n)，重建堆(max_heapify)的时间复杂度为O(nlogn)，总时间复杂度O(nlogn)",-1),w=n("li",null,"空间复杂度O(1)",-1),_=a(`<h2 id="快排" tabindex="-1"><a class="header-anchor" href="#快排" aria-hidden="true">#</a> 快排</h2><pre><code>\`\`\`python
# 执行用时：176 ms, 在所有 Python3 提交中击败了75.38%的用户
# 内存消耗：18 MB, 在所有 Python3 提交中击败了40.91%的用户
class Solution:
    def sortArray(self, nums: List[int]) -&gt; List[int]:
        self.quicksort(nums, 0, len(nums)-1)
        return nums
    
    def quicksort(self, nums, start, end):
        # 如果区域内少于2个，退出递归
        if start &gt;= end:
            return
        mid = self.partition(nums, start, end)
        self.quicksort(nums, start, mid-1)
        self.quicksort(nums, mid+1, end)
    
    def partition(self, nums, start, end):
        # 避免有序数组
        random_index = random.randint(start, end)
        nums[start], nums[random_index] = nums[random_index], nums[start]
        pivot = nums[start]
        while start &lt; end:
            while start &lt; end and pivot &lt;= nums[end]:
                end -= 1
            nums[start] = nums[end]
            while start &lt; end and nums[start] &lt;= pivot:
                start += 1
            nums[end] = nums[start]
        nums[start] = pivot
        return start
\`\`\`
</code></pre><ul><li>平均时间复杂度为 O(nlogn)，最坏的时间复杂度为 O(n^2)，空间复杂度与递归的层数有关，每层递归会生成一些临时变量，所以空间复杂度为 O(logn) ~ O(n)，平均空间复杂度为 O(logn)</li></ul><h2 id="归并排序-递归写法" tabindex="-1"><a class="header-anchor" href="#归并排序-递归写法" aria-hidden="true">#</a> 归并排序(递归写法)</h2><pre><code>\`\`\`python
# 执行用时：252 ms, 在所有 Python3 提交中击败了32.87%的用户
# 内存消耗：19 MB, 在所有 Python3 提交中击败了15.42%的用户
class Solution:
    def sortArray(self, nums: List[int]) -&gt; List[int]:
        if len(nums) &lt;= 1:
            return nums
        mid = len(nums) // 2
        a = self.sortArray(nums[:mid])
        b = self.sortArray(nums[mid:])
        return self.merge(a,b)
    
    def merge(self, a, b):
        merged = []
        i, j = 0, 0
        while i &lt; len(a) and j &lt; len(b):
            if a[i] &lt;= b[j]:
                merged.append(a[i])
                i += 1
            else:
                merged.append(b[j])
                j += 1
        merged.extend(a[i:])
        merged.extend(b[j:])
        return merged
\`\`\`
</code></pre><ul><li>时间复杂度是 O(nlogn)，因拆分数组的过程中，会将数组拆分 logn 次，每层执行的比较次数都约等于 n 次，空间复杂度是 O(n)，主要占用空间的就是我们在排序前创建的长度为 n 的数组</li></ul><h2 id="归并排序-非递归写法" tabindex="-1"><a class="header-anchor" href="#归并排序-非递归写法" aria-hidden="true">#</a> 归并排序(非递归写法)</h2><pre><code>\`\`\`python
#执行用时：276 ms, 在所有 Python3 提交中击败了24.61%的用户
#内存消耗：17.9 MB, 在所有 Python3 提交中击败了60.92%的用户
class Solution:
    def sortArray(self, nums: List[int]) -&gt; List[int]:
        self.nums = nums
        self.merge_sort(0, len(nums)-1)
        return self.nums
    
    def merge_sort(self, low, high):
        if low &gt;= high:
            return
        mid = (low + high) // 2
        self.merge_sort(low, mid)
        self.merge_sort(mid+1, high)
        self.merge(low, mid, high)
    
    def merge(self, low, mid, high):
        # 只需要拷贝前半份
        merged = self.nums[low:mid+1]
        i, i1, i2 = low, 0, mid+1
        while i1 &lt; len(merged) and i2 &lt;= high:
            if merged[i1] &lt;= self.nums[i2]:
                self.nums[i] = merged[i1]
                i, i1 = i+1, i1+1
            else:
                self.nums[i] = self.nums[i2]
                i, i2 = i+1, i2+1
        while i1 &lt; len(merged):
            self.nums[i] = merged[i1]
            i, i1 = i+1, i1+1
        while i2 &lt;= high:
            self.nums[i] = self.nums[i2]
            i, i2 = i+1, i2+1
\`\`\`
</code></pre><ul><li>时间复杂度是 O(nlogn)，空间复杂度是 O(n)</li></ul>`,9);function x(T,Q){const i=t("mjx-assistive-mml"),c=t("mjx-container");return p(),e("div",null,[k,n("ul",null,[n("li",null,[s("根节点下标视为0的完全二叉树的3个性质 "),n("ul",null,[d,m,n("li",null,[s("3.对于n个元素的完全二叉树(n >= 2)，它的最后一个非叶子结点的下标："),o(c,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:l(()=>[(p(),e("svg",v,h)),o(i,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:l(()=>[g]),_:1})]),_:1}),s("，等价于该结点的父节点下标")])]),f]),y,w]),_])}const O=u(r,[["render",x],["__file","sort-algo.html.vue"]]);export{O as default};
