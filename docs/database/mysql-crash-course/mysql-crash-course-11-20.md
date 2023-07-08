---
title: 《MySQL必知必会》学习笔记11-20章
date: 2021-02-19 14:51:52
tags:
- 数据库
- MySQL
categories:
- MySQL
description: 《MySQL必知必会》学习笔记11-20章
toc:
  enable: true
  number: false
---

## 第11章 使用数据处理函数
- Q:常用的文本处理函数
    - ![](https://img.shiqi-lu.tech/20210209162820.png)
- Q:使用大写处理
    ```sql
    mysql> SELECT vend_name, Upper(vend_name) AS vend_name_upcase
        -> FROM vendors
        -> ORDER BY vend_name;
    +----------------+------------------+
    | vend_name      | vend_name_upcase |
    +----------------+------------------+
    | ACME           | ACME             |
    | Anvils R Us    | ANVILS R US      |
    | Furball Inc.   | FURBALL INC.     |
    | Jet Set        | JET SET          |
    | Jouets Et Ours | JOUETS ET OURS   |
    | LT Supplies    | LT SUPPLIES      |
    +----------------+------------------+
    6 rows in set (0.00 sec)
    ```
- Q:常用的时间日期处理函数
    - 注意日期格式必须为'yyyy-mm-dd'
    - ![](https://img.shiqi-lu.tech/20210209163055.png)
- Q:根据日期查询
    ```sql
    mysql> SELECT cust_id, order_num
        -> FROM orders
        -> WHERE Date(order_date) = '2005-09-01';
    +---------+-----------+
    | cust_id | order_num |
    +---------+-----------+
    |   10001 |     20005 |
    +---------+-----------+
    1 row in set (0.01 sec)
    ```
- Q:查询某个月的订单
    ```sql
    mysql> SELECT cust_id, order_num
        -> FROM orders
        -> WHERE Year(order_date) = 2005 AND Month(order_date) = 9;
    +---------+-----------+
    | cust_id | order_num |
    +---------+-----------+
    |   10001 |     20005 |
    |   10003 |     20006 |
    |   10004 |     20007 |
    +---------+-----------+
    3 rows in set (0.00 sec)
    ```
- Q:常用的数值处理函数
    - ![](https://img.shiqi-lu.tech/20210209163709.png)

## 第12章 汇总数据
- Q:SQL的5个聚集函数
    - ![](https://img.shiqi-lu.tech/20210209163930.png)
- Q:取平均的使用
    - 会忽略NULL的行
    ```sql
    mysql> SELECT AVG(prod_price) AS avg_price
        -> FROM products;
    +-----------+
    | avg_price |
    +-----------+
    | 16.133571 |
    +-----------+
    1 row in set (0.00 sec)
    ```
- Q:COUNT()的使用
    - 1.使用COUNT(*)对表中行的数目进行计数，包括空值
    - 2.使用COUNT(column)对特定列中具有值的行进行计算，忽略NULL值
    ```sql
    mysql> SELECT COUNT(*) AS num_cust
        -> FROM customers;
    +----------+
    | num_cust |
    +----------+
    |        5 |
    +----------+
    1 row in set (0.00 sec)

    mysql> SELECT COUNT(cust_email) AS num_cust FROM customers;
    +----------+
    | num_cust |
    +----------+
    |        3 |
    +----------+
    1 row in set (0.00 sec)
    ```
- Q:聚集不同值
    ```sql
    mysql> SELECT AVG(DISTINCT prod_price) AS avg_price
        -> FROM products
        -> WHERE vend_id = 1003;
    +-----------+
    | avg_price |
    +-----------+
    | 15.998000 |
    +-----------+
    1 row in set (0.00 sec)
    ```

## 第13章 分组数据
- Q:创建分组数据，根据某个字段统计数目
    ```sql
    mysql> SELECT vend_id, COUNT(*) AS num_prods
        -> FROM products
        -> GROUP BY vend_id;
    +---------+-----------+
    | vend_id | num_prods |
    +---------+-----------+
    |    1001 |         3 |
    |    1002 |         2 |
    |    1003 |         7 |
    |    1005 |         2 |
    +---------+-----------+
    4 rows in set (0.00 sec)
    ```
- Q:过滤分组
    - where在分组前过滤，having在分组后过滤
    ```sql
    mysql> SELECT cust_id, COUNT(*) AS orders
        -> FROM orders
        -> GROUP BY cust_id
        -> HAVING COUNT(*) >= 2;
    +---------+--------+
    | cust_id | orders |
    +---------+--------+
    |   10001 |      2 |
    +---------+--------+
    1 row in set (0.00 sec)
    ```
- Q:SELECT子句的顺序
    - ![](https://img.shiqi-lu.tech/20210209171155.png)

## 第14章 使用子查询
- Q:子查询的例子
    ```sql
    mysql> SELECT cust_id
        -> FROM orders
        -> WHERE order_num IN (SELECT order_num
        ->                     FROM orderitems
        ->                     WHERE prod_id = 'TNT2');
    +---------+
    | cust_id |
    +---------+
    |   10001 |
    |   10004 |
    +---------+
    2 rows in set (0.02 sec)
    ```
    ```sql
    mysql> SELECT cust_name,
        ->        cust_state,
        ->        (SELECT COUNT(*)
        ->         FROM orders
        ->         WHERE orders.cust_id = customers.cust_id) AS orders
        -> FROM customers
        -> ORDER BY cust_name;
    +----------------+------------+--------+
    | cust_name      | cust_state | orders |
    +----------------+------------+--------+
    | Coyote Inc.    | MI         |      2 |
    | E Fudd         | IL         |      1 |
    | Mouse House    | OH         |      0 |
    | Wascals        | IN         |      1 |
    | Yosemite Place | AZ         |      1 |
    +----------------+------------+--------+
    5 rows in set (0.00 sec)
    ```

## 第15章 联结表
- Q:创建联结
    ```sql
    mysql> SELECT vend_name, prod_name, prod_price
        -> FROM vendors, products
        -> WHERE vendors.vend_id = products.vend_id
        -> ORDER BY vend_name, prod_name;
    +-------------+----------------+------------+
    | vend_name   | prod_name      | prod_price |
    +-------------+----------------+------------+
    | ACME        | Bird seed      |      10.00 |
    | ACME        | Carrots        |       2.50 |
    | ACME        | Detonator      |      13.00 |
    | ACME        | Safe           |      50.00 |
    | ACME        | Sling          |       4.49 |
    | ACME        | TNT (1 stick)  |       2.50 |
    | ACME        | TNT (5 sticks) |      10.00 |
    | Anvils R Us | .5 ton anvil   |       5.99 |
    | Anvils R Us | 1 ton anvil    |       9.99 |
    | Anvils R Us | 2 ton anvil    |      14.99 |
    | Jet Set     | JetPack 1000   |      35.00 |
    | Jet Set     | JetPack 2000   |      55.00 |
    | LT Supplies | Fuses          |       3.42 |
    | LT Supplies | Oil can        |       8.99 |
    +-------------+----------------+------------+
    14 rows in set (0.00 sec)
    ```
- Q:内部联结
    ```sql
    mysql> SELECT vend_name, prod_name, prod_price
        -> FROM vendors INNER JOIN products
        ->      ON vendors.vend_id = products.vend_id;
    +-------------+----------------+------------+
    | vend_name   | prod_name      | prod_price |
    +-------------+----------------+------------+
    | Anvils R Us | .5 ton anvil   |       5.99 |
    | Anvils R Us | 1 ton anvil    |       9.99 |
    | Anvils R Us | 2 ton anvil    |      14.99 |
    | LT Supplies | Fuses          |       3.42 |
    | LT Supplies | Oil can        |       8.99 |
    | ACME        | Detonator      |      13.00 |
    | ACME        | Bird seed      |      10.00 |
    | ACME        | Carrots        |       2.50 |
    | ACME        | Safe           |      50.00 |
    | ACME        | Sling          |       4.49 |
    | ACME        | TNT (1 stick)  |       2.50 |
    | ACME        | TNT (5 sticks) |      10.00 |
    | Jet Set     | JetPack 1000   |      35.00 |
    | Jet Set     | JetPack 2000   |      55.00 |
    +-------------+----------------+------------+
    14 rows in set (0.00 sec)
    ```

## 第16章 创建高级联结
- Q:使用表别名
    ```sql
    mysql> SELECT cust_name, cust_contact
        -> FROM customers AS c, orders AS o, orderitems AS oi
        -> WHERE c.cust_id = o.cust_id
        ->       AND oi.order_num = o.order_num
        ->       AND prod_id = 'TNT2';
    +----------------+--------------+
    | cust_name      | cust_contact |
    +----------------+--------------+
    | Coyote Inc.    | Y Lee        |
    | Yosemite Place | Y Sam        |
    +----------------+--------------+
    2 rows in set (0.00 sec)
    ```
- Q:自联结
    ```sql
    mysql> SELECT prod_id, prod_name
        -> FROM products
        -> WHERE vend_id = (SELECT vend_id
        ->                  FROM products
        ->                  WHERE prod_id = 'DTNTR');
    +---------+----------------+
    | prod_id | prod_name      |
    +---------+----------------+
    | DTNTR   | Detonator      |
    | FB      | Bird seed      |
    | FC      | Carrots        |
    | SAFE    | Safe           |
    | SLING   | Sling          |
    | TNT1    | TNT (1 stick)  |
    | TNT2    | TNT (5 sticks) |
    +---------+----------------+
    7 rows in set (0.00 sec)

    mysql> SELECT p1.prod_id, p1.prod_name
        -> FROM products AS p1, products AS p2
        -> WHERE p1.vend_id = p2.vend_id
        ->   AND p2.prod_id = 'DTNTR';
    +---------+----------------+
    | prod_id | prod_name      |
    +---------+----------------+
    | DTNTR   | Detonator      |
    | FB      | Bird seed      |
    | FC      | Carrots        |
    | SAFE    | Safe           |
    | SLING   | Sling          |
    | TNT1    | TNT (1 stick)  |
    | TNT2    | TNT (5 sticks) |
    +---------+----------------+
    7 rows in set (0.01 sec)
    ```
- Q:自然联结
    ```sql
    mysql> SELECT c.*, o.order_num, o.order_num, o.order_date,
        ->        oi.prod_id, oi.quantity, oi.item_price
        -> FROM customers AS c, orders AS o, orderitems AS oi
        -> WHERE c.cust_id = o.cust_id
        ->   AND oi.order_num = o.order_num
        ->   AND prod_id = 'FB';
    +---------+-------------+----------------+-----------+------------+----------+--------------+--------------+-----------------+-----------+-----------+---------------------+---------+----------+------------+
    | cust_id | cust_name   | cust_address   | cust_city | cust_state | cust_zip | cust_country | cust_contact | cust_email      | order_num | order_num | order_date          | prod_id | quantity | item_price |
    +---------+-------------+----------------+-----------+------------+----------+--------------+--------------+-----------------+-----------+-----------+---------------------+---------+----------+------------+
    |   10001 | Coyote Inc. | 200 Maple Lane | Detroit   | MI         | 44444    | USA          | Y Lee        | ylee@coyote.com |     20005 |     20005 | 2005-09-01 00:00:00 | FB      |        1 |      10.00 |
    |   10001 | Coyote Inc. | 200 Maple Lane | Detroit   | MI         | 44444    | USA          | Y Lee        | ylee@coyote.com |     20009 |     20009 | 2005-10-08 00:00:00 | FB      |        1 |      10.00 |
    +---------+-------------+----------------+-----------+------------+----------+--------------+--------------+-----------------+-----------+-----------+---------------------+---------+----------+------------+
    2 rows in set (0.00 sec)
    ```
- Q:外部联结
    ```sql
    mysql> SELECT customers.cust_id, orders.order_num
        -> FROM customers LEFT OUTER JOIN orders
        ->   ON customers.cust_id = orders.cust_id;
    +---------+-----------+
    | cust_id | order_num |
    +---------+-----------+
    |   10001 |     20005 |
    |   10001 |     20009 |
    |   10002 |      NULL |
    |   10003 |     20006 |
    |   10004 |     20007 |
    |   10005 |     20008 |
    +---------+-----------+
    6 rows in set (0.00 sec)


    mysql> SELECT customers.cust_id, orders.order_num
        -> FROM customers RIGHT OUTER JOIN orders
        ->   ON customers.cust_id = orders.cust_id;
    +---------+-----------+
    | cust_id | order_num |
    +---------+-----------+
    |   10001 |     20005 |
    |   10001 |     20009 |
    |   10003 |     20006 |
    |   10004 |     20007 |
    |   10005 |     20008 |
    +---------+-----------+
    5 rows in set (0.00 sec)
    ```
    - 对比自然联结
    ```sql
    mysql> SELECT customers.cust_id, orders.order_num
        -> FROM customers INNER JOIN orders
        ->   ON customers.cust_id = orders.cust_id;
    +---------+-----------+
    | cust_id | order_num |
    +---------+-----------+
    |   10001 |     20005 |
    |   10001 |     20009 |
    |   10003 |     20006 |
    |   10004 |     20007 |
    |   10005 |     20008 |
    +---------+-----------+
    6 rows in set (0.00 sec)
    ```
- Q:使用带聚集函数的联结
    ```sql
    mysql> SELECT customers.cust_name,
        ->        customers.cust_id,
        ->        COUNT(orders.order_num) AS num_ord
        -> FROM customers INNER JOIN orders
        ->   ON customers.cust_id = orders.cust_id
        -> GROUP BY customers.cust_id;
    +----------------+---------+---------+
    | cust_name      | cust_id | num_ord |
    +----------------+---------+---------+
    | Coyote Inc.    |   10001 |       2 |
    | Wascals        |   10003 |       1 |
    | Yosemite Place |   10004 |       1 |
    | E Fudd         |   10005 |       1 |
    +----------------+---------+---------+
    4 rows in set (0.01 sec)
    ```

## 第17章 组合查询
- Q:使用UNION和对应的WHERE
    ```sql
    mysql> SELECT vend_id, prod_id, prod_price
        -> FROM products
        -> WHERE prod_price <= 5
        -> UNION
        -> SELECT vend_id, prod_id, prod_price
        -> FROM products
        -> WHERE vend_id IN (1001,1002);
    +---------+---------+------------+
    | vend_id | prod_id | prod_price |
    +---------+---------+------------+
    |    1003 | FC      |       2.50 |
    |    1002 | FU1     |       3.42 |
    |    1003 | SLING   |       4.49 |
    |    1003 | TNT1    |       2.50 |
    |    1001 | ANV01   |       5.99 |
    |    1001 | ANV02   |       9.99 |
    |    1001 | ANV03   |      14.99 |
    |    1002 | OL1     |       8.99 |
    +---------+---------+------------+
    8 rows in set (0.00 sec)

    mysql> SELECT vend_id, prod_id, prod_price
        -> FROM products
        -> WHERE prod_price <= 5 OR vend_id IN (1001,1002);
    +---------+---------+------------+
    | vend_id | prod_id | prod_price |
    +---------+---------+------------+
    |    1001 | ANV01   |       5.99 |
    |    1001 | ANV02   |       9.99 |
    |    1001 | ANV03   |      14.99 |
    |    1003 | FC      |       2.50 |
    |    1002 | FU1     |       3.42 |
    |    1002 | OL1     |       8.99 |
    |    1003 | SLING   |       4.49 |
    |    1003 | TNT1    |       2.50 |
    +---------+---------+------------+
    8 rows in set (0.00 sec)
    ```
- Q:UNION规则
    - UNION必须由两条或两条以上的SELECT语句组成，语句之间用关 键字UNION分隔（因此，如果组合4条SELECT语句，将要使用3个 UNION关键字）
    - UNION中的每个查询必须包含相同的列、表达式或聚集函数（不过各个列不需要以相同的次序列出）
    - 列数据类型必须兼容：类型不必完全相同，但必须是DBMS可以 隐含地转换的类型（例如，不同的数值类型或不同的日期类型）
- Q:UNION包含或取消重复行
    - 默认的UNION会从结果集中自动去除重复的行，若要返回所有匹配行，使用UNION ALL
- Q:对组合查询结果排序
    ```sql
    mysql> SELECT vend_id, prod_id, prod_price
        -> FROM products
        -> WHERE prod_price <= 5
        -> UNION
        -> SELECT vend_id, prod_id, prod_price
        -> FROM products
        -> WHERE vend_id IN (1001,1002)
        -> ORDER BY vend_id, prod_price;
    +---------+---------+------------+
    | vend_id | prod_id | prod_price |
    +---------+---------+------------+
    |    1001 | ANV01   |       5.99 |
    |    1001 | ANV02   |       9.99 |
    |    1001 | ANV03   |      14.99 |
    |    1002 | FU1     |       3.42 |
    |    1002 | OL1     |       8.99 |
    |    1003 | FC      |       2.50 |
    |    1003 | TNT1    |       2.50 |
    |    1003 | SLING   |       4.49 |
    +---------+---------+------------+
    8 rows in set (0.00 sec)
    ```

## 第18章 全文本搜索
- Q:MySQL支持全文本搜索的引擎
    - MyISAM支持全文本搜索，InnoDB不支持
- Q:通配操作符和正则表达式匹配的3个限制
    - 性能：通配符和正则表达式匹配通常要求MySQL尝试匹配表中所有行（而且这些搜索极少使用表索引）。因此，由于被搜索行数不断增加，这些搜索可能非常耗时
    - 明确控制：使用通配符和正则表达式匹配，很难（而且并不总是能）明确地控制匹配什么和不匹配什么。例如，指定一个词必须匹配，一个词必须不匹配，而一个词仅在第一个词确实匹配的情况下才可以匹配或者才可以不匹配
    - 智能化的结果：虽然基于通配符和正则表达式的搜索提供了非常灵活的搜索，但它们都不能提供一种智能化的选择结果的方法。例如，一个特殊词的搜索将会返回包含该词的所有行，而不区分包含单个匹配的行和包含多个匹配的行（按照可能是更好的匹配 来排列它们）。类似，一个特殊词的搜索将不会找出不包含该词但包含其他相关词的行
- Q:使用全文本搜索的优势
    - MySQL不需要分别查看每个行，不需要分别分析和处理每个词
    - MySQL创建指定列中各词的一个索引，搜索可以针对这些词进行
    - MySQL可以快速有效地决定哪些词匹配（哪些行包含它们），哪些词不匹配，它们匹配的频率
- Q:创建表时启用全文本搜索支持
    - 为了进行全文本搜索，必须索引被搜索的列。在定义之后，MySQL自动维护该索引。在增加、更新或删除行时，索引随之自动更新
    ```sql
    CREATE TABLE productnotes
    (
    note_id int        NOT NULL AUTO_INCREMENT,
    prod_id char(10)   NOT NULL,
    note_date datetime NOT NULL,
    note_text text     NULL,
    PRIMARY KEY(note_id),
    FULLTEXT(note_text)
    ) ENGINE=MyISAM;
    ```
- Q:进行全文本搜索
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE Match(note_text) Against('rabbit');
    +-----------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                             |
    +-----------------------------------------------------------------------------------------------------------------------+
    | Customer complaint: rabbit has been able to detect trap, food apparently less effective now.                          |
    | Quantity varies, sold by the sack load.
    All guaranteed to be bright and orange, and suitable for use as rabbit bait. |
    +-----------------------------------------------------------------------------------------------------------------------+
    2 rows in set (0.00 sec)
    ```
    - Match()指定被搜索的列，Against()指定要使用的搜索表达式，传递给 Match() 的值必须与FULLTEXT()定义中的相同
    - 也可用Like子句完成
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE note_text LIKE '%rabbit%';
    +-----------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                             |
    +-----------------------------------------------------------------------------------------------------------------------+
    | Quantity varies, sold by the sack load.
    All guaranteed to be bright and orange, and suitable for use as rabbit bait. |
    | Customer complaint: rabbit has been able to detect trap, food apparently less effective now.                          |
    +-----------------------------------------------------------------------------------------------------------------------+
    2 rows in set (0.00 sec)
    ```
    - 全文本搜索返回以文本匹配的良好程度排序的数据。两个行都包含词rabbit，但包含词rabbit作为 第3个词的行的等级比作为第20个词的行高
    - LIKE以不特别有用的顺序返回数据
- Q:全文本搜索排序的工作方式
    ```sql
    mysql> SELECT note_text,
        ->        Match(note_text) Against('rabbit') AS rank
        -> FROM productnotes;
    +------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------+
    | note_text                                                                                                                                                  | rank               |
    +------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------+
    | Customer complaint:
    Sticks not individually wrapped, too easy to mistakenly detonate all at once.
    Recommend individual wrapping.                         |                  0 |
    | Can shipped full, refills not available.
    Need to order new can if refill needed.                                                                          |                  0 |
    | Safe is combination locked, combination not provided with safe.
    This is rarely a problem as safes are typically blown up or dropped by customers.         |                  0 |
    | Quantity varies, sold by the sack load.
    All guaranteed to be bright and orange, and suitable for use as rabbit bait.                                      | 1.5905543565750122 |
    | Included fuses are short and have been known to detonate too quickly for some customers.
    Longer fuses are available (item FU1) and should be recommended. |                  0 |
    | Matches not included, recommend purchase of matches or detonator (item DTNTR).                                                                             |                  0 |
    | Please note that no returns will be accepted if safe opened using explosives.                                                                              |                  0 |
    | Multiple customer returns, anvils failing to drop fast enough or falling backwards on purchaser. Recommend that customer considers using heavier anvils.   |                  0 |
    | Item is extremely heavy. Designed for dropping, not recommended for use with slings, ropes, pulleys, or tightropes.                                        |                  0 |
    | Customer complaint: rabbit has been able to detect trap, food apparently less effective now.                                                               | 1.6408053636550903 |
    | Shipped unassembled, requires common tools (including oversized hammer).                                                                                   |                  0 |
    | Customer complaint:
    Circular hole in safe floor can apparently be easily cut with handsaw.                                                                |                  0 |
    | Customer complaint:
    Not heavy enough to generate flying stars around head of victim. If being purchased for dropping, recommend ANV02 or ANV03 instead.   |                  0 |
    | Call from individual trapped in safe plummeting to the ground, suggests an escape hatch be added.
    Comment forwarded to vendor.                            |                  0 |
    +------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------+
    14 rows in set (0.00 sec)
    ```
    - Match()和Against() 用来建立一个计算列（别名为rank），此列包含全文本搜索计算出的等级值。等级由MySQL根据行中词的数目、唯一词的数目、整个索引中词的 总数以及包含该词的行的数目计算出来。正如所见，不包含词rabbit的行等级为0（因此不被前一例子中的WHERE子句选择）。确实包含词rabbit 的两个行每行都有一个等级值，文本中词靠前的行的等级值比词靠后的行的等级值高
- Q:使用查询扩展时MySQL工作方式
    - 对数据和索引进行两遍扫描来完成搜索
        - 首先，进行一个基本的全文本搜索，找出与搜索条件匹配的所有行
        - 其次，MySQL检查这些匹配行并选择所有有用的词
        - 再其次，MySQL再次进行全文本搜索，这次不仅使用原来的条件，而且还使用所有有用的词
    - 利用查询扩展，能找出可能相关的结果，即使它们并不精确包含所查找的词
- Q:查询扩展的例子
    - 没有使用
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE Match(note_text) Against('anvils');
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                                                                |
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    | Multiple customer returns, anvils failing to drop fast enough or falling backwards on purchaser. Recommend that customer considers using heavier anvils. |
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    1 row in set (0.01 sec)
    ```
    - 使用了之后
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE Match(note_text) Against('anvils' WITH QUERY EXPANSION);
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                                                                |
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    | Multiple customer returns, anvils failing to drop fast enough or falling backwards on purchaser. Recommend that customer considers using heavier anvils. |
    | Customer complaint:
    Sticks not individually wrapped, too easy to mistakenly detonate all at once.
    Recommend individual wrapping.                       |
    | Customer complaint:
    Not heavy enough to generate flying stars around head of victim. If being purchased for dropping, recommend ANV02 or ANV03 instead. |
    | Please note that no returns will be accepted if safe opened using explosives.                                                                            |
    | Customer complaint: rabbit has been able to detect trap, food apparently less effective now.                                                             |
    | Customer complaint:
    Circular hole in safe floor can apparently be easily cut with handsaw.                                                              |
    | Matches not included, recommend purchase of matches or detonator (item DTNTR).                                                                           |
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    7 rows in set (0.00 sec)
    ```
    - 返回了7行。第一行包含词anvils，因此等级最高。第二行与anvils无关，但因为它包含第一行中的两个词（customer和recommend），所以也被检索出来。第3行也包含这两个相同的词，但它们在文本中的位置更靠后且分开得更远，因此也包含这一行，但等级为第三。第三行确实也没有涉及anvils（按它们的产品名）
- Q:布尔文本搜索可提供的功能
    - 以布尔方式，提供关于如下内容的细节：
    - 要匹配的词
    - 要排斥的词(如果某行包含这个词，则不返回该行，即使它包含 其他指定的词也是如此)
    - 排列提示（指定某些词比其他词更重要，更重要的词等级更高）
    - 表达式分组
- Q:布尔文本搜索举例
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE Match(note_text) Against('heavy' IN BOOLEAN MODE);
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                                                                |
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    | Item is extremely heavy. Designed for dropping, not recommended for use with slings, ropes, pulleys, or tightropes.                                      |
    | Customer complaint:
    Not heavy enough to generate flying stars around head of victim. If being purchased for dropping, recommend ANV02 or ANV03 instead. |
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    2 rows in set (0.00 sec)
    ```
- Q:匹配包含heavy但不包含任意以rope开始的词的行
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE Match(note_text) Against('heavy -rope*' IN BOOLEAN MODE);
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                                                                |
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    | Customer complaint:
    Not heavy enough to generate flying stars around head of victim. If being purchased for dropping, recommend ANV02 or ANV03 instead. |
    +----------------------------------------------------------------------------------------------------------------------------------------------------------+
    1 row in set (0.00 sec)
    ```
- Q:全文本布尔操作符
    - ![](https://img.shiqi-lu.tech/20210219143512.png)
- Q:匹配包含词rabbit和bait的行
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE Match(note_text) Against('+rabbit +bait' IN BOOLEAN MODE);
    +-----------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                             |
    +-----------------------------------------------------------------------------------------------------------------------+
    | Quantity varies, sold by the sack load.
    All guaranteed to be bright and orange, and suitable for use as rabbit bait. |
    +-----------------------------------------------------------------------------------------------------------------------+
    1 row in set (0.00 sec)
    ```
- Q:匹配包含rabbit和bait中的至少一个词的行
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE Match(note_text) Against('rabbit bait' IN BOOLEAN MODE);
    +-----------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                             |
    +-----------------------------------------------------------------------------------------------------------------------+
    | Quantity varies, sold by the sack load.
    All guaranteed to be bright and orange, and suitable for use as rabbit bait. |
    | Customer complaint: rabbit has been able to detect trap, food apparently less effective now.                          |
    +-----------------------------------------------------------------------------------------------------------------------+
    2 rows in set (0.00 sec)
    ```
- Q:匹配短语 rabbit bait 而不是匹配两个词 rabbit 和 bait
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE Match(note_text) Against('"rabbit bait"' IN BOOLEAN MODE);
    +-----------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                             |
    +-----------------------------------------------------------------------------------------------------------------------+
    | Quantity varies, sold by the sack load.
    All guaranteed to be bright and orange, and suitable for use as rabbit bait. |
    +-----------------------------------------------------------------------------------------------------------------------+
    1 row in set (0.00 sec)
    ```
- Q:匹配rabbit和carrot，增加前者的等级，降低后者的等级
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE Match(note_text) Against('>rabbit <bait' IN BOOLEAN MODE);
    +-----------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                             |
    +-----------------------------------------------------------------------------------------------------------------------+
    | Quantity varies, sold by the sack load.
    All guaranteed to be bright and orange, and suitable for use as rabbit bait. |
    | Customer complaint: rabbit has been able to detect trap, food apparently less effective now.                          |
    +-----------------------------------------------------------------------------------------------------------------------+
    2 rows in set (0.00 sec)
    ```
- Q:搜索匹配词safe和combination，降低后者的等级
    ```sql
    mysql> SELECT note_text
        -> FROM productnotes
        -> WHERE Match(note_text) Against('+safe +(<combination)' IN BOOLEAN MODE);
    +----------------------------------------------------------------------------------------------------------------------------------------------------+
    | note_text                                                                                                                                          |
    +----------------------------------------------------------------------------------------------------------------------------------------------------+
    | Safe is combination locked, combination not provided with safe.
    This is rarely a problem as safes are typically blown up or dropped by customers. |
    +----------------------------------------------------------------------------------------------------------------------------------------------------+
    1 row in set (0.00 sec)
    ```
- Q:全文本搜索的使用说明
    - 在索引全文本数据时，短词被忽略且从索引中排除。短词定义为那些具有具有3个或3个以下字符的词（如果需要，这个数目可以更改）
    - MySQL带有一个内建的非用词（stopword）列表，这些词在索引全文本数据时总是被忽略。如果需要，可以覆盖这个列表（请参 阅MySQL文档）
    - 许多词出现的频率很高，搜索它们没有用处（返回太多的结果）。因此，MySQL规定了一条50%规则，如果一个词出现在50%以上的行中，则将它作为一个非用词忽略。50%规则不用于IN BOOLEAN MODE
    - 如果表中的行数少于3行，则全文本搜索不返回结果
    - 忽略词中的单引号。例如，don't索引为dont
    - 不具有词分隔符（包括日语和汉语）的语言不能恰当地返回全文本搜索结果
    - 仅在MyISAM数据库引擎中支持全文本搜索

## 第19章 插入数据
- Q:插入数据
    ```sql
    mysql> INSERT INTO customers
        -> VALUES(NULL,
        ->   'Pep E. LaPew',
        ->   '100 Main Street',
        ->   'Los Angeles',
        ->   'CA',
        ->   '90046',
        ->   'USA',
        ->   NULL,
        ->   NULL);
    ```
    ```sql
    mysql> INSERT INTO customers(cust_name,
        ->    cust_address,
        ->    cust_city,
        ->    cust_state,
        ->    cust_zip,
        ->    cust_country,
        ->    cust_contact,
        ->    cust_email)
        -> VALUES('Pep E.LaPew',
        ->   '100 Main Street',
        ->   'Los Angeles',
        ->   'CA',
        ->   '90046',
        ->   'USA',
        ->   NULL,
        ->   NULL);
    Query OK, 1 row affected (0.03 sec)
    ```
- Q:插入多行数据
    ```sql
    mysql> INSERT INTO customers(cust_name,
        ->    cust_address,
        ->    cust_city,
        ->    cust_state,
        ->    cust_zip,
        ->    cust_country)
        -> VALUES(
        ->        'Pep E.LaPew',
        ->        '100 Main Street',
        ->        'Los Angeles',
        ->        'CA',
        ->        '90046',
        ->        'USA'
        ->       ),
        ->       (
        ->        'M. Martian',
        ->        '42 Galaxy Way',
        ->        'New York',
        ->        'NY',
        ->        '112113',
        ->        'USA'
        -> );
    Query OK, 2 rows affected (0.04 sec)
    Records: 2  Duplicates: 0  Warnings: 0
    ```
- Q:插入检索出的数据
    - 从custnew中将所有数据导入customers，注意此处的cust_id也被复制过来了，可以省略这列就能确保cust_id不重复
    ```sql
    INSERT INTO customers(cust_id,
    cust_contact,
    cust_email,
    cust_name,
    cust_address,
    cust_city,
    cust_state,
    cust_zip,
    cust_country)
    SELECT cust_id,
    cust_contact,
    cust_email,
    cust_name,
    cust_address,
    cust_city,
    cust_state,
    cust_zip,
    cust_country
    FROM custnew;
    ```

## 第20章 更新和删除数据
- Q:更新数据
    ```sql
    mysql> UPDATE customers
        -> SET cust_name = 'The Fudds',
        ->     cust_email = 'elmer@fudd.com'
        -> WHERE cust_id = 10008;
    Query OK, 1 row affected (0.03 sec)
    Rows matched: 1  Changed: 1  Warnings: 0
    ```
- Q:删除数据
    ```sql
    mysql> DELETE FROM customers
        -> WHERE cust_id = 10007;
    Query OK, 1 row affected (0.05 sec)
    ```
- Q:删除表中所有行
    ```sql
    TRUNCATE TABLE
    ```
