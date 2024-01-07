import{_ as c,r as o,o as p,c as u,a as n,d as a,w as e,e as i,b as s}from"./app-n0xwCUxG.js";const r={},d=i(`<h1 id="_160-相交链表-intersection-of-two-linked-lists-e" tabindex="-1"><a class="header-anchor" href="#_160-相交链表-intersection-of-two-linked-lists-e" aria-hidden="true">#</a> 160. 相交链表(Intersection of Two Linked Lists)E</h1><h2 id="英文题目" tabindex="-1"><a class="header-anchor" href="#英文题目" aria-hidden="true">#</a> 英文题目</h2><ul><li><p>Write a program to find the node at which the intersection of two singly linked lists begins.</p></li><li><p>For example, the following two linked lists:</p></li><li><p><img src="https://img.shiqi-lu.tech/20210214195435.png" alt=""></p></li><li><p>begin to intersect at node c1.</p></li><li><p>Example 1:</p></li><li><p><img src="https://img.shiqi-lu.tech/20210214195530.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node&#39;s value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 2:</p></li><li><p><img src="https://img.shiqi-lu.tech/20210214195722.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node&#39;s value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 3:</p></li><li><p><img src="https://img.shiqi-lu.tech/20210214195656.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Explanation: The two lists do not intersect, so return null.</p></li><li><p>Notes:</p></li><li><p>If the two linked lists have no intersection at all, return null.</p></li><li><p>The linked lists must retain their original structure after the function returns.</p></li><li><p>You may assume there are no cycles anywhere in the entire linked structure.</p></li><li><p>Each value on each linked list is in the range [1, 10^9].</p></li><li><p>Your code should preferably run in O(n) time and use only O(1) memory.</p></li></ul><h2 id="中文题目" tabindex="-1"><a class="header-anchor" href="#中文题目" aria-hidden="true">#</a> 中文题目</h2><ul><li><p>编写一个程序，找到两个单链表相交的起始节点。</p></li><li><p>如下面的两个链表**：**</p></li><li><p><img src="https://img.shiqi-lu.tech/20210214195435.png" alt=""></p></li><li><p>在节点 c1 开始相交。</p></li><li><p>示例 1：</p></li><li><p><img src="https://img.shiqi-lu.tech/20210214195530.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 2：</p></li><li><p><img src="https://img.shiqi-lu.tech/20210214195722.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 3：</p></li><li><p><img src="https://img.shiqi-lu.tech/20210214195656.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>注意：</p></li><li><p>如果两个链表没有交点，返回 null.</p></li><li><p>在返回结果后，两个链表仍须保持原有的结构。</p></li><li><p>可假定整个链表结构中没有循环。</p></li><li><p>程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。</p></li></ul><h2 id="哈希集合" tabindex="-1"><a class="header-anchor" href="#哈希集合" aria-hidden="true">#</a> 哈希集合</h2>`,6),k=n("li",null,[n("p",null,"用集合存储A链表所有节点，然后遍历B链表查看是否存在")],-1),m=n("p",null,"时间复杂度O(m+n)，空间复杂度O(m)，m,n 分别是链表headA和headB的长度",-1),v=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 132 ms, 击败 90.42%; 内存 31.2 MB, 击败 15.61%"),s(`
`),n("span",{class:"token comment"},"# Definition for singly-linked list."),s(`
`),n("span",{class:"token comment"},"# class ListNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, x):"),s(`
`),n("span",{class:"token comment"},"#         self.val = x"),s(`
`),n("span",{class:"token comment"},"#         self.next = None"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" headA"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},","),s(" headB"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("ListNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        visited `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" headA"),n("span",{class:"token punctuation"},":"),s(`
            visited`),n("span",{class:"token punctuation"},"."),s("add"),n("span",{class:"token punctuation"},"("),s("headA"),n("span",{class:"token punctuation"},")"),s(`
            headA `),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" headB"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" headB "),n("span",{class:"token keyword"},"in"),s(" visited"),n("span",{class:"token punctuation"},":"),s(`
                `),n("span",{class:"token keyword"},"return"),s(` headB
            headB `),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"None"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 64 ms, 击败 8.48%; 内存 16.8 MB, 击败 12.89%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
    ListNode `),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),s("ListNode "),n("span",{class:"token operator"},"*"),s("headA"),n("span",{class:"token punctuation"},","),s(" ListNode "),n("span",{class:"token operator"},"*"),s("headB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        unordered_set`),n("span",{class:"token operator"},"<"),s("ListNode "),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},">"),s(" visited"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("headA "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            visited`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("headA"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            headA `),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("headB "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("visited"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("headB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(" visited"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            headB `),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 5 ms, 击败 20.38%; 内存 45.3 MB, 击败 48%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * public class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode(int x) `),n("span",{class:"token punctuation"},"{"),s(`
 *         val = x;
 *         next = null;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" headA"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"ListNode"),s(" headB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Set"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},">")]),s(" visited "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HashSet"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("headA "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            visited`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("headA"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            headA `),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("headB "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("visited"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"contains"),n("span",{class:"token punctuation"},"("),s("headB"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            headB `),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 32 ms, 击败 34.30%; 内存 7.3 MB, 击败 5.3%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),s("headA"),n("span",{class:"token punctuation"},","),s(" headB "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("ListNode "),n("span",{class:"token punctuation"},"{"),s(`
    visited `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"bool"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" headA "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        visited`),n("span",{class:"token punctuation"},"["),s("headA"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
        headA `),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},"."),s(`Next
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" headB "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" ok "),n("span",{class:"token operator"},":="),s(" visited"),n("span",{class:"token punctuation"},"["),s("headB"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(" ok "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        headB `),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},"."),s(`Next
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 80 ms, 击败 87.90%; 内存 49 MB, 击败 24%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * function ListNode(val) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = val;
 *     this.next = null;
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"headA"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"headB"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"getIntersectionNode"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("headA"),n("span",{class:"token punctuation"},","),s(" headB")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" visited "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("headA "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        visited`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("headA"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        headA `),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("headB "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("visited"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("headB"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` headB
        `),n("span",{class:"token punctuation"},"}"),s(`
        headB `),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h2",{id:"双指针",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#双指针","aria-hidden":"true"},"#"),s(" 双指针")],-1),g=i('<li><p>思路是：先遍历完自己的链表，再遍历对方的链表</p></li><li><p><img src="https://img.shiqi-lu.tech/20210504092749.png" alt=""></p></li><li><p>如图，设「第一个公共节点」是node</p></li><li><p>指针 pA 先遍历完链表 headA ，再开始遍历链表 headB ，当走到 node 时，共走步数为：a + (b - c)</p></li><li><p>指针 pB 先遍历完链表 headB ，再开始遍历链表 headA ，当走到 node 时，共走步数为：b + (a - c)</p></li><li><p>此时指针 pA，pB 重合，有两种情况：</p></li><li><p>1.若两链表有公共尾部(即 c &gt; 0)：指针 pA，pB 同时指向「第一个公共节点」node</p></li><li><p>2.若两链表无公共尾部(即 c = 0)：指针 pA，pB 同时指向 null</p></li><li><p>此时返回 pA 即可(pB也行)，它们相等</p></li>',9),B=n("p",null,"时间复杂度O(a+b)，空间复杂度O(1)",-1),A=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 144 ms, 击败 54.79%; 内存 31 MB, 击败 25.98%"),s(`
`),n("span",{class:"token comment"},"# Definition for singly-linked list."),s(`
`),n("span",{class:"token comment"},"# class ListNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, x):"),s(`
`),n("span",{class:"token comment"},"#         self.val = x"),s(`
`),n("span",{class:"token comment"},"#         self.next = None"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" headA"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},","),s(" headB"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" ListNode"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" headA "),n("span",{class:"token keyword"},"or"),s(),n("span",{class:"token keyword"},"not"),s(" headB"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"None"),s(`
        pA`),n("span",{class:"token punctuation"},","),s(" pB "),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},","),s(` headB
        `),n("span",{class:"token comment"},"# 如果pA,pB当前的节点是存在的，往下走"),s(`
        `),n("span",{class:"token comment"},"# 这里还用了个特性，None != None 时，结果是False"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" pA "),n("span",{class:"token operator"},"!="),s(" pB"),n("span",{class:"token punctuation"},":"),s(`
            pA `),n("span",{class:"token operator"},"="),s(" pA"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token keyword"},"if"),s(" pA "),n("span",{class:"token keyword"},"else"),s(` headB
            pB `),n("span",{class:"token operator"},"="),s(" pB"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(),n("span",{class:"token keyword"},"if"),s(" pB "),n("span",{class:"token keyword"},"else"),s(` headA
        `),n("span",{class:"token keyword"},"return"),s(` pA
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 36 ms, 击败 90.22%; 内存 14.3 MB, 击败 40.67%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
    ListNode `),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),s("ListNode "),n("span",{class:"token operator"},"*"),s("headA"),n("span",{class:"token punctuation"},","),s(" ListNode "),n("span",{class:"token operator"},"*"),s("headB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("headA "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),s(),n("span",{class:"token operator"},"||"),s(" headB "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        ListNode `),n("span",{class:"token operator"},"*"),s("pA "),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"*"),s("pB "),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("pA "),n("span",{class:"token operator"},"!="),s(" pB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            pA `),n("span",{class:"token operator"},"="),s(" pA "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),s(),n("span",{class:"token operator"},"?"),s(" pA"),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},":"),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
            pB `),n("span",{class:"token operator"},"="),s(" pB "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),s(),n("span",{class:"token operator"},"?"),s(" pB"),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},":"),s(" headA"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" pA"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 1 ms, 击败 98.37%; 内存 45.2 MB, 击败 63.38%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * public class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode(int x) `),n("span",{class:"token punctuation"},"{"),s(`
 *         val = x;
 *         next = null;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ListNode"),s(),n("span",{class:"token function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" headA"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"ListNode"),s(" headB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("headA "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" headB "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" pA "),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},","),s(" pB "),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("pA "),n("span",{class:"token operator"},"!="),s(" pB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            pA `),n("span",{class:"token operator"},"="),s(" pA "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(" pA"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},":"),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
            pB `),n("span",{class:"token operator"},"="),s(" pB "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(" pB"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},":"),s(" headA"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" pA"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 28 ms, 击败 74.36%; 内存 6.5 MB, 击败 65.75%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"getIntersectionNode"),n("span",{class:"token punctuation"},"("),s("headA"),n("span",{class:"token punctuation"},","),s(" headB "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("ListNode "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" headA "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token operator"},"||"),s(" headB "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    pA`),n("span",{class:"token punctuation"},","),s(" pB "),n("span",{class:"token operator"},":="),s(" headA"),n("span",{class:"token punctuation"},","),s(` headB
    `),n("span",{class:"token keyword"},"for"),s(" pA "),n("span",{class:"token operator"},"!="),s(" pB "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" pA "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            pA `),n("span",{class:"token operator"},"="),s(" pA"),n("span",{class:"token punctuation"},"."),s(`Next
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            pA `),n("span",{class:"token operator"},"="),s(` headB
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" pB "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            pB `),n("span",{class:"token operator"},"="),s(" pB"),n("span",{class:"token punctuation"},"."),s(`Next
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            pB `),n("span",{class:"token operator"},"="),s(` headA
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` pA
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 84 ms, 击败 76.76%; 内存 48.1 MB, 击败 89.31%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * function ListNode(val) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = val;
 *     this.next = null;
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"headA"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"headB"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"getIntersectionNode"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("headA"),n("span",{class:"token punctuation"},","),s(" headB")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("headA "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" headB "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" pA "),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},","),s(" pB "),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("pA "),n("span",{class:"token operator"},"!="),s(" pB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        pA `),n("span",{class:"token operator"},"="),s(" pA "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(" pA"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},":"),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
        pB `),n("span",{class:"token operator"},"="),s(" pB "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(" pB"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},":"),s(" headA"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" pA"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function I(j,V){const t=o("CodeGroupItem"),l=o("CodeGroup");return p(),u("div",null,[d,n("ul",null,[k,n("li",null,[m,a(l,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[v]),_:1}),a(t,{title:"cpp"},{default:e(()=>[b]),_:1}),a(t,{title:"java"},{default:e(()=>[h]),_:1}),a(t,{title:"go"},{default:e(()=>[w]),_:1}),a(t,{title:"javascript"},{default:e(()=>[y]),_:1})]),_:1})])]),f,n("ul",null,[g,n("li",null,[B,a(l,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[A]),_:1}),a(t,{title:"cpp"},{default:e(()=>[N]),_:1}),a(t,{title:"java"},{default:e(()=>[x]),_:1}),a(t,{title:"go"},{default:e(()=>[_]),_:1}),a(t,{title:"javascript"},{default:e(()=>[L]),_:1})]),_:1})])])])}const T=c(r,[["render",I],["__file","160.Intersection-of-Two-Linked-Lists.html.vue"]]);export{T as default};
