---
title: zookeeper学习笔记
date: 2021-11-13 18:11:55
updated: 2021-11-13 18:11:55
tags:
- 大数据
categories:
- 大数据
description: 整理B站尚硅谷 zookeeper 的视频学习笔记
toc:
  enable: true
  number: false
---

## 第 1 章 Zookeeper 入门
### 1.1 概述
- ch1:Zookeeper 的工作机制是怎样？
    - 从设计模式角度来理解：是一个基于观察者模式设计的分布式服务管理框架 ， 它负责存储和管理大家都关心的数据 ， 然后接受观察者的注册 ， 一旦这些数据的状态发生变化 ， Zookeeper 就将负责通知已经在 Zookeeper 上注册的那些观察者做出相应的反应
    - ![](https://img.shiqi-lu.tech/20211109141434.png)

### 1.2 特点
- ch1:Zookeeper的特点有哪些？
    - 1.Zookeeper：一个领导者（Leader），多个跟随者（Follower）组成的集群
    - 2.集群中只要有半数以上 节点存活， Zookeeper集群就能正常服务 。所以Zookeeper适合安装奇数台服务器
    - 3.全局数据一致：每个Server保存一份相同的数据副本，Client无论连接到哪个Server，数据都是一致的
    - 4.更新请求顺序执行，来自同一个Client的更新请求按其发送顺序依次执行
    - 5.数据更新原子性，一次数据更新要么成功，要么失败
    - 6.实时性，在一定时间范围内，Client能读到最新数据
    - ![](https://img.shiqi-lu.tech/20211109141713.png)

### 1.3 数据结构
- ch1:Zookeeper 的内部数据结构是什么？
    - ZooKeeper 数据模型的结构与 Unix 文件系统很类似，整体上可以看作是一棵树，每个节点称做一个 ZNode。每一个 ZNode 默认能够存储 1MB 的数据，每个 ZNode 都可以通过其路径唯一标识
    - ![](https://img.shiqi-lu.tech/20211109142014.png)

### 1.4 应用场景
- ch1:Zookeeper 有哪些应用场景？
    - 统一命名服务：在分布式环境下 ， 经常需要对应用/服务进行统一命名，便于识别
        - ![](https://img.shiqi-lu.tech/20211109142301.png)
    - 统一配置管理
        - 分布式环境下，配置文件同步非常常见
            - 1.一般要求一个集群中 ，所有节点的配置信息是一致的，比如 Kafka 集群
            - 2.对配置文件修改后 ，希望能够快速同步到各个节点上
        - 配置管理可交由ZooKeeper实现
            - 1.可将配置信息写入ZooKeeper上的一个Znode
            - 2.各个客户端服务器监听这个Znode
            - 3.一旦 Znode 中的数据被修改， ZooKeeper 将通知各个客户端服务器
        - ![](https://img.shiqi-lu.tech/20211109143022.png)
    - 统一集群管理
        - 分布式环境中，实时掌握每个节点的状态是必要的
            - 1.可根据节点实时状态做出一些调整
        - ZooKeeper可以实现实时监控节点状态变化
            - 1.可将节点信息写入 ZooKeeper 上的一个 ZNode
            - 2.监听这个ZNode可获取它的实时状态变化
        - ![](https://img.shiqi-lu.tech/20211109143216.png)
    - 服务器动态上下线：客户端能实时洞察到服务器上下线的变化
        - ![](https://img.shiqi-lu.tech/20211109143328.png)
    - 软负载均衡：在Zookeeper中记录每台服务器的访问数，让访问数最少的服务器去处理最新的客户端请求
        - ![](https://img.shiqi-lu.tech/20211109143438.png)

### 1.5 下载地址
- https://zookeeper.apache.org/

## 第 2 章 Zookeeper 本地安装
### 2.1 本地模式安装
- ch2:Zookeeper本地模式安装
    - 1.安装前准备
        - 1.安装SDK
        - 2.下载zk 安装包
        - 3.解压：`hduser@k8s01:~$ tar xf apache-zookeeper-3.7.1-bin.tar.gz -C /opt/module/`
        - 4.修改名称：`hduser@k8s01:/opt/module$ mv apache-zookeeper-3.7.1-bin zookeeper-3.7.1`
    - 2.配置修改
        - 将`/opt/module/zookeeper-3.7.1/conf`目录下的 zoo_sample.cfg 修改为 zoo.cfg
        - 修改zoo.cfg的dataDIr路径为：`/opt/module/zookeeper-3.7.1/zkData`
        - 创建dataDir：`mkdir /opt/module/zookeeper-3.7.1/zkData`
    - 3.操作zk
    ```shell
    #启动
    hduser@k8s01:/opt/module/zookeeper-3.7.1/bin$ ./zkServer.sh start
    ZooKeeper JMX enabled by default
    Using config: /opt/module/zookeeper-3.7.1/bin/../conf/zoo.cfg
    Starting zookeeper ... STARTED

    #查看是否启动
    hduser@k8s01:/opt/module/zookeeper-3.7.1/bin$ jps
    2060208 QuorumPeerMain

    #查看状态
    hduser@k8s01:/opt/module/zookeeper-3.7.1/bin$ ./zkServer.sh status
    ZooKeeper JMX enabled by default
    Using config: /opt/module/zookeeper-3.7.1/bin/../conf/zoo.cfg
    Client port found: 2181. Client address: localhost. Client SSL: false.
    Mode: standalone

    #启动客户端
    hduser@k8s01:~$ zkCli.sh

    #停止客户端
    hduser@k8s01:~$ zkServer.sh stop
    ZooKeeper JMX enabled by default
    Using config: /opt/module/zookeeper-3.7.1/bin/../conf/zoo.cfg
    Stopping zookeeper ... STOPPED
    ```


### 2.2 配置文件 zoo.cfg 参数解读
- tickTime = 2000：通信心跳时间，Zookeeper服务器与客户端心跳时间，单位毫秒
- initLimit = 10：Leader和Follower初始连接时能容忍的最多心跳数(tickTime的数量)
- syncLimit = 5：LF同步通信时限
    - Leader和Follower之间通信时间如果超过syncLimit * tickTime，Leader认为Follwer死 掉，从服务器列表中删除Follwer
- dataDir：保存Zookeeper中的数据
- clientPort = 2181：客户端连接端口，通常不做修改


## 第 3 章 Zookeeper 集群操作
### 3.1 集群操作
- ch3:SID、ZXID、Epoch 分别是什么？
    - SID：服务器ID。用来唯一标识一台ZooKeeper集群中的机器，每台机器不能重复，和myid一致
    - ZXID：事务ID。ZXID是一个事务ID，用来标识一次服务器状态的变更。在某一时刻， 集群中的每台机器的ZXID值不一定完全一致，这和ZooKeeper服务器对于客户端“更新请求”的处理逻辑有关
    - Epoch：每个Leader任期的代号。没有Leader时同一轮投票过程中的逻辑时钟值是相同的。每投完一次票这个数据就会增加
- ch3:Zookeeper选举机制——第一次启动是怎样的？
    - ![](https://img.shiqi-lu.tech/20211109151707.png)
    - 1.服务器 1 启动，发起一次选举。服务器 1 投自己一票 。 此时服务器 1 票数一票，不够半数以上（ 3 票 ），选举无法完成，服务器 1 状态保持为 LOOKING
    - 2.服务器2启动，再发起一次选举。服务器1和2分别投自己一票并交换选票信息：此时服务器1发现服务器2的myid比自己目前投票推举的（服务器1）大，更改选票为推举服务器2。此时服务器1票数0票，服务器2票数2票，没有半数以上结果，选举无法完成，服务器1，2状态保持LOOKING
    - 3.服务器3启动，发起一次选举。此时服务器1和2都会更改选票为服务器3。此次投票结果：服务器1为0票，服务器2为0票，服务器3为3票。此时服务器3的票数已经超过半数，服务器3当选Leader。服务器1，2更改状态为FOLLOWING，服务器3更改状态为LEADING
    - 4.服务器4启动，发起一次选举。此时服务器1，2，3已经不是LOOKING状态，不会更改选票信息。交换选票信息结果：服务器3为3票，服务器4为1票。此时服务器4服从多数，更改选票信息为服务器3，并更改状态为FOLLOWING
    - 5.服务器5启动，同4一样当小弟
- ch3:Zookeeper选举机制——非第一次启动是怎样的？
    - ![](https://img.shiqi-lu.tech/20211109152747.png)
    - 当ZooKeeper集群中的一台服务器出现以下两种情况之一时，就会开始进入Leader选举：
        - 服务器初始化启动
        - 服务器运行期间无法和Leader保持连接
    - 而当一台机器进入Leader选举流程时，当前集群也可能会处于以下两种状态：
        - 集群中本来就已经存在一个Leader
            - 对于第一种已经存在Leader的情况，机器试图去选举Leader时，会被告知当前服务器的Leader信息，对于该机器来说，仅仅需要和Leader机器建立连 接，并进行状态同步即可
        - 集群中确实不存在Leader
            - 假设ZooKeeper由5台服务器组成，SID分别为1、2、3、4、5，ZXID分别为8、8、8、7、7，并且此时SID为3的服务器是Leader。某一时刻， 3和5服务器出现故障，因此开始进行Leader选举
            - ![](https://img.shiqi-lu.tech/20211109153827.png)
- ch3:选举Leader规则是什么
    - 1.EPOCH大的直接胜出
    - 2.EPOCH相同， 事务id大的胜出
    - 3.事务id相同， 服务器id大的胜出

### 3.2 客户端命令行操作
#### 3.2.1 命令行语法
- 语法表
    - ![](https://img.shiqi-lu.tech/20211109144016.png)
- 启动客户端
    - `bin/zkCli.sh -server hadoop102:2181`

#### 3.2.2 znode 节点数据信息
- 查看当前znode中所包含的内容
    - `ls /`
- 查看当前节点详细数据
```plain text
[zk: hadoop102:2181(CONNECTED) 5] ls -s /
[zookeeper]cZxid = 0x0
ctime = Thu Jan 01 08:00:00 CST 1970
mZxid = 0x0
mtime = Thu Jan 01 08:00:00 CST 1970
pZxid = 0x0
cversion = -1
dataVersion = 0
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 0
numChildren = 1
```
    - 1.czxid：创建节点的事务 zxid
        - 每次修改ZooKeeper状态都会产生一个ZooKeeper事务ID。事务ID是ZooKeeper中所有修改总的次序。每次修改都有唯一的zxid,如果zxid1小于zxid2,那么zxid1在zxid2之前发生
    - 2.ctime：znode 被创建的毫秒数（从 1970 年开始）
    - 3.mzxid：znode 最后更新的事务 zxid
    - 4.mtime：znode 最后修改的毫秒数（从 1970 年开始）
    - 5.pZxid：znode 最后更新的子节点 zxid
    - 6.cversion：znode 子节点变化号，znode 子节点修改次数
    - 7.dataversion：znode 数据变化号
    - 8.aclVersion：znode 访问控制列表的变化号
    - 9.ephemeralOwner：如果是临时节点，这个是 znode 拥有者的 session id。如果不是 临时节点则是 0
    - 10.dataLength：znode 的数据长度
    - 11.numChildren：znode 子节点数量

#### 3.2.3 节点类型（持久/短暂/有序号/无序号）
- 有哪些节点类型？
    - 持久化目录节点：客户端与Zookeeper断开连接后，该节点依旧存在
    - 持久化顺序编号目录节点：客户端与Zookeeper 断开连接后 ，该节点依旧存 在，只是Zookeeper给该节点名称进行顺序编号
    - 临时目录节点：客户端与Zookeeper断开连接后，该节点被删除
    - 临时顺序编号目录节点：客户端与 Zookeeper 断开连 接后 ， 该节点被删除，只是Zookeeper给该节点名称进行顺序编号
    - 说明：创建znode时设置顺序标识，znode名称 后会附加一个值 ，顺序号是一个单调递增的计数 器，由父节点维护
- 创建永久节点
    - `create /sanguo "diaochan"`
- 获得节点值
    - `get -s /sanguo`
- 创建带序号的永久节点
    - `create -s /sanguo/weiguo/zhangliao "zhangliao"`
- 创建短暂节点
    - `create -e /sanguo/wuguo "zhouyu"`
- 退出客户端
    - `quit`
- 修改节点数据值
    - `set /sanguo/weiguo "simayi"`

#### 3.2.4 监听器原理
- ch3:监听器的原理是怎样的
    - ![](https://img.shiqi-lu.tech/20211109172302.png)
    - 1.首先要有一个main()线程
    - 2.在main线程中创建Zookeeper客户端，这时就会创建两个线程，一个负责网络连接通信(connet) ，一个负责监听(listener) 
    - 3.通过conec线程将注册的监听事件发送给Zookeeper
    - 4.在Zookeeper的注册监听器列表中将注册的监听事件添加到列表中
    - 5.Zookeeper监听到有 数据或路径变化，就会将这个消息发送给listener线程
    - 6.listener线程内部调用了process()方法
- ch3:注册监听/sanguo节点数据值变化
    - `get -w /sanguo`
    - 注册一次，只能监听一次。想再次监听，需要再次注册
- ch3:注册监听/sanguo节点的子节点变化监听（路径变化）
    - `ls -w /sanguo`

#### 3.2.5 节点删除与查看
- ch3:删除节点
    - `delete /sanguo/jin`
- ch3:递归删除节点
    - `deleteall /sanguo/shuguo`
- ch3:查看节点状态
    - `stat /sanguo`

### 3.3 客户端 API 操作

### 3.4 客户端向服务端写数据流程
- 写流程之写入请求直接发送给Leader节点
    - ![](https://img.shiqi-lu.tech/20211109173500.png)
- 写流程之写入请求发送给follower节点
    - ![](https://img.shiqi-lu.tech/20211109173527.png)

## 第 4 章 服务器动态上下线监听案例
## 第 5 章 ZooKeeper 分布式锁案例
## 第 6 章 企业面试真题
- ch6:Zookeeper 的选举机制？
    - 半数机制，超过半数的投票通过，即通过。
    - 第一次启动选举规则：
        - 投票过半数时，服务器 id 大的胜出
    - 第二次启动选举规则：
        - 1.EPOCH 大的直接胜出
        - 2.EPOCH 相同，事务 id 大的胜出
        - 3.事务 id 相同，服务器 id 大的胜出
- ch6:生产集群安装多少 zk 合适？
    - 安装奇数台
    - 生产经验：
        - 10 台服务器：3 台 zk
        - 20 台服务器：5 台 zk
        - 100 台服务器：11 台 zk
        - 200 台服务器：11 台 zk
    - 服务器台数多：好处，提高可靠性；坏处：提高通信延时
