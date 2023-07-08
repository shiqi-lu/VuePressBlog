---
title: 第一篇博客：为什么我要建博客和写博客(hexo)
description: 博主建站的原因和感想，建站的过程和参考资料
date: 2020-09-12 16:32:42
updated: 2020-09-12 16:32:42
tags:
    - 感想
    - 自我提升
categories:
    - 自我提升
---

## 起因
很久之前就想搭建自己的博客了，只是嘛，一直都没有时间（划掉，就是懒）。这一次之所以突然下定决心要搞一波，完全是因为我的同桌真的是个超级大神，北大本科，杜克大学博士，也有一个自己的博客和介绍页，看着她的介绍页真的是超级牛，超级强，而且不仅是学习强，还在自己感兴趣的各个领域钻研的很深。让我不禁连连感叹，大牛的人生真的是超级强，真可谓最强鸡血，对比下来仿佛我白活了这么多年，没有留下任何值得留存的记录。

所以，受到这个启发（主要是刺激），我也要开始搭建自己的博客和个人主页，但同时我觉得我最好同时发布和维护3个平台，一个是CSDN，一个是公众号，一个是这个博客。毕竟文章写好之后，多发布一下几乎不费时间。

## 为什么要选择github和hexo
选择github主要是因为能借助git的版本管理，顺便可以在github的热力图刷的好看一点，还有托管在github免费哇，不需要再另外维护云主机，不想当运维。省一笔主机钱，我只需要出钱买个域名即可，万网这个.tech域名买了10年也才199块，就是整个博客搭建中的唯一花销了

选择hexo是因为，能支持markdown的书写，和我现有的工具套件能配套上，可以无缝迁移过来，hexo的生态和主题都相对完善。

## 过程和踩坑

### 申请域名
直接上[万网](https://wanwang.aliyun.com/)购买自己的域名，做完实名认证之后即可先放着，详细步骤具体参考[知乎](https://zhuanlan.zhihu.com/p/103860494)。

### 安装node和hexo，并部署到github
具体参考[知乎](https://zhuanlan.zhihu.com/p/105715224)，我是安装在macOS上，不需要搞这里面复杂的各种环境变量。

踩坑：我原本以为是建完git仓库后，把仓库pull下来，在里面初始化hexo，但后面看了一下，是要在空文件夹操作，并且后续发布到github的文件是hexo进行编译后的文件。

### 域名解析
能够部署之后保证通过github.io能访问即可做域名解析，具体参考[知乎](https://zhuanlan.zhihu.com/p/103813944)

### 挑选主题
原本我想直接在[官方的主题链接](https://hexo.io/themes/)里挑一个比较合适的，给自己定了几个标准：
1. 整体必须是简洁的，那种大量有图片装饰的，背景花哨的不考虑（原因是，挑图片暴露自己的垃圾审美，还要给每个博客挑配图太费心力了）
2. 必须能支持公式、代码块高亮等的解析
3. 偏好整体布局要简洁，偏好侧边栏在右边，并且偏好文章要有侧边栏
4. 主题必须有开发者长期维护和更新
5. 能有评论系统

在上面看花了眼，都没有一个不合适的，看了大半天，猛然觉得自己挑选的思路不对，在最原始的未经过筛选的主题站里挑选，能不费劲吗？

转换思路，直接搜推荐的hexo主题，然后看到next主题是几乎完全符合我的要求的，然后发现next主题经历了好几个大版本的迭代，甚至github仓库都换了几次，直接上最新的8.0版本，拉下来

### next主题各种调整优化
next主题中可以进行自主化调整的地方还挺多的，而且8.0版本中，很多地方和以往版本中有不一样的调整方式，我尽量把我用到的写一下。所做的所有操作基本是改一下themes/next下的_config.yml，很少一部分是更改hexo下的_config.yml，偶尔会使用npm装个包

#### 设置首页信息
```yaml hexo/_config.yml
title: 每天净瞎搞
subtitle: '关注：AI/CS/数学/自我提升等'
description: '既然选择了远方，便只顾风雨兼程'
author: Shiqi Lu
language: zh-CN
timezone: 'Asia/Shanghai'
url: http://shiqi-lu.tech
```

#### 风格选择
我把四个风格都试了一遍，最后比较喜欢Gemini
```yaml themes/next/_config.yml
## Schemes
## scheme: Muse
## scheme: Mist
## scheme: Pisces
scheme: Gemini
```

#### 支持暗黑模式
这可是个意外惊喜，还会根据系统的设置自动适配
```yaml themes/next/_config.yml
## Dark Mode
darkmode: true
```

#### 设置建站时间
```yaml themes/next/_config.yml
footer:
  # Specify the date when the site was setup. If not defined, current year will be used.
  since: 2020
```

#### 设置网站脚注的信息（图标、备案等）
```yaml themes/next/_config.yml
footer:
  # Icon between year and copyright info.
  icon:
    # Icon name in Font Awesome. See: https://fontawesome.com/icons
    name: fa fa-heart
    # If you want to animate the icon, set it to true.
    animated: true
    # Change the color of icon, using Hex Code.
    color: "#808080"
```

#### 网站图标
先到网上找适合的图标，然后更新一下对应的文件，免费的图标素材网站：[Easyicon](https://www.easyicon.net/1220579-maple_leaf_icon.html)
```yaml themes/next/_config.yml
favicon:
  small: /images/7-16.png
  medium: /images/7-32.png
  apple_touch_icon: /images/7-128.png
  safari_pinned_tab: /images/7-128.png
```

#### 标签页和分类页
参考[next文档](https://theme-next.js.org/docs/theme-settings/custom-pages.html#Adding-%C2%ABTags%C2%BB-Page)

#### 侧边栏
我喜欢放在右边，主要是因为视觉聚焦主要是在左边的
```yaml themes/next/_config.yml
sidebar:
  # Sidebar Position.
  # position: left
  position: right
```

#### 打开文章标题下方更新时间、阅读时长等信息
参考[官方文档](https://theme-next.js.org/docs/theme-settings/posts.html#Post-Wordcount)
先按照npm包：
```bash
$ npm install hexo-word-counter
$ hexo clean
```
```yaml hexo/_config.yml
symbols_count_time:
  symbols: true
  total_symbols: false
  total_time: false
```

```yaml themes/next/_config.yml
## Post meta display settings
post_meta:
  item_text: true
  created_at: true
  updated_at:
    enable: true
    another_day: true
  categories: true

## Post wordcount display settings
## Dependencies: https://github.com/next-theme/hexo-word-counter
symbols_count_time:
  separated_meta: true
  item_text_total: true
```

#### 博客首页的摘要设置
这个要配合文章中的description字段，或在文章中添加一行注释辅助，参考[官方文档](https://theme-next.js.org/docs/theme-settings/posts.html?highlight=more#Preamble-Text)
```yaml themes/next/_config.yml
## Automatically excerpt description in homepage as preamble text.
excerpt_description: true

## Read more button
## If true, the read more button will be displayed in excerpt section.
read_more_btn: true
```

#### 置顶的百分比和顶部进度条
默认给的颜色有点花哨，我改成了灰色
```yaml themes/next/_config.yml
back2top:
  enable: true
  # Back to top in sidebar.
  sidebar: false
  # Scroll percent label in b2t button.
  scrollpercent: true

## Reading progress bar
reading_progress:
  enable: true
  # Available values: top | bottom
  position: top
  # color: "#37c6c0"
  color: "#808080"
  height: 3px
```

#### 头像设置
在url里放置本地图片或者图床链接
```yaml themes/next/_config.yml
## Sidebar Avatar
avatar:
  # Replace the default image and set the url here.
  url: /images/7-128.png
  # If true, the avatar will be dispalyed in circle.
  rounded: false
  # If true, the avatar will be rotated with the cursor.
  rotated: false
```

#### 代码块高亮风格选择
使用了hightlight.js的高亮样式
```yaml hexo/_config.yml
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace: '    '
  wrap: true
  hljs: false
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ''
```

```yaml themes/next/_config.yml
codeblock:
  # Code Highlight theme
  # All available themes: https://theme-next.js.org/highlight/
  theme:
    light: default
    dark: tomorrow-night-bright
  prism:
    light: prism
    dark: prism-dark
  # Add copy button on codeblock
  copy_button:
    enable: true
    # Available values: default | flat | mac
    style: flat
```

#### 社交账号设置
```yaml themes/next/_config.yml
social:
  GitHub: https://github.com/shiqi-lu || fab fa-github
  E-Mail: mailto:traumlou@163.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  #Twitter: https://twitter.com/yourname || fab fa-twitter
  #FB Page: https://www.facebook.com/yourname || fab fa-facebook
  
social_icons:
  enable: true
  icons_only: false
  transition: true
```

#### 支持本地搜索
参考[官方文档](https://theme-next.js.org/docs/third-party-services/search-services.html?highlight=search#Local-Search)
先装包：`$ npm install hexo-generator-searchdb
`
```yaml hexo/_config.yml
## Local Search
search:
  path: search.xml
  field: post
  content: true
  format: html
```
```yaml themes/next/_config.yml
## Local search
## Dependencies: https://github.com/next-theme/hexo-generator-searchdb
local_search:
  enable: true
  # If auto, trigger search by changing input.
  # If manual, trigger search by pressing enter key or search button.
  trigger: auto
  # Show top n results per article, show all results by setting to -1
  top_n_per_article: 1
  # Unescape html strings to the readable one.
  unescape: false
  # Preload the search data when the page loads.
  preload: false
```

#### 评论系统
评论系统选择了[valine](https://valine.js.org/)，请参考[next文档](https://theme-next.js.org/docs/third-party-services/comments.html?highlight=comme#Valine-China)，其中头像需要注册一下Gravatar，参考[头像配置](https://valine.js.org/avatar.html)，这里的邮箱提醒好像有问题，官方说明的方法不能用了。这个以后再说吧，我也不想有个评论就给我发邮件，要真有比较紧急的事情，直接发我邮箱吧

#### 文章置顶
注意这里8.0更新之后，就不是通过安装插件改源码的方式实现，直接在文章的front-matter里面添加一个字段：sticky就可以实现了，值越高排的越前，默认为0是按照时间顺序，参考[官方文档](https://theme-next.js.org/docs/advanced-settings/front-matter.html?highlight=stick)

#### 文章赞赏
要先准备好微信，支付宝等的二维码，然后放在images下或放在图床中
```yaml themes/next/_config.yml
## Donate (Sponsor) settings
## Front-matter variable (unsupport animation).
reward_settings:
  # If true, a donate button will be displayed in every article by default.
  enable: true
  animation: false
  comment: 觉得文章写得不错就请博主喝杯奶茶吧(*￣∇￣*)

reward:
  wechatpay: /images/wechatpay.png
  alipay: /images/alipay.png
  #paypal: /images/paypal.png
  #bitcoin: /images/bitcoin.png
```


## 简单的使用指南

### 写新博文
在blog目录下输入命令`hexo new post <title>`，会自动在`<blog-dir>/source/_posts`目录下生成对应的title文件，这时候用md编辑器打开写博客即可

### 本地测试
博文写完之后，因为各种不同的解析器和浏览器对md的支持会不一样，先本地看看效果，运行命令：`hexo clean && hexo s`，然后根据提示在浏览器打开localhost:4000即可查看

### 推送到网站上
运行命令：`hexo clean && hexo g -d`即可

## 尚未完成部分
这部分以后看时间和心情做吧，每做一部分记录一部分吧
* SEO
* 个人简介
* README
* 访问速度比较慢，考虑使用除github外的托管服务
* 考虑使用CI
* 考虑CDN加速
* 考虑把http转换成https
* 备案
* 图床替换成自己的域名
* 完善和链接一下领英
* 研究一下博客如何分享链接到微信

## 已知问题
* 在ipad上的safari显示的时候没有font awesome图标显示，文章内容侧边栏等显示不出来，但ipad的chrome没问题，iphone的safari也没问题，真是奇怪

## 参考资料
* [基于 Hexo 的全自动博客构建部署系统](https://kchen.cc/2016/11/12/hexo-instructions/)
* [从零开始搭建个人博客（超详细）](https://zhuanlan.zhihu.com/p/102592286)
* [Hexo官方文档](https://hexo.io/zh-cn/docs/)
* [Next8.0 Github](https://github.com/next-theme/hexo-theme-next)
* [Next8.0 文档](https://theme-next.js.org/)