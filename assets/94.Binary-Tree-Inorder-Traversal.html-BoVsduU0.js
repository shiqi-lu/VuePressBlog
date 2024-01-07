import{_ as c,r as l,o as i,c as p,a as n,d as a,w as e,e as u,b as s}from"./app-n0xwCUxG.js";const r={},k=u(`<h1 id="_94-二叉树的中序遍历-binary-tree-inorder-traversal-e" tabindex="-1"><a class="header-anchor" href="#_94-二叉树的中序遍历-binary-tree-inorder-traversal-e" aria-hidden="true">#</a> 94. 二叉树的中序遍历(Binary Tree Inorder Traversal)E</h1><h2 id="英文题目" tabindex="-1"><a class="header-anchor" href="#英文题目" aria-hidden="true">#</a> 英文题目</h2><ul><li><p>Given the root of a binary tree, return the inorder traversal of its nodes&#39; values.</p></li><li><p>Example 1:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: root = [1,null,2,3]
Output: [1,3,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 2:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: root = []
Output: []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 3:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: root = [1]
Output: [1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 4:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: root = [1,2]
Output: [2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Example 5:</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>Input: root = [1,null,2]
Output: [1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Constraints:</p></li><li><p>The number of nodes in the tree is in the range [0, 100].</p></li><li><p>100 &lt;= Node.val &lt;= 100</p></li></ul><h2 id="中文题目" tabindex="-1"><a class="header-anchor" href="#中文题目" aria-hidden="true">#</a> 中文题目</h2><ul><li><p>给定一个二叉树的根节点 root ，返回它的 中序 遍历。</p></li><li><p>示例 1：</p></li><li><p><img src="https://img.shiqi-lu.tech/20201125230637.png?imageView2/2/h/150" alt=""></p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：root = [1,null,2,3]
输出：[1,3,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 2：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：root = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 3：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：root = [1]
输出：[1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 4：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：root = [1,2]
输出：[2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例 5：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>输入：root = [1,null,2]
输出：[1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提示：</p></li><li><p>树中节点数目在范围 [0, 100] 内</p></li><li><p>100 &lt;= Node.val &lt;= 100</p></li></ul><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2>`,6),d=n("li",null,[n("p",null,"按照访问左子树-根节点-右子树的顺序遍历")],-1),m=n("li",null,[n("p",null,"时间复杂度O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次")],-1),v=n("p",null,"空间复杂度O(n)，为递归过程中栈的开销，平均情况下为 O(log⁡ n)，最坏情况下树呈现链状，为 O(n)",-1),b=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 40 ms, 击败 65.64%; 内存 16.1 MB, 击败 23.75%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" self"),n("span",{class:"token punctuation"},"."),s(`res
    
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("res"),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(`
        
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100%; 内存 8.1 MB, 击败 80.99%"),s(`
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
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"&"),s("res"),n("span",{class:"token punctuation"},","),s(" TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.7 MB, 击败 51.87%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 100%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res "),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Left"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token operator"},"*"),s("res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Right"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 68 ms, 击败 24.96%; 内存 41 MB, 击败 87.36%"),s(`
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
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"inorderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dfs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("res"),n("span",{class:"token punctuation"},","),s(" root")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h2",{id:"迭代",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#迭代","aria-hidden":"true"},"#"),s(" 迭代")],-1),T=n("li",null,[n("p",null,"不断把根节点入栈，并向左子树前进")],-1),N=n("li",null,[n("p",null,"出栈一个元素，输出，并向右子树前进，再执行上一步")],-1),_=n("p",null,"时间复杂度O(n)，空间复杂度O(n)",-1),L=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 56 ms, 击败 9.29%; 内存 16.1 MB, 击败 12.93%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        res`),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token punctuation"},","),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" cur "),n("span",{class:"token keyword"},"or"),s(" stack"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"while"),s(" cur"),n("span",{class:"token punctuation"},":"),s(`
                stack`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},")"),s(`
                cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`left
            node `),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),s("pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            res`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token keyword"},"return"),s(` res
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 8 ms, 击败 3.61%; 内存 8.2 MB, 击败 51.66%"),s(`
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
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        TreeNode`),n("span",{class:"token operator"},"*"),s(" cur "),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},";"),s(`
        stack`),n("span",{class:"token operator"},"<"),s("TreeNode"),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},">"),s(" st"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"!"),s("st"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                st`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            TreeNode`),n("span",{class:"token operator"},"*"),s(" node "),n("span",{class:"token operator"},"="),s(" st"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"top"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            st`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.8 MB, 击败 35.27%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token class-name"},"TreeNode"),s(" cur "),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"Deque"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},">")]),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"!"),s("stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token class-name"},"TreeNode"),s(" node "),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 77.88%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` res
    `),n("span",{class:"token punctuation"},"}"),s(`
    cur `),n("span",{class:"token operator"},":="),s(` root
    stack `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(" cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token punctuation"},")"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Left
        `),n("span",{class:"token punctuation"},"}"),s(`
        node `),n("span",{class:"token operator"},":="),s(" stack"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
        stack `),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s(`Right
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 77.88%"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * type TreeNode struct `),n("span",{class:"token punctuation"},"{"),s(`
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
func `),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s("int "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"res"),s(),n("span",{class:"token operator"},":"),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s("int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" root "),n("span",{class:"token operator"},"=="),s(" nil "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` res
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token literal-property property"},"cur"),s(),n("span",{class:"token operator"},":"),n("span",{class:"token operator"},"="),s(` root
    `),n("span",{class:"token literal-property property"},"stack"),s(),n("span",{class:"token operator"},":"),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" cur "),n("span",{class:"token operator"},"!="),s(" nil "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(" cur "),n("span",{class:"token operator"},"!="),s(" nil "),n("span",{class:"token punctuation"},"{"),s(`
            stack `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token punctuation"},")"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Left
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token literal-property property"},"node"),s(),n("span",{class:"token operator"},":"),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
        stack `),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},":"),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s(`Right
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("h2",{id:"morris遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#morris遍历","aria-hidden":"true"},"#"),s(" Morris遍历")],-1),D=n("li",null,[n("p",null,"同前序遍历，但只在到达左侧节点返回上层时，输出当前节点")],-1),M=n("p",null,"时间复杂度O(n)，空间复杂度O(1)",-1),R=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 40 ms, 击败 65.64%; 内存 15.9 MB, 击败 60.44%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
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
                    cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token comment"},"# 2.不断向左子树前进"),s(`
                    `),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token comment"},"# 注意，先建立完所有左子树的连接"),s(`
                `),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},":"),s(`
                    `),n("span",{class:"token comment"},"# 3.此时是已返回了上层节点，再次找到前驱节点"),s(`
                    `),n("span",{class:"token comment"},"# 断开连接"),s(`
                    curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"None"),s(`
            `),n("span",{class:"token comment"},"# 到达左侧节点返回上层时，输出当前节点"),s(`
            res`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
            
            `),n("span",{class:"token comment"},"# 2、4.左子树到头了，向右子树前进，有两种可能："),s(`
            `),n("span",{class:"token comment"},"# 可能是树本身的右子树，也可能是在上面建立起来的到根节点连接"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token keyword"},"return"),s(` res
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100%; 内存 8 MB, 击败 92.63%"),s(`
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
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
                    cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    curLeft`),n("span",{class:"token operator"},"->"),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.7 MB, 击败 51.87%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
                    cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 77.88%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"inorderTraversal"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
                cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Left
                `),n("span",{class:"token keyword"},"continue"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                curLeft`),n("span",{class:"token punctuation"},"."),s("Right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"nil"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Right
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 64 ms, 击败 48.12%; 内存 41 MB, 击败 85.20%"),s(`
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
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"inorderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
                cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function G(A,q){const t=l("CodeGroupItem"),o=l("CodeGroup");return i(),p("div",null,[k,n("ul",null,[d,m,n("li",null,[v,a(o,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[b]),_:1}),a(t,{title:"cpp"},{default:e(()=>[f]),_:1}),a(t,{title:"java"},{default:e(()=>[h]),_:1}),a(t,{title:"go"},{default:e(()=>[g]),_:1}),a(t,{title:"javascript"},{default:e(()=>[y]),_:1})]),_:1})])]),w,n("ul",null,[T,N,n("li",null,[_,a(o,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[L]),_:1}),a(t,{title:"cpp"},{default:e(()=>[x]),_:1}),a(t,{title:"java"},{default:e(()=>[j]),_:1}),a(t,{title:"go"},{default:e(()=>[B]),_:1}),a(t,{title:"javascript"},{default:e(()=>[I]),_:1})]),_:1})])]),O,n("ul",null,[D,n("li",null,[M,a(o,null,{default:e(()=>[a(t,{title:"python",active:""},{default:e(()=>[R]),_:1}),a(t,{title:"cpp"},{default:e(()=>[V]),_:1}),a(t,{title:"java"},{default:e(()=>[S]),_:1}),a(t,{title:"go"},{default:e(()=>[E]),_:1}),a(t,{title:"javascript"},{default:e(()=>[C]),_:1})]),_:1})])])])}const F=c(r,[["render",G],["__file","94.Binary-Tree-Inorder-Traversal.html.vue"]]);export{F as default};
