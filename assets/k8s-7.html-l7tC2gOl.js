import{_ as n,o as s,c as a,e}from"./app-n0xwCUxG.js";const i={},l=e(`<ul><li>Q:Configmap是什么？ <ul><li>许多应用程序会从配置文件、命令行参数或环境变量中读取配置信息。ConﬁgMap API 给我们提供了向容器中注入配置信息的机制，ConﬁgMap 可以被用来保存单个属性，也可以用来保存整个配置文件或者 JSON 二进制大对象</li></ul></li><li>Q:如何使用目录或文件创建ConfigMap？</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi-lu@k8s-master:~/7$ <span class="token function">ls</span> <span class="token function">dir</span>
game.properties  ui.properties
shiqi-lu@k8s-master:~/7$ <span class="token function">cat</span> dir/game.properties
game,,,,
shiqi-lu@k8s-master:~/7$ <span class="token function">cat</span> dir/ui.properties
ui,,,
shiqi-lu@k8s-master:~/7$ kubectl create configmap t-config --from-file<span class="token operator">=</span>dir
configmap/t-config created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:如何查看已创建的ConfigMap?</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi-lu@k8s-master:~/7$ kubectl get cm
NAME       DATA   AGE
t-config   <span class="token number">2</span>      113s
shiqi-lu@k8s-master:~/7$ kubectl get cm t-config
NAME       DATA   AGE
t-config   <span class="token number">2</span>      2m
shiqi-lu@k8s-master:~/7$ kubectl get cm t-config <span class="token parameter variable">-o</span> yaml
apiVersion: v1
data:
  game.properties: <span class="token operator">|</span>
    game,,,,
  ui.properties: <span class="token operator">|</span>
    ui,,,
kind: ConfigMap
metadata:
  creationTimestamp: <span class="token string">&quot;2020-09-22T06:21:50Z&quot;</span>
  managedFields:
  - apiVersion: v1
    fieldsType: FieldsV1
    fieldsV1:
      f:data:
        .: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:game.properties: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:ui.properties: <span class="token punctuation">{</span><span class="token punctuation">}</span>
    manager: kubectl
    operation: Update
    time: <span class="token string">&quot;2020-09-22T06:21:50Z&quot;</span>
  name: t-config
  namespace: shiqi-lu
  resourceVersion: <span class="token string">&quot;20138794&quot;</span>
  selfLink: /api/v1/namespaces/shiqi-lu/configmaps/t-config
  uid: 631fa2ae-7f55-46d2-9db3-e14222e61de6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- --from-file这个参数可以使用多次
</code></pre><ul><li>Q:如何使用字面值创建Configmap？</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi-lu@k8s-master:~/7$  kubectl create configmap sp-config --from-literal<span class="token operator">=</span>special.how<span class="token operator">=</span>very --from-literal<span class="token operator">=</span>special.typen<span class="token operator">=</span>charm
configmap/sp-config created
shiqi-lu@k8s-master:~/7$ kubectl get configmap special-config
Error from server <span class="token punctuation">(</span>NotFound<span class="token punctuation">)</span>: configmaps <span class="token string">&quot;special-config&quot;</span> not found
shiqi-lu@k8s-master:~/7$ kubectl get configmap sp-config
NAME        DATA   AGE
sp-config   <span class="token number">2</span>      25s
shiqi-lu@k8s-master:~/7$ kubectl get configmap sp-config <span class="token parameter variable">-o</span> yaml
apiVersion: v1
data:
  special.how: very
  special.typen: charm
kind: ConfigMap
metadata:
  creationTimestamp: <span class="token string">&quot;2020-09-22T06:31:17Z&quot;</span>
  managedFields:
  - apiVersion: v1
    fieldsType: FieldsV1
    fieldsV1:
      f:data:
        .: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:special.how: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:special.typen: <span class="token punctuation">{</span><span class="token punctuation">}</span>
    manager: kubectl
    operation: Update
    time: <span class="token string">&quot;2020-09-22T06:31:17Z&quot;</span>
  name: sp-config
  namespace: shiqi-lu
  resourceVersion: <span class="token string">&quot;20140688&quot;</span>
  selfLink: /api/v1/namespaces/shiqi-lu/configmaps/sp-config
  uid: b10fedc2-7131-4f8b-a168-135cd6d1e021
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- --from-literal参数可使用多次
</code></pre><ul><li>Q:如何以资源清单的方式创建Configmap？创建字面值</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> env<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">log_level</span><span class="token punctuation">:</span> INFO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:如何在Pod中使用Configmap中的值？</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dapi<span class="token punctuation">-</span>test<span class="token punctuation">-</span>pod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>container
    <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/myapp<span class="token punctuation">:</span>v1
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;env&quot;</span> <span class="token punctuation">]</span>
    <span class="token key atrule">env</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SPECIAL_LEVEL_KEY
        <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
          <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> sp<span class="token punctuation">-</span>config
            <span class="token key atrule">key</span><span class="token punctuation">:</span> special.how
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SPECIAL_TYPE_KEY
        <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
          <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> special<span class="token punctuation">-</span>config
            <span class="token key atrule">key</span><span class="token punctuation">:</span> special.type
    <span class="token key atrule">envFrom</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">configMapRef</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> env<span class="token punctuation">-</span>config
  <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:如何把configmap中的文件填入数据卷中？</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> special<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">special.how</span><span class="token punctuation">:</span> very
  <span class="token key atrule">special.type</span><span class="token punctuation">:</span> charm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dapi<span class="token punctuation">-</span>test<span class="token punctuation">-</span>pod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>container
      <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/myapp<span class="token punctuation">:</span>v1
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cat /etc/config/special.how&quot;</span> <span class="token punctuation">]</span>
      <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span>volume
        <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/config
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span>volume
      <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> special<span class="token punctuation">-</span>config
  <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:如何修改ConfigMap？ <ul><li><code>kubectl edit configmap log-config</code></li></ul></li><li>Q:Secret的作用是什么？ <ul><li>解决密码、token、密钥等敏感数据的配置问题，而不需要把这些敏感数据暴露到镜像或Pod Spec中。Secret可以以Volume或者环境变量的方式使用</li></ul></li><li>Q:Secret有哪三种类型？ <ul><li>Service Account：用来访问k8s api，由k8s自动创建，并且会自动挂载到Pod的<code>/run/secrets/kubernetes.io/serviceaccount</code>目录中</li><li>Opaque：base64编码格式的Secret，用来存储密码、密钥等</li><li>kubernetes.io/dockerconﬁgjson：用来存储私有docker registry的认证信息</li></ul></li><li>Q:ServiceAccount的实践</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi-lu@k8s-master:~$ kubectl run nginx <span class="token parameter variable">--image</span> nginx
pod/nginx created
shiqi-lu@k8s-master:~$ kubectl get pods
NAME                           READY   STATUS              RESTARTS   AGE
myapp-deploy-c7b5fb585-lw9rr   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          20h
myapp-deploy-c7b5fb585-pqd8j   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          20h
myapp-deploy-c7b5fb585-stkdm   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          20h
nginx                          <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          14s
shiqi-lu@k8s-master:~$ kubectl <span class="token builtin class-name">exec</span> nginx <span class="token function">ls</span> /run/secrets/kubernetes.io/serviceaccount
kubectl <span class="token builtin class-name">exec</span> <span class="token punctuation">[</span>POD<span class="token punctuation">]</span> <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> is DEPRECATED and will be removed <span class="token keyword">in</span> a future version. Use kubectl kubectl <span class="token builtin class-name">exec</span> <span class="token punctuation">[</span>POD<span class="token punctuation">]</span> -- <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> instead.
ca.crt
namespace
token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:Opaque Secret的实践 <ul><li>Opaque 类型的数据是一个 map 类型，要求 value 是 base64 编码格式</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shiqi-lu@k8s-master:~$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;admin&quot;</span> <span class="token operator">|</span> base64
<span class="token assign-left variable">YWRtaW4</span><span class="token operator">=</span>
shiqi-lu@k8s-master:~$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;1f2d1e2e67df&quot;</span> <span class="token operator">|</span> base64
MWYyZDFlMmU2N2Rm\`\`<span class="token variable"><span class="token variable">\`</span>
    - 创建secrets.yml
    - <span class="token variable">\`</span></span>\`\`yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  password: MWYyZDFlMmU2N2Rm
  username: <span class="token assign-left variable">YWRtaW4</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 将Secret挂载到Volume中
</code></pre><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> seret<span class="token punctuation">-</span>test
  <span class="token key atrule">name</span><span class="token punctuation">:</span> seret<span class="token punctuation">-</span>test
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> secrets
    <span class="token key atrule">secret</span><span class="token punctuation">:</span>
      <span class="token key atrule">secretName</span><span class="token punctuation">:</span> mysecret
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/myapp<span class="token punctuation">:</span>v1
    <span class="token key atrule">name</span><span class="token punctuation">:</span> db
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> secrets
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> &quot;
      <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 将Secret导出到环境变量中
</code></pre><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> extensions/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>deployment
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span><span class="token number">1</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> hub.atguigu.com/library/myapp<span class="token punctuation">:</span>v1
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> TEST_USER
          <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
            <span class="token key atrule">secretKeyRef</span><span class="token punctuation">:</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> mysecret
              <span class="token key atrule">key</span><span class="token punctuation">:</span> username
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> TEST_PASSWORD
          <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
            <span class="token key atrule">secretKeyRef</span><span class="token punctuation">:</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> mysecret
              <span class="token key atrule">key</span><span class="token punctuation">:</span> password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:kubernetes.io/dockerconﬁgjson的实践 <ul><li>使用 Kuberctl 创建 docker registry 认证的 secret</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ kubectl create secret docker-registry myregistrykey --docker-server<span class="token operator">=</span>DOCKER_REGISTRY_SERVER -docker-username<span class="token operator">=</span>DOCKER_USER --docker-password<span class="token operator">=</span>DOCKER_PASSWORD --docker-email<span class="token operator">=</span>DOCKER_EMAIL
secret <span class="token string">&quot;myregistrykey&quot;</span> created.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 在创建Pod的时候，通过\`imagePullSecrets\`来引用刚创建的\`myregistrykey\`
</code></pre><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
      <span class="token key atrule">image</span><span class="token punctuation">:</span> roc/awangyang<span class="token punctuation">:</span>v1
  <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myregistrykey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:emptyDir是什么？ <ul><li>当Pod被分配给节点时，首先创建emptyDir卷，并且只要该Pod在该结点上运行，该卷就会存在。正如卷的名字所述，它最初是空的。Pod中的容器可以读取和写入emptyDir卷中的相同文件，尽管该卷可以挂载到每个容器中的相同或不同路径上。当出于任何原因从节点中删除Pod时，emptyDir中的数据将被永久删除</li><li>用法有： <ul><li>暂存空间，例如用于基于磁盘的合并排序</li><li>用作长时间计算崩溃恢复时的检查点</li><li>Web服务器容器提供鞥数据时，保存内容管理器容器提取的文件</li></ul></li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>pd
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> k8s.gcr.io/test<span class="token punctuation">-</span>webserver
    <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>container
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /cache
      <span class="token key atrule">name</span><span class="token punctuation">:</span> cache<span class="token punctuation">-</span>volume
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cache<span class="token punctuation">-</span>volume
    <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:hostPath是什么？ <ul><li>hostPath卷将主机节点的文件系统中的文件或目录挂载到集群中</li><li>hostPath的用途： <ul><li>运行需要访问Docker内部的容器；使用/var/lib/docker的hostPath</li><li>在容器中运行cAdvisor；使用/dev/cgroups的hostPath</li><li>允许pod指定给定的hostPath是否应该在pod运行之前存在，是否应该创建，以及它应该以什么形式存在</li></ul></li><li>除了所需的path，用户还可以为hostPath卷指定type</li><li><img src="https://img.shiqi-lu.tech/20201028153031.png" alt=""></li><li>使用这种卷类型时请注意，因为 <ul><li>由于每个节点上的文件都不同，具有相同配置(例如从podTemplate创建的)的pod在不同节点上的行为可能会有所不同</li><li>当k8s按照计划添加资源感知调度时，将无法考虑hostPath使用的资源</li><li>在底层主机上创建的文件或目录只能由root写入。所以需要在特权容器中以root身份运行进程，或修改主机上的文件权限以便写入hostPath卷</li></ul></li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>pd
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> k8s.gcr.io/test<span class="token punctuation">-</span>webserver
    <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>container
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /test<span class="token punctuation">-</span>pd
      <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>volume
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>volume
    <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
    <span class="token comment"># directory location on host</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /data
    <span class="token comment"># this field is optional</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> Directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:PV是什么？ <ul><li>是由管理员设置的存储，它是群集的一部分。就像节点是集群中的资源一样，PV也是集群中的资源。PV是Volume之类的卷插件，但具有独立于使用PV的Pod的生命周期。此API对象包含存储实现的细节，即NFS、iSCSI或特定于云供应商的存储系统</li></ul></li><li>Q:PVC是什么？ <ul><li>是用户存储的请求。它与Pod相似。Pod消耗节点资源，PVC消耗PV资源。Pod可以请求特定级别的资源（CPU和内存）。声明可以请求特定的大小和访问模式（例如，可以以读/写一次或只读多次模式挂载）</li></ul></li><li>Q:持久化卷声明(PVC)的保护 <ul><li>PVC 保护的目的是确保由 pod 正在使用的 PVC 不会从系统中移除，因为如果被移除的话可能会导致数据丢失</li><li>当启用PVC 保护 alpha 功能时，如果用户删除了一个 pod 正在使用的 PVC，则该 PVC 不会被立即删除。PVC 的 删除将被推迟，直到 PVC 不再被任何 pod 使用</li></ul></li><li>Q:PV访问模式 <ul><li>PersistentVolume 可以以资源提供者支持的任何方式挂载到主机上。如下表所示，供应商具有不同的功能，每个 PV 的访问模式都将被设置为该卷支持的特定模式。例如，NFS 可以支持多个读/写客户端，但特定的 NFS PV 可能 以只读方式导出到服务器上。每个 PV 都有一套自己的用来描述特定功能的访问模式 <ul><li>ReadWriteOnce——该卷可以被单个节点以读/写模式挂载</li><li>ReadOnlyMany——该卷可以被多个节点以只读模式挂载</li><li>ReadWriteMany——该卷可以被多个节点以读/写模式挂载</li></ul></li><li>在命令行中，访问模式缩写为： <ul><li>RWO - ReadWriteOnce</li><li>ROX - ReadOnlyMany</li><li>RWX - ReadWriteMany</li></ul></li></ul></li><li>Q:PV的回收策略有哪些 <ul><li>Retain（保留）——手动回收</li><li>Recycle（回收）——基本擦除（ rm -rf /thevolume/* ）</li><li>Delete（删除）——关联的存储资产（例如 AWS EBS、GCE PD、Azure Disk 和 OpenStack Cinder 卷） 将被删除</li><li>当前，只有 NFS 和 HostPath 支持回收策略。AWS EBS、GCE PD、Azure Disk 和 Cinder 卷支持删除策略</li></ul></li><li>Q:PV的状态 <ul><li>卷可以处于以下的某种状态：</li><li>Available（可用）——一块空闲资源还没有被任何声明绑定</li><li>Bound（已绑定）——卷已经被声明绑定</li><li>Released（已释放）——声明被删除，但是资源还未被集群重新声明</li><li>Failed（失败）——该卷的自动回收失败</li><li>命令行会显示绑定到 PV 的 PVC 的名称</li></ul></li><li>Q:如何安装nfs服务器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-common nfs-utils rpcbind
<span class="token function">mkdir</span> /nfsdata
<span class="token function">chmod</span> <span class="token number">666</span> /nfsdata
<span class="token function">chown</span> nfsnobody /nfsdata
<span class="token function">cat</span> /etc/exports
      /nfsdata *<span class="token punctuation">(</span>rw,no_root_squash,no_all_squash,sync<span class="token punctuation">)</span>
systemctl start rpcbind
systemctl start nfs
<span class="token comment"># 挂载</span>
showmount <span class="token parameter variable">-e</span> xxx.xxx.xxx.xxx
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs xxx.xxx.xxx.xxx:/nfs /test
<span class="token function">umount</span> /test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q:部署PV</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nfspv1
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 10Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteOnce
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Retain
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> nfs
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 10.66.66.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create <span class="token parameter variable">-f</span> pv.yaml
kubectl get pv\`\`<span class="token variable"><span class="token variable">\`</span>
- Q:创建服务并使用pvc
    - <span class="token variable">\`</span></span>\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  ports:
  - port: <span class="token number">80</span>
    name: web
  clusterIP: None
  selector:
    app: nginx
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  selector:
    matchLabels:
      app: nginx
  serviceName: <span class="token string">&quot;nginx&quot;</span>
  replicas: <span class="token number">3</span>
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: wangyanglinux/myapp:v2
        ports:
        - containerPort: <span class="token number">80</span>
          name: web
        volumeMounts:
        - name: www
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: www
    spec:
      accessModes: <span class="token punctuation">[</span> <span class="token string">&quot;ReadWriteOnce&quot;</span> <span class="token punctuation">]</span>
      storageClassName: <span class="token string">&quot;nfs&quot;</span>
      resources:
        requests:
          storage: 1Gi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),t=[l];function p(c,u){return s(),a("div",null,t)}const d=n(i,[["render",p],["__file","k8s-7.html.vue"]]);export{d as default};
