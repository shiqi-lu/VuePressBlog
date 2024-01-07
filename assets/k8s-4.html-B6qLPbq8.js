import{_ as e,r as t,o as p,c as l,a as n,b as s,d as i,e as c}from"./app-n0xwCUxG.js";const o={},u={href:"https://www.bilibili.com/video/BV1w4411y7Go?p=1",target:"_blank",rel:"noopener noreferrer"},k=c(`<ul><li>Q:集群资源有哪些分类？ <ul><li>名称空间级别 <ul><li>工作负载型资源(workload): Pod、ReplicaSet、Deployment、StatefulSet、DaemonSet、Job、CronJob</li><li>服务发现及负载均衡型资源(ServiceDiscovery LoadBalance)：Service、Ingress</li><li>配置与存储型资源：Volume(存储卷)、CSI(容器存储接口，可扩展各种第三方存储卷)</li><li>特殊类型的存储卷：ConfigMap(当配置中心来使用的资源类型)、Secret(保存敏感数据)、DownwardAPI(把外部环境中的信息输出给容器)</li></ul></li><li>集群级别：Namespace、Node、Role、ClusterRole、RoleBinding、ClusterRoleBinding</li><li>元数据级别：HPA、PodTemplate、LimitRange</li></ul></li><li>Q:容器报错后如何处理？ <ul><li><code>kubectl describe pod myapp-pod</code></li><li>若有多个容器需要用-c指定，查看日志</li><li><code>kubectl log myapp-pod -c test</code></li></ul></li><li>Q:initContainer模板是什么？ <ul><li>initContainers里面会按照顺序依次往下执行</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp<span class="token punctuation">-</span>pod
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> myapp
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp<span class="token punctuation">-</span>container
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;echo The app is running! &amp;&amp; sleep 3600&#39;</span><span class="token punctuation">]</span>
  <span class="token key atrule">initContainers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> init<span class="token punctuation">-</span>myservice
  <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
  <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;until nslookup myservice; do echo waiting for myservice; sleep 2; done;&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> init<span class="token punctuation">-</span>mydb
  <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
  <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;until nslookup mydb; do echo waiting for mydb; sleep 2; done;&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:检测探针-就绪检测模板？readinessProbe-httpget</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> readiness<span class="token punctuation">-</span>httpget<span class="token punctuation">-</span>pod
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> readiness<span class="token punctuation">-</span>httpget<span class="token punctuation">-</span>container
  <span class="token key atrule">image</span><span class="token punctuation">:</span> wangyanglinux/myapp<span class="token punctuation">:</span>v1
  <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
  <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>
    <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /index1.html
    <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:检测探针-存活检测模板？livenessProbe-exec</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> liveness<span class="token punctuation">-</span>exec<span class="token punctuation">-</span>pod
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> liveness<span class="token punctuation">-</span>exec<span class="token punctuation">-</span>container
    <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/busybox
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;touch /tmp/live ; sleep 60; rm -rf /tmp/live; sleep 3600&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
      <span class="token key atrule">exec</span><span class="token punctuation">:</span>
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-e&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;/tmp/live&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:检测探针-存活检测模板？livenessProbe-httpget</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> liveness<span class="token punctuation">-</span>httpget<span class="token punctuation">-</span>pod
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> liveness<span class="token punctuation">-</span>httpget<span class="token punctuation">-</span>container
  <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/myapp<span class="token punctuation">:</span>v1
  <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
    <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
      <span class="token key atrule">port</span><span class="token punctuation">:</span> http
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /index.html
    <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">3</span>
    <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:检测探针-存活检测模板？livenessProbe-tcp</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> probe<span class="token punctuation">-</span>tcp
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/myapp<span class="token punctuation">:</span>v1
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
      <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:启动、退出动作pod模板</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> lifecycle<span class="token punctuation">-</span>demo
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> lifecycle<span class="token punctuation">-</span>demo<span class="token punctuation">-</span>container
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
      <span class="token key atrule">postStart</span><span class="token punctuation">:</span>
        <span class="token key atrule">exec</span><span class="token punctuation">:</span>
          <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;echo Hello from the postStart handler &gt; /usr/share/message&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">preStop</span><span class="token punctuation">:</span>
        <span class="token key atrule">exec</span><span class="token punctuation">:</span>
          <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;echo Hello from the poststop handler &gt; /usr/share/message&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function r(d,v){const a=t("ExternalLinkIcon");return p(),l("div",null,[n("p",null,[s("来源："),n("a",u,[s("b站"),i(a)])]),k])}const b=e(o,[["render",r],["__file","k8s-4.html.vue"]]);export{b as default};
