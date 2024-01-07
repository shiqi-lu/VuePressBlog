import{_ as t,r as u,o as e,c,a as l,b as s,d as a,e as h}from"./app-n0xwCUxG.js";const r={},n=h('<ul><li>Q:什么是数据库设计？ <ul><li>根据业务系统的具体需要，结合我们所选用的DBMS（数据库管理系统），为这个业务系统构造出最优的数据存储模型。并建立好数据库中的表结构及表与表之间关联关系的过程。使之能有效的对应用系统中的数据进行存储，并可以高效的对已经存储的数据进行访问</li></ul></li><li>Q:优良和糟糕的数据库设计设怎样的？ <ul><li>优良：</li><li>1.减少数据冗余</li><li>2.避免数据维护异常</li><li>3.节约存储空间</li><li>4.高效的访问</li><li>糟糕：</li><li>1.存在大量数据冗余</li><li>2.存在数据插入，更新，删除异常</li><li>3.浪费大量存储空间</li><li>4.访问数据低效</li></ul></li><li>Q:数据库设计的四个步骤是什么？ <ul><li>1.需求分析</li><li>2.逻辑分析</li><li>3.物理设计</li><li>4.维护优化</li></ul></li><li>Q:数据库需求分析有什么？ <ul><li>1.数据是什么</li><li>2.数据有哪些属性，存储特点</li><li>3.数据和属性各自的特点有哪些</li><li>4.数据的生命周期</li></ul></li><li>Q:数据库逻辑设计做什么？ <ul><li>1.将需求转化为数据库的逻辑模型</li><li>2.通过ER图的形式对逻辑模型进行展示</li><li>3.同所选用的具体的DBMS系统无关</li></ul></li><li>Q:数据库物理设计要考虑什么？ <ul><li>1.选择合适的数据库管理系统</li><li>2.定义数据库、表及字段的命名规范</li><li>3.根据所选的DBMS系统选择合适的字段类型</li><li>4.反范式化设计</li></ul></li><li>Q:数据库维护优化要做什么？ <ul><li>1.维护数据字典</li><li>2.维护索引</li><li>3.维护表结构</li><li>4.在适当的时候对表进行水平拆分或垂直拆分</li></ul></li><li>Q:数据库需求分析中需要搞清楚数据的什么特点？ <ul><li>1.实体及实体之间的关系（1对1，1对多，多对多）</li><li>2.实体所包含的属性有什么？</li><li>3.哪些属性或属性的组合可以唯一标识一个实体</li></ul></li><li>名词解释： <ul><li>关系：一个关系对应通常所说的一张表</li><li>元组：表中的一行即为一个元组</li><li>属性：表中的一列即为一个属性；每一个属性都有一个名称，称为属性名</li><li>候选码：表中的某个属性组，可以唯一确定一个元组</li><li>主码：一个关系有多个候选码，选定其中一个为主码</li><li>域：属性的取值范围</li><li>分量：元组中的一个属性值</li></ul></li><li>ER图例说明： <ul><li>矩形：表示实体集，矩形内写实体集的名字</li><li>菱形：表示联系集</li><li>椭圆：表示实体的属性</li><li>线段：将属性连接到实体集，或将实体集连接到联系集</li></ul></li><li>Q:数据库操作的插入异常是什么？ <ul><li>如果某实体随着另一个实体的存在而存在，即缺少某个实体时无法表示这个实体</li></ul></li><li>Q:数据库操作的更新异常是什么？ <ul><li>如果更改表所对应的某个实体实例的单独属性时，需要将多行更新</li></ul></li><li>Q:数据库操作的删除异常是什么？ <ul><li>如果删除表的某一行来反映某实体实例，失效时导致另一个不同实体实例信息丢失</li></ul></li><li>Q:数据库的数据冗余是什么？ <ul><li>相同的数据再多个地方存在，或者说表中的某个列可以由其它列计算得到</li></ul></li><li>Q:数据库的第一范式（1NF）是什么？ <ul><li>数据库表中的所有字段都是单一属性，不可再分的。这个单一属性是又基本的数据类型所构成的，如整数，浮点数，字符串等</li><li>即第一范式要求数据库中的表都是二维表</li><li><img src="https://img.shiqi-lu.tech/20200905201841.png" alt=""></li></ul></li><li>Q:数据库的第二范式（2NF）是什么？ <ul><li>数据库表中不存在非关键字段对任一候选关键字段的部分函数依赖</li><li>部分函数依赖是指存在着组合关键字中的某一关键字决定非关键字的情况</li><li>即所有单关键字段的表都符合第二范式</li><li>不符合的例子：</li><li><img src="https://img.shiqi-lu.tech/20200905201849.png" alt=""></li><li>由于供应商和商品之间是多对多的关系，所以只有使用商品名称和供应商名称才可以唯一标识出一件商品。也就是商品名称和供应商名称是一组组合关键字。上表中存在以下部分函数依赖关系：</li><li>（商品名称）-&gt;（价格，描述，重量，商品有效期）</li><li>（供应商名称）-&gt;（供应商电话）</li><li>存在问题：插入异常，删除异常，更新异常，数据冗余</li><li>解决办法：</li><li><img src="https://img.shiqi-lu.tech/20200905201858.png" alt=""></li></ul></li><li>Q:数据库的第三范式（3NF）是什么？ <ul><li>在第二范式的基础上定义，如果数据表中不存在非关键字段对任意候选关键字段的传递函数依赖则符合第三范式</li><li>不符合的例子：</li><li><img src="https://img.shiqi-lu.tech/20200905201907.png" alt=""></li><li>存在以下传递依赖关系：</li><li>（商品名称）-&gt;（分类）-&gt;（分类描述）</li><li>也就是说存在非关键字段“分类描述”对关键字段“商品名称”的传递函数依赖</li><li>存在问题：</li><li>（分类，分类描述）对对于每一个商品都会进行记录，所以存在着数据冗余，同时也还存在数据的插入，更新及删除异常</li><li>解决办法：</li><li><img src="https://img.shiqi-lu.tech/20200905201915.png" alt=""></li></ul></li><li>Q:数据库的BC范式（BCNF）是什么？ <ul><li>在第三范式的基础上，数据库表中如果不存在任何字段对任一候选关键字段的传递函数则符合BC范式</li><li>即如果是复合关键字，则复合关键字之间也不能存在函数依赖关系</li><li>不符合的例子：</li><li><img src="https://img.shiqi-lu.tech/20200905201922.png" alt=""></li><li>假设供应商联系人只能受雇于一家供应商，每家供应商可以供应多个商品，则存在如下决定关系：</li><li>（供应商，商品ID）-&gt;（联系人，商品数量）</li><li>（联系人，商品ID）-&gt;（供应商，商品数量）</li><li>存在下列关系因此不符合BCNF要求：</li><li>（供应商）-&gt;（供应商联系人）</li><li>（供应商联系人）-&gt;（供应商）</li><li>并存在数据操作异常及输入冗余</li><li>解决办法：</li><li><img src="https://img.shiqi-lu.tech/20200905200111.png" alt=""></li></ul></li><li>Q:MySQL常用的存储引擎有哪些？ <ul><li><img src="https://img.shiqi-lu.tech/20200905201930.png" alt=""></li></ul></li><li>Q:对象命名应该遵循什么原则？ <ul><li>1.可读性原则：使用大写和小写来格式化的库对象名字以获得良好的可读性</li><li>2.表意性原则：对象的名字应该能够描述它所标识的对象。即表的名称能够体现表中存储的数据内容；存储过程名称能够体现存储过程的功能</li><li>3.长名原则：尽可能少使用或不使用缩写</li></ul></li><li>字段类型的选择原则 <ul><li>列的数据类型一方面影响数据存储空间的开销，另一方面也会影响数据查询性能。当一个列可以选择多种数据类型时，应该优先考虑数字类型，其次是日期或二进制类型，最后是字符类型。对于相同级别的数据类型，应该优先选择占用空间小的数据类型</li><li><img src="https://img.shiqi-lu.tech/20200905201936.png" alt=""></li><li>主要从以下两个角度考虑：</li><li>1.在对数据进行比较（查询条件、join条件及排序）操作时：同样的数据，字符处理往往比数字处理慢</li><li>2.在数据库中，数据处理以页为单位，列的长度越小，利于性能提升</li></ul></li><li>Q:char与varchar如何选择？ <ul><li>1.如果列中要存储的数据长度差不多是一致的，则应该考虑用char；否则应该考虑用varchar</li><li>2.如果列中的最大数据长度小于50Byte，则一般也考虑用char(当然，如果这个列很少用，则基于节省空间和减少IO的考虑，还是可以选择用varchar)</li><li>3.一般不宜定义大于50Byte的char类型</li><li>注意UTF-8的字节是8Byte</li></ul></li><li>Q:decimal和float如何选择？ <ul><li>1.decimal用于存储精确数据，而float只能用于存储非精确数据。故精确数据只能选择用decimal类型</li><li>2.由于float的存储空间开销一般比decimal小（精确到7位小数只需要4个字节，而精确到15位小数只需要8字节）故非精确数据优先选择float类型</li></ul></li><li>Q:时间类型如何存储？ <ul><li>1.使用int来存储时间字段的优缺点</li><li>优点：字段长度比datetime小</li><li>缺点：使用不方便，要进行函数转换</li><li>限制：只能存储到2038-1-19 11:14:07即2^32为2147483648</li><li>2.需要存储的时间粒度</li><li>年 月 日 小时 分 秒 周</li></ul></li><li>Q:如何选择主键？ <ul><li>1.区分业务主键和数据库主键：业务主键用于标识业务数据，进行表与表之间的关联；数据库主键为了优化数据存储（Innodb会生成6个字节的隐含主键）</li><li>2.根据数据库的类型，考虑主键是否要顺序增长：有些数据库是按主键的顺序逻辑存储的</li><li>3.主键的字段类型所占空间要尽可能的小：对于使用聚集索引方式存储的表，每个索引后都会附加主键信息</li></ul></li><li>Q:避免使用外键约束的原因？ <ul><li>1.降低数据导入的效率</li><li>2.增加维护成本</li><li>3.虽然不建议使用外键约束，但是相关联的列上一定要建立索引</li></ul></li><li>Q:避免使用触发器的原因？ <ul><li>1.降低数据导入的效率</li><li>2.可能会出现意想不到的数据异常</li><li>3.使业务逻辑变的复杂</li></ul></li><li>Q:关于预留字段 <ul><li>1.无法准确的知道预留字段的类型</li><li>2.无法准确的指导预留字段中所存储的内容</li><li>3.后期维护预留字段所要的成本，同增加一个字段所需要的成本是相同的</li><li>4.严禁使用预留字段</li></ul></li><li>Q:什么是反范式化？ <ul><li>针对范式化而言的，在前面介绍了数据库设计的第三范式，所谓的反范式化就是为了性能和读取效率的考虑而适当地对第三范式的要求进行违反，而允许存在少量的数据冗余</li><li>即反范式化是使用空间换取时间</li></ul></li><li>Q:为什么反范式化？ <ul><li>1.减少表的关联数量</li><li>2.增加数据的读取效率</li><li>3.反范式化一定要适度</li></ul></li><li>Q:如何维护数据字典 <ul><li>1.使用第三方工具对数据字典进行维护</li><li>2.利用数据库本身的备注字段来维护数据字典。以MySQL为例</li><li><img src="https://img.shiqi-lu.tech/20200905201947.png" alt=""></li><li>3.导出数据字典</li><li><img src="https://img.shiqi-lu.tech/20200905201954.png" alt=""></li></ul></li><li>Q:如何选择合适的列建立索引？ <ul><li>1.出现在where从句，group by从句，order by从句中的列</li><li>2.可选择性高的列要放到索引的前面</li><li>3.索引中不要包括太长的数据类型</li><li>注意：</li><li>1.索引并不是越多越好，过多的索引不但会降低写效率而且会降低读的效率</li><li>2.定期维护索引碎片</li><li>3.在SQL语句中不要使用强制索引关键字</li></ul></li><li>Q:如何维护表结构？ <ul><li>1.使用在线变更表结构的工具</li><li>2.同时对数据字典进行维护</li><li>3.控制表的宽度和大小</li></ul></li><li>Q:数据库中适合的操作 <ul><li>1.批量操作 好于 逐条操作</li><li>2.禁止使用select *这样的查询</li><li>3.控制使用用户自定义函数</li><li>4.不要使用数据库中的全文索引</li></ul></li><li>Q:表的垂直拆分原则？ <ul><li>1.经常一起查询的列放在一起</li><li>2.text, blob等大字段拆分出到附加表中</li><li>控制表的宽度可以进行表的垂直拆分</li><li>控制表的大小可以进行表的水平拆分</li></ul></li><li>Q:表的水平拆分方法？ <ul><li>使用对主键进行hash key的方法</li><li><img src="https://img.shiqi-lu.tech/20200905202000.png" alt=""></li></ul></li></ul><p>参考：</p>',2),g={href:"https://www.imooc.com/learn/117",target:"_blank",rel:"noopener noreferrer"};function o(m,Q){const i=u("ExternalLinkIcon");return e(),c("div",null,[n,l("ul",null,[l("li",null,[l("a",g,[s("数据库设计那些事"),a(i)])])])])}const d=t(r,[["render",o],["__file","db-design-thing.html.vue"]]);export{d as default};
