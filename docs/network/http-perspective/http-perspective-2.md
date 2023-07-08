---
title: 《透视HTTP协议》安全篇
date: 2021-03-24 08:26:41
tags:
- HTTP
- 网络
categories:
- 网络
description: 主要包括HTTPS、TLS、加密、数字签名、证书等
toc:
  enable: true
  number: false
---

## 23 | HTTPS是什么？SSL/TLS又是什么？
- Q:具备哪4给特性的通信过程才是安全的?
    - 机密性(Secrecy/Confidentiality)：对数据的“保密”，只能由可信的人访问，对其他人是不可见的“秘密”，简单来说就是不能让不相关的人看到不该看的东西
    - 完整性(Integrity，也叫一致性)：指数据在传输过程中没有被窜改
    - 身份认证(Authentication)：确认对方的真实身份，保证消息只能发送给可信的人
    - 不可否认(Non-repudiation/Undeniable，也叫不可抵赖)，不能否认已经发生过的行为

## 24 | 固若金汤的根本（上）：对称加密与非对称加密
- Q:对称加密是什么？
    - 指加密和解密时使用的密钥都是同一个，只要保证了密钥的安全，那整个通信过程就可以说具有了机密性
- Q:目前常用的对称加密算法有哪两个
    - AES：高级加密标准（Advanced Encryption Standard），密钥长度可以是 128、192 或 256。它是 DES 算法的替代者，安全强度很高，性能也很好，而且有的硬件 还会做特殊优化，所以非常流行，是应用最广泛的对称加密算法
    - ChaCha20：Google 设计的另一种加密算法，密钥长度固定为 256 位，纯软件运行性能 要超过 AES，曾经在移动客户端上比较流行，但 ARMv8 之后也加入了 AES 硬件优化，所 以现在不再具有明显的优势，但仍然算得上是一个不错算法
- Q:加密分组模式是什么？
    - 让算法用固定长度的密钥加密任意长度的明文，把密钥转化为密文
    - 最新的分组模式被称为 AEAD（Authenticated Encryption with Associated Data），在加密的同时增加了认证的功能，常用的是 GCM、CCM 和 Poly1305
- Q:非对称加密是什么？
    - 它有两个密钥，一个叫“公钥”（public key），一个叫“私钥”（private key）。两个密钥是不同的，公钥可以公开给任何人使用，而私钥必须严格保密
    - 公钥和私钥有个特别的“单向”性，虽然都可以用来加密解密，但公钥加密后只能用私钥解密，反过来，私钥加密后也只能用公钥解密
- Q:有哪些非对称加密算法
    - RSA：它的安全性基于“整数分解”的数学难题，使用两个超大素数的乘积作为生成密钥的材料，想要从公钥推算出私钥是非常困难的
    - ECC（Elliptic Curve Cryptography）：它基于“椭圆曲线离散对数”的数学难题，使用特定的曲线方程和基点生成公钥和私钥，子算法 ECDHE 用于密钥交换，ECDSA 用于数字签名
    - 目前比较常用的两个曲线是 P-256（secp256r1，在 OpenSSL 称为 prime256v1）和 x25519。P-256 是 NIST（美国国家标准技术研究所）和 NSA（美国国家安全局）推荐使用的曲线，而 x25519 被认为是最安全、最快速的曲线
- Q:TLS里使用的混合加密是怎样呢？
    - 在通信刚开始的时候使用非对称算法，如RSA、ECDHE，首先解决密钥交换的问题
    - 用随机数产生对称算法使用的「会话密钥」(session key)，再用公钥加密。因为会话密钥很短，通常只有16字节或32字节，所以慢一点也无所谓
    - 对方拿到密文后用私钥解密，取出会话密钥。这样，双方就实现了对称密钥的安全交换，后续就不再使用非对称加密，全都使用对称加密

## 25 | 固若金汤的根本（下）：数字签名与证书
- Q:目前推荐使用的摘要算法是什么
    - SHA-2：一系列摘要算法的统称，总共有 6 种，常用的有 SHA224、SHA256、 SHA384，分别能够生成 28 字节、32 字节、48 字节的摘要
- Q:如何保证数据完整性
    - 真正的完整性必须要建立在机密性之上，在混合加密系统里用会话密钥加密消息和摘要
- Q:数字签名的原理是什么？
    - 把公钥私钥的用法反过来，之前是公钥加密、私钥解密， 现在是私钥加密、公钥解密
    - 因为非对称加密效率太低，所以私钥只加密原文的摘要，这样运算量就小的多，而且得到的数字签名也很小，方便保管和传输
    - 签名和公钥一样完全公开，任何人都可以获取。但这个签名只有用私钥对应的公钥才能解开，拿到摘要后，再比对原文验证完整性，就可以像签署文件一样证明消息确实是你发的
- Q:CA是什么
    - 证书认证机构(Certificate Authority)，具有极高的可信度，由它来给各个公钥签名，用自 身的信誉来保证公钥无法伪造，是可信的
    - CA 对公钥的签名认证是有格式的，包含序列号、用途、颁发者、有效时间等等，把这些打成一个包再签名，完整地证明公钥关联的各种信息，形成“数字证书”（Certificate）
- Q:CA签发的三种证书DV、OV、EV的区别是
    - 区别在于可信程度
    - DV 是最低的，只是域名级别的可信，背后是谁不知道。EV 是最高的，经过了法律和审计的严格核查，可以证明网站拥有者的身份（在浏览器地址栏会显示出公司的名字，例如 Apple、GitHub 的网站）
- Q:CA 怎么证明自己呢
    - 这是信任链的问题。小一点的 CA 可以让大 CA 签名认证，但链条的最后，也就是Root CA，就只能自己证明自己了，这个就叫“自签名证书”（Self-Signed Certificate）或者“根证书”（Root Certificate）。你必须相信，否则整个证书信任链就走不下去了
    - ![](https://img.shiqi-lu.tech/20210321183737.png)
    - 有了这个证书体系，操作系统和浏览器都内置了各大 CA 的根证书，上网的时候只要服务器发过来它的证书，就可以验证证书里的签名，顺着证书链（Certificate Chain）一层层地验证，直到找到根证书，就能够确定证书是可信的，从而里面的公钥也是可信的

## 26 | 信任始于握手：TLS1.2连接过程解析
- Q:TLS协议由哪几个子协议组成呢？
    - 记录协议(Record Protocol)：规定了TLS收发数据的基本单位：记录(record)。它有点像是TCP里的segment，所有的其它子协议都需要通过记录协议发出。但多个记录数据可以在一个TCP包里一次性发出，也不需要像TCP那样返回ACK
    - 警报协议(Alert Protocol)：向对方发出警报信息，类似HTTP协议里的状态码。如，protocol_version是不支持旧版本，bad_certificate是证书有问题，收到警报后另一方可以选择继续，也可以立即终止连接
    - 握手协议(Handshake Protocol)：浏览器和服务器会在握手过程中协商TLS版本号、随机数、密码套件等信息，然后交换证书和密钥参数，最终双方协商会得到会话密钥，用于后续的混合加密系统
    - 变更密码规范协议(Change Cipher Spec Protocol)：就是一个「通知」，告诉对方，后续的数据都将使用加密保护。在它之前，数据都是明文的
- Q:TLS的握手过程
    - ![](https://img.shiqi-lu.tech/20210321192338.png)
    - 其中每一个“框”都是一个记录，多个记录组合成一个 TCP 包发送。所以，最多经过两次消息往返（4 个消息）就可以完成握手，然后就可以在安全的通信环境里发送 HTTP 报文，实现 HTTPS 协议
    - ![](https://img.shiqi-lu.tech/20210322090801.png)
    - 1.在TCP建立连接后，浏览器会首先发一个「Client Hello」消息。里面有客户端的版本号、支持的密码套件，还有一个随机数(Client Random)，用于后续生成会话密钥
    - 2.服务器收到「Client Hello」后，会返回一个「Server Hello」消息。把版本号对一下，也给出一个随机数(Server Random)，然后从客户端列表里选一个作为本次通信使用的密码套件
    - 然后服务器为了证明自己的身份，就把证书也发给了客户端(Server Certificate)
    - 接下来因为服务器选择了ECDHE算法，所以它会在证书后发送「Server Key Exchange」消息，里面是椭圆曲线的公钥(Server Params)，用来实现密钥交换，再加上自己的私钥签名认证
    - 然后是「Server Hello Done」消息，表示所有信息就这些
    - 这样第一个消息往返就结束了（两个 TCP 包），结果是客户端和服务器通过明文共享了三个信息：Client Random、Server Random 和 Server Params
    - 3.客户端拿到服务器的证书后，开始走证书链逐级验证，确认证书的真实性，再用证书公钥签名，确认服务器的身份
    - 然后，客户端按照密码套件的要求，也生成一个椭圆曲线的公钥(Client Params)，用「Client Key Exchange」消息发给服务器
    - 现在客户端和服务器手里都难倒了密钥交换算法的两个参数(Client Params、Server Params)，就用ECDHE算法算出「Pre-Master」，也是一个随机数
    - 现在客户端和服务器手里有了三个随机数：Client Random、Server Random 和 Pre-Master。用这三个作为原始材料，就可以生成用于加密会话的主密钥，叫「Master Secret」。而黑客因为拿不到「Pre-Master」，所以也就得不到主密钥
    - 用三个随机数是因为保证真正的「完全随机」
    - 主密钥有 48 字节，但它也不是最终用于通信的会话密钥，还会再用 PRF (伪随机数函数)扩展出更多的密钥，比如客户端发送用的会话密钥（client_write_key）、服务器发送用的会话密钥（server_write_key）等等，避免只用一个密钥带来的安全隐患
    - 4.有了主密钥和派生的会话密钥，客户端发一个「Change Cipher Spec」，然后再发一个「Finished」消息，把之前所有发送的数据做个摘要，再加密一下，让服务器做个验证
    - 服务器同样发「Change Cipher Spec」和「Finished」消息，双方都验证加密解密OK，握手正式结束，后面就收发被加密的 HTTP 请求和响应了
- Q:主流的TLS握手过程和传统的RSA握手过程的区别是什么？
    - 1.使用ECDHE实现密钥交换，而不是RSA，所以会在服务器端发出「Server Key Exchange」消息
    - 2.因为使用了ECDHE，客户端可以不用等到服务器发回「Finished」确认握手完毕，，立即就发出 HTTP 报文，省去了一个消息往返的时间浪费。这个叫「TLS False Start」，意思就是「抢跑」，和「TCP Fast Open」有点像，都是不等连接完全建立就提前发应用数据，提高传输的效率
    - ![](https://img.shiqi-lu.tech/20210322152509.png)
    - 大体的流程没有变，只是「Pre-Master」不再需要用算法生成，而是客户端直接生成随机数，然后用服务器的公钥加密，通过「Client Key Exchange」消息发给服务器。服务器再用私钥解密，这样双方也实现了共享三个随机数，就可以生成主密钥
- Q:双向认证是什么？
    - TLS握手是「单向认证」的握手过程，只认证了服务器的身份，而没有认证客户端的身份。这是因为通常单向认证通过后已经建立了安全通信，用账号、密码等简单的手段就能够确认用户的真实身份
    - 双向认证的流程也没有太多变化，只是在「Server Hello Done」之后，「Client Key Exchange」之前，客户端要发送「Client Certificate」消息，服务器收到后也把证书链走一遍，验证客户端的身份

## 27 | 更好更快的握手：TLS1.3特性解析
- Q:TLS1.3的主要改进是什么？
    - 最大化兼容性
        - TLS1.3 保持现有的记录格式不变，通过“伪装”来实现兼容TLS1.2，即不变更记录头字段里的版本号
        - 使用一个新的扩展协议（Extension Protocol），通过在记录末尾添加一系列的「扩展字段」来增加新的功能，老版本的 TLS 不认识它可以直接忽略，这就实现了「后向兼容」
        - 在记录头的 Version 字段被兼容性“固定”的情况下，只要是 TLS1.3 协议，握手的“Hello”消息后面就必须有“supported_versions”扩展，它标记了 TLS 的版本号， 使用它就能区分新旧协议
    - 强化安全
        - 精简算法，废除不安全的算法
    - 提升性能
        - HTTPS 建立连接时除了要做 TCP 握手，还要做 TLS 握手，在 1.2 中会多花两个消息往返（2-RTT），可能导致几十毫秒甚至上百毫秒的延迟，在移动网络中延迟还会更严重
        - 现在因为密码套件大幅度简化，也就没有必要再像以前那样走复杂的协商流程了。TLS1.3 压缩了以前的「Hello」协商过程，删除了「Key Exchange」消息，把握手时间减少到了1-RTT，效率提高了一倍
        - 具体的做法是利用扩展。客户端在「Client Hello」消息里直接 用「supported_groups」带上支持的曲线，比如 P-256、x25519，用「key_share」带上曲线对应的客户端公钥参数，用「signature_algorithms」带上签名算法
        - 服务器收到后在这些扩展里选定一个曲线和参数，再用「key_share」扩展返回服务器这边的公钥参数，就实现了双方的密钥交换，后面的流程就和 1.2 基本一样了
- Q:TLS1.3的握手过程
    - ![](https://img.shiqi-lu.tech/20210322162027.png)
    - ![](https://img.shiqi-lu.tech/20210322162054.png)
    - 在 TCP 建立连接之后，浏览器首先还是发一个「Client Hello」
    - 因为 1.3 的消息兼容 1.2，所以开头的版本号、支持的密码套件和随机数（Client Random）结构都是一样的（不过这时的随机数是 32 个字节）
    - 注意「Client Hello」里的扩展，「supported_versions」表示这是 TLS1.3，「supported_groups」是支持的曲线，「key_share」是曲线对应的参数
    - 服务器收到「Client Hello」同样返回「Server Hello」消息，还是要给出一个随机数(Server Random)和选定密码套件，表面上看和 TLS1.2 是一样的，重点是后面的扩展。「supported_versions」里确认使用的是 TLS1.3，然后在「key_share」扩展带上曲线和对应的公钥参数
    - 这时只交换了两条消息，客户端和服务器就拿到了四个共享信息：Client Random和 Server Random、Client Params和Server Params，两边就可以各自用 ECDHE 算出「Pre-Master」，再用 HKDF 生成主密钥「Master Secret」，效率比 TLS1.2 提高了一大截
    - 在算出主密钥后，服务器立刻发出「Change Cipher Spec」消息，比 TLS1.2 提早进入加密通信，后面的证书等就都是加密的了，减少了握手时的明文信息泄露
    - 这里 TLS1.3 还有一个安全强化措施，多了个「Certificate Verify」消息，用服务器的私钥把前面的曲线、套件、参数等握手数据加了签名，作用和「Finished」消息差不多。但由于是私钥签名，所以强化了身份认证和和防窜改
    - 这两个「Hello」消息之后，客户端验证服务器证书，再发「Finished」消息，就正式完成了握手，开始收发 HTTP 报文

## 28 | 连接太慢该怎么办：HTTPS的优化
- Q:TLS握手过程中影响性能的部分有哪些呢
    - ![](https://img.shiqi-lu.tech/20210322163414.png)
- Q:如何使用硬件优化的方式优化HTTPS
    - 1.选择更快的 CPU，最好还内建 AES 优化，这样即可以加速握手，也可以加速传输
    - 2.选择“SSL 加速卡”，加解密时调用它的 API，让专门的硬件来做非对称加解密，分担 CPU 的计算压力
    - 3.SSL 加速服务器，用专门的服务器集群来彻底“卸载”TLS 握手时的加密解密计算，性能自然要比单纯的“加速卡”要强大的多
- Q:如何使用软件优化的方式优化HTTPS
    - 1.软件升级：把现在正在使用的软件尽量升级到最新版本，由于这些软件在更新版本的时候都会做性能优化、修复错误，只要运维能够主动配合，这种软件优化是最容易做的，也是最容易达成优化效果的
    - 2.协议优化：尽量采用 TLS1.3，它大幅度简化了握手的过程，完全握手只要 1-RTT，而且更加安全
    - 如果暂时不能升级到 1.3，只能用 1.2，那么握手时使用的密钥交换协议应当尽量选用椭圆曲线的 ECDHE 算法。它不仅运算速度快，安全性高，还支持“False Start”，能够把握手的消息往返由 2-RTT 减少到 1-RTT，达到与 TLS1.3 类似的效果
    - 椭圆曲线也要选择高性能的曲线，最好是 x25519，次优选择是 P-256。对称加密算法方面，也可以选用“AES_128_GCM”，它能比“AES_256_GCM”略快一点点
    - 在 Nginx 里可以用“ssl_ciphers”“ssl_ecdh_curve”等指令配置服务器使用的密码套件和椭圆曲线，把优先使用的放在前面
```
ssl_ciphers TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:EECDH+CHACHA20;
ssl_ecdh_curve X25519:P-256;
```
- Q:如何进行证书优化
    - 1.证书传输
        - 服务器的证书可以选择椭圆曲线（ECDSA）证书而不是 RSA 证书，因为 224 位的 ECC 相当于 2048 位的 RSA，所以椭圆曲线证书的“个头”要比 RSA 小很多，即能够节约带宽也能减少客户端的运算量
    - 2.证书验证
        - 客户端的证书验证其实是个很复杂的操作，除了要公钥解密验证多个证书签名外，因为证书还有可能会被撤销失效，客户端有时还会再去访问 CA，下载 CRL 或者 OCSP 数据，这又会产生 DNS 查询、建立连接、收发数据等一系列网络通信，增加好几个 RTT
        - CRL（Certificate revocation list，证书吊销列表）由 CA 定期发布，里面是所有被撤销信任的证书序号，查询这个列表就可以知道证书是否有效。
        - 但 CRL 因为是“定期”发布，就有“时间窗口”的安全隐患，而且随着吊销证书的增多，列表会越来越大，一个 CRL 经常会上 MB。想象一下，每次需要预先下载几 M 的“无用数据”才能连接网站，实用性实在是太低了
        - 所以，现在 CRL 基本上不用了，取而代之的是 OCSP（在线证书状态协议，Online Certificate Status Protocol），向 CA 发送查询请求，让 CA 返回证书的有效状态
        - 但 OCSP 也要多出一次网络请求的消耗，而且还依赖于 CA 服务器，如果 CA 服务器很忙，那响应延迟也是等不起的
        - 于是又出来了一个“补丁”，叫“OCSP Stapling”（OCSP 装订），它可以让服务器预先访问 CA 获取 OCSP 响应，然后在握手时随着证书一起发给客户端，免去了客户端连接 CA 服务器查询的时间
- Q:如何进行会话复用（TLS session resumption）的「Session ID」
    - 客户端和服务器首次连接后各自保存一个会话的 ID 号，内存里存储主密钥和其他相关的信息。当客户端再次连接时发一个 ID 过来，服务器就在内存里找，找到就直接用主密钥恢复会话状态，跳过证书验证和密钥交换，只用一个消息往返就可以建立安全通信
    - 服务器在“ServerHello”消息后直接发送了“Change Cipher Spec”和“Finished”消息，复用会话完成了握手
    - ![](https://img.shiqi-lu.tech/20210322164911.png)
    - 「Session ID」是最早出现的会话复用技术，也是应用最广的，但它也有缺点，服务器必须保存每一个客户端的会话数据，对于拥有百万、千万级别用户的网站来说存储量就成了大问题，加重了服务器的负担
- Q:如何进行会话复用（TLS session resumption）的「Session Ticket」即会话票证
    - 有点类似 HTTP 的 Cookie，存储的责任由服务器转移到了客户端，服务器加密会话信息，用“New Session Ticket”消息发给客户端，让客户端保存
    - 重连的时候，客户端使用扩展“session_ticket”发送“Ticket”而不是“Session ID”，服务器解密后验证有效期，就可以恢复会话，开始加密通信
    - 不过“Session Ticket”方案需要使用一个固定的密钥文件（ticket_key）来加密 Ticket，为了防止密钥被破解，保证“前向安全”，密钥文件需要定期轮换，比如设置为一小时或者一天
- Q:如何进行预共享密钥
    - “False Start”“Session ID”“Session Ticket”等方式只能实现 1-RTT，而 TLS1.3 更进一步实现了“0-RTT”，原理和“Session Ticket”差不多，但在发送 Ticket 的同时会带上应用数据（Early Data），免去了 1.2 里的服务器确认步骤，这种方式叫“Pre-shared Key”，简称为“PSK”
    - ![](https://img.shiqi-lu.tech/20210322165457.png)
    - 但“PSK”也不是完美的，它为了追求效率而牺牲了一点安全性，容易受到“重放攻击”（Replay attack）的威胁。黑客可以截获“PSK”的数据，像复读机那样反复向服务器发送
    - 解决的办法是只允许安全的 GET/HEAD 方法，在消息里加入时间戳、“nonce”验证，或者“一次性票证”限制重放

## 29 | 我应该迁移到HTTPS吗？
- Q:如何申请证书
    - “Let’s Encrypt”一直在推动证书的自动化部署，为此还实现了专门的 ACME 协议（RFC8555）。有很多的客户端软件可以完成申请、验证、下载、更新的“一条龙”操作，比如 Certbot、acme.sh 等等
    - 注意：
    - 第一，申请证书时应当同时申请 RSA 和 ECDSA 两种证书，在 Nginx 里配置成双证书验证，这样服务器可以自动选择快速的椭圆曲线证书，同时也兼容只支持 RSA 的客户端
    - 第二，如果申请 RSA 证书，私钥至少要 2048 位，摘要算法应该选用 SHA-2，例如 SHA256、SHA384 等
    - 第三，出于安全的考虑，“Let’s Encrypt”证书的有效期很短，只有 90 天，时间一到就会过期失效，所以必须要定期更新。你可以在 crontab 里加个每周或每月任务，发送更新请求，不过很多 ACME 客户端会自动添加这样的定期任务，完全不用你操心
- Q:如何配置HTTPS
    - 在 Nginx 上非常简单，只要在“listen”指令后面加上参数“ssl”，再配上刚才的证书文件就可以实现最基本的 HTTPS
    ```
    listen                443 ssl;
    
    ssl_certificate       xxx_rsa.crt;  #rsa2048 cert
    ssl_certificate_key   xxx_rsa.key;  #rsa2048 private key
    
    ssl_certificate       xxx_ecc.crt;  #ecdsa cert
    ssl_certificate_key   xxx_ecc.key;  #ecdsa private ke
    ```
    - 为了提高 HTTPS 的安全系数和性能，你还可以强制 Nginx 只支持 TLS1.2 以上的协议，打开“Session Ticket”会话复用
    ```
    ssl_protocols               TLSv1.2 TLSv1.3;
    
    ssl_session_timeout         5m;
    ssl_session_tickets         on;
    ssl_session_ticket_key      ticket.key;
    ```
    - 密码套件的选择方面，我给你的建议是以服务器的套件优先。这样可以避免恶意客户端故意选择较弱的套件、降低安全等级，然后密码套件向 TLS1.3“看齐”，只使用 ECDHE、AES 和 ChaCha20，支持“False Start”
    ```
    ssl_prefer_server_ciphers   on;

    ssl_ciphers   ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-CHACHA20-POLY1305:ECDHE+AES128:!MD5:!SHA1;
    ```
    - 如果你的服务器上使用了 OpenSSL 的分支 BorringSSL，那么还可以使用一个特殊的“等价密码组”（Equal preference cipher groups）特性，它可以让服务器配置一组“等价”的密码套件，在这些套件里允许客户端优先选择，比如这么配置
    ```
    ssl_ciphers 
    [ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305];
    ```
    -  如果客户端硬件没有 AES 优化，服务器就会顺着客户端的意思，优先选择与 AES“等价”的 ChaCha20 算法，让客户端能够快一点
    - 全部配置完成后，你可以访问“[SSLLabs](https://www.ssllabs.com/)”网站，测试网站的安全程度，它会模拟多种客户端发起测试，打出一个综合的评分
- Q:服务器名称指示是怎样？
    - 在 HTTP 协议里，多个域名可以同时在一个 IP 地址上运行，这就是“虚拟主机”，Web 服务器会使用请求头里的 Host 字段来选择
    - 但在 HTTPS 里，因为请求头只有在 TLS 握手之后才能发送，在握手时就必须选择“虚拟主机”对应的证书，TLS 无法得知域名的信息，就只能用 IP 地址来区分。所以，最早的时候每个 HTTPS 域名必须使用独立的 IP 地址，非常不方便
    - 这得用到 TLS 的“扩展”，给协议加个SNI（Server Name Indication）的“补充条款”。它的作用和 Host 字段差不多，客户端会在“Client Hello”时带上域名信息，这样服务器就可以根据名字而不是 IP 地址来选择证书
- Q:如何把原有的HTTP重定向到HTTPS服务
    - 可用「重定向跳转」技术，把不安全的 HTTP 网址用 301 或 302“重定向”到新的 HTTPS 网站，这在 Nginx 里也很容易做到，使用“return”或“rewrite”都可以
    ```
    return 301 https://$host$request_uri;             # 永久重定向
    rewrite ^  https://$host$request_uri permanent;   # 永久重定向
    ```
    - 但这种方式有两个问题。一个是重定向增加了网络成本，多出了一次请求；另一个是存在安全隐患，重定向的响应可能会被“中间人”窜改，实现“会话劫持”，跳转到恶意网站
    - 可使用HSTS（HTTP 严格传输安全，HTTP Strict Transport Security）的技术可以消除这种安全隐患。HTTPS 服务器需要在发出的响应头里添加一个「Strict-Transport-Security」的字段，再设定一个有效期，例如：
    ```
    Strict-Transport-Security: max-age=15768000; includeSubDomains
    ```
    - 相当于告诉浏览器：我这个网站必须严格使用 HTTPS 协议，在半年之内（182.5 天）都不允许用 HTTP，你以后就自己做转换吧，不要再来麻烦我了
    - 有了“HSTS”的指示，以后浏览器再访问同样的域名的时候就会自动把 URI 里的“http”改成“https”，直接访问安全的 HTTPS 网站。这样“中间人”就失去了攻击的机会，而且对于客户端来说也免去了一次跳转，加快了连接速度
    - 在配置文件里用“add_header”指令添加“HSTS”字段：
    ```
    add_header Strict-Transport-Security max-age=15768000; #182.5days
    ```
    - 那么 Chrome 浏览器只会在第一次连接时使用 HTTP 协议，之后就会都走 HTTPS 协议
