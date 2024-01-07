import{_ as u,r as l,o as i,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-n0xwCUxG.js";const k={},d=n("h1",{id:"二叉树的-4-种遍历-前中后序和层次遍历-整理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉树的-4-种遍历-前中后序和层次遍历-整理","aria-hidden":"true"},"#"),s(" 二叉树的 4 种遍历(前中后序和层次遍历)整理")],-1),m=n("h2",{id:"引言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#引言","aria-hidden":"true"},"#"),s(" 引言")],-1),v=n("li",null,[n("p",null,"二叉树遍历主要包括，前中后序遍历和层次遍历，在此对各方法进行汇总，方便比较相同方法间的不同点")],-1),b=n("p",null,"来源于leetcode的如下问题：",-1),f={href:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://leetcode-cn.com/problems/binary-tree-inorder-traversal/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://leetcode-cn.com/problems/binary-tree-postorder-traversal/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://leetcode-cn.com/problems/binary-tree-level-order-traversal/",target:"_blank",rel:"noopener noreferrer"},w=p(`<h2 id="问题示例" tabindex="-1"><a class="header-anchor" href="#问题示例" aria-hidden="true">#</a> 问题示例</h2><ul><li><p>以如下二叉树为例：</p></li><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>    3
   / \\
  9  20
    /  \\
   15   7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>前序遍历返回：<code>[3,9,20,15,7]</code></p></li><li><p>中序遍历返回：<code>[9,3,15,20,7]</code></p></li><li><p>后序遍历返回：<code>[9,15,7,20,3]</code></p></li><li><p>层次遍历返回：</p><ul><li><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>[
  [3],
  [9,20],
  [15,7]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="前中后序的递归遍历" tabindex="-1"><a class="header-anchor" href="#前中后序的递归遍历" aria-hidden="true">#</a> 前中后序的递归遍历</h2><h3 id="前序遍历" tabindex="-1"><a class="header-anchor" href="#前序遍历" aria-hidden="true">#</a> 前序遍历</h3>`,4),T=n("li",null,[n("p",null,"按照访问根节点-左子树-右子树的顺序遍历")],-1),N=n("li",null,[n("p",null,"时间复杂度O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次")],-1),_=n("p",null,"空间复杂度O(n)，为递归过程中栈的开销，平均情况下为 O(log⁡ n)，最坏情况下树呈现链状，为 O(n)",-1),L=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 40 ms, 击败 66.00%; 内存 15.64 MB, 击败 43.47%"),s(`
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
        
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 4 ms, 击败 41.96%; 内存 8.2 MB, 击败 33.54%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 4 ms, 击败 41.96%; 内存 8.2 MB, 击败 33.54%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.83 MB, 击败 99.95%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 68 ms, 击败 24.6%; 内存 41.1 MB, 击败 59.97%"),s(`
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
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("h3",{id:"中序遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#中序遍历","aria-hidden":"true"},"#"),s(" 中序遍历")],-1),O=n("li",null,[n("p",null,"按照访问左子树-根节点-右子树的顺序遍历")],-1),q=n("li",null,[n("p",null,"时间复杂度O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次")],-1),R=n("p",null,"空间复杂度O(n)，为递归过程中栈的开销，平均情况下为 O(log⁡ n)，最坏情况下树呈现链状，为 O(n)",-1),S=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 40 ms, 击败 65.64%; 内存 16.1 MB, 击败 23.75%"),s(`
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
        
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100%; 内存 8.1 MB, 击败 80.99%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.7 MB, 击败 51.87%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 100%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 68 ms, 击败 24.96%; 内存 41 MB, 击败 87.36%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h3",{id:"后序遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#后序遍历","aria-hidden":"true"},"#"),s(" 后序遍历")],-1),C=n("li",null,[n("p",null,"按照访问左子树-右子树-根节点的顺序遍历")],-1),E=n("li",null,[n("p",null,"时间复杂度O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次")],-1),G=n("p",null,"空间复杂度O(n)，为递归过程中栈的开销，平均情况下为 O(log⁡ n)，最坏情况下树呈现链状，为 O(n)",-1),Q=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 40 ms, 击败 66.43%; 内存 16.2 MB, 击败 6.3%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" self"),n("span",{class:"token punctuation"},"."),s(`res
    
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("res"),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100%; 内存 8.2 MB, 击败 37.6%"),s(`
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
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"&"),s("res"),n("span",{class:"token punctuation"},","),s(" TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.8 MB, 击败 35.36%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 80.68%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 特别注意结果数组需要传递引用"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res "),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Left"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Right"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token operator"},"*"),s("res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 60 ms, 击败 69.29%; 内存 41.1 MB, 击败 46.99%"),s(`
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
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"postorderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dfs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("res"),n("span",{class:"token punctuation"},","),s(" root")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("h2",{id:"前中后序的迭代遍历-使用栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前中后序的迭代遍历-使用栈","aria-hidden":"true"},"#"),s(" 前中后序的迭代遍历(使用栈)")],-1),W=n("h3",{id:"前序遍历-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前序遍历-1","aria-hidden":"true"},"#"),s(" 前序遍历")],-1),X=n("li",null,[n("p",null,"使用栈，初始把根节点入栈")],-1),Y=n("li",null,[n("p",null,"当栈不为空时，把栈顶元素，即根节点值加入到结果中，然后先入栈右子树，再入栈左子树")],-1),Z=n("p",null,"时间复杂度O(n)，空间复杂度O(n)",-1),$=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 40 ms, 击败 66%; 内存 16.1 MB, 击败 21.79%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100%; 内存 8.1 MB, 击败 84.85%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),sn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 75.75%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 75.75%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: "),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),en=n("h3",{id:"中序遍历-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#中序遍历-1","aria-hidden":"true"},"#"),s(" 中序遍历")],-1),on=n("li",null,[n("p",null,"不断把根节点入栈，并向左子树前进")],-1),cn=n("li",null,[n("p",null,"出栈一个元素，输出，并向右子树前进，再执行上一步")],-1),ln=n("p",null,"时间复杂度O(n)，空间复杂度O(n)",-1),pn=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 56 ms, 击败 9.29%; 内存 16.1 MB, 击败 12.93%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),un=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 8 ms, 击败 3.61%; 内存 8.2 MB, 击败 51.66%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.8 MB, 击败 35.27%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 77.88%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 77.88%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=n("h3",{id:"后序遍历-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#后序遍历-1","aria-hidden":"true"},"#"),s(" 后序遍历")],-1),vn=n("li",null,[n("p",null,"和前序遍历类似，但不同的地方是，这里遍历是先根-右-左的顺序，然后最后逆序")],-1),bn=n("p",null,"时间复杂度O(n)，空间复杂度O(n)",-1),fn=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 40 ms, 击败 66.43%; 内存 16.1 MB, 击败 23.49%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` res
        stack `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" stack"),n("span",{class:"token punctuation"},":"),s(`
            node `),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),s("pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            res`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},":"),s(`
                stack`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},":"),s(`
                stack`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},":"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hn=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 4 ms, 击败 41.62%; 内存 8 MB, 击败 98.90%"),s(`
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
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        stack`),n("span",{class:"token operator"},"<"),s("TreeNode "),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},">"),s(" st"),n("span",{class:"token punctuation"},";"),s(`
        st`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("st"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            TreeNode `),n("span",{class:"token operator"},"*"),s(" node "),n("span",{class:"token operator"},"="),s(" st"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"top"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            st`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                st`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                st`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 73.40%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token class-name"},"Collections"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gn=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 100%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` res
    `),n("span",{class:"token punctuation"},"}"),s(`
    stack `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},"{"),s("root"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
        node `),n("span",{class:"token operator"},":="),s(" stack"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
        stack `),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("Left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Left"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("Right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Right"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" j"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"{"),s(`
        nums`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` nums
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),wn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 60 ms, 击败 69.29%; 内存 41.1 MB, 击败 61.79%"),s(`
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
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"postorderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        node `),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tn=n("h2",{id:"前中后序的morris遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前中后序的morris遍历","aria-hidden":"true"},"#"),s(" 前中后序的Morris遍历")],-1),Nn=n("h3",{id:"前序遍历-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前序遍历-2","aria-hidden":"true"},"#"),s(" 前序遍历")],-1),_n=p('<li><p>参考：https://leetcode.cn/problems/binary-tree-preorder-traversal/solutions/656142/cer-cha-shu-san-chong-bian-li-qian-zhong-erk2/</p></li><li><p><img src="https://img.shiqi-lu.tech/202307220954762.png" alt=""></p></li><li><p>整体思路是，先建立根节点在中序遍历下的前驱节点和自身的连接，即上图 1 到 图 2，然后即可顺着上述连接遍历，返回根节点时，再断开连接</p></li><li><p>分为4 步：</p><ul><li>1.从根节点开始，找到根节点在中序遍历下的前驱节点，建立连接(由上至下)，向左子树前进</li><li>2.左侧到头时，向右子树前进(由下至上)，因此时右子树指向的是根节点，则回到了根节点</li><li>3.由根节点再找一遍该根节点在中序遍历下的前驱节点，断开连接</li><li>4.向右子树前进</li></ul></li>',4),Ln=n("p",null,"时间复杂度O(n)，空间复杂度O(1)",-1),xn=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python: 时间 44 ms, 击败 41.96%; 内存 15.9 MB, 击败 62.46%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),jn=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100%; 内存 8.1 MB, 击败 78.71%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Dn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 85.13%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bn=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 80.46%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Mn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 60 ms, 击败 69.63%; 内存 41 MB, 击败 78.55%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),On=n("h3",{id:"中序遍历-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#中序遍历-2","aria-hidden":"true"},"#"),s(" 中序遍历")],-1),qn=n("li",null,[n("p",null,"同前序遍历，但只在到达左侧节点返回上层时，输出当前节点")],-1),Rn=n("p",null,"时间复杂度O(n)，空间复杂度O(1)",-1),Sn=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 40 ms, 击败 65.64%; 内存 15.9 MB, 击败 60.44%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),In=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100%; 内存 8 MB, 击败 92.63%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Vn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.7 MB, 击败 51.87%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),zn=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 77.88%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Pn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 64 ms, 击败 48.12%; 内存 41 MB, 击败 85.20%"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),An=n("h3",{id:"后序遍历-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#后序遍历-2","aria-hidden":"true"},"#"),s(" 后序遍历")],-1),Cn=n("li",null,[n("p",null,"参考："),n("ul",null,[n("li",null,"https://leetcode.cn/problems/binary-tree-postorder-traversal/solutions/431066/er-cha-shu-de-hou-xu-bian-li-by-leetcode-solution/"),n("li",null,"https://leetcode.cn/problems/binary-tree-preorder-traversal/solutions/656142/cer-cha-shu-san-chong-bian-li-qian-zhong-erk2/")])],-1),En=n("li",null,[n("p",null,[n("img",{src:"https://img.shiqi-lu.tech/202307222135431.png",alt:""})])],-1),Gn=n("li",null,[n("p",null,"在使用morris遍历的过程中，到达返回根节点，断开子节点到根节点的连接后，对其左子树进行输出，然后将其逆序")],-1),Qn=n("p",null,"时间复杂度O(n)，空间复杂度O(1)",-1),Fn=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 44 ms, 击败 43.37%; 内存 16.2 MB, 击败 6.3%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` res
        cur `),n("span",{class:"token operator"},"="),s(` root
        `),n("span",{class:"token keyword"},"while"),s(" cur"),n("span",{class:"token punctuation"},":"),s(`
            curLeft `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`left
            `),n("span",{class:"token keyword"},"if"),s(" curLeft"),n("span",{class:"token punctuation"},":"),s(`
                `),n("span",{class:"token keyword"},"while"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token keyword"},"and"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(" cur"),n("span",{class:"token punctuation"},":"),s(`
                    curLeft `),n("span",{class:"token operator"},"="),s(" curLeft"),n("span",{class:"token punctuation"},"."),s(`right
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" curLeft"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},":"),s(`
                    curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(` cur
                    cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`left
                    `),n("span",{class:"token keyword"},"continue"),s(`
                `),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},":"),s(`
                    curLeft`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"None"),s(`
                    self`),n("span",{class:"token punctuation"},"."),s("addPath"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token comment"},"# 最后一轮循环结束时，从root结点引申的右结点单链表并没有输出，这里补上"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("addPath"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` res
    
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},":"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        count `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            count `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
            res`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
            root `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token comment"},"# 翻转"),s(`
        left`),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(" count"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" left "),n("span",{class:"token operator"},"<"),s(" right"),n("span",{class:"token punctuation"},":"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" res"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),s(`
            left `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
            right `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Hn=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 0 ms, 击败 100%; 内存 8 MB, 击败 92.68%"),s(`
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
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
                    `),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(` 
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"&"),s("res"),n("span",{class:"token punctuation"},","),s(" TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token operator"},"++"),s("count"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            root `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),s("count"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Jn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 83.69%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
                    `),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token operator"},"++"),s("count"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            root `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" left "),n("span",{class:"token operator"},"="),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(" count"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token operator"},"="),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"<"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" tmp "),n("span",{class:"token operator"},"="),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("left"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("right"),n("span",{class:"token punctuation"},","),s(" tmp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token operator"},"++"),s("left"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token operator"},"--"),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Kn=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 100%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"postorderTraversal"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
                `),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("res"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token punctuation"},"."),s("Left"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s(`Right
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),s("res "),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    resSize `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("res"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" root "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token operator"},"*"),s("res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
        root `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),s(`Right
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 此处用了切片的特性，对切片数据更改是共享的"),s(`
    `),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),s("resSize"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" j"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"{"),s(`
        nums`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` nums
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Un=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 60 ms, 击败 69.29%; 内存 41.2 MB, 击败 30.44%"),s(`
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
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"postorderTraversal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
                `),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"addPath"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"addPath"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("res"),n("span",{class:"token punctuation"},","),s(" root")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token operator"},"++"),s("count"),n("span",{class:"token punctuation"},";"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        root `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(" res"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(" count"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token operator"},"="),s(" res"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"<"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token punctuation"},"["),s("res"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("res"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token operator"},"++"),s("left"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token operator"},"--"),s("right"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Wn=n("h2",{id:"层次遍历的迭代法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#层次遍历的迭代法","aria-hidden":"true"},"#"),s(" 层次遍历的迭代法")],-1),Xn=n("li",null,[n("p",null,"使用队列，存储每一层的左右子节点，然后逐个出队遍历即可")],-1),Yn=n("p",null,"时间复杂度O(n)，空间复杂度O(n)",-1),Zn=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 44 ms, 击败 61.1%; 内存 16.7 MB, 击败 48.60%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),s("List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` res
        q `),n("span",{class:"token operator"},"="),s(" deque"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" q"),n("span",{class:"token punctuation"},":"),s(`
            size `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("q"),n("span",{class:"token punctuation"},")"),s(`
            levelList `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token keyword"},"for"),s(" _ "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token builtin"},"range"),n("span",{class:"token punctuation"},"("),s("size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
                node `),n("span",{class:"token operator"},"="),s(" q"),n("span",{class:"token punctuation"},"."),s("popleft"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                levelList`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},":"),s(`
                    q`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},":"),s(`
                    q`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(`
            res`),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("levelList"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` res
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$n=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 4 ms, 击败 78.72%; 内存 13.1 MB, 击败 46%"),s(`
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
    vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        queue`),n("span",{class:"token operator"},"<"),s("TreeNode"),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},">"),s(" q"),n("span",{class:"token punctuation"},";"),s(`
        q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" size "),n("span",{class:"token operator"},"="),s(" q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" levelList"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token operator"},"++"),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                TreeNode `),n("span",{class:"token operator"},"*"),s(" node "),n("span",{class:"token operator"},"="),s(" q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"front"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                levelList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("levelList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ns=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 1 ms, 击败 84.23%; 内存 43 MB, 击败 14.6%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token class-name"},"Queue"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},">")]),s(" q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"offer"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" size "),n("span",{class:"token operator"},"="),s(" q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" levelList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token operator"},"++"),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"TreeNode"),s(" node "),n("span",{class:"token operator"},"="),s(" q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"poll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                levelList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"offer"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"offer"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("levelList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ss=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 3.4 MB, 击败 54.37%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` res
    `),n("span",{class:"token punctuation"},"}"),s(`
    q `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},"{"),s("root"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("q"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
        size `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("q"),n("span",{class:"token punctuation"},")"),s(`
        levelList `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node `),n("span",{class:"token operator"},":="),s(" q"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
            q `),n("span",{class:"token operator"},"="),s(" q"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s(`
            levelList `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("levelList"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("Left "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
                q `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("q"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Left"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" node"),n("span",{class:"token punctuation"},"."),s("Right "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
                q `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("q"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("Right"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" levelList"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),as=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 64 ms, 击败 86.27%; 内存 44.5 MB, 击败 15.69%"),s(`
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
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"levelOrder"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("q"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" size "),n("span",{class:"token operator"},"="),s(" q"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" levelList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token operator"},"++"),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(" q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            levelList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("levelList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ts=n("h2",{id:"层次遍历的递归法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#层次遍历的递归法","aria-hidden":"true"},"#"),s(" 层次遍历的递归法")],-1),es=n("li",null,[n("p",null,"相当于前序遍历，在参数上维护一个level，标识当前是在哪一层")],-1),os=n("p",null,"时间复杂度O(n)，空间复杂度O(n)",-1),cs=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# python3: 时间 44 ms, 击败 61.1%; 内存 18.7 MB, 击败 5.4%"),s(`
`),n("span",{class:"token comment"},"# Definition for a binary tree node."),s(`
`),n("span",{class:"token comment"},"# class TreeNode:"),s(`
`),n("span",{class:"token comment"},"#     def __init__(self, val=0, left=None, right=None):"),s(`
`),n("span",{class:"token comment"},"#         self.val = val"),s(`
`),n("span",{class:"token comment"},"#         self.left = left"),s(`
`),n("span",{class:"token comment"},"#         self.right = right"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),s("List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" self"),n("span",{class:"token punctuation"},"."),s(`res
    
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},":"),s(" Optional"),n("span",{class:"token punctuation"},"["),s("TreeNode"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" root"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},"."),s("res"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<="),s(" level"),n("span",{class:"token punctuation"},":"),s(`
            self`),n("span",{class:"token punctuation"},"."),s("res"),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("res"),n("span",{class:"token punctuation"},"["),s("level"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("append"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ls=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// c++: 时间 4 ms, 击败 78.72%; 内存 14.2 MB, 击败 5%"),s(`
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
    vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),s("TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},"&"),s(" res"),n("span",{class:"token punctuation"},","),s(" TreeNode"),n("span",{class:"token operator"},"*"),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" level"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"nullptr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<="),s(" level"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"vector"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        res`),n("span",{class:"token punctuation"},"["),s("level"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token operator"},"->"),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token operator"},"->"),s("left"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token operator"},"->"),s("right"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ps=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// java: 时间 1 ms, 击败 84.23%; 内存 43 MB, 击败 10.30%"),s(`
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
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" res"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" level"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<="),s(" level"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("level"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),us=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// go: 时间 0 ms, 击败 100%; 内存 3.8 MB, 击败 7.31%"),s(`
`),n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res "),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" root "),n("span",{class:"token operator"},"*"),s("TreeNode"),n("span",{class:"token punctuation"},","),s(" level "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("res"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<="),s(" level "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token operator"},"*"),s("res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("res"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),s("level"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),s("level"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Left"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("Right"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),is=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// javascript: 时间 80 ms, 击败 26.37%; 内存 44.4 MB, 击败 27.49%"),s(`
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
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"levelOrder"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dfs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},","),s(" level")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"<="),s(" level"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    res`),n("span",{class:"token punctuation"},"["),s("level"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" level"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function rs(ks,ds){const c=l("ExternalLinkIcon"),e=l("CodeGroupItem"),o=l("CodeGroup");return i(),r("div",null,[d,m,n("ul",null,[v,n("li",null,[b,n("ul",null,[n("li",null,[n("a",f,[s("144. 二叉树的前序遍历"),a(c)])]),n("li",null,[n("a",h,[s("94. 二叉树的中序遍历"),a(c)])]),n("li",null,[n("a",y,[s("145. 二叉树的后序遍历"),a(c)])]),n("li",null,[n("a",g,[s("102. 二叉树的层序遍历"),a(c)])])])])]),w,n("ul",null,[T,N,n("li",null,[_,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[L]),_:1}),a(e,{title:"cpp"},{default:t(()=>[x]),_:1}),a(e,{title:"java"},{default:t(()=>[j]),_:1}),a(e,{title:"go"},{default:t(()=>[D]),_:1}),a(e,{title:"javascript"},{default:t(()=>[B]),_:1})]),_:1})])]),M,n("ul",null,[O,q,n("li",null,[R,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[S]),_:1}),a(e,{title:"cpp"},{default:t(()=>[I]),_:1}),a(e,{title:"java"},{default:t(()=>[V]),_:1}),a(e,{title:"go"},{default:t(()=>[z]),_:1}),a(e,{title:"javascript"},{default:t(()=>[P]),_:1})]),_:1})])]),A,n("ul",null,[C,E,n("li",null,[G,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[Q]),_:1}),a(e,{title:"cpp"},{default:t(()=>[F]),_:1}),a(e,{title:"java"},{default:t(()=>[H]),_:1}),a(e,{title:"go"},{default:t(()=>[J]),_:1}),a(e,{title:"javascript"},{default:t(()=>[K]),_:1})]),_:1})])]),U,W,n("ul",null,[X,Y,n("li",null,[Z,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[$]),_:1}),a(e,{title:"cpp"},{default:t(()=>[nn]),_:1}),a(e,{title:"java"},{default:t(()=>[sn]),_:1}),a(e,{title:"go"},{default:t(()=>[an]),_:1}),a(e,{title:"javascript"},{default:t(()=>[tn]),_:1})]),_:1})])]),en,n("ul",null,[on,cn,n("li",null,[ln,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[pn]),_:1}),a(e,{title:"cpp"},{default:t(()=>[un]),_:1}),a(e,{title:"java"},{default:t(()=>[rn]),_:1}),a(e,{title:"go"},{default:t(()=>[kn]),_:1}),a(e,{title:"javascript"},{default:t(()=>[dn]),_:1})]),_:1})])]),mn,n("ul",null,[vn,n("li",null,[bn,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[fn]),_:1}),a(e,{title:"cpp"},{default:t(()=>[hn]),_:1}),a(e,{title:"java"},{default:t(()=>[yn]),_:1}),a(e,{title:"go"},{default:t(()=>[gn]),_:1}),a(e,{title:"javascript"},{default:t(()=>[wn]),_:1})]),_:1})])]),Tn,Nn,n("ul",null,[_n,n("li",null,[Ln,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[xn]),_:1}),a(e,{title:"cpp"},{default:t(()=>[jn]),_:1}),a(e,{title:"java"},{default:t(()=>[Dn]),_:1}),a(e,{title:"go"},{default:t(()=>[Bn]),_:1}),a(e,{title:"javascript"},{default:t(()=>[Mn]),_:1})]),_:1})])]),On,n("ul",null,[qn,n("li",null,[Rn,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[Sn]),_:1}),a(e,{title:"cpp"},{default:t(()=>[In]),_:1}),a(e,{title:"java"},{default:t(()=>[Vn]),_:1}),a(e,{title:"go"},{default:t(()=>[zn]),_:1}),a(e,{title:"javascript"},{default:t(()=>[Pn]),_:1})]),_:1})])]),An,n("ul",null,[Cn,En,Gn,n("li",null,[Qn,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[Fn]),_:1}),a(e,{title:"cpp"},{default:t(()=>[Hn]),_:1}),a(e,{title:"java"},{default:t(()=>[Jn]),_:1}),a(e,{title:"go"},{default:t(()=>[Kn]),_:1}),a(e,{title:"javascript"},{default:t(()=>[Un]),_:1})]),_:1})])]),Wn,n("ul",null,[Xn,n("li",null,[Yn,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[Zn]),_:1}),a(e,{title:"cpp"},{default:t(()=>[$n]),_:1}),a(e,{title:"java"},{default:t(()=>[ns]),_:1}),a(e,{title:"go"},{default:t(()=>[ss]),_:1}),a(e,{title:"javascript"},{default:t(()=>[as]),_:1})]),_:1})])]),ts,n("ul",null,[es,n("li",null,[os,a(o,null,{default:t(()=>[a(e,{title:"python",active:""},{default:t(()=>[cs]),_:1}),a(e,{title:"cpp"},{default:t(()=>[ls]),_:1}),a(e,{title:"java"},{default:t(()=>[ps]),_:1}),a(e,{title:"go"},{default:t(()=>[us]),_:1}),a(e,{title:"javascript"},{default:t(()=>[is]),_:1})]),_:1})])])])}const vs=u(k,[["render",rs],["__file","binary-Tree-Traversal.html.vue"]]);export{vs as default};
