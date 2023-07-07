import { defineUserConfig, defaultTheme } from 'vuepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '代码天涯路',
    description: '该博客用于记录我的成长记录，内容包括CS、AI、数学、自我提升',
    extendsMarkdown: md => {
        md.use(mathjax3)
    },
    theme: defaultTheme({
        logo: 'https://img.shiqi-lu.tech/47logo1.jpg',
        contributors: false,
        navbar: [
            {
                text: '首页',
                link: '/',
            },
        ],
        sidebar: [
            {
                text: '编程语言',
                link: '/language/',
                children: [
                ],
            },
            {
                text: '数据结构和算法',
                link: '/algorithm/',
                children: [
                    {
                        text: 'Leetcode刷题笔记',
                        link: '/algorithm/leetcode/',
                        children: [
                            {
                                text: '1.两数之和(Two Sum)E',
                                link: '/algorithm/leetcode/1.two-sum.md',
                            },
                            {
                                text: '2.两数相加(Add Two Numbers)M',
                                link: '/algorithm/leetcode/2.Add-Two-Numbers.md',
                            },
                            {
                                text: '3.无重复字符的最长子串(Longest Substring Without Repeating Characters)M',
                                link: '/algorithm/leetcode/',
                            },
                            {
                                text: '206.反转链表(Reverse Linked List)E',
                                link: '/algorithm/leetcode/206.Reverse-Linked-List.md',
                            },
                        ],
                    },
                ],
            }
        ],
    }),
})