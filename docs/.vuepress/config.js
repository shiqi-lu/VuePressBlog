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
                // link: '/language/',
                children: [
                ],
            },
            {
                text: '数据结构和算法',
                // collapsible: true,
                // link: '/algorithm/',
                children: [
                    {
                        text: 'Leetcode刷题笔记',
                        collapsible: true,
                        // link: '/algorithm/leetcode/',
                        children: [
                            '/algorithm/leetcode/1.two-sum.md',
                            '/algorithm/leetcode/2.Add-Two-Numbers.md',
                            '/algorithm/leetcode/3.Longest-Substring-Without-Repeating-Characters.md',
                            '/algorithm/leetcode/206.Reverse-Linked-List.md',
                        ],
                    },
                ],
            }
        ],
    }),
})