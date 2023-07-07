---
title: 类别不平衡问题的方法汇总
date: 2020-10-24 22:10:13
tags:
- 机器学习
- 特征工程
- 数据预处理
categories:
- 机器学习
description: 这篇博客汇总了目前流行的大部分类别不平衡问题的方法
mathjax: true
---


# 类别不平衡问题(class-imbalance)是什么

- 指分类任务中不同类别的训练样例数目差别很大的情况
- 若不同类别的训练样例数目稍有差别，通常影响不大，但若差别很大，则会对学习过程造成困扰。例如有998个反例，但是正例只有2个，那么学习方法只需要返回一个永远将新样本预测为反例的学习器，就能达到99.8%的精度；然而这样的学习器往往没有价值，因为它不能预测出任何正例

# 上采样(过采样, Oversampling)
## 定义
- 对训练集中的少数类进行“过采样”，即增加一些少数类样本使得正、反例数目接近，然后再进行学习

## Random Oversampling(随机上采样)
- 简单复制样本的策略来增加少数类样本，容易产生模型过拟合的问题

## SMOTE
- 即合成少数类过采样技术(Synthetic Minority Oversampling Technique)，是基于随机采样算法的一种改进，其基本思想是对少数类样本进行分析并根据少数类样本人工合成新样本添加到数据集中

### 算法流程
- 1.对于少数类中每一个样本$x_i$，以欧氏距离为标准计算它到少数类样本集$S_{min}$中所有样本的距离，得到其k近邻
- 2.根据样本不平衡比例设置一个采样比例以确定采样倍率N，对于每一个少数类样本$x_i$，从其k近邻中随机选择若干个样本，假设选择的近邻为$\tilde{x}$。
- 3.对于每一个随机选出的近邻$\tilde{x}$，分别于原样本按照如下的公式构建新的样本
- $$x_{n e w}=x+\operatorname{rand}(0,1) \times |\tilde{x}-x|$$
- ![](https://img.shiqi-lu.tech/20201019195529.png?imageView2/2/h/250)

### SMOTE的问题
- 随机选取少数类样本用以合成新样本，而不考虑周边样本的情况
    - 1.如果选取的少数类样本周围都是少数类样本，则新合成的样本不会提供太多有用信息。就像SVM中远离margin的点对决策边界影响不大
    - 2.如果选取的少数类样本周围都是多数类样本，这类的样本可能是噪声，则新合成的样本会与周围的多数类样本产生大部分重叠，导致分类困难

## Borderline-SMOTE
### 概述
- 由于原始SMOTE算法的对所有少数类样本都是一视同仁的，我们希望新合成的少数类样本能处于两个类别的边界附近，因为在实际建模过程中那些处于边界位置的样本更容易被错分，因此利用边界位置的样本信息产生新样本可以给模型带来更大的体征，能提供足够的信息用以分类，即Borderline SMOTE算法做的事情

### 算法流程
- 这个算法会先将所有的少数类样本分成三类，如图
- ![](https://img.shiqi-lu.tech/20201019140912.png)
- "noise"：所有的k近邻个样本都属于多数类，可认为是噪声不能生成合成样本
- "danger"：超过一半的k近邻样本属于多数类
- "safe"：超过一半的k近邻样本属于少数类
- borderline smote算法只会从处于"danger"状态的样本中随机选择，然后用SMOTE算法产生新的样本。处于"danger"状态的样本代表靠近"边界"附近的少数类样本往往更容易被误分类。因而Border-line SMOTE只对那些靠近"边界"的少数类样本进行人工合成样本，而SMOTE则对所有少数类样本一视同仁

### 危险集的判断流程
- 1.对于每个$x_{i} \subset S_{\min }$确定一系列K近邻样本集，称该数据集为$S_{i-kNN}$，且$S_{i-kNN} \subset S$
- 2.对每个样本$x_i$，判断出最近邻样本集中属于多数类样本的个数，即$\left|S_{i-k N N} \cap S_{m a j}\right|$
- 3.选择满足不等式$\frac{k}{2} \leq\left|S_{i-k N N} \cap S_{m a j}\right| \leq k$，将其加入危险集DANGER

### Borderline SMOTE分类两种：
- Borderline-1 SMOTE：在合成样本时所选的近邻是一个少数类样本
- Borderline-2 SMOTE：在合成样本时所选的近邻是任意一个样本

## ADASYN(Adaptive Synthetic Sampling，自适应合成采用)
- 根据数据分布情况为不同的少数类样本生成不同数量的新样本
- 首先根据最终的平衡程度设定总共需要生成的新少数类样本数量，然后为每个少数类样本x计算分布比例

# 下采样(降采样, UnserSampling)
## 定义
- 对训练集中多数类样本进行“下采样”(undersampling)，即去除一些多数类中的样本使得正例、反例数目接近，然后再学习

## Random Undersampling(随机下采样) 或 原型选择(Prototype Selection)
### 定义
- 从多数类$S_{maj}$中随机选择一些样本组成样本集E。然后将样本集E从$S_{maj}$中移除。新的数据集$S_{n e w-m a j}=S_{m a j}-E$
- 通过改变多数类样本比例以达到修改样本分布的目的，从而使样本分布较为均衡

### 优点
- 操作简单，只依赖于样本分布，不依赖任何距离信息，属于非启发式方法

### 缺点
- 由于采样的样本集合要少于原来的样本集合，因此会造成一些信息缺失，即将多数类样本删除有可能导致分类器丢失有关多数类的重要信息

## Ensemble Methods
### EasyEnsemble
#### 概述
- 多次随机欠采样，尽可能全面地涵盖所有信息，特点是利用boosting减少偏差(Adaboost)、bagging减少方差(集成分类器)。实际应用的时候可尝试选用不同的分类器来提高分类的效果
- ![](https://img.shiqi-lu.tech/20201020145429.png?imageView2/2/h/350)

#### 算法流程
- 1.把数据划分为两部分，分别是多数类样本$S_{maj}$和少数类样本$S_{min}$
- 2.从多数类$S_{maj}$中有放回的随机采样n次，每次选取与少数类数目相近的样本个数即$|S_{imaj}|=|S_{min}|$，可得到n个样本集合，记作$\\{S_{1 m a j}, S_{2 m a j}, \ldots, S_{n m a j}\\}$
- 3.将每一个多数类样本的子集$S_{imaj}$与少数类样本$S_{min}$合并后训练出Adaboost分类器$H_i$，阈值设置为$\theta_i$，可得到n个模型，即$H_{i}(x)=\operatorname{sgn}\left(\sum\limits_{j=1}^{s_{i}} \alpha_{i j} h_{i, j}(x)-\theta_{i}\right)$
- 4.将这些模型组合形成一个集成学习系统，最终的模型结果是这n个模型的投票值。此处采用加权多数表决的方法，加大分类误差率小的弱分类器的权值，使其在表决中起较大的作用，减小分类误差率小的弱分类器的权值，使其在表决中起较小的作用，即最终分类器为$H(x)=\operatorname{sgn}\left(\sum\limits_{i=1}^{n} \sum\limits_{j=1}^{s_{i}} \alpha_{i j} h_{i j}(x)-\sum\limits_{i=1}^{n} \theta_{i}\right)$

### BalanceCascade
#### 概述
- 该算法得到的是一个级联分类器，基于Adaboost，将若干个强分类器由简单到复杂排列，只有和少数类样本特征比较接近的才有可能输入到后面的分类器，比如边界点，因此能更充分地利用多数类样本的信息，一定程度上解决随机欠采样的信息丢失问题

#### 算法流程
- 输入：一个包含少数类阳性样本P和多数类阴性样本集N的训练集D，定义T是从N中抽取的子集个数，$s_i$是训练Adaboost基分类器$H_i$时的循环次数
- 输出：一个组合分类器H(x)
- 1.$f=\sqrt[(\mathrm{T}-1)]{\left(\frac{|\mathrm{P}|}{|\mathrm{N}|}\right)}$，$f$是每一层级的分类器$H_i$该达到的假阳性率(False Positive Rate)，即把多数类样本误分为少数类的错误率
- for i = 1 to T:
    - 从多数类N中随机抽取一个样本子集$N_i$，使得$|N_i| = |P|$
    - 使用少数类样本集P和样本子集$N_i$训练一个Adaboost分类器$H_i$($H_i$由$s_i$个基分类器$h_{i,j}$及其权重$\alpha_{i,j}$构成，$\theta_i$是$H_i$的调节参数)
    - $\mathrm{H}\_{\mathrm{i}}(x)=\operatorname{sgn}(\sum\limits_{j=1}^{s_{i}} \alpha_{i, j} h_{i, j}(x)-\theta_{i})$
    - 调节阈值$\theta_i$令$H_i$的FP率为$f$
    - 移除多数类样本集N中所有被$H_i$正确分类的样本
- 输出一个集成分类器
- $\mathrm{H}(\mathrm{x})=\operatorname{sgn}\left(\sum\limits_{i=1}^{T} \sum\limits_{j=1}^{s_{l}} \alpha_{i, j} h_{i, j}(x)-\sum\limits_{i=1}^{T} \theta_{i}\right)$

## NearMiss
- 本质上是一种原型选择(prototype selection)方法，即从多数类样本中选取最具代表性的样本用于训练，主要是为了缓解随机欠采样中的信息丢失问题。Nearmiss采用了3中不同的启发式规则来选择样本
    - NearMiss-1：选择到最近的K个少数类样本平均距离最近的多数类样本，考虑的是与最近的k个少数类样本的平均距离，是局部的。该方法得到的多数类样本分布是“不均衡”的，它倾向于在比较集中的少数类附近找到更多的多数类样本，而在孤立的(离群的)少数类附近找到更少的多数类样本，原因是该方法考虑的局部性质和平均距离
    - NearMiss-2：选择到最远的K个少数类样本平均距离最近的多数类样本，考虑的是与最远的k个少数类样本的平均距离，是全局的。实验结果表明该方法的不均衡分类性能最优
    - NearMiss-3：对于每个少数类样本选择K个最近的多数类样本，目的是保证每个少数类样本都被多数类样本包围，该方法会使每一个少数类样本附近都有足够多的多数类样本，显然这会使得模型的精确度高、召回率低

## 原型生成(Prototype generation)
- 给定数据集S，原型生成算法将生成一个子集S'，其中|S'|<|S|，但是子集并非来自于原始数据，而是由原始数据集生成，方法是聚类成|S'|个类，然后取其中心点

## Data Cleaning Techniques
### Tomek Links
#### 定义
- 给定一个样本对$(x_i, x_j)$，其中$x_{i} \in S_{m a j}, x_{j} \in S_{\min }$，记$d(x_i, x_j)$是样本$x_i$和样本$x_j$之间的距离，如果不存在任何样本$x_k$，使得$d\left(x_{i}, x_{k}\right)<d\left(x_{i}, x_{j}\right)$，那么样本对$(x_i, x_j)$即称为Tomek Links。即Tomek links为相反类最近邻样本之间的一对连接
- 不属于Tomek Links的情况有这个少数类样本最近的样本是同一类

#### 意义
- 如果两个样本来自Tomek Links，那么他们中的一个样本要么是噪声，要么它们都在两类的边界上

#### 图示
- ![](https://img.shiqi-lu.tech/20201021171029.png?imageView2/2/h/300)

#### 用途
- 欠采样：将Tomek Links中属于是多数类的样本剔除
- 数据清洗：将Tomek Links中的两个样本都剔除

### ENN(edited nearest neighborhood)
- 这种方法应用knn来编辑(edit)数据集，对于每一个要进行下采样的样本，那些绝大多数近邻样本不属于该类的样本会被移除，而绝大多数的近邻样本属于同一类的样本会被保留


# 综合采样(Oversampling + Undersampling)
## 定义
- 先过采样，然后再进行数据的清洗

## SMOTE+Tomek Links
### 算法流程
- 1.利用SMOTE方法生成新的少数类样本，得到扩充后的数据集T
- 2.剔除T中的Tomek Links对

### 优点
- 普通的SMOTE方法生成的少数类样本是通过线性插值得到的，在平衡类别分布的同时也扩张了少数类的样本空间，产生的问题是可能原本属于多数类样本的空间被少数类“入侵”，容易造成模型的过拟合
- Tomek Links对寻找的是那种噪声点或者边界点，可以很好地解决“入侵”问题，如图红色加号为SMOTE产生的少数类样本，可以看到红色样本“入侵”到原本属于多数类样本的空间，这种噪声数据问题可以通过Tomek Links很好地解决
- ![](https://img.shiqi-lu.tech/20201021171629.png?imageView2/2/h/150)

## SMOTE+ENN
- 1.利用SMOTE方法生成新的少数类样本，得到扩充后的数据集T
- 2.对T中的每一个样本使用KNN(一般k取3)方法预测，若预测结果与实际类别标签不符，则剔除该样本

# 其它方法

## 基于异常检测的方法
- 把小类的样本作为异常点(outliers)，因此该问题便转化为异常点检测(anomaly detection)与变化趋势检测问题(change detection)

## 分治ensemble
- 将大类中样本聚类到L个聚类中，然后训练L个分类器
- 每个分类器使用大类中的一个簇与所有的小类样本进行训练得到
- 最后对这L个分类器采取少数服从多数的方式对未知类别数据进行分类，如果是连续值，采用平均值

## 分层级ensemble
- 使用原始数据集训练第一个学习器L1
- 将L1错分的数据集作为新的数据集训练L2
- 将L1和L2分类结果不一致的数据作为数据集训练L3
- 最后测试集上将三个分类器的结果汇总(结合这三个分类器，采用投票的方式来决定分类结果，因此只有当L2与L3都分类为false时，最终结果才为false，否则为true)

## 对小类错分进行加权惩罚
- 对分类器的小类样本数据增加权值，降低大类样本的权重，从而使得分类器将重点集中在小类样本身上
- 一个具体做法是，在训练分类器时，若分类器将小类样本分错时，额外增加分类器一个小类样本分错代价，这个额外的代价可以使得分类器更加“关心”小类样本。如penalized-SVM和penalized-LDA算法
- 对小样本进行过采样(例如含L倍重复数据)，其实在计算小样本错分cost functions时会累加L倍的惩罚分数

## 尝试其它评价指标
- 准确度这个评价指标在类别不均衡的分类任务中不够好，甚至会造成误导。可考虑更有说服力的评价指标。如混淆矩阵、精确度、召回率、F1得分，其中可关注Kappa和ROC曲线

## 尝试不同的分类算法
- 决策树在类别不均衡数据上表现不错。它使用基于类变量的划分规则去创建分类树，因此可以强制地将不同类别的样本分开
- Lightgbm中有两个参数处理类别不平衡，分别是is_unbalance和scale_pos_weight
- xgboost有一个参数类别不平衡，即scale_pos_weight

# 参考文献
- [机器学习中如何处理不平衡数据？](https://www.jiqizhixin.com/articles/021704)
- [SMOTE算法(人工合成数据)](https://blog.csdn.net/jiede1/article/details/70215477)
- [SMOTE算法](https://www.jianshu.com/p/13fc0f7f5565)
- [分类问题中类别不平衡问题的有效解决方法](https://blog.csdn.net/anshuai_aw1/article/details/89177406)
- [机器学习算法系列（17）：非平衡数据处理](http://freewill.top/2017/04/18/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97%EF%BC%8817%EF%BC%89%EF%BC%9A%E9%9D%9E%E5%B9%B3%E8%A1%A1%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86/)
- [样本不平衡处理](https://blog.csdn.net/weixin_44871660/article/details/90600522)
- [imbalanced官网](https://imbalanced-learn.readthedocs.io/en/stable/index.html)
- [非平衡分类问题 | BalanceCascade方法及其Python实现](https://zhuanlan.zhihu.com/p/36093594)
- [解决样本不平衡问题的奇技淫巧 汇总](https://blog.csdn.net/songhk0209/article/details/71484469)
- [8 Tactics to Combat Imbalanced Classes in Your Machine Learning Dataset](https://machinelearningmastery.com/tactics-to-combat-imbalanced-classes-in-your-machine-learning-dataset/)
