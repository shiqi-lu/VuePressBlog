import { defineUserConfig, defaultTheme } from 'vuepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '代码天涯路',
    description: '这是我的第一个 VuePress 站点',
    extendsMarkdown: md => {
        md.use(mathjax3)
    },
    theme: defaultTheme({
        logo: 'https://img.shiqi-lu.tech/47logo1.jpg',
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
        ],
        sidebar: [
            {
                text: '编程语言',
                link: '/编程语言/',
                children: [
                    // SidebarItem
                    {
                        text: '第一篇',
                        link: '/编程语言/first.md',
                        //   children: [],
                    },
                    // 字符串 - 页面文件路径
                    // '/foo/bar.md',
                ],
            },
        ],
    }),
})