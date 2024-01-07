import{_ as i,r as l,o as u,c as p,a as n,b as s,d as a,w as e,e as r}from"./app-n0xwCUxG.js";const d={},k=r(`<h1 id="_206-反转链表-reverse-linked-list-e" tabindex="-1"><a class="header-anchor" href="#_206-反转链表-reverse-linked-list-e" aria-hidden="true">#</a> 206.反转链表(Reverse Linked List)E</h1><h2 id="英文题目" tabindex="-1"><a class="header-anchor" href="#英文题目" aria-hidden="true">#</a> 英文题目</h2><ul><li><p>Reverse a singly linked list.</p></li><li><p>Example:</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL
Output: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Follow up:</p></li><li><p>A linked list can be reversed either iteratively or recursively. Could you implement both?</p></li></ul><h2 id="中文题目" tabindex="-1"><a class="header-anchor" href="#中文题目" aria-hidden="true">#</a> 中文题目</h2><ul><li><p>反转一个单链表。</p></li><li><p>示例:</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL
输出: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进阶:</p></li><li><p>你可以迭代或递归地反转链表。你能否用两种方法解决这道题？</p></li></ul><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2>`,6),m={href:"https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-shuang-zhi-zhen-di-gui-yao-mo-/",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,[n("p",null,"只要记住3个连续排布的指针的在反转前后对应意义即可")],-1),b=n("li",null,[n("p",null,"pre -> cur -> cur_next")],-1),h=n("li",null,[n("p",null,"反转前：cur是遍历的当前指针，pre是上一个指针(初始化为None)，cur_next是下一个指针")],-1),x=n("li",null,[n("p",null,"反转后：pre是反转链表后的头指针，cur是未反转链表的头指针，cur_next意义不变，是未反转链表的头指针的下一个指针")],-1),_=n("li",null,[n("p",null,"cur_next存在的意义是为了临时存储，在断开cur->next后仍能找到它")],-1),y=n("p",null,"时间复杂度O(n)，空间复杂度O(1)",-1),f=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python: 时间 32 ms, 击败 98.67%; 内存 15.4 MB, 击败 86.42%"),s(`
`),n("span",{class:"token comment"},"# Definition for singly-linked list."),s(`
`),n("span",{class:"token comment"},"# class ListNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, next=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.next = next"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" ListNode"),n("span",{class:"token punctuation"},":"),s(`
        pre`),n("span",{class:"token punctuation"},","),s(" cur "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},","),s(` head
        `),n("span",{class:"token keyword"},"while"),s(" cur"),n("span",{class:"token punctuation"},":"),s(`
            cur_next `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
            cur`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(` pre
            pre`),n("span",{class:"token punctuation"},","),s(" cur "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},","),s(` cur_next
        `),n("span",{class:"token keyword"},"return"),s(` pre
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 8 ms, 击败 44.32%; 内存 8 MB, 击败 95.44%"),s(`
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
    ListNode`),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("ListNode"),n("span",{class:"token operator"},"*"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        ListNode `),n("span",{class:"token operator"},"*"),s(" pre "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},";"),s(`
        ListNode `),n("span",{class:"token operator"},"*"),s(" cur "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            ListNode `),n("span",{class:"token operator"},"*"),s(" cur_next "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
            cur`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
            pre `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur_next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 38.2 MB, 击败 61.13%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" pre "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" cur "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"ListNode"),s(" cur_next "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
            pre `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur_next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100.00%; 内存 2.5 MB, 击败 99.92%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("ListNode "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" pre "),n("span",{class:"token operator"},"*"),s(`ListNode
    cur `),n("span",{class:"token operator"},":="),s(` head
    `),n("span",{class:"token keyword"},"for"),s(" cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        curNext `),n("span",{class:"token operator"},":="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Next
        cur`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(` pre
        pre`),n("span",{class:"token punctuation"},","),s(" cur "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},","),s(` curNext
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` pre
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 80 ms, 击败 32.90%; 内存 39.6 MB, 击败 56.19%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"head"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" pre "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" cur "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" cur_next "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
        pre `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" cur_next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" pre"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("h2",{id:"递归",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#递归","aria-hidden":"true"},"#"),s(" 递归")],-1),B=n("li",null,[n("p",null,"思路比较巧妙就是了，首先是直接找到链表的尾部结点(同二叉树的前序遍历)，递归只要看当前这个递归栈，如果只看python 的11和14行的话，意味着，找到了链尾结点并返回，这个结点同时也是新的头部结点")],-1),D=n("li",null,[n("p",null,"在每一个返回的递归栈中，当前头结点扔指向下一个结点，这时，只需把头结点的下一个结点指向头结点，头结点的下一个结点变为空即可")],-1),M=n("li",null,[n("p",null,"即把 head -> head.next 变成 None <- head <- head.next，这么操作的原因是再返回一个递归栈的时候，头结点仍不变指向下一个结点")],-1),C=n("li",null,[n("p",null,[s("开始的判断中，"),n("code",null,"not head"),s("是用于处理是空链表的情况，"),n("code",null,"not head.next"),s("是下一个结点为空，说明这是尾部结点了")])],-1),S=n("p",null,"时间复杂度O(n)，空间复杂度O(n)",-1),V=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python: 时间 32 ms, 击败 98.67%; 内存 19.7 MB, 击败 9.38%"),s(`
`),n("span",{class:"token comment"},"# Definition for singly-linked list."),s(`
`),n("span",{class:"token comment"},"# class ListNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, next=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.next = next"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" ListNode"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" head "),n("span",{class:"token keyword"},"or"),s(),n("span",{class:"token keyword"},"not"),s(" head"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` head
        new_head `),n("span",{class:"token operator"},"="),s(" self"),n("span",{class:"token punctuation"},"."),s("reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),n("span",{class:"token punctuation"},")"),s(`
        head`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(` head
        head`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"None"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` new_head
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100.00%; 内存 8。4 MB, 击败 6.64%"),s(`
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
    ListNode`),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("ListNode"),n("span",{class:"token operator"},"*"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("head "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"!"),s("head"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        ListNode `),n("span",{class:"token operator"},"*"),s(" new_head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        head`),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        head`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" new_head"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100.00%; 内存 38.4 MB, 击败 13.68%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" head"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" newHead "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        head`),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        head`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" newHead"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100.00%; 内存 3 MB, 击败 22.94%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("ListNode "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token operator"},"||"),s(" head"),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` head
    `),n("span",{class:"token punctuation"},"}"),s(`
    newHead `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},"."),s("Next"),n("span",{class:"token punctuation"},")"),s(`
    head`),n("span",{class:"token punctuation"},"."),s("Next"),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(` head
    head`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"nil"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` newHead
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 72 ms, 击败 76.63%; 内存 40.1 MB, 击败 10.73%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"head"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" head"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" new_head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    head`),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    head`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" new_head"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function H(R,U){const c=l("ExternalLinkIcon"),t=l("CodeGroupItem"),o=l("CodeGroup");return u(),p("div",null,[k,n("ul",null,[n("li",null,[n("p",null,[s("参考："),n("a",m,[s("【反转链表】：双指针，递归，妖魔化的双指针"),a(c)])])]),v,b,h,x,_,n("li",null,[y,a(o,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[f]),_:1}),a(t,{title:"cpp"},{default:e(()=>[g]),_:1}),a(t,{title:"java"},{default:e(()=>[L]),_:1}),a(t,{title:"go"},{default:e(()=>[N]),_:1}),a(t,{title:"javascript"},{default:e(()=>[w]),_:1})]),_:1})])]),j,n("ul",null,[B,D,M,C,n("li",null,[S,a(o,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[V]),_:1}),a(t,{title:"cpp"},{default:e(()=>[E]),_:1}),a(t,{title:"java"},{default:e(()=>[I]),_:1}),a(t,{title:"go"},{default:e(()=>[O]),_:1}),a(t,{title:"javascript"},{default:e(()=>[G]),_:1})]),_:1})])])])}const A=i(d,[["render",H],["__file","206.Reverse-Linked-List.html.vue"]]);export{A as default};
