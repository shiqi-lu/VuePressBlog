import{_ as i,r as l,o as p,c as u,a as n,d as a,w as e,e as c,b as s}from"./app-n0xwCUxG.js";const r={},k=c(`<h1 id="_144-二叉树的前序遍历-binary-tree-preorder-traversal-e" tabindex="-1"><a class="header-anchor" href="#_144-二叉树的前序遍历-binary-tree-preorder-traversal-e" aria-hidden="true">#</a> 144. 二叉树的前序遍历(Binary Tree Preorder Traversal)E</h1><h2 id="英文题目" tabindex="-1"><a class="header-anchor" href="#英文题目" aria-hidden="true">#</a> 英文题目</h2><ul><li><p>Given the root of a binary tree, return the preorder traversal of its nodes&#39; values.</p></li><li><p>Example 1:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: root = [1,null,2,3]
Output: [1,2,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 2:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: root = []
Output: []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 3:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: root = [1]
Output: [1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 4:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: root = [1,2]
Output: [1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 5:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: root = [1,null,2]
Output: [1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Constraints:</p></li><li><p>The number of nodes in the tree is in the range [0, 100].</p></li><li><p>-100 &lt;= Node.val &lt;= 100</p></li><li><p>Follow up:</p></li><li><p>Recursive solution is trivial, could you do it iteratively?</p></li></ul><h2 id="中文题目" tabindex="-1"><a class="header-anchor" href="#中文题目" aria-hidden="true">#</a> 中文题目</h2><ul><li><p>给你二叉树的根节点 root ，返回它节点值的 前序 遍历。</p></li><li><p>示例 1：</p></li><li><p><img src="https://img.shiqi-lu.tech/20201203224449.png" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：root = [1,null,2,3]
输出：[1,2,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 2：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：root = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 3：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：root = [1]
输出：[1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 4：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：root = [1,2]
输出：[1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 5：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：root = [1,null,2]
输出：[1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提示：</p></li><li><p>树中节点数目在范围 [0, 100] 内</p></li><li><p>-100 &lt;= Node.val &lt;= 100</p></li><li><p>进阶：递归算法很简单，你可以通过迭代算法完成吗？</p></li></ul><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2>`,6),d=n("li",null,[n("p",null,"按照访问根节点-左子树-右子树的顺序遍历")],-1),m=n("li",null,[n("p",null,"时间复杂度O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次")],-1),v=n("p",null,"空间复杂度O(n)，为递归过程中栈的开销，平均情况下为 O(log⁡ n)，最坏情况下树呈现链状，为 O(n)",-1),b=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 40 ms, 击败 66.00%; 内存 15.64 MB, 击败 43.47%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" self"),n("span",{class:"token punctuation"},"."),s(`res
    
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("res"),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(`
        
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 4 ms, 击败 41.96%; 内存 8.2 MB, 击败 33.54%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"&"),s("res"),n("span",{class:"token punctuation"},","),s(" TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 4 ms, 击败 41.96%; 内存 8.2 MB, 击败 33.54%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.83 MB, 击败 99.95%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 特别注意结果数组需要传递引用"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res "),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token operator"},"*"),s("res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Left"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Right"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 68 ms, 击败 24.6%; 内存 41.1 MB, 击败 59.97%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"preorderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dfs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("res"),n("span",{class:"token punctuation"},","),s(" root")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h2",{id:"迭代",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#迭代","aria-hidden":"true"},"#"),s(" 迭代")],-1),T=n("li",null,[n("p",null,"使用栈，初始把根节点入栈")],-1),_=n("li",null,[n("p",null,"当栈不为空时，把栈顶元素，即根节点值加入到结果中，然后先入栈右子树，再入栈左子树")],-1),N=n("p",null,"时间复杂度O(n)，空间复杂度O(n)",-1),L=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 40 ms, 击败 66%; 内存 16.1 MB, 击败 21.79%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` res
        `),n("span",{class:"token comment"},"# 初始化栈，并将根节点入栈"),s(`
        stack `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" stack"),n("span",{class:"token punctuation"},":"),s(`
            node `),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),s("pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token comment"},"# 当栈不为空时，把栈顶元素，即根节点值加入到结果中"),s(`
            res`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token comment"},"# 如果 node 的右子树非空，将右子树入栈"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},":"),s(`
                stack`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token comment"},"# 如果 node 的左子树非空，将左子树入栈"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},":"),s(`
                stack`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` res
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100%; 内存 8.1 MB, 击败 84.85%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        stack`),n("span",{class:"token operator"},"<"),s("TreeNode"),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},">"),s(" st"),n("span",{class:"token punctuation"},";"),s(`
        st`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("st"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            TreeNode`),n("span",{class:"token operator"},"*"),s(" node "),n("span",{class:"token operator"},"="),s(" st"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"top"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            st`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                st`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                st`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 75.75%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token class-name"},"Deque"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},">")]),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"TreeNode"),s(" node "),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 75.75%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` res
    `),n("span",{class:"token punctuation"},"}"),s(`
    stack `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},"{"),s("root"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
        node `),n("span",{class:"token operator"},":="),s(" stack"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
        stack `),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("Right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Right"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("Left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Left"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: "),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"preorderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        node `),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("h2",{id:"morris遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#morris遍历","aria-hidden":"true"},"#"),s(" Morris遍历")],-1),M=c('<li><p>参考：https://leetcode.cn/problems/binary-tree-preorder-traversal/solutions/656142/cer-cha-shu-san-chong-bian-li-qian-zhong-erk2/</p></li><li><p><img src="https://img.shiqi-lu.tech/202307220954762.png" alt=""></p></li><li><p>整体思路是，先建立根节点在中序遍历下的前驱节点和自身的连接，即上图 1 到 图 2，然后即可顺着上述连接遍历，返回根节点时，再断开连接</p></li><li><p>分为4 步：</p><ul><li>1.从根节点开始，找到根节点在中序遍历下的前驱节点，建立连接(由上至下)，向左子树前进</li><li>2.左侧到头时，向右子树前进(由下至上)，因此时右子树指向的是根节点，则回到了根节点</li><li>3.由根节点再找一遍该根节点在中序遍历下的前驱节点，断开连接</li><li>4.向右子树前进</li></ul></li>',4),I=n("p",null,"时间复杂度O(n)，空间复杂度O(1)",-1),R=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python: 时间 44 ms, 击败 41.96%; 内存 15.9 MB, 击败 62.46%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` res
        cur `),n("span",{class:"token operator"},"="),s(` root
        `),n("span",{class:"token keyword"},"while"),s(" cur"),n("span",{class:"token punctuation"},":"),s(`
            curLeft `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`left
            
            `),n("span",{class:"token comment"},"# 当左子树存在，即可建立前驱节点的连接"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" curLeft"),n("span",{class:"token punctuation"},":"),s(`
                `),n("span",{class:"token keyword"},"while"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token keyword"},"and"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(" cur"),n("span",{class:"token punctuation"},":"),s(`
                    `),n("span",{class:"token comment"},"# 此时curLeft是cur节点中序遍历的前驱节点"),s(`
                    curLeft `),n("span",{class:"token operator"},"="),s(" curLeft"),n("span",{class:"token punctuation"},"."),s(`right

                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},":"),s(`
                    `),n("span",{class:"token comment"},"# 1.第一次是找前驱节点，并建立连接"),s(`
                    curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(` cur
                    `),n("span",{class:"token comment"},"# 这里输出的是有左子树的根节点"),s(`
                    res`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
                    cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token comment"},"# 2.不断向左子树前进"),s(`
                    `),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token comment"},"# 注意，先建立完所有左子树的连接"),s(`
                `),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},":"),s(`
                    `),n("span",{class:"token comment"},"# 3.此时是已返回了上层节点，再次找到前驱节点"),s(`
                    `),n("span",{class:"token comment"},"# 断开连接"),s(`
                    curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"None"),s(`
            `),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},":"),s(`
                `),n("span",{class:"token comment"},"# 当前节点无左子树，则可直接输出当前节点"),s(`
                res`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
            
            `),n("span",{class:"token comment"},"# 2、4.左子树到头了，向右子树前进，有两种可能："),s(`
            `),n("span",{class:"token comment"},"# 可能是树本身的右子树，也可能是在上面建立起来的到根节点连接"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token keyword"},"return"),s(` res
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100%; 内存 8.1 MB, 击败 78.71%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        TreeNode `),n("span",{class:"token operator"},"*"),s(" cur "),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            TreeNode `),n("span",{class:"token operator"},"*"),s(" curLeft "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("curLeft "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("curLeft"),n("span",{class:"token operator"},"->"),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),s(),n("span",{class:"token operator"},"&&"),s(" curLeft"),n("span",{class:"token operator"},"->"),s("right "),n("span",{class:"token operator"},"!="),s(" cur"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    curLeft `),n("span",{class:"token operator"},"="),s(" curLeft"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("curLeft"),n("span",{class:"token operator"},"->"),s("right "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    curLeft`),n("span",{class:"token operator"},"->"),s("right "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
                    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    curLeft`),n("span",{class:"token operator"},"->"),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 85.13%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * public class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val) `),n("span",{class:"token punctuation"},"{"),s(" this.val = val; "),n("span",{class:"token punctuation"},"}"),s(`
 *     TreeNode(int val, TreeNode left, TreeNode right) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token class-name"},"TreeNode"),s(" cur "),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"TreeNode"),s(" curLeft "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("curLeft "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("curLeft"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(" cur"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    curLeft `),n("span",{class:"token operator"},"="),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("curLeft"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
                    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 80.46%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"preorderTraversal"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` res
    `),n("span",{class:"token punctuation"},"}"),s(`
    cur `),n("span",{class:"token operator"},":="),s(` root
    `),n("span",{class:"token keyword"},"for"),s(" cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        curLeft `),n("span",{class:"token operator"},":="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Left
        `),n("span",{class:"token keyword"},"if"),s(" curLeft "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"for"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("Right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token operator"},"&&"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("Right "),n("span",{class:"token operator"},"!="),s(" cur "),n("span",{class:"token punctuation"},"{"),s(`
                curLeft `),n("span",{class:"token operator"},"="),s(" curLeft"),n("span",{class:"token punctuation"},"."),s(`Right
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("Right "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
                curLeft`),n("span",{class:"token punctuation"},"."),s("Right "),n("span",{class:"token operator"},"="),s(` cur
                res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
                cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Left
                `),n("span",{class:"token keyword"},"continue"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                curLeft`),n("span",{class:"token punctuation"},"."),s("Right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"nil"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Right
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 60 ms, 击败 69.63%; 内存 41 MB, 击败 78.55%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) `),n("span",{class:"token punctuation"},"{"),s(`
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"preorderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" cur "),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" curLeft "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("curLeft "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("curLeft"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(" cur"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                curLeft `),n("span",{class:"token operator"},"="),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("curLeft"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
                res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function G(q,A){const t=l("CodeGroupItem"),o=l("CodeGroup");return p(),u("div",null,[k,n("ul",null,[d,m,n("li",null,[v,a(o,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[b]),_:1}),a(t,{title:"cpp"},{default:e(()=>[f]),_:1}),a(t,{title:"java"},{default:e(()=>[h]),_:1}),a(t,{title:"go"},{default:e(()=>[g]),_:1}),a(t,{title:"javascript"},{default:e(()=>[y]),_:1})]),_:1})])]),w,n("ul",null,[T,_,n("li",null,[N,a(o,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[L]),_:1}),a(t,{title:"cpp"},{default:e(()=>[x]),_:1}),a(t,{title:"java"},{default:e(()=>[j]),_:1}),a(t,{title:"go"},{default:e(()=>[B]),_:1}),a(t,{title:"javascript"},{default:e(()=>[O]),_:1})]),_:1})])]),D,n("ul",null,[M,n("li",null,[I,a(o,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[R]),_:1}),a(t,{title:"cpp"},{default:e(()=>[V]),_:1}),a(t,{title:"java"},{default:e(()=>[S]),_:1}),a(t,{title:"go"},{default:e(()=>[E]),_:1}),a(t,{title:"javascript"},{default:e(()=>[C]),_:1})]),_:1})])])])}const z=i(r,[["render",G],["__file","144.Binary-Tree-Preorder-Traversal.html.vue"]]);export{z as default};
