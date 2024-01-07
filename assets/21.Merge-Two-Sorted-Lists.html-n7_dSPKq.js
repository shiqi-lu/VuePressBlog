import{_ as c,r as o,o as i,c as p,a as n,d as a,w as t,e as u,b as s}from"./app-n0xwCUxG.js";const r={},k=u(`<h1 id="_21-合并两个有序链表-merge-two-sorted-lists-e" tabindex="-1"><a class="header-anchor" href="#_21-合并两个有序链表-merge-two-sorted-lists-e" aria-hidden="true">#</a> 21. 合并两个有序链表(Merge Two Sorted Lists)E</h1><h2 id="英文题目" tabindex="-1"><a class="header-anchor" href="#英文题目" aria-hidden="true">#</a> 英文题目</h2><ul><li><p>Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.</p></li><li><p>Example 1:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 2:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: l1 = [], l2 = []
Output: []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 3:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: l1 = [], l2 = [0]
Output: [0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Constraints:</p></li><li><p>The number of nodes in both lists is in the range [0, 50].</p></li><li><p>100 &lt;= Node.val &lt;= 100</p></li><li><p>Both l1 and l2 are sorted in non-decreasing order.</p></li></ul><h2 id="中文题目" tabindex="-1"><a class="header-anchor" href="#中文题目" aria-hidden="true">#</a> 中文题目</h2><ul><li><p>将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p></li><li><p>示例：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：1-&gt;2-&gt;4, 1-&gt;3-&gt;4
输出：1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="递归法" tabindex="-1"><a class="header-anchor" href="#递归法" aria-hidden="true">#</a> 递归法</h2>`,6),d=n("li",null,[n("p",null,"终止条件：当两个链表都为空时，表示链表已合并完成")],-1),m=n("li",null,[n("p",null,"如何递归：判断l1和l2头结点哪个更小，然后较小结点的 next 指针指向其余结点的合并结果")],-1),v=n("p",null,"时间复杂度O(m+n)，空间复杂度O(m+n)",-1),b=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 36 ms, 击败 61.73%; 内存 15.1 MB, 击败 20.34%"),s(`
`),n("span",{class:"token comment"},"# Definition for singly-linked list."),s(`
`),n("span",{class:"token comment"},"# class ListNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, next=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.next = next"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" l1"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},","),s(" l2"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" ListNode"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" l1"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(` l2
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" l2"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(` l1
        `),n("span",{class:"token keyword"},"if"),s(" l1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<="),s(" l2"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},":"),s(`
            l1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(" self"),n("span",{class:"token punctuation"},"."),s("mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("l1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),n("span",{class:"token punctuation"},","),s(" l2"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` l1
        `),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},":"),s(`
            l2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(" self"),n("span",{class:"token punctuation"},"."),s("mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("l1"),n("span",{class:"token punctuation"},","),s(" l2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` l2
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 8 ms, 击败 61.71%; 内存 14.4 MB, 击败 65.11%"),s(`
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
    ListNode`),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("ListNode"),n("span",{class:"token operator"},"*"),s(" list1"),n("span",{class:"token punctuation"},","),s(" ListNode"),n("span",{class:"token operator"},"*"),s(" list2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list2 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token operator"},"->"),s("val "),n("span",{class:"token operator"},"<="),s(" list2"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            list1`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},","),s(" list2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            list2`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},","),s(" list2"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 40.3 MB, 击败 75.16%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" list1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"ListNode"),s(" list2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list2 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<"),s(" list2"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            list1`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},","),s(" list2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            list2`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},","),s(" list2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 2.4 MB, 击败 27.85%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},","),s(" list2 "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("ListNode "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" list1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` list2
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(" list2 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` list1
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" list1"),n("span",{class:"token punctuation"},"."),s("Val "),n("span",{class:"token operator"},"<="),s(" list2"),n("span",{class:"token punctuation"},"."),s("Val "),n("span",{class:"token punctuation"},"{"),s(`
        list1`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},"."),s("Next"),n("span",{class:"token punctuation"},","),s(" list2"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` list1
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        list2`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},","),s(" list2"),n("span",{class:"token punctuation"},"."),s("Next"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` list2
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 72 ms, 击败 48.39%; 内存 43.6 MB, 击败 5.2%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"list1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"list2"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"mergeTwoLists"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("list1"),n("span",{class:"token punctuation"},","),s(" list2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list2 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<"),s(" list2"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        list1`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},","),s(" list2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        list2`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},","),s(" list2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("h2",{id:"迭代法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#迭代法","aria-hidden":"true"},"#"),s(" 迭代法")],-1),h=n("li",null,[n("p",null,"基本操作")],-1),L=n("p",null,"时间复杂度O(n+m)，空间复杂度O(1)",-1),N=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 32 ms, 击败 84.58%; 内存 15.1 MB, 击败 20.34%"),s(`
`),n("span",{class:"token comment"},"# Definition for singly-linked list."),s(`
`),n("span",{class:"token comment"},"# class ListNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, next=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.next = next"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" l1"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},","),s(" l2"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" ListNode"),n("span",{class:"token punctuation"},":"),s(`
        dummy `),n("span",{class:"token operator"},"="),s(" ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
        cur `),n("span",{class:"token operator"},"="),s(` dummy
        `),n("span",{class:"token keyword"},"while"),s(" l1 "),n("span",{class:"token keyword"},"and"),s(" l2"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" l1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<="),s(" l2"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},":"),s(`
                cur`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(` l1
                l1 `),n("span",{class:"token operator"},"="),s(" l1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
            `),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},":"),s(`
                cur`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(` l2
                l2 `),n("span",{class:"token operator"},"="),s(" l2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
        
        `),n("span",{class:"token keyword"},"if"),s(" l1"),n("span",{class:"token punctuation"},":"),s(`
            cur`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(` l1
        `),n("span",{class:"token keyword"},"if"),s(" l2"),n("span",{class:"token punctuation"},":"),s(`
            cur`),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token operator"},"="),s(` l2
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 4 ms, 击败 92.27%; 内存 14.4 MB, 击败 38.37%"),s(`
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
    ListNode`),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("ListNode"),n("span",{class:"token operator"},"*"),s(" list1"),n("span",{class:"token punctuation"},","),s(" ListNode"),n("span",{class:"token operator"},"*"),s(" list2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        ListNode dummy `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        ListNode `),n("span",{class:"token operator"},"*"),s(" cur "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("dummy"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),s(),n("span",{class:"token operator"},"&&"),s(" list2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token operator"},"->"),s("val "),n("span",{class:"token operator"},"<="),s(" list2"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                cur`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
                list1 `),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                cur`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
                list2 `),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            cur`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            cur`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 注意此处用."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 40.5 MB, 击败 42.66%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" list1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"ListNode"),s(" list2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" cur "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" list2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<"),s(" list2"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
                list1 `),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
                list2 `),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 4 ms, 击败 48.54%; 内存 2.4 MB, 击败 99.90%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},","),s(" list2 "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("ListNode "),n("span",{class:"token punctuation"},"{"),s(`
    dummy `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("ListNode"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token comment"},"// 注意此处的初始化"),s(`
    cur `),n("span",{class:"token operator"},":="),s(` dummy
    `),n("span",{class:"token keyword"},"for"),s(" list1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token operator"},"&&"),s(" list2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" list1"),n("span",{class:"token punctuation"},"."),s("Val "),n("span",{class:"token operator"},"<="),s(" list2"),n("span",{class:"token punctuation"},"."),s("Val "),n("span",{class:"token punctuation"},"{"),s(`
            cur`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(` list1
            list1 `),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},"."),s(`Next
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            cur`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(` list2
            list2 `),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},"."),s(`Next
        `),n("span",{class:"token punctuation"},"}"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Next
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" list1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        cur`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(` list1
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" list2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        cur`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(` list2
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s(`Next
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 68 ms, 击败 69.14%; 内存 43.2 MB, 击败 40.43%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"list1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"list2"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"mergeTwoLists"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("list1"),n("span",{class:"token punctuation"},","),s(" list2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" cur "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" list2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<"),s(" list2"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
            list1 `),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
            list2 `),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function M(D,S){const e=o("CodeGroupItem"),l=o("CodeGroup");return i(),p("div",null,[k,n("ul",null,[d,m,n("li",null,[v,a(l,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[b]),_:1}),a(e,{title:"cpp"},{default:t(()=>[y]),_:1}),a(e,{title:"java"},{default:t(()=>[w]),_:1}),a(e,{title:"go"},{default:t(()=>[x]),_:1}),a(e,{title:"javascript"},{default:t(()=>[f]),_:1})]),_:1})])]),g,n("ul",null,[h,n("li",null,[L,a(l,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[N]),_:1}),a(e,{title:"cpp"},{default:t(()=>[_]),_:1}),a(e,{title:"java"},{default:t(()=>[T]),_:1}),a(e,{title:"go"},{default:t(()=>[j]),_:1}),a(e,{title:"javascript"},{default:t(()=>[B]),_:1})]),_:1})])])])}const C=c(r,[["render",M],["__file","21.Merge-Two-Sorted-Lists.html.vue"]]);export{C as default};
