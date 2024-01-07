import{_ as n,o as s,c as a,e}from"./app-n0xwCUxG.js";const t={},p=e(`<ul><li>Q:Service是什么？ <ul><li>k8s的service定义了这样一种抽象：一个pod的逻辑分组，一种可以访问它们的策略——通常称为微服务。这一组Pod能够被Service访问到，通常是通过Label Selector</li><li>只提供4层负载均衡能力，而没有7层功能，有时可能需要更多的匹配规则来转发请求，此时4层负载均衡是不支持的</li></ul></li><li>Q:Service有哪4种类型？ <ul><li>ClusterIp：默认类型，自动分配一个仅 Cluster 内部可以访问的虚拟 IP</li><li>NodePort：在 ClusterIP 基础上为 Service 在每台机器上绑定一个端口，这样就可以通过NodeIP: NodePort 来访问该服务</li><li>LoadBalancer：在 NodePort 的基础上，借助 cloud provider 创建一个外部负载均衡器，并将请求转发到NodeIP: NodePort</li><li>ExternalName：把集群外部的服务引入到集群内部来，在集群内部直接使用。没有任何类型代理被创建， 这只有 kubernetes 1.7 或更高版本的 kube-dns 才支持</li></ul></li><li>Q:Service的实现流程是怎样？ <ul><li><img src="https://img.shiqi-lu.tech/20201027163257.png" alt=""></li><li>1.监听服务的端点是由apiserver完成的，通过kube-proxy监控，进行服务和端点信息的发现</li><li>2.kube-proxy负责监控标签匹配的Pod的信息，并把它写入到iptables的规则里</li><li>3.当客户端想去访问svc的时候，其实访问的是iptables，并导向后端的pod的信息，即iptables通过kube-proxy写入的</li></ul></li><li>Q:service有哪3种代理模式？ <ul><li>userspace代理模式</li><li><img src="https://img.shiqi-lu.tech/20201027171941.png" alt=""></li><li>iptables代理模式</li><li><img src="https://img.shiqi-lu.tech/20201027171954.png" alt=""></li><li>ipvs代理模式</li><li><img src="https://img.shiqi-lu.tech/20201027172005.png" alt=""></li><li>ipvs模式下，kube-proxy会监视k8s service对象和endpoints，调用netlink接口以相应地创建ipvs规则并定期与k8s service对象和endpoints对象同步ipvs规则，以确保ipvs状态与期望一致。访问服务时，流量将被重定向到其中一个后端Pod</li></ul></li><li>Q:ClusterIP的工作方式是什么？ <ul><li>ClustuerIP主要在每个node节点使用iptables，将发向clusterIP对应端口的数据，转发到kube-proxy中。然后kube-proxy自己内部实现负载均衡的方法，并可以查询到这个service下对应pod的地址和端口，进而把数据转发给对应的Pod的地址和端口</li><li><img src="https://img.shiqi-lu.tech/20201027175214.png" alt=""></li><li>为了实现图上的功能，主要需要以下几个组件的协同工作： <ul><li>apiserver用户通过kubectl命令向apiserver发送创建service的命令，apiserver接收到请求后将数据存储到etcd中</li><li>kube-proxy k8s的每个节点中都有一个叫做kube-proxy的进程，这个进程负责感知service，pod的变化，并将变化的信息写入本地的iptables规则中</li><li>iptables使用NAT等技术将virtualIP的流量转至endpoint中</li></ul></li></ul></li><li>Q:ClusterIP的实验演示 <ul><li>创建deployment：myapp-deploy.yaml</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp<span class="token punctuation">-</span>deploy
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> myapp
      <span class="token key atrule">release</span><span class="token punctuation">:</span> stabel
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> myapp
        <span class="token key atrule">release</span><span class="token punctuation">:</span> stabel
        <span class="token key atrule">env</span><span class="token punctuation">:</span> test
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp
        <span class="token key atrule">image</span><span class="token punctuation">:</span> wangyanglinux/myapp<span class="token punctuation">:</span>v2
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
          <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi-lu@k8s-master:~/6$ kubectl apply <span class="token parameter variable">-f</span> myapp-deploy.yaml
deployment.apps/myapp-deploy created
shiqi-lu@k8s-master:~/6$ kubectl get pod
NAME                           READY   STATUS              RESTARTS   AGE
myapp-deploy-c7b5fb585-lw9rr   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          22s
myapp-deploy-c7b5fb585-pqd8j   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          22s
myapp-deploy-c7b5fb585-stkdm   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          22s
shiqi-lu@k8s-master:~/6$ kubectl get pod <span class="token parameter variable">-o</span> wide
NAME                           READY   STATUS    RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
myapp-deploy-c7b5fb585-lw9rr   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          62m   <span class="token number">10.244</span>.6.101   zhangliang   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
myapp-deploy-c7b5fb585-pqd8j   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          62m   <span class="token number">10.244</span>.8.108   kongming     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
myapp-deploy-c7b5fb585-stkdm   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          62m   <span class="token number">10.244</span>.4.51    laojun       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
shiqi-lu@k8s-master:~/6$ <span class="token function">curl</span> <span class="token number">10.244</span>.6.101
Hello MyApp <span class="token operator">|</span> Version: v2 <span class="token operator">|</span> <span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;hostname.html&quot;</span><span class="token operator">&gt;</span>Pod Name<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建service信息：myapp-service.yaml</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> myapp
    <span class="token key atrule">release</span><span class="token punctuation">:</span> stabel
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    shiqi-lu@k8s-master:~/6$ kubectl apply <span class="token parameter variable">-f</span> myapp-service.yaml
    service/myapp created
    shiqi-lu@k8s-master:~/6$ kubectl get svc
    NAME    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>   AGE
    myapp   ClusterIP   <span class="token number">10.101</span>.48.92   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>/TCP    20s
    shiqi-lu@k8s-master:~/6$ kubectl get svc <span class="token parameter variable">-n</span> default
    NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>   AGE
    kubernetes   ClusterIP   <span class="token number">10.96</span>.0.1    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP   114d
    shiqi-lu@k8s-master:~/6$ <span class="token function">curl</span> <span class="token number">10.101</span>.48.92
    Hello MyApp <span class="token operator">|</span> Version: v2 <span class="token operator">|</span> <span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;hostname.html&quot;</span><span class="token operator">&gt;</span>Pod Name<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 可以使用命令：\`ipvsadm -Ln\`查看ipvs的情况
- 查看服务轮训的情况
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    shiqi-lu@k8s-master:~/6$ <span class="token function">curl</span> <span class="token number">10.101</span>.48.92/hostname.html
    myapp-deploy-c7b5fb585-pqd8j
    shiqi-lu@k8s-master:~/6$ <span class="token function">curl</span> <span class="token number">10.101</span>.48.92/hostname.html
    myapp-deploy-c7b5fb585-stkdm
    shiqi-lu@k8s-master:~/6$ <span class="token function">curl</span> <span class="token number">10.101</span>.48.92/hostname.html
    myapp-deploy-c7b5fb585-lw9rr
    shiqi-lu@k8s-master:~/6$ <span class="token function">curl</span> <span class="token number">10.101</span>.48.92/hostname.html
    myapp-deploy-c7b5fb585-lw9rr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:Headless Service是什么？ <ul><li>有时不需要或不想要负载均衡，以及单独的Service IP。遇到这种情况，可以通过制定ClusterIP(spec.clusterIP)的值为&quot;None&quot;来创建Headless Service。这类Service并不会分配Cluster IP，kube-proxy不会处理它们，而且平台也不会为它们进行负载均衡和路由器</li><li>通过这个方式来解决clustername和podname变化问题，即通过它来绑定</li></ul></li><li>Q:Headless Service的实验 <ul><li>创建myapp-svc-headless.yaml</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp<span class="token punctuation">-</span>headless
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> myapp
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> <span class="token string">&quot;None&quot;</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
<span class="token key atrule">t</span><span class="token punctuation">:</span> 8\`\`\`
    <span class="token punctuation">-</span> \`\`\`shell
shiqi<span class="token punctuation">-</span>lu@k8s<span class="token punctuation">-</span>master<span class="token punctuation">:</span>~/6$ kubectl apply <span class="token punctuation">-</span>f myapp<span class="token punctuation">-</span>svc<span class="token punctuation">-</span>headless.yaml
service/myapp<span class="token punctuation">-</span>headless created
shiqi<span class="token punctuation">-</span>lu@k8s<span class="token punctuation">-</span>master<span class="token punctuation">:</span>~/6$ kubectl get svc
NAME             TYPE        CLUSTER<span class="token punctuation">-</span>IP     EXTERNAL<span class="token punctuation">-</span>IP   PORT(S)   AGE
myapp            ClusterIP   10.101.48.92   &lt;none<span class="token punctuation">&gt;</span>        80/TCP    46m
myapp<span class="token punctuation">-</span>headless   ClusterIP   None           &lt;none<span class="token punctuation">&gt;</span>        80/TCP    3m11s\`\`\`
    <span class="token punctuation">-</span> 发现底下的地址为空
    <span class="token punctuation">-</span> \`\`\`shell
shiqi<span class="token punctuation">-</span>lu@k8s<span class="token punctuation">-</span>master<span class="token punctuation">:</span>~/6$ kubectl get pod <span class="token punctuation">-</span>n kube<span class="token punctuation">-</span>system <span class="token punctuation">-</span>o wide
NAME                                            READY   STATUS    RESTARTS   AGE     IP              NODE               NOMINATED NODE   READINESS GATES
coredns<span class="token punctuation">-</span>7ff77c879f<span class="token punctuation">-</span>kdvsd                        1/1     Running   1          10d     10.244.8.16     kongming           &lt;none<span class="token punctuation">&gt;</span>           &lt;none<span class="token punctuation">&gt;</span>
coredns<span class="token punctuation">-</span>7ff77c879f<span class="token punctuation">-</span>vc9gn                        1/1     Running   2          10d     10.244.1.116    shennong           &lt;none<span class="token punctuation">&gt;</span>           &lt;none<span class="token punctuation">&gt;</span>\`\`\`
    <span class="token punctuation">-</span> 从coredns中找一个ip，下面这个命令试试来解析，格式是Service的名字+namespace+host
    <span class="token punctuation">-</span> \`\`\`shell
shiqi<span class="token punctuation">-</span>lu@k8s<span class="token punctuation">-</span>master<span class="token punctuation">:</span>~/6$ dig <span class="token punctuation">-</span>t A myapp<span class="token punctuation">-</span>headless.shiqi<span class="token punctuation">-</span>lu.svc.cluster.local. @10.244.8.16

; &lt;&lt;<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> DiG 9.11.3<span class="token punctuation">-</span>1ubuntu1.13<span class="token punctuation">-</span>Ubuntu &lt;&lt;<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> <span class="token punctuation">-</span>t A myapp<span class="token punctuation">-</span>headless.shiqi<span class="token punctuation">-</span>lu.svc.cluster.local. @10.244.8.16
<span class="token key atrule">;; global options</span><span class="token punctuation">:</span> +cmd
<span class="token key atrule">;; Got answer</span><span class="token punctuation">:</span>
<span class="token key atrule">;; WARNING</span><span class="token punctuation">:</span> .local is reserved for Multicast DNS
;; You are currently testing what happens when an mDNS query is leaked to DNS
<span class="token key atrule">;; -&gt;&gt;HEADER&lt;&lt;- opcode</span><span class="token punctuation">:</span> QUERY<span class="token punctuation">,</span> <span class="token key atrule">status</span><span class="token punctuation">:</span> NOERROR<span class="token punctuation">,</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">54521</span>
<span class="token key atrule">;; flags</span><span class="token punctuation">:</span> <span class="token key atrule">qr aa rd; QUERY</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token key atrule">ANSWER</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token key atrule">AUTHORITY</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token key atrule">ADDITIONAL</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token key atrule">;; WARNING</span><span class="token punctuation">:</span> recursion requested but not available

<span class="token key atrule">;; OPT PSEUDOSECTION</span><span class="token punctuation">:</span>
<span class="token key atrule">; EDNS</span><span class="token punctuation">:</span> <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token key atrule">flags:; udp</span><span class="token punctuation">:</span> <span class="token number">4096</span>
<span class="token key atrule">; COOKIE</span><span class="token punctuation">:</span> a253bf35c4375eaf (echoed)
<span class="token key atrule">;; QUESTION SECTION</span><span class="token punctuation">:</span>
;myapp<span class="token punctuation">-</span>headless.shiqi<span class="token punctuation">-</span>lu.svc.cluster.local. IN A

<span class="token key atrule">;; ANSWER SECTION</span><span class="token punctuation">:</span>
myapp<span class="token punctuation">-</span>headless.shiqi<span class="token punctuation">-</span>lu.svc.cluster.local. 30 IN A 10.244.4.51
myapp<span class="token punctuation">-</span>headless.shiqi<span class="token punctuation">-</span>lu.svc.cluster.local. 30 IN A 10.244.6.101
myapp<span class="token punctuation">-</span>headless.shiqi<span class="token punctuation">-</span>lu.svc.cluster.local. 30 IN A 10.244.8.108

<span class="token key atrule">;; Query time</span><span class="token punctuation">:</span> 0 msec
<span class="token key atrule">;; SERVER</span><span class="token punctuation">:</span> 10.244.8.16<span class="token comment">#53(10.244.8.16)</span>
<span class="token key atrule">;; WHEN</span><span class="token punctuation">:</span> Tue Oct 27 20<span class="token punctuation">:</span>05<span class="token punctuation">:</span>35 CST 2020
<span class="token key atrule">;; MSG SIZE  rcvd</span><span class="token punctuation">:</span> <span class="token number">253</span>
shiqi<span class="token punctuation">-</span>lu@k8s<span class="token punctuation">-</span>master<span class="token punctuation">:</span>~/6$ kubectl get pod <span class="token punctuation">-</span>o wide
NAME                           READY   STATUS    RESTARTS   AGE    IP             NODE         NOMINATED NODE   READINESS GATES
myapp<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>c7b5fb585<span class="token punctuation">-</span>lw9rr   1/1     Running   0          122m   10.244.6.101   zhangliang   &lt;none<span class="token punctuation">&gt;</span>           &lt;none<span class="token punctuation">&gt;</span>
myapp<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>c7b5fb585<span class="token punctuation">-</span>pqd8j   1/1     Running   0          122m   10.244.8.108   kongming     &lt;none<span class="token punctuation">&gt;</span>           &lt;none<span class="token punctuation">&gt;</span>
myapp<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>c7b5fb585<span class="token punctuation">-</span>stkdm   1/1     Running   0          122m   10.244.4.51    laojun       &lt;none<span class="token punctuation">&gt;</span>           &lt;none<span class="token punctuation">&gt;</span>\`\`\`
    <span class="token punctuation">-</span> 虽然headless没有IP，但仍然可以通过访问域名的方式访问
<span class="token punctuation">-</span> Q<span class="token punctuation">:</span>NodePort是什么？
    <span class="token punctuation">-</span> 原理是在node上开了一个端口，将向该端口的流量导入到kube<span class="token punctuation">-</span>proxy，然后由kube<span class="token punctuation">-</span>proxy进一步给到对应的Pod
    <span class="token punctuation">-</span> 创建nodeport.yaml，除了type中不一样，其它几乎不变
    <span class="token punctuation">-</span> \`\`\`yaml
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> myapp
    <span class="token key atrule">release</span><span class="token punctuation">:</span> stabel
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi-lu@k8s-master:~/6$ kubectl apply <span class="token parameter variable">-f</span> nodeport.yaml
service/myapp configured
shiqi-lu@k8s-master:~/6$ kubectl get svc
NAME             TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>        AGE
myapp            NodePort    <span class="token number">10.101</span>.48.92   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:30707/TCP   64m
myapp-headless   ClusterIP   None           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>/TCP         21m
shiqi-lu@k8s-master:~/6$ <span class="token function">curl</span> localhost:30707
Hello MyApp <span class="token operator">|</span> Version: v2 <span class="token operator">|</span> <span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;hostname.html&quot;</span><span class="token operator">&gt;</span>Pod Name<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:LoadBalancer是什么？ <ul><li>和nodePort其实是同一种方式，区别在于loadBalancer比nodePort多了一步，就是可以调用cloud provider去创建LoadBalancer来向节点导流</li><li><img src="https://img.shiqi-lu.tech/20201027202612.png" alt=""></li></ul></li><li>Q:ExternalName是什么? <ul><li>这种类型的Service通过返回CNAME和它的值，可以将服务映射到externalName字段的内容(例如:hub.atguigu.com)。ExternalName Service是Service的特例，它没有selector，也没有定义任何端口和endpoint。相反，对于运行在集群外部的服务，它通过返回该外部服务的别名这种方式来提供服务</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>service<span class="token punctuation">-</span><span class="token number">1</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ExternalName
  <span class="token key atrule">externalName</span><span class="token punctuation">:</span> hub.atguigu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 当查询主机my-service-1.default.svc.cluster.local (SVC_NAME.NAMESPACE.svc.cluster.local)时，集群的DNS服务将返回一个值hub.atguigu.com的CNAME记录。访问这个服务的工作方式和其它的相同，唯一不同的是重定向发生在DNS层，而且不会进行代理或转发
</code></pre><ul><li>Q:ExternalName的创建实验 <ul><li>创建ex.yaml</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>service<span class="token punctuation">-</span><span class="token number">1</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ExternalName
  <span class="token key atrule">externalName</span><span class="token punctuation">:</span> hub.atguigu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi-lu@k8s-master:~/6$ kubectl create <span class="token parameter variable">-f</span> ex.yaml
service/my-service-1 created
shiqi-lu@k8s-master:~/6$ kubectl get svc
NAME             TYPE           CLUSTER-IP     EXTERNAL-IP       PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>        AGE
my-service-1     ExternalName   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>         hub.atguigu.com   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>         9s
myapp            NodePort       <span class="token number">10.101</span>.48.92   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>            <span class="token number">80</span>:30707/TCP   91m
myapp-headless   ClusterIP      None           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>            <span class="token number">80</span>/TCP         47m
shiqi-lu@k8s-master:~/6$ <span class="token function">dig</span> <span class="token parameter variable">-t</span> A my-service-1.shiqi-lu.svc.cluster.local. @10.244.8.16

<span class="token punctuation">;</span> <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> DiG <span class="token number">9.11</span>.3-1ubuntu1.13-Ubuntu <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> <span class="token parameter variable">-t</span> A my-service-1.shiqi-lu.svc.cluster.local. @10.244.8.16
<span class="token punctuation">;</span><span class="token punctuation">;</span> global options: +cmd
<span class="token punctuation">;</span><span class="token punctuation">;</span> Got answer:
<span class="token punctuation">;</span><span class="token punctuation">;</span> WARNING: .local is reserved <span class="token keyword">for</span> Multicast DNS
<span class="token punctuation">;</span><span class="token punctuation">;</span> You are currently testing what happens when an mDNS query is leaked to DNS
<span class="token punctuation">;</span><span class="token punctuation">;</span> -<span class="token operator">&gt;&gt;</span>HEADER<span class="token operator">&lt;&lt;-</span> opcode: QUERY, status: NOERROR, id: <span class="token number">60219</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> flags: qr aa rd<span class="token punctuation">;</span> QUERY: <span class="token number">1</span>, ANSWER: <span class="token number">1</span>, AUTHORITY: <span class="token number">0</span>, ADDITIONAL: <span class="token number">1</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> WARNING: recursion requested but not available

<span class="token punctuation">;</span><span class="token punctuation">;</span> OPT PSEUDOSECTION:
<span class="token punctuation">;</span> EDNS: version: <span class="token number">0</span>, flags:<span class="token punctuation">;</span> udp: <span class="token number">4096</span>
<span class="token punctuation">;</span> COOKIE: ed3b24efd39612a1 <span class="token punctuation">(</span>echoed<span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> QUESTION SECTION:
<span class="token punctuation">;</span>my-service-1.shiqi-lu.svc.cluster.local. IN A

<span class="token punctuation">;</span><span class="token punctuation">;</span> ANSWER SECTION:
my-service-1.shiqi-lu.svc.cluster.local. <span class="token number">30</span> IN CNAME hub.atguigu.com.

<span class="token punctuation">;</span><span class="token punctuation">;</span> Query time: <span class="token number">39</span> msec
<span class="token punctuation">;</span><span class="token punctuation">;</span> SERVER: <span class="token number">10.244</span>.8.16<span class="token comment">#53(10.244.8.16)</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> WHEN: Tue Oct <span class="token number">27</span> <span class="token number">20</span>:45:03 CST <span class="token number">2020</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> MSG SIZE  rcvd: <span class="token number">148</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:nginx-ingress的工作原理 <ul><li><img src="https://img.shiqi-lu.tech/20201027210932.png" alt=""></li><li>客户端访问域名，ingress必须先绑定一个域名，不同域名访问nginx，nginx会反向代理，负载均衡选择后端的service，每个service会有一些容器</li><li>nginx其实使用nodeport的方式</li><li><img src="https://img.shiqi-lu.tech/20201027210938.png" alt=""></li><li>首先k8s的apiserver和store建立监听状态，这里的监听方式是以协程的Pod的形式向apiserver发起连接的方案进行监听，如果发生新的数据写入，会被写入到updateChannel的循环队列里面，然后有一个nginxController的主进程会去监听这个循环队列里面的资源和事件，发生一个循环以后会更新一个事件，把它写入到我们的同步队列里去，等待被协程去更改配置文件，协程会定期的从队列里拉去执行添加的一些任务，如果有一些必要的直接需要去修改的，不需要去等待直接要更新的一些任务会自动发直接发送到SyncQueue协程，两个协程之间协商直接沟通，收取到所有的要更新的数据以后会去他去判断是否要进行一个重载(reload)，写入数据的这么一个方案，还是等等再去添加，如果有的话就会写入nginx主配置文件，然后重新载入nginx的一些数据，那如果不需要的话就等待后面去执行，直接发送构建的post的数据接口，也就是一些不需要存在的数据即可，最后以nginx模块去运行，那这就是nginx-ingress的进程以及协程的沟通方案</li></ul></li></ul>`,18),l=[p];function i(c,u){return s(),a("div",null,l)}const r=n(t,[["render",i],["__file","k8s-6.html.vue"]]);export{r as default};
