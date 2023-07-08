---
title: 《MySQL必知必会》学习笔记21-30章
date: 2021-05-09 14:51:52
updated: 2021-05-09 14:51:52
tags:
- 数据库
- MySQL
categories:
- MySQL
description: 《MySQL必知必会》学习笔记21-30章
toc:
  enable: true
  number: false
---

## 第21章 创建和操纵表
- Q:创建customers表示例，NULL、自增、主键、默认值写法
    ```sql
    CREATE TABLE customers
    (
    cust_id      int       NOT NULL AUTO_INCREMENT,
    cust_name    char(50)  NOT NULL,
    cust_address char(50)  NULL,
    cust_city    char(50)  NOT NULL DEFAULT 'bj',
    cust_state   char(5)   NULL,
    cust_email   char(255) NULL,
    PRIMARY KEY (cust_id)
    ) ENGINE=InnoDB;
    ```
    - NULL：允许NULL值的列允许在插入行时不给出该列的值，NOT NULL则在插入或更新行时该列必须有值
    - 注意NULL值和空串''，空串是一个有效值，不是NULL
    - 主键：表的每个行必须具有唯一的主键值，如果主键使用单个列，则它的值必须唯一。如果使用多个列，则这些列的组合值必须唯一。主键中只能使用不允许NULL值的列
    - AUTO_INCREMENT：本列每当增加一行时，自动增量。多个语句连续使用时，可用last_insert_id()获取最后一个AUTO_INCREMENT值，`SELECT last_insert_id()`
    - 默认值：在未给出值时使用该值
    - 引擎类型：
        - InnoDB：可靠的事务处理引擎，不支持全文本搜索
        - MEMORY：功能等同于MyISAM，但数据存储在内存，数据很快，适合临时表
        - MyISAM：性能极高的引擎，支持全文本搜索，但不支持事务处理
- Q:修改表结构，给表添加一个列
    ```sql
    ALTER TABLE vendors
    ADD vend_phone CHAR(20);
    ```
- Q:修改表结构，删除表中的列
    ```sql
    ALTER TABLE vendors
    DROP COLUMN VEND_phone;
    ```
- Q:修改表结构，定义外键
    ```sql
    ALTER TABLE orderitems
    ADD CONSTRAINT fk_orderitems_orders
    FOREIGN KEY (order_num) REFERENCES orders (order_num);
    ```
- Q:复杂表结构的更改步骤
    - 用新的列布局创建一个新表
    - 使用INSERT SELECT语句从旧表复制数据到新表。必要时适用转换函数和计算字段
    - 校验包含所需数据的新表
    - 重命名旧表(如果确定，可以删除它)
    - 用旧表原来的名字重命名新表
    - 根据需要，重新创建触发器、存储过程、索引和外键
    - 注意：使用ALTER TABLE要极为小心，应该在进行改动前做一个完整的备份(模式和数据的备份)。数据库表的更改不能撤销
- Q:删除表
    ```sql
    DROP TABLE customers2;
    ```
- Q:重命名多个表
    ```sql
    RENAME TABLE backup_customers TO customers,
                backup_vendors TO vendors;
    ```

## 第22章 使用视图
- Q:视图有哪些应用呢
    - 1.重用SQL语句
    - 2.简化复杂的SQL操作。在编写查询后，可以方便地重用它而不必知道它的基本查询细节
    - 3.使用表的组成部分而不是整个表
    - 4.保护数据。可以给用户授予表的特定部分的访问权限而不是整个表的访问权限
    - 5.更改数据格式和表示。视图可返回与底层表的表示和格式不同的数据
- Q:视图的可用操作
    - 可用与表基本相同的方式利用它们。可对视图执行SELECT操作，过滤和排序数据，将视图联结到其它视图或表，甚至能添加和更新数据(存在一些限制)
    - 重要的是知道视图仅仅是用来查看存储在别处的数据的一种设施。 视图本身不包含数据，因此它们返回的数据是从其他表中检索出来的。 在添加或更改这些表中的数据时，视图将返回改变过的数据
    - 因为视图不包含数据，所以每次使用视图时，都必须处理查询执行时所需的任一个检索。如果用多个联结和过滤创建了复杂的视图或者嵌套了视图，可能会发现性能下降得很厉害。因此，在部署使用了大量视图的应用前，应该进行测试
- Q:创图创建和使用有哪些常见的规则和限制？
    - 与表一样，视图必须唯一命名(不能给视图取与别的视图或表相同的名字)
    - 对于可以创建的视图数目没有限制
    - 为了创建视图，必须具有足够的访问权限。这些限制通常由数据库管理人员授予
    - 视图可以嵌套，即可利用从其它视图中检索数据的查询来构造一个视图
    - ORDER BY可以用在视图中，但如果从该视图检索数据SELECT中也含有ORDER BY，那么该视图中的ORDER BY将被覆盖
    - 视图不能索引， 也不能有关联的触发器或默认值
    - 视图可以和表一起使用。如编写一条联结表和视图的SELECT语句
- Q:如何使用视图
    - 创建：`CREATE VIEW`
    - 查看创建视图的语句：`SHOW CREATE VIEW viewname;`
    - 删除：`DROP VIEW viewname;`
    - 更新：可先用DROP再用CREATE，或`CREATE OR REPLACE VIEW`。
    - 如果要更新的视图不存在，则第2条更新语句会创建一个视图；如果要更新的视图存在， 则第2条更新语句会替换原有视图
- Q:创建一个名为productcustomers的视图，联结三个表，以返回已订购了任意产品的所有客户的列表
    - 如果执行`SELECT * FROM productcustomers`，列出订购了任意产品的所有客户的列表
    ```sql
    mysql> CREATE VIEW productcustomers AS
        -> SELECT cust_name, cust_contact, prod_id
        -> FROM customers, orders, orderitems
        -> WHERE customers.cust_id = orders.cust_id
        ->   AND orderitems.order_num = orders.order_num;
    Query OK, 0 rows affected (0.04 sec)

    mysql> SELECT * from productcustomers;
    +----------------+--------------+---------+
    | cust_name      | cust_contact | prod_id |
    +----------------+--------------+---------+
    | Coyote Inc.    | Y Lee        | ANV01   |
    | Coyote Inc.    | Y Lee        | ANV02   |
    | Coyote Inc.    | Y Lee        | TNT2    |
    | Coyote Inc.    | Y Lee        | FB      |
    | Coyote Inc.    | Y Lee        | FB      |
    | Coyote Inc.    | Y Lee        | OL1     |
    | Coyote Inc.    | Y Lee        | SLING   |
    | Coyote Inc.    | Y Lee        | ANV03   |
    | Wascals        | Jim Jones    | JP2000  |
    | Yosemite Place | Y Sam        | TNT2    |
    | E Fudd         | E Fudd       | FC      |
    +----------------+--------------+---------+
    11 rows in set (0.00 sec)
    ```
    - 检索订购了产品TN2的客户
    ```sql
    mysql> SELECT cust_name, cust_contact
        -> FROM productcustomers
        -> WHERE prod_id = 'TNT2';
    +----------------+--------------+
    | cust_name      | cust_contact |
    +----------------+--------------+
    | Coyote Inc.    | Y Lee        |
    | Yosemite Place | Y Sam        |
    +----------------+--------------+
    2 rows in set (0.00 sec)
    ```
- Q:如何使用重新格式化检索出的数据
    - 经常需要某个格式的结果。不必在每次需要时执行联结，创建一个视图，每次需要时使用它即可
    ```sql
    mysql> SELECT Concat(RTrim(vend_name), ' (', RTrim(vend_country), ')')
        ->        AS vend_title
        -> FROM vendors
        -> ORDER BY vend_name;
    +-------------------------+
    | vend_title              |
    +-------------------------+
    | ACME (USA)              |
    | Anvils R Us (USA)       |
    | Furball Inc. (USA)      |
    | Jet Set (England)       |
    | Jouets Et Ours (France) |
    | LT Supplies (USA)       |
    +-------------------------+
    6 rows in set (0.00 sec)

    mysql> CREATE VIEW vendorlocations AS
        -> SELECT Concat(RTrim(vend_name), ' (', RTrim(vend_country), ')')
        ->        AS vend_title
        -> FROM vendors
        -> ORDER BY vend_name;
    Query OK, 0 rows affected (0.04 sec)

    mysql> SELECT * FROM vendorlocations;
    +-------------------------+
    | vend_title              |
    +-------------------------+
    | ACME (USA)              |
    | Anvils R Us (USA)       |
    | Furball Inc. (USA)      |
    | Jet Set (England)       |
    | Jouets Et Ours (France) |
    | LT Supplies (USA)       |
    +-------------------------+
    6 rows in set (0.00 sec)
    ```
- Q:用视图过滤不想要的数据，如定义 customeremaillist视图，它过滤没有电子邮件地址的客户
    ```sql
    mysql> CREATE VIEW customeremaillist AS
        -> SELECT cust_id, cust_name, cust_email
        -> FROM customers
        -> WHERE cust_email IS NOT NULL;
    Query OK, 0 rows affected (0.06 sec)

    mysql> SELECT * FROM customeremaillist;
    +---------+----------------+---------------------+
    | cust_id | cust_name      | cust_email          |
    +---------+----------------+---------------------+
    |   10001 | Coyote Inc.    | ylee@coyote.com     |
    |   10003 | Wascals        | rabbit@wascally.com |
    |   10004 | Yosemite Place | sam@yosemite.com    |
    |   10008 | The Fudds      | elmer@fudd.com      |
    +---------+----------------+---------------------+
    4 rows in set (0.00 sec)
    ```
- Q:如何使用视图简化计算字段
    ```sql
    mysql> SELECT prod_id,
        ->        quantity,
        ->        item_price,
        ->        quantity*item_price AS expanded_price
        -> FROM orderitems
        -> WHERE order_num = 20005;
    +---------+----------+------------+----------------+
    | prod_id | quantity | item_price | expanded_price |
    +---------+----------+------------+----------------+
    | ANV01   |       10 |       5.99 |          59.90 |
    | ANV02   |        3 |       9.99 |          29.97 |
    | TNT2    |        5 |      10.00 |          50.00 |
    | FB      |        1 |      10.00 |          10.00 |
    +---------+----------+------------+----------------+
    4 rows in set (0.00 sec)

    mysql> CREATE VIEW orderitemexpanded AS
        -> SELECT order_num,
        ->        prod_id,
        ->        quantity,
        ->        item_price,
        ->        quantity*item_price AS expanded_price
        -> FROM orderitems;
    Query OK, 0 rows affected (0.04 sec)

    mysql> SELECT * FROM orderitemexpanded
        -> WHERE order_num = 20005;
    +-----------+---------+----------+------------+----------------+
    | order_num | prod_id | quantity | item_price | expanded_price |
    +-----------+---------+----------+------------+----------------+
    |     20005 | ANV01   |       10 |       5.99 |          59.90 |
    |     20005 | ANV02   |        3 |       9.99 |          29.97 |
    |     20005 | TNT2    |        5 |      10.00 |          50.00 |
    |     20005 | FB      |        1 |      10.00 |          10.00 |
    +-----------+---------+----------+------------+----------------+
    4 rows in set (0.01 sec)
    ```
- Q:什么情况下，MySQL不允许更新、插入和删除视图
    - 1.分组(使用GROUP BY和HAVING)
    - 2.联结
    - 3.子查询
    - 4.并
    - 5.聚集函数(Min()、Count()、Sum()等)
    - 6.DISTINCT
    - 7.导出(计算)列

## 第23章 使用存储过程
- Q:创建存储过程，返回产品平均价格
    ```sql
    CREATE PROCEDURE productpricing()
    BEGIN
    SELECT Avg(prod_price) AS priceaverage
    FROM products;
    END;
    ```
    - 在命令行中书写时要重新定义分隔符，注意使用完要恢复
    ```sql
    mysql> DELIMITER //
    mysql> CREATE PROCEDURE productpricing()
        -> BEGIN
        ->    SELECT Avg(prod_price) AS priceaverage
        ->    FROM products;
        -> END //
    Query OK, 0 rows affected (0.00 sec)

    mysql> DELIMITER ;
    ```
    ```sql
    mysql> CALL productpricing();
    +--------------+
    | priceaverage |
    +--------------+
    |    16.133571 |
    +--------------+
    1 row in set (0.01 sec)

    Query OK, 0 rows affected (0.01 sec)
    ```
- Q:删除存储过程
    - 如果指定的过程不存在，则DROP PROCEDURE将产生一个错误。当过程存在想删除它时（如果过程不存在也不产生错误）可使用DROP PROCEDURE IF EXISTS
    ```sql
    mysql> DROP PROCEDURE productpricing;
    Query OK, 0 rows affected (0.00 sec)

    mysql> DROP PROCEDURE IF EXISTS proceductpricing;
    Query OK, 0 rows affected, 1 warning (0.00 sec)
    ```
- Q:创建使用参数的存储过程
    ```sql
    mysql> DELIMITER //
    mysql> CREATE PROCEDURE productpricing(
        ->    OUT pl DECIMAL(8,2),
        ->    OUT ph DECIMAL(8,2),
        ->    OUT pa DECIMAL(8,2)
        -> )
        -> BEGIN
        ->    SELECT Min(prod_price)
        ->    INTO pl
        ->    FROM products;
        ->    SELECT Max(prod_price)
        ->    INTO ph
        ->    FROM products;
        ->    SELECT Avg(prod_price)
        ->    INTO pa
        ->    FROM products;
        -> END //
        
    mysql> CALL productpricing(@pricelow,
        ->                     @pricehigh,
        ->                     @priceaverage) //
    Query OK, 1 row affected, 1 warning (0.00 sec)

    mysql> SELECT @priceaverage //
    +---------------+
    | @priceaverage |
    +---------------+
    |         16.13 |
    +---------------+
    1 row in set (0.00 sec)
    ```
    - 此存储过程接受3个参数：pl存储产品最低价格，ph存储产品最高价格，pa存储产品平均价格。每个参数必须具有指定的类型，这里使用十进制值。关键字OUT指出相应的参数用来从存储过程传出一个值(返回给调用者)。
    - MySQL支持IN(传递给存储过程)、OUT(从存储过程传出)和INOUT(对存储过程传入和传出)类型的参数
    - 存储过程是一系列SELECT语句，用来检索值，然后保存到相应的变量(通过指定INTO关键字)
    - 存储过程的参数允许的数据类型与表中使用的数据类型相同
- Q:使用IN和OUT参数的存储过程，ordertotal接受订单号并返回该订单的合计
    ```sql
    mysql> DELIMITER //
    mysql> CREATE PROCEDURE ordertotal(
        ->    IN onumber INT,
        ->    OUT ototal DECIMAL(8,2)
        -> )
        -> BEGIN
        ->    SELECT Sum(item_price*quantity)
        ->    FROM orderitems
        ->    WHERE order_num = onumber
        ->    INTO ototal;
        -> END//
        
    mysql> CALL ordertotal(20005, @total)//
    Query OK, 1 row affected (0.00 sec)

    mysql> SELECT @total //
    +--------+
    | @total |
    +--------+
    | 149.87 |
    +--------+
    1 row in set (0.00 sec)
    ```
- Q:显示用来创建一个存储过程的CREATE语句
    ```sql
    mysql> SHOW CREATE PROCEDURE ordertotal //
    +------------+-------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+--------------------+
    | Procedure  | sql_mode                                                                                                                                  | Create Procedure                                                                                                                                                                                                       | character_set_client | collation_connection | Database Collation |
    +------------+-------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+--------------------+
    | ordertotal | ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION | CREATE DEFINER=`root`@`localhost` PROCEDURE `ordertotal`(    IN onumber INT,    OUT ototal DECIMAL(8,2) )
    BEGIN    SELECT Sum(item_price*quantity)    FROM orderitems    WHERE order_num = onumber    INTO ototal; END | utf8                 | utf8_general_ci      | latin1_swedish_ci  |
    +------------+-------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+--------------------+
    1 row in set (0.00 sec)
    ```
- Q:获得包括何时、由谁创建等详细信息的存储过程列表
    ```sql
    SHOW PROCEDURE STATUS
    ```
    - 限制过程状态结果
    ```sql
    mysql> SHOW PROCEDURE STATUS LIKE 'ordertotal' //
    +-------------+------------+-----------+----------------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
    | Db          | Name       | Type      | Definer        | Modified            | Created             | Security_type | Comment | character_set_client | collation_connection | Database Collation |
    +-------------+------------+-----------+----------------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
    | crashcourse | ordertotal | PROCEDURE | root@localhost | 2021-03-25 13:12:18 | 2021-03-25 13:12:18 | DEFINER       |         | utf8                 | utf8_general_ci      | latin1_swedish_ci  |
    +-------------+------------+-----------+----------------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
    1 row in set (0.00 sec)
    ```

## 第24章 使用游标
- Q:使用游标的几个步骤是什么？
    - 1.在能够使用游标前，必须声明它。这个过程实际上没用检索数据，它只是定义要使用的SELECT语句
    - 2.一旦声明后，必须打开游标以供使用。这个过程用前面定义的SELECT语句把数据实际检索出来
    - 3.对于填有数据的游标，根据需要取出(检索)各行
    - 4.在结束游标使用时，必须关闭游标
    - 在声明游标后，可根据需要频繁地打开和关闭游标。在游标打开后，可根据需要频繁地执行取操作

## 第26章 管理事务处理
- Q:事务处理是什么？
    - 事务处理是一种机制，用来管理必须成批执行的MySQL操作，以保证数据库不包含不完整的操作结果。利用事务处理，可以保证一组操作不会中途停止，它们或者作为整体执行，或者完全不执行(除非明确指示)。如果没有发生错误，整组语句提交个诶数据库表。如果发生错误，则进行回退以恢复数据库到某个已知且安全的状态
- Q:事务开始和ROLLBACK命令示例
    ```sql
    SELECT * FROM ordertotals;
    START TRANSACTION;
    DELETE FRMO ordertotals;
    SELECT * FROM ordertotals;
    ROLLBACK;
    SELECT * FROM ordertotals;
    ```
    - 事务处理用来管理INSERT、UPDATE和DELETE语句。不能回退SELECT、CREATE和DROP，这些语句可以使用，但如果执行回退，不会被撤销
- Q:COMMIT命令示例
    - 一般的MySQL语句是直接针对数据库表执行和编写的，即隐含提交(implicit commit)，即提交(写或保存)操作是自动进行的
    - 但事务处理块中必须用COMMIT进行明确的提交
    ```sql
    START TRANSACTION;
    DELETE FROM orderitems WHERE order_num = 20010;
    DELETE FROM orders WHERE order_num = 20010;
    COMMIT;
    ```
- Q:使用保留点，支持回退部分事务处理
    ```sql
    SAVEPOINT delete1;
    ...
    ROLLBACK TO delete1;
    ```
- Q:更改默认的提交行为
    - 默认MySQL是自动提交所有更改。即任何时候你执行一条MySQL语句，该语句实际上都是针对表执行的，而且所做的更改立即生效，不管有没有COMMIT语句
    - 为指示MySQL不自动提交更改，可使用语句`SET autocommit=0;`
    - 注意：autocommit标志是针对每个连接而不是服务器的

## 第27章 全球化和本地化
- Q:字符集、编码、校对是什么
    - 字符集：字母和符号的集合
    - 编码：某个字符集成员的内部表示
    - 校对：规定字符如何比较的指令
- Q:查看所支持的字符集完整列表以及每个字符集的描述和默认校对
    ```sql
    mysql> SHOW CHARACTER SET;
    +----------+---------------------------------+---------------------+--------+
    | Charset  | Description                     | Default collation   | Maxlen |
    +----------+---------------------------------+---------------------+--------+
    | big5     | Big5 Traditional Chinese        | big5_chinese_ci     |      2 |
    | ascii    | US ASCII                        | ascii_general_ci    |      1 |
    | ujis     | EUC-JP Japanese                 | ujis_japanese_ci    |      3 |
    | koi8u    | KOI8-U Ukrainian                | koi8u_general_ci    |      1 |
    | gb2312   | GB2312 Simplified Chinese       | gb2312_chinese_ci   |      2 |
    | greek    | ISO 8859-7 Greek                | greek_general_ci    |      1 |
    | cp1250   | Windows Central European        | cp1250_general_ci   |      1 |
    | gbk      | GBK Simplified Chinese          | gbk_chinese_ci      |      2 |
    | utf8mb4  | UTF-8 Unicode                   | utf8mb4_general_ci  |      4 |
    | cp1251   | Windows Cyrillic                | cp1251_general_ci   |      1 |
    | utf16    | UTF-16 Unicode                  | utf16_general_ci    |      4 |
    | utf16le  | UTF-16LE Unicode                | utf16le_general_ci  |      4 |
    | cp1256   | Windows Arabic                  | cp1256_general_ci   |      1 |
    | cp1257   | Windows Baltic                  | cp1257_general_ci   |      1 |
    | utf32    | UTF-32 Unicode                  | utf32_general_ci    |      4 |
    | binary   | Binary pseudo charset           | binary              |      1 |
    | eucjpms  | UJIS for Windows Japanese       | eucjpms_japanese_ci |      3 |
    | gb18030  | China National Standard GB18030 | gb18030_chinese_ci  |      4 |
    +----------+---------------------------------+---------------------+--------+
    41 rows in set (0.00 sec)
    ```
- Q:查看所支持校对的完整列表，以及它们使用的字符集
    ```sql
    mysql> SHOW COLLATION;
    +--------------------------+----------+-----+---------+----------+---------+
    | Collation                | Charset  | Id  | Default | Compiled | Sortlen |
    +--------------------------+----------+-----+---------+----------+---------+
    | big5_chinese_ci          | big5     |   1 | Yes     | Yes      |       1 |
    | big5_bin                 | big5     |  84 |         | Yes      |       1 |
    | latin1_german1_ci        | latin1   |   5 |         | Yes      |       1 |
    | latin1_swedish_ci        | latin1   |   8 | Yes     | Yes      |       1 |
    | latin1_danish_ci         | latin1   |  15 |         | Yes      |       1 |
    | latin1_german2_ci        | latin1   |  31 |         | Yes      |       2 |
    | latin1_bin               | latin1   |  47 |         | Yes      |       1 |
    | latin1_general_ci        | latin1   |  48 |         | Yes      |       1 |
    | latin1_general_cs        | latin1   |  49 |         | Yes      |       1 |
    | latin1_spanish_ci        | latin1   |  94 |         | Yes      |       1 |
    | gb2312_chinese_ci        | gb2312   |  24 | Yes     | Yes      |       1 |
    | gb2312_bin               | gb2312   |  86 |         | Yes      |       1 |
    | gbk_chinese_ci           | gbk      |  28 | Yes     | Yes      |       1 |
    | gbk_bin                  | gbk      |  87 |         | Yes      |       1 |
    | utf8_general_ci          | utf8     |  33 | Yes     | Yes      |       1 |
    | utf8_bin                 | utf8     |  83 |         | Yes      |       1 |
    | utf8_unicode_ci          | utf8     | 192 |         | Yes      |       8 |
    | utf8_icelandic_ci        | utf8     | 193 |         | Yes      |       8 |
    | utf8_roman_ci            | utf8     | 207 |         | Yes      |       8 |
    | utf8_persian_ci          | utf8     | 208 |         | Yes      |       8 |
    | utf8_croatian_ci         | utf8     | 213 |         | Yes      |       8 |
    | utf8_unicode_520_ci      | utf8     | 214 |         | Yes      |       8 |
    | utf8_vietnamese_ci       | utf8     | 215 |         | Yes      |       8 |
    | utf8_general_mysql500_ci | utf8     | 223 |         | Yes      |       1 |
    | gb18030_chinese_ci       | gb18030  | 248 | Yes     | Yes      |       2 |
    | gb18030_bin              | gb18030  | 249 |         | Yes      |       1 |
    | gb18030_unicode_520_ci   | gb18030  | 250 |         | Yes      |       8 |
    +--------------------------+----------+-----+---------+----------+---------+
    222 rows in set (0.00 sec)
    ```
    - 有的字符集具有不止一种校对。如latin1对不同的欧洲语言有几种校对，而且许多校对出现两次，一次区分大小写（由_cs表示)，一次不区分大小写（由_ci表示）
    - 通常系统管理在安装时定义一个默认的字符集和校对。此外，也可以在创建数据库时，指定默认的字符集和校对
- Q:确定所用的字符集和校对
    ```sql
    mysql> SHOW VARIABLES LIKE 'character%';
    +--------------------------+----------------------------+
    | Variable_name            | Value                      |
    +--------------------------+----------------------------+
    | character_set_client     | utf8                       |
    | character_set_connection | utf8                       |
    | character_set_database   | latin1                     |
    | character_set_filesystem | binary                     |
    | character_set_results    | utf8                       |
    | character_set_server     | latin1                     |
    | character_set_system     | utf8                       |
    | character_sets_dir       | /usr/share/mysql/charsets/ |
    +--------------------------+----------------------------+
    8 rows in set (0.00 sec)

    mysql> SHOW VARIABLES LIKE 'collation%';
    +----------------------+-------------------+
    | Variable_name        | Value             |
    +----------------------+-------------------+
    | collation_connection | utf8_general_ci   |
    | collation_database   | latin1_swedish_ci |
    | collation_server     | latin1_swedish_ci |
    +----------------------+-------------------+
    3 rows in set (0.00 sec)
    ```
    - 字符集很少是服务器范围(甚至是数据库范围)的设置。不同的表，甚至不同的列都可能需要不同的字符集，而且两者都可以在创建表时指定
- Q:使用带子句的CREATE TABLE给表指定字符集和校对
    ```sql
    mysql> CREATE TABLE mytable
        -> (
        ->    columnn1 INT,
        ->    columnn2 VARCHAR(10)
        -> ) DEFAULT CHARACTER SET hebrew
        ->   COLLATE hebrew_general_ci;
    Query OK, 0 rows affected (0.22 sec)
    ```
- Q:MySQL如何确定使用什么样的字符集和校对
    - 1.如果指定CHARACTER SET和COLLATE两者，则使用这些值
    - 2.如果只指定CHARACTER SET，则使用此字符集及其默认的校对(如SHOW CHARACTER SET的结果中所示)
    - 3.如果既不指定CHARACTER SET，也不指定COLLATE，则使用数据库默认
- Q:MySQL如何对特定列设置字符集和校对
    ```sql
    mysql> CREATE TABLE mytable
        -> (
        ->    columnn1 INT,
        ->    columnn2 VARCHAR(10),
        ->    columnn3 VARCHAR(10) CHARACTER SET latin1 COLLATE latin1_general_ci
        -> ) DEFAULT CHARACTER SET hebrew
        ->   COLLATE hebrew_general_ci;
    Query OK, 0 rows affected (0.26 sec)
    ```
- Q:如何使用与创建表时不同的校对顺序排序特定的SELECT语句
    ```sql
    mysql> SELECT * FROM customers
        -> ORDER BY lastname, firstname COLLATE latin1_general_cs;
    ```
    - 校对在对用ORDER BY子句检索出来的数据排序时起重要的作用，这里SELECT使用COLLATE指定一个备用的校对顺序，这会影响到结果排序的次序
    - 这个例子为区分大小写的校对。反之也可以
- Q:COLLATE还可以使用在什么语句
    - SELECT、ORDER BY、GROUP BY、HAVING、聚集函数、别名等
    - 值得注意的是，如果绝对需要，串可以使用Cast()或Convert()函数在字符集之间进行转换

## 第28章 安全管理
- Q:获得所有用户账号列表
    ```sql
    USE mysql;
    SELECT user FROM user;
    ```
- Q:创建用户账号
    ```sql
    CREATE USER ben IDENTIFIED BY 'pa@$$w0rd';
    ```
- Q:重新命名一个用户账户
    ```sql
    RENAME USER ben TO bforta;
    ```
- Q:删除用户账户
    ```sql
    DROP USER bforta;
    ```
- Q:查看用户账户权限
    ```sql
    mysql> SHOW GRANTS FOR root;
    +-------------------------------------------+
    | Grants for root@%                         |
    +-------------------------------------------+
    | GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' |
    +-------------------------------------------+
    1 row in set (0.01 sec)
    ```
    - 如果显示`USAGE ON *.*`，其中USAGE表示根本没有权限
- Q:允许用户在crashcourse数据库的所有表上使用SELECT
    ```sql
    GRANT SELECT ON crashcourse.* TO bforta;
    ```
- Q:取消赋予用户bforta的SELECT访问权限
    ```sql
    REVOKE SELECT ON crashcourse.* FROM bforta;
    ```
- Q:权限表
    - ![](https://img.shiqi-lu.tech/20210219172421.png)
- Q:设置自己的口令
    ```sql
    SET PASSWORD = Password('n3w p@$$w0rd');
    ```
- Q:更改用户口令
    ```sql
    SET PASSWORD FOR bforta = Password('n3w p@$$w0rd');
    ```

## 第29章 数据库维护
- Q:数据备份的3个方案
    - 备份前首先使用`FLUSH TABLES`刷新未写数据
    - 使用mysqldump转储所有数据库内容到某个外部文件
    - 使用mysqlhotcopy从一个数据库复制所有数据(某些数据库引擎不支持)
    - 使用MySQL的`BACKUP TABLE`或`SELECT INTO OUTFILE`转储所有数据到某个外部文件。这两条语句都接受要创建的系统文件名，此系统文件必须不存在。可用`RESTORE TABLE`来复原
- Q:检查表键是否正确
    ```sql
    mysql> ANALYZE TABLE orders;
    +--------------------+---------+----------+----------+
    | Table              | Op      | Msg_type | Msg_text |
    +--------------------+---------+----------+----------+
    | crashcourse.orders | analyze | status   | OK       |
    +--------------------+---------+----------+----------+
    1 row in set (0.06 sec)
    ```
- Q:检查CHECK TABLE
    ```sql
    mysql> CHECK TABLE orders, orderitems;
    +------------------------+-------+----------+----------+
    | Table                  | Op    | Msg_type | Msg_text |
    +------------------------+-------+----------+----------+
    | crashcourse.orders     | check | status   | OK       |
    | crashcourse.orderitems | check | status   | OK       |
    +------------------------+-------+----------+----------+
    2 rows in set (0.00 sec)
    ```
- Q:修复相应表
    - `REPAIR TABLE`
- Q:从一个表中删除大量数据后收回所用空间
    - `OPTIMIZE TABLE`
- Q:MySQL的日志文件
    - 错误日志：包含启动和关闭问题以及任意关键错误的细节。通常名为 hostname.err，位于 data 目录
    - 查询日志：记录所有MySQL活动，在诊断问题时非常有用。此日志文件可能会很快地变得非常大，因此不应该长期使用它。通常名为 hostname.log ， 位于 data 目录
    - 二进制日志：记录更新过数据的所有语句。通常名为hostname-bin，位于 data 目录
    - 慢查询日志：记录执行缓慢的任何查询。这 个日志在确定数据库何处需要优化很有用。 此日志通常名为 hostname-slow.log ， 位于 data 目录

## 第30章 改善性能
- Q:改善性能的建议
    - MySQL（与所有DBMS一样）具有特定的硬件建议。对用于生产的服务器来说，应该坚持遵循这些硬件建议
    - 关键的生产DBMS应该运行在自己的专用服务器上
    - MySQL是用一系列的默认设置预先配置的，从这些设置开始通常是很好的。但过一段时间后你可能需要调整内存分配、缓冲区大小等。（为查看当前设置， 可使用 `SHOW VARIABLES;` 和 `SHOW STATUS;`）
    - MySQL是一个多用户多线程的DBMS。如果这些任务中的某一个执行缓慢，则所有请求都会执行缓慢。如果你到显著的性能不良，可使用`SHOW PROCESSLIST`显示所有活动进程（以及它们的线程ID和执行时间）。还可用KILL命令终结某个特定的进程
    - 总有不止一种方法编写同一条SELECT语句。应该试验联结、并、子查询等，找出最佳的方法
    - 使用EXPLAIN语句让MySQL解释它将如何执行一条SELECT语句
    - 一般来说，存储过程执行得比一条一条地执行其中的各条MySQL语句快
    - 应该总是使用正确的数据类型
    - 决不要检索比需求还要多的数据。除非你真正需要每个列，否则不要用`SELECT *`
    - 有的操作（包括INSERT）支持一个可选的DELAYED关键字，如果使用它，将把控制立即返回给调用程序，并且一旦有可能就实际执行该操作
    - 在导入数据时，应该关闭自动提交。你可能还想删除索引（包括FULLTEXT索引），然后在导入完成后再重建它们
    - 必须索引数据库表以改善数据检索的性能。确定索引什么不是一件微不足道的任务， 需要分析使用的 SELECT 语句以找出重复的WHERE和ORDER BY子句。如果一个简单的WHERE子句返回结果所花的时间太长，则可以断定其中使用的列（或几个列）就是需要索引的对象
    - SELECT 语句中有一系列复杂的 OR 条件时，通过使用多条 SELECT 语句和连接它们的 UNION 语句， 可看到极大的性能改进
    - 索引改善数据检索的性能，但损害数据插入、删除和更新的性能。 如果有一些表，它们收集数据且不经常被搜索，则在有必要之前不要索引它们。（索引可根据需要添加和删除。）
    - LIKE很慢。一般来说，最好是使用FULLTEXT而不是LIKE
    - 数据库是不断变化的实体。一组优化良好的表一会儿后可能就面目全非了。由于表的使用和内容的更改，理想的优化和配置也会改变
    - 最重要的规则就是，每条规则在某些条件下都会被打破

## 附录D MySQL数据类型
- 串数据类型
    - ![](https://img.shiqi-lu.tech/20210325082641.png)
- 数值数据类型
    - ![](https://img.shiqi-lu.tech/20210325082724.png)
- 日期和时间数据类型
    - ![](https://img.shiqi-lu.tech/20210325082748.png)
- 二进制数据类型
    - ![](https://img.shiqi-lu.tech/20210325082804.png)
