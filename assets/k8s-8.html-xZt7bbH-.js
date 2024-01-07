import{_ as n,o as s,c as a,e}from"./app-n0xwCUxG.js";const t={},l=e(`<ul><li>Q:Scheduler是什么？ <ul><li>kubernetes 的调度器，主要的任务是把定义的 pod 分配到集群的节点上。听起来非常简单，但有 很多要考虑的问题： <ul><li>公平：如何保证每个节点都能被分配资源</li><li>资源高效利用：集群所有资源最大化被使用</li><li>效率：调度的性能要好，能够尽快地对大批量的 pod 完成调度工作</li><li>灵活：允许用户根据自己的需求控制调度的逻辑</li></ul></li><li>Sheduler 是作为单独的程序运行的，启动之后会一直坚挺 API Server，获取 PodSpec.NodeName 为空的 pod， 对每个 pod 都会创建一个 binding，表明该 pod 应该放到哪个节点上</li></ul></li><li>Q: k8s的调度过程是怎样 <ul><li>调度分为几个部分：首先是过滤掉不满足条件的节点，这个过程称为predicate；然后对通过的节点按照优先级排序，这个是priority；最后从中选择优先级最高的节点。如果中间任何一步骤有错误，就直接返回错误</li><li>Predicate 有一系列的算法可以使用： <ul><li>PodFitsResources：节点上剩余的资源是否大于 pod 请求的资源</li><li>PodFitsHost：如果 pod 指定了NodeName，检查节点名称是否和NodeName匹配</li><li>PodFitsHostPorts：节点上已经使用的port是否和pod申请的port冲突</li><li>PodSelectorMatches：过滤掉和pod指定的label不匹配的节点</li><li>NoDiskConflict：已经mount的volume和pod指定的volume不冲突，除非它们都是只读</li></ul></li><li>如果在predicate过程中没有合适的节点，pod会一直在pending状态，不断重试调度，直到有节点满足条件。 经过这个步骤，如果有多个节点满足条件，就继续priorities过程：按照优先级大小对节点排序</li><li>优先级由一系列键值对组成，键是该优先级项的名称，值是它的权重（该项的重要性）。这些优先级选项包括： <ul><li>LeastRequestedPriority ：通过计算 CPU 和 Memory 的使用率来决定权重，使用率越低权重越高。换句话说，这个优先级指标倾向于资源使用比例更低的节点</li><li>BalancedResourceAllocation：节点上 CPU 和 Memory 使用率越接近，权重越高。这个应该和上面的一起使用，不应该单独使用</li><li>ImageLocalityPriority：倾向于已经有要使用镜像的节点，镜像总大小值越大，权重越高</li></ul></li><li>通过算法对所有的优先级项目和权重进行计算，得出最终的结果</li></ul></li><li>Q:结点亲和性 <ul><li>pod.spec.nodeAﬃnity <ul><li>preferredDuringSchedulingIgnoredDuringExecution：软策略</li><li>requiredDuringSchedulingIgnoredDuringExecution：硬策略</li></ul></li><li>requiredDuringSchedulingIgnoredDuringExecution：硬策略</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> affinity
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>affinity<span class="token punctuation">-</span>pod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> with<span class="token punctuation">-</span>node<span class="token punctuation">-</span>affinity
    <span class="token key atrule">image</span><span class="token punctuation">:</span> wangyanglinux/myapp<span class="token punctuation">:</span>v1
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span>
    <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span>
      <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
        <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> kubernetes.io/hostname
            <span class="token key atrule">operator</span><span class="token punctuation">:</span> NotIn
            <span class="token key atrule">values</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> k8s<span class="token punctuation">-</span>node02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- preferredDuringSchedulingIgnoredDuringExecution：软策略
</code></pre><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> affinity
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>affinity<span class="token punctuation">-</span>pod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> with<span class="token punctuation">-</span>node<span class="token punctuation">-</span>affinity
    <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/myapp<span class="token punctuation">:</span>v1
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span>
    <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span>
      <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 权重越大越亲和</span>
        <span class="token key atrule">preference</span><span class="token punctuation">:</span>
          <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> source
            <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
            <span class="token key atrule">values</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> qikqiak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 合体
</code></pre><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> affinity
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>affinity<span class="token punctuation">-</span>pod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> with<span class="token punctuation">-</span>node<span class="token punctuation">-</span>affinity
    <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/myapp<span class="token punctuation">:</span>v1
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span>
    <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span>
      <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
        <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> kubernetes.io/hostname
            <span class="token key atrule">operator</span><span class="token punctuation">:</span> NotIn
            <span class="token key atrule">values</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> k8s<span class="token punctuation">-</span>node02
      <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">1</span>
        <span class="token key atrule">preference</span><span class="token punctuation">:</span>
          <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> source
            <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
            <span class="token key atrule">values</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> qikqiak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 键值运算关系
    - In：label 的值在某个列表中
    - NotIn：label 的值不在某个列表中
    - Gt：label 的值大于某个值
    - Lt：label 的值小于某个值
    - Exists：某个 label 存在
    - DoesNotExist：某个 label 不存在
</code></pre><ul><li>Q:Pod亲和性 <ul><li>pod.spec.aﬃnity.podAﬃnity/podAntiAﬃnity</li><li>preferredDuringSchedulingIgnoredDuringExecution：软策略</li><li>requiredDuringSchedulingIgnoredDuringExecution：硬策略</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span><span class="token number">3</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span><span class="token number">3</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span><span class="token number">3</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/myapp<span class="token punctuation">:</span>v1
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span>
    <span class="token key atrule">podAffinity</span><span class="token punctuation">:</span>
      <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span>
          <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> app
            <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
            <span class="token key atrule">values</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> pod<span class="token punctuation">-</span><span class="token number">1</span>
        <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> kubernetes.io/hostname
    <span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span>
      <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">1</span>
        <span class="token key atrule">podAffinityTerm</span><span class="token punctuation">:</span>
          <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span>
            <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> app
              <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
              <span class="token key atrule">values</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> pod<span class="token punctuation">-</span><span class="token number">2</span>
          <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> kubernetes.io/hostname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:亲和性/反亲和性调度策略比较 <ul><li><img src="https://img.shiqi-lu.tech/20201104154834.png" alt=""></li></ul></li><li>Q:给节点打标签 <ul><li><code>kubectl label node k8s-node01 disk=ssd</code></li></ul></li><li>Q:k8s指定调度节点 <ul><li>Pod.spec.nodeName 将 Pod 直接调度到指定的 Node 节点上，会跳过 Scheduler 的调度策略，该匹配规则是强制匹配</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> extensions/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myweb
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> myweb
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">nodeName</span><span class="token punctuation">:</span> k8s<span class="token punctuation">-</span>node01
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myweb
        <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/myapp<span class="token punctuation">:</span>v1
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- Pod.spec.nodeSelector：通过 kubernetes 的 label-selector 机制选择节点，由调度器调度策略匹配 label， 而后调度 Pod 到目标节点，该匹配规则属于强制约束
</code></pre><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> extensions/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myweb
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> myweb
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> backEndNode1
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myweb
      <span class="token key atrule">image</span><span class="token punctuation">:</span> harbor/tomcat<span class="token punctuation">:</span>8.5<span class="token punctuation">-</span>jre8
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[l];function i(u,c){return s(),a("div",null,p)}const r=n(t,[["render",i],["__file","k8s-8.html.vue"]]);export{r as default};
