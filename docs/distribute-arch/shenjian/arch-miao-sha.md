---
title: 秒杀系统架构设计
date: 2021-10-25 22:03:39
updated: 2021-10-25 22:03:39
tags:
- 架构
categories:
- 架构
description: 学习《沈剑的架构师训练营》直播，秒杀系统架构设计
---


- QQ 业务特点：细粒度数据查询
    - 即使并发量很大，锁冲突其实不大，数据水平切分后，因为带上了 uid，gid 等字段，用户层面几乎没有锁冲突
- weibo业务特点:读多写少，有少量读写锁冲突
    - 微博的核心业务是feed流:
        - 发消息，写操作
        - 刷消息，读操作
    - 微博业务显然是读多写少的，在用户刷消息时，自己feed流里的消息，是由别人发出的。
- 秒杀业务特点:数据量少，写多读多,极大锁冲突
    - 12306的核心业务是:
        - 查票，读操作
        - 买票，写操作
    - stock(id, num) //核心数据结构：某一列车有多少张余票
    - 在用户量很大，并发量很大时，有极大的锁冲突。
- 方向上“降低数据层锁冲突”，具体两大要点:
    - (1)降读：用缓存
    - (2)降写：把请求拦截在系统上游
- 用缓存降低数据层读请求，不展开
    - 秒杀买票，这是一个典型的读多写少的业务场景:
        - 车次查询，读，量大
        - 余票查询，读，量大
        - 下单和支付，写，量小
    - 一趟火车2000张票，200w个 人同时来买，最多2000个人下单成功，其他人都是查询库存，写.
    - 比例只有0.1%，读比例占99.9%，非常适合使用缓存来优化。
- 如何将请求，拦截在系统上游?
    - 先看看上下游分层架构，秒杀业务，常见的系统分层架构如何?
        - 浏览器->站点->服务->数据
    - 第一层，端上的请求拦截(浏览器/APP)，可以做一些限速策略，限制用户在 X 秒内只能做一次请求
    - 第二层，站点层的请求拦截，使用 session，用户 uid 或 token 等识别同一用户，进行限速拦截，高级一点可以返回页面缓存，即返回上一次的内容
    - 第三层，服务层的请求拦截，知道了业务层的抗压能力和库存，可以根据此进行限速，使用消息队列或内存中的队列
    - 第四层，数据库闲庭信步，基本不需要做什么，因为到这里访问量应该很低了
- (1)按照上面的优化方案,其实压力最大的反而是站点层，假设真实有效的请求数是每秒100w，这部分的压力怎么处理?
    - 站点层的扩容非常容易，测算出机器的处理能力，直接加机器即可，此外其实不需要所有的请求都处理返回，可以服务降级，把大部分的请求失败掉即可，保护系统是最优先原则
- (2)站点层限速，是个每个uid的请求计数放到redis里么?吞吐量很大情况下，高并发访问redis，网络带宽会不会成为瓶颈?
    - redis 可以做水平切分，如果担心网络带宽，可以使用内存队列
- 任何脱离业务的架构设计都是耍流氓，产品+技术，不可分割，产品上，能够如何“优化"，以简化系统架构设计呢?
    - case 1 下单与支付分离
        - 一般来说，下单和支付放在同一个流程里，能够提高转化率。
        - 对于秒杀场景，产品上，下单流程和支付流程异步，放在两个环节里，能够降低数据库写压力。
        - 12306， 下单成功后，系统占住库存，45分钟之内支付即可。
    - case 2 分城市用户规则差异化
        - 一般来说，所有用户规则相同，体验会更好。
        - 对于秒杀场景，产品上，不同地域分时售票，虽然不是所有用户规则相同，但能够极大降低系统压力。
        - 北京9:00开始售票，上海9:30开始售票，广州XX开始售票，能够分担系统压力。
    - case 3 按钮只能点一次
        - 秒杀场景，由于短时间内并发较大，系统返回较慢，用户心情十分焦急，可能会频繁点击按钮，对系统造成压力。
        - 产品上可以优化为，一旦点击，不管系统是否返回，按钮立刻置灰，不给用户机会频繁点击。
    - case 4 库存显示粒度加粗
        - 一般来说，显示具体的库存数量，能够加强用户体验。
        - 对于秒杀场景，产品上，只显示有/无车票，而不是显示具体票数目，能够降低缓存淘汰率。
        - 显示库存会淘汰N次，显示有无只会淘汰1次。更多的，用户关注是否有票，而不是票有几张。
- 总结
    - 一、秒杀业务为什么难?数据量并不大，但锁冲突巨大
    - 二、系统架构优化，方向上，降低数据层锁冲突
        - (1) 降读:用缓存
        - (2) 降写:把请求拦截在系统上游
    - 三、架构难度大，产品要折衷
