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
        sidebarDepth: 1,
        navbar: [
            {
                text: '首页',
                link: '/',
            },
        ],
        sidebar: [
            {
                text: '博客介绍',
                link: '/',
            }, {
                text: '编程语言',
                // link: '/language/',
                children: [
                ],
            }, {
                text: '数据库',
                // collapsible: true,
                // link: '/algorithm/',
                children: [
                    '/database/db-design-thing.md',
                ],
            }, {
                text: '数据结构和算法',
                // collapsible: true,
                // link: '/algorithm/',
                children: [
                    {
                        text: 'Leetcode刷题笔记',
                        collapsible: true,
                        children: [
                            '/algorithm/leetcode/0.general.md',
                            '/algorithm/leetcode/1.two-sum.md',
                            '/algorithm/leetcode/2.Add-Two-Numbers.md',
                            '/algorithm/leetcode/3.Longest-Substring-Without-Repeating-Characters.md',
                            '/algorithm/leetcode/206.Reverse-Linked-List.md',
                        ],
                    }, {
                        text: '算法总结',
                        collapsible: true,
                        children: [
                            '/algorithm/selection/binary-search.md',
                        ],
                    },
                ],
            }, {
                text: '分布式与架构',
                // link: '/language/',
                children: [
                    {
                        text: '分布式理论',
                        collapsible: true,
                        children: [
                            '/distribute-arch/distribute-theory/distributed-consistency-byzantine.md',
                            '/distribute-arch/distribute-theory/bully-gossip-nwr.md',
                            '/distribute-arch/distribute-theory/distrib-principal-algo-1.md',
                            '/distribute-arch/distribute-theory/distrib-principal-algo-2.md',
                            '/distribute-arch/distribute-theory/distrib-protocal-algo-1.md',
                            '/distribute-arch/distribute-theory/distrib-protocal-algo-2.md',
                            '/distribute-arch/distribute-theory/distributed-lock.md',
                            '/distribute-arch/distribute-theory/distributed-transaction.md',
                        ],
                    },{
                        text: '沈剑架构师训练营',
                        collapsible: true,
                        children: [
                            '/distribute-arch/shenjian/arch-sj-1.md',
                            '/distribute-arch/shenjian/arch-sj-2.md',
                            '/distribute-arch/shenjian/arch-sj-3.md',
                            '/distribute-arch/shenjian/arch-sj-4.md',
                            '/distribute-arch/shenjian/arch-sj-5.md',
                            '/distribute-arch/shenjian/arch-sj-6.md',
                            '/distribute-arch/shenjian/arch-sj-7.md',
                            '/distribute-arch/shenjian/arch-sj-8.md',
                            '/distribute-arch/shenjian/arch-miao-sha.md',
                        ],
                    },
                ],
            },
        ],
    }),
})