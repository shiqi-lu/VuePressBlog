import{_ as c,r as l,o as i,c as p,a as n,d as a,w as e,e as u,b as s}from"./app-n0xwCUxG.js";const r={},k=u(`<h1 id="_25-k-个一组翻转链表-reverse-nodes-in-k-group-h" tabindex="-1"><a class="header-anchor" href="#_25-k-个一组翻转链表-reverse-nodes-in-k-group-h" aria-hidden="true">#</a> 25. K 个一组翻转链表(Reverse Nodes in k-Group)H</h1><h2 id="英文题目" tabindex="-1"><a class="header-anchor" href="#英文题目" aria-hidden="true">#</a> 英文题目</h2><ul><li><p>Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.</p></li><li><p>k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.</p></li><li><p>Follow up:</p></li><li><p>Could you solve the problem in O(1) extra memory space?</p></li><li><p>You may not alter the values in the list&#39;s nodes, only nodes itself may be changed.</p></li><li><p>Example 1:</p></li><li><p><img src="https://img.shiqi-lu.tech/20210502205259.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 2:</p></li><li><p><img src="https://img.shiqi-lu.tech/20210502205313.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 3:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: head = [1,2,3,4,5], k = 1
Output: [1,2,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 4:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: head = [1], k = 1
Output: [1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Constraints:</p></li><li><p>The number of nodes in the list is in the range sz.</p></li><li><p>1 &lt;= sz &lt;= 5000</p></li><li><p>0 &lt;= Node.val &lt;= 1000</p></li><li><p>1 &lt;= k &lt;= sz</p></li></ul><h2 id="中文题目" tabindex="-1"><a class="header-anchor" href="#中文题目" aria-hidden="true">#</a> 中文题目</h2><ul><li><p>给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。</p></li><li><p>k 是一个正整数，它的值小于或等于链表的长度。</p></li><li><p>如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。</p></li><li><p>进阶：</p></li><li><p>你可以设计一个只使用常数额外空间的算法来解决此问题吗？</p></li><li><p>你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。</p></li><li><p>示例 1：</p></li><li><p><img src="https://img.shiqi-lu.tech/20210502205259.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 2：</p></li><li><p><img src="https://img.shiqi-lu.tech/20210502205313.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 3：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：head = [1,2,3,4,5], k = 1
输出：[1,2,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 4：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：head = [1], k = 1
输出：[1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提示：</p></li><li><p>列表中节点的数量在范围 sz 内</p></li><li><p>1 &lt;= sz &lt;= 5000</p></li><li><p>0 &lt;= Node.val &lt;= 1000</p></li><li><p>1 &lt;= k &lt;= sz</p></li></ul><h2 id="模拟法" tabindex="-1"><a class="header-anchor" href="#模拟法" aria-hidden="true">#</a> 模拟法</h2>`,6),d=n("li",null,[n("p",null,[n("img",{src:"https://img.shiqi-lu.tech/20210503104007.png",alt:""})])],-1),m=n("li",null,[n("p",null,"dummy为头指针的前一个指针，pre为待翻转链表前一个，head为待翻转链表的头指针，tail为待翻转链表的尾指针，nex为待翻转链表的尾指针的下一个指针")],-1),v=n("li",null,[n("p",null,"保持这个关系，然后每次翻转的时候断开tail->nex的连接，翻转后再前后连接上即可")],-1),b=n("p",null,"时间复杂度O(n)，空间复杂度O(1)",-1),h=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 32 ms, 击败 99.84%; 内存 15.7 MB, 击败 99.81%"),s(`
`),n("span",{class:"token comment"},"# Definition for singly-linked list."),s(`
`),n("span",{class:"token comment"},"# class ListNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, next=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.next = next"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"reverseKGroup"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("ListNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("ListNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        dummy `),n("span",{class:"token operator"},"="),s(" ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},")"),s(`
        pre `),n("span",{class:"token operator"},"="),s(` dummy
        `),n("span",{class:"token comment"},"# 进入循环时需建立pre->head的关系，head为下一个待翻转的链表头"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" head"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token comment"},"# 建立tail->nex的关系，tail为待翻转的链表尾"),s(`
            tail `),n("span",{class:"token operator"},"="),s(` pre
            `),n("span",{class:"token keyword"},"for"),s(" _ "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token builtin"},"range"),n("span",{class:"token punctuation"},"("),s("k"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
                tail `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" tail"),n("span",{class:"token punctuation"},":"),s(`
                    `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
            nex `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
            
            `),n("span",{class:"token comment"},"# 把待翻转的链表尾结点和下一个结点断开"),s(`
            tail`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"None"),s(`
            
            `),n("span",{class:"token comment"},"# 返回翻转后的新的头指针和尾指针"),s(`
            head`),n("span",{class:"token punctuation"},","),s(" tail "),n("span",{class:"token operator"},"="),s(" self"),n("span",{class:"token punctuation"},"."),s("reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token comment"},"# 把原链表和翻转后的链表给接上"),s(`
            pre`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(` head
            tail`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(` nex
            
            `),n("span",{class:"token comment"},"# 恢复原有的pre和head的关系"),s(`
            pre `),n("span",{class:"token operator"},"="),s(` tail
            head `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`

    `),n("span",{class:"token comment"},"# 需要断开待翻转链表的尾指针和尾指针的下一个结点的连接"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
        pre`),n("span",{class:"token punctuation"},","),s(" cur "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},","),s(` head
        `),n("span",{class:"token keyword"},"while"),s(" cur"),n("span",{class:"token punctuation"},":"),s(`
            curNext `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
            cur`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(` pre
            pre`),n("span",{class:"token punctuation"},","),s(" cur "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},","),s(` curNext
        `),n("span",{class:"token comment"},"# 返回翻转后的新的头指针(pre)和新的尾指针(原来的head)"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" pre"),n("span",{class:"token punctuation"},","),s(` head 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 12 ms, 击败 91.07%; 内存 11.3 MB, 击败 23.80%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
    ListNode`),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"reverseKGroup"),n("span",{class:"token punctuation"},"("),s("ListNode"),n("span",{class:"token operator"},"*"),s(" head"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" k"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        ListNode dummy `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        ListNode `),n("span",{class:"token operator"},"*"),s("pre "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("dummy"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            ListNode `),n("span",{class:"token operator"},"*"),s(" tail "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" k"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token operator"},"++"),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                tail `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("tail "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            ListNode `),n("span",{class:"token operator"},"*"),s("nex "),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
            tail`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},","),s(" tail"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            pre`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
            tail`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" nex"),n("span",{class:"token punctuation"},";"),s(`
            
            pre `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},";"),s(`
            head `),n("span",{class:"token operator"},"="),s(" nex"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    pair`),n("span",{class:"token operator"},"<"),s("ListNode"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},","),s(" ListNode"),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("ListNode "),n("span",{class:"token operator"},"*"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        ListNode `),n("span",{class:"token operator"},"*"),s("pre "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"*"),s("cur "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            ListNode `),n("span",{class:"token operator"},"*"),s("curNext "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
            cur`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
            pre `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" curNext"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s("pre"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 41.9 MB, 击败 57.91%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * public class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     ListNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     ListNode(int val, ListNode next) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; this.next = next; "),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"reverseKGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" k"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" pre "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"ListNode"),s(" tail "),n("span",{class:"token operator"},"="),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" k"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token operator"},"++"),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                tail `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("tail "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token class-name"},"ListNode"),s(" nex "),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            tail`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" reverse "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            head `),n("span",{class:"token operator"},"="),s(" reverse"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            tail `),n("span",{class:"token operator"},"="),s(" reverse"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

            pre`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
            tail`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" nex"),n("span",{class:"token punctuation"},";"),s(`

            pre `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},";"),s(`
            head `),n("span",{class:"token operator"},"="),s(" nex"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" pre "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(" cur "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"ListNode"),s(" curNext "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
            pre `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" curNext"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"{"),s("pre"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 8 ms, 击败 14.56%; 内存 3.4 MB, 击败 100%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"reverseKGroup"),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},","),s(" k "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("ListNode "),n("span",{class:"token punctuation"},"{"),s(`
    dummy `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("ListNode"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},"}"),s(`
    pre `),n("span",{class:"token operator"},":="),s(` dummy
    `),n("span",{class:"token keyword"},"for"),s(" head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        tail `),n("span",{class:"token operator"},":="),s(` pre
        `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" k"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
            tail `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},"."),s(`Next
            `),n("span",{class:"token keyword"},"if"),s(" tail "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s(`Next
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        nex `),n("span",{class:"token operator"},":="),s(" tail"),n("span",{class:"token punctuation"},"."),s(`Next

        tail`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"nil"),s(`
        head`),n("span",{class:"token punctuation"},","),s(" tail "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),s(`
        pre`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(` head
        tail`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(` nex

        pre `),n("span",{class:"token operator"},"="),s(` tail
        head `),n("span",{class:"token operator"},"="),s(` nex
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s(`Next
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" pre "),n("span",{class:"token operator"},"*"),s(`ListNode
    cur `),n("span",{class:"token operator"},":="),s(` head
    `),n("span",{class:"token keyword"},"for"),s(" cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        curNext `),n("span",{class:"token operator"},":="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Next
        cur`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(` pre
        pre`),n("span",{class:"token punctuation"},","),s(" cur "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},","),s(` curNext
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" pre"),n("span",{class:"token punctuation"},","),s(` head
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 76 ms, 击败 69.37%; 内存 44.1 MB, 击败 73.19%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"head"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"k"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseKGroup"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("head"),n("span",{class:"token punctuation"},","),s(" k")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" pre "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" tail "),n("span",{class:"token operator"},"="),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" k"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token operator"},"++"),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            tail `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("tail "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" nex "),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`

        tail`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"["),s("head"),n("span",{class:"token punctuation"},","),s(" tail"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        pre`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        tail`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" nex"),n("span",{class:"token punctuation"},";"),s(`

        pre `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},";"),s(`
        head `),n("span",{class:"token operator"},"="),s(" nex"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"reverseList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" pre "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(" cur "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" curNext "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
        pre `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" curNext"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),s("pre"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function g(f,L){const t=l("CodeGroupItem"),o=l("CodeGroup");return i(),p("div",null,[k,n("ul",null,[d,m,v,n("li",null,[b,a(o,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[h]),_:1}),a(t,{title:"cpp"},{default:e(()=>[x]),_:1}),a(t,{title:"java"},{default:e(()=>[y]),_:1}),a(t,{title:"go"},{default:e(()=>[w]),_:1}),a(t,{title:"javascript"},{default:e(()=>[N]),_:1})]),_:1})])])])}const G=c(r,[["render",g],["__file","25.Reverse-Nodes-in-k-Group.html.vue"]]);export{G as default};
