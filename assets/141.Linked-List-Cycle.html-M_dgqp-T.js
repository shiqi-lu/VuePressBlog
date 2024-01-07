import{_ as c,r as o,o as i,c as p,a as n,d as a,w as e,e as u,b as s}from"./app-n0xwCUxG.js";const r={},d=u(`<h1 id="_141-环形链表-linked-list-cycle-e" tabindex="-1"><a class="header-anchor" href="#_141-环形链表-linked-list-cycle-e" aria-hidden="true">#</a> 141. 环形链表(Linked List Cycle)E</h1><h2 id="英文题目" tabindex="-1"><a class="header-anchor" href="#英文题目" aria-hidden="true">#</a> 英文题目</h2><ul><li><p>Given head, the head of a linked list, determine if the linked list has a cycle in it.</p></li><li><p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail&#39;s next pointer is connected to. Note that pos is not passed as a parameter.</p></li><li><p>Return true if there is a cycle in the linked list. Otherwise, return false.</p></li><li><p>Example 1:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 2:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 3:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Constraints:</p></li><li><p>The number of the nodes in the list is in the range [0, 10^4].</p></li><li><p>-10^5 &lt;= Node.val &lt;= 10^5</p></li><li><p>pos is -1 or a valid index in the linked-list.</p></li><li><p>Follow up: Can you solve it using O(1) (i.e. constant) memory?</p></li></ul><h2 id="中文题目" tabindex="-1"><a class="header-anchor" href="#中文题目" aria-hidden="true">#</a> 中文题目</h2><ul><li><p>给定一个链表，判断链表中是否有环。</p></li><li><p>如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。</p></li><li><p>如果链表中存在环，则返回 true 。 否则，返回 false 。</p></li><li><p>进阶：</p></li><li><p>你能用 O(1)（即，常量）内存解决此问题吗？</p></li><li><p>示例 1：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 2：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 3：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提示：</p></li><li><p>链表中节点的数目范围是 [0, 10^4]</p></li><li><p>-10^5 &lt;= Node.val &lt;= 10^5</p></li><li><p>pos 为 -1 或者链表中的一个 有效索引</p></li></ul><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> 哈希表</h2>`,6),k=n("li",null,[n("p",null,"把遍历过的节点存到哈希表中，遍历新节点时，如果哈希表中已存在，则说明有环，否则无环")],-1),m=n("p",null,"时间复杂度O(N)，空间复杂度O(N)",-1),v=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"#执行用时：64 ms, 在所有 Python3 提交中击败了64.11%的用户"),s(`
`),n("span",{class:"token comment"},"#内存消耗：18.6 MB, 在所有 Python3 提交中击败了8.89%的用户"),s(`
`),n("span",{class:"token comment"},"# Definition for singly-linked list."),s(`
`),n("span",{class:"token comment"},"# class ListNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, x):"),s(`
`),n("span",{class:"token comment"},"#         self.val = x"),s(`
`),n("span",{class:"token comment"},"#         self.next = None"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"hasCycle"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token builtin"},"bool"),n("span",{class:"token punctuation"},":"),s(`
        seen `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" head"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" head "),n("span",{class:"token keyword"},"in"),s(" seen"),n("span",{class:"token punctuation"},":"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"True"),s(`
            seen`),n("span",{class:"token punctuation"},"."),s("add"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),s(`
            head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"False"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 12 ms, 击败 52.77%; 内存 10.3 MB, 击败 12.63%"),s(`
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
    `),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token function"},"hasCycle"),n("span",{class:"token punctuation"},"("),s("ListNode "),n("span",{class:"token operator"},"*"),s("head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        unordered_set`),n("span",{class:"token operator"},"<"),s("ListNode "),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},">"),s(" seen"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("seen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(" seen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            seen`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 4 ms, 击败 12.68%; 内存 42.1 MB, 击败 93.10%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode(int x) `),n("span",{class:"token punctuation"},"{"),s(`
 *         val = x;
 *         next = null;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"hasCycle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Set"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},">")]),s(" seen "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HashSet"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("seen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"contains"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            seen`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 12 ms, 击败 15.72%; 内存 6.1 MB, 击败 5.9%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"hasCycle"),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
    seen `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"bool"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" ok "),n("span",{class:"token operator"},":="),s(" seen"),n("span",{class:"token punctuation"},"["),s("head"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(" ok "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        seen`),n("span",{class:"token punctuation"},"["),s("head"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
        head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s(`Next
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 72 ms, 击败 73.57%; 内存 44.6 MB, 击败 9.59%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * function ListNode(val) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = val;
 *     this.next = null;
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"head"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"hasCycle"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" seen "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("seen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        seen`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h2",{id:"快慢指针",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快慢指针","aria-hidden":"true"},"#"),s(" 快慢指针")],-1),g=n("li",null,[n("p",null,"快指针每次走两步，慢指针每次走一步，如果两个能相遇即有环")],-1),x=n("li",null,[n("p",null,"时间复杂度O(N)，N是链表中的节点")],-1),_=n("p",null,"空间复杂度O(1)",-1),N=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# 执行用时：56 ms, 在所有 Python3 提交中击败了85.62%的用户"),s(`
`),n("span",{class:"token comment"},"# 内存消耗：16.5 MB, 在所有 Python3 提交中击败了27.28%的用户"),s(`
`),n("span",{class:"token comment"},"# Definition for singly-linked list."),s(`
`),n("span",{class:"token comment"},"# class ListNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, x):"),s(`
`),n("span",{class:"token comment"},"#         self.val = x"),s(`
`),n("span",{class:"token comment"},"#         self.next = None"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"hasCycle"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" head"),n("span",{class:"token punctuation"},":"),s(" ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token builtin"},"bool"),n("span",{class:"token punctuation"},":"),s(`
        fast `),n("span",{class:"token operator"},"="),s(" slow "),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token comment"},"# 判断条件这么写可以不预先判断 head 指针是否存在"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" fast "),n("span",{class:"token keyword"},"and"),s(" fast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),n("span",{class:"token punctuation"},":"),s(`
            slow`),n("span",{class:"token punctuation"},","),s(" fast "),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),n("span",{class:"token punctuation"},","),s(" fast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"next"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" fast "),n("span",{class:"token operator"},"=="),s(" slow"),n("span",{class:"token punctuation"},":"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"True"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"False"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 8 ms, 击败 92.34%; 内存 7.8 MB, 击败 77.60%"),s(`
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
    `),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token function"},"hasCycle"),n("span",{class:"token punctuation"},"("),s("ListNode "),n("span",{class:"token operator"},"*"),s("head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        ListNode `),n("span",{class:"token operator"},"*"),s("fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"*"),s("slow "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("fast "),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("fast "),n("span",{class:"token operator"},"=="),s(" slow"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 42.4 MB, 击败 59.73%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     ListNode next;
 *     ListNode(int x) `),n("span",{class:"token punctuation"},"{"),s(`
 *         val = x;
 *         next = null;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"hasCycle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ListNode"),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ListNode"),s(" fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},","),s(" slow "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("fast "),n("span",{class:"token operator"},"=="),s(" slow"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 8 ms, 击败 71.77%; 内存 4.2 MB, 击败 100%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"hasCycle"),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fast`),n("span",{class:"token punctuation"},","),s(" slow "),n("span",{class:"token operator"},":="),s(" head"),n("span",{class:"token punctuation"},","),s(` head
    `),n("span",{class:"token keyword"},"for"),s(" fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s(`Next
        fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("Next"),n("span",{class:"token punctuation"},"."),s(`Next
        `),n("span",{class:"token keyword"},"if"),s(" fast "),n("span",{class:"token operator"},"=="),s(" slow "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 76 ms, 击败 54.30%; 内存 43.9 MB, 击败 29.36%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * function ListNode(val) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = val;
 *     this.next = null;
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"head"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"hasCycle"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},","),s(" slow "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("fast "),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("fast "),n("span",{class:"token operator"},"=="),s(" slow"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function D(M,O){const t=o("CodeGroupItem"),l=o("CodeGroup");return i(),p("div",null,[d,n("ul",null,[k,n("li",null,[m,a(l,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[v]),_:1}),a(t,{title:"cpp"},{default:e(()=>[b]),_:1}),a(t,{title:"java"},{default:e(()=>[h]),_:1}),a(t,{title:"go"},{default:e(()=>[f]),_:1}),a(t,{title:"javascript"},{default:e(()=>[y]),_:1})]),_:1})])]),w,n("ul",null,[g,x,n("li",null,[_,a(l,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[N]),_:1}),a(t,{title:"cpp"},{default:e(()=>[L]),_:1}),a(t,{title:"java"},{default:e(()=>[C]),_:1}),a(t,{title:"go"},{default:e(()=>[j]),_:1}),a(t,{title:"javascript"},{default:e(()=>[B]),_:1})]),_:1})])])])}const E=c(r,[["render",D],["__file","141.Linked-List-Cycle.html.vue"]]);export{E as default};
