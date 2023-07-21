import { defineUserConfig, defaultTheme } from 'vuepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '代码天涯路',
    description: '该博客用于记录我的成长记录，内容包括CS、AI、数学、自我提升',
    extendsMarkdown: md => {
        md.use(mathjax3)
    },
    head: [
        [
            'link', { rel: 'icon', href: 'https://img.shiqi-lu.tech/47logo1.jpg' }
        ]
    ],
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
                children: [
                ],
            }, {
                text: '网络',
                children: [
                    {
                        text: '《透视HTTP协议》学习笔记',
                        collapsible: true,
                        children: [
                            '/network/http-perspective/http-perspective-1.md',
                            '/network/http-perspective/http-perspective-2.md',
                            '/network/http-perspective/http-perspective-3.md',
                        ],
                    }, {
                        text: '《TCP/IP网络编程》学习笔记',
                        collapsible: true,
                        children: [
                            '/network/tcpip-network-program/tcpip-network-programming-1.md',
                            '/network/tcpip-network-program/tcpip-network-programming-2.md',
                            '/network/tcpip-network-program/tcpip-network-programming-3.md',
                            '/network/tcpip-network-program/tcpip-network-programming-4.md',
                            '/network/tcpip-network-program/tcpip-network-programming-5.md',
                            '/network/tcpip-network-program/tcpip-network-programming-6.md',
                        ],
                    },
                    '/network/nginx-starter.md',
                    '/network/network-interview.md',
                ],
            }, {
                text: '数据库',
                children: [
                    '/database/db-design-thing.md',
                    {
                        text: '《MySQL必知必会》学习笔记',
                        collapsible: true,
                        children: [
                            '/database/mysql-crash-course/mysql-crash-course-1-10.md',
                            '/database/mysql-crash-course/mysql-crash-course-11-20.md',
                            '/database/mysql-crash-course/mysql-crash-course-21-30.md',
                        ],
                    }, {
                        text: '《Redis核心技术与实战》学习笔记',
                        collapsible: true,
                        children: [
                            '/database/redis-gt/redis-gt-1.md',
                            '/database/redis-gt/redis-gt-2.md',
                        ],
                    },
                ],
            }, {
                text: '数据结构和算法',
                children: [
                    {
                        text: 'Leetcode刷题笔记',
                        collapsible: true,
                        children: [
                            '/algorithm/leetcode/0.general.md',
                            '/algorithm/leetcode/1.two-sum.md',
                            '/algorithm/leetcode/2.Add-Two-Numbers.md',
                            '/algorithm/leetcode/3.Longest-Substring-Without-Repeating-Characters.md',
                            '/algorithm/leetcode/20.Valid-Parentheses.md',
                            '/algorithm/leetcode/53.Maximum-Subarray.md',
                            '/algorithm/leetcode/121.Best-Time-to-Buy-and-Sell-Stock.md',
                            '/algorithm/leetcode/206.Reverse-Linked-List.md',
                            '/algorithm/leetcode/207.Binary-Search.md',
                        ],
                    }, {
                        text: '算法总结',
                        collapsible: true,
                        children: [
                            '/algorithm/selection/binary-search.md',
                            '/algorithm/selection/sort-algo.md',
                            '/algorithm/selection/mass-data-processing.md',
                            '/algorithm/selection/throttling-algorithm.md',
                        ],
                    },
                ],
            }, {
                text: '分布式与架构',
                children: [
                    {
                        text: '分布式理论',
                        collapsible: true,
                        children: [
                            '/distribute-arch/distribute-theory/distributed-consistency-byzantine.md',
                            '/distribute-arch/distribute-theory/bully-gossip-nwr.md',
                            '/distribute-arch/distribute-theory/paxos.md',
                            '/distribute-arch/distribute-theory/raft.md',
                            '/distribute-arch/distribute-theory/zab.md',
                            '/distribute-arch/distribute-theory/distrib-principal-algo-1.md',
                            '/distribute-arch/distribute-theory/distrib-principal-algo-2.md',
                            '/distribute-arch/distribute-theory/distrib-protocal-algo-1.md',
                            '/distribute-arch/distribute-theory/distrib-protocal-algo-2.md',
                            '/distribute-arch/distribute-theory/distributed-lock.md',
                            '/distribute-arch/distribute-theory/distributed-transaction.md',
                        ],
                    }, {
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
            }, {
                text: '云原生',
                children: [
                    {
                        text: 'k8s学习笔记',
                        collapsible: true,
                        children: [
                            '/cloud-compute/k8s-shang/k8s-4.md',
                            '/cloud-compute/k8s-shang/k8s-5.md',
                            '/cloud-compute/k8s-shang/k8s-6.md',
                            '/cloud-compute/k8s-shang/k8s-7.md',
                            '/cloud-compute/k8s-shang/k8s-8.md',
                        ],
                    },
                ],
            }, {
                text: '大数据',
                children: [
                    '/bigdata/zookeeper-starter.md',
                ],
            }, {
                text: '英语',
                children: [
                    {
                        text: '恶魔奶爸语法',
                        collapsible: true,
                        children: [
                            '/english/demon-gramma/gramma1-3.md',
                            '/english/demon-gramma/gramma4-6.md',
                            '/english/demon-gramma/gramma7-9.md',
                            '/english/demon-gramma/gramma10-12.md',
                            '/english/demon-gramma/gramma13-15.md',
                        ],
                    },
                ],
            }, {
                text: '其它',
                collapsible: true,
                children: [
                    '/other/first-blog.md',
                    '/other/update-blog.md',
                    '/other/roam2anki-intro.md',
                    '/other/high-quality-sleep.md',
                    '/other/off-time.md',
                ],
            },
        ],
    }),
})