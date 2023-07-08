---
title: 《MySQL必知必会》学习笔记1-10章
date: 2021-02-19 10:18:22
tags:
- 数据库
- MySQL
categories:
- MySQL
description: 《MySQL必知必会》学习笔记1-10章
toc:
  enable: true
  number: false
---

## 第1章 了解SQL
## 第2章 MySQL简介
## 第3章 使用MySQL
- Q:显示数据库列表
    - `show databases;`
- Q:连接数据库
    - `use crashcourse`
- Q:获得数据库内的表的列表
    ```sql
    mysql> show tables;
    +-----------------------+
    | Tables_in_crashcourse |
    +-----------------------+
    | customers             |
    | orderitems            |
    | orders                |
    | productnotes          |
    | products              |
    | vendors               |
    +-----------------------+
    6 rows in set (0.00 sec)
    ```
- Q:显示表列
    ```sql
    mysql> SHOW COLUMNS FROM customers;
    +--------------+-----------+------+-----+---------+----------------+
    | Field        | Type      | Null | Key | Default | Extra          |
    +--------------+-----------+------+-----+---------+----------------+
    | cust_id      | int(11)   | NO   | PRI | NULL    | auto_increment |
    | cust_name    | char(50)  | NO   |     | NULL    |                |
    | cust_address | char(50)  | YES  |     | NULL    |                |
    | cust_city    | char(50)  | YES  |     | NULL    |                |
    | cust_state   | char(5)   | YES  |     | NULL    |                |
    | cust_zip     | char(10)  | YES  |     | NULL    |                |
    | cust_country | char(50)  | YES  |     | NULL    |                |
    | cust_contact | char(50)  | YES  |     | NULL    |                |
    | cust_email   | char(255) | YES  |     | NULL    |                |
    +--------------+-----------+------+-----+---------+----------------+
    9 rows in set (0.00 sec)
    ```

    - 和使用`DESCRIBE customers;`一个效果

## 第4章 检索数据
- Q:检索单个列
    ```sql
    mysql> select prod_name from products;
    +----------------+
    | prod_name      |
    +----------------+
    | .5 ton anvil   |
    | 1 ton anvil    |
    | 2 ton anvil    |
    | Detonator      |
    | Bird seed      |
    | Carrots        |
    | Fuses          |
    | JetPack 1000   |
    | JetPack 2000   |
    | Oil can        |
    | Safe           |
    | Sling          |
    | TNT (1 stick)  |
    | TNT (5 sticks) |
    +----------------+
    14 rows in set (0.00 sec)
    ```
- Q:检索多个列
    ```sql
    mysql> SELECT prod_id, prod_name, prod_price FROM products;
    +---------+----------------+------------+
    | prod_id | prod_name      | prod_price |
    +---------+----------------+------------+
    | ANV01   | .5 ton anvil   |       5.99 |
    | ANV02   | 1 ton anvil    |       9.99 |
    | ANV03   | 2 ton anvil    |      14.99 |
    | DTNTR   | Detonator      |      13.00 |
    | FB      | Bird seed      |      10.00 |
    | FC      | Carrots        |       2.50 |
    | FU1     | Fuses          |       3.42 |
    | JP1000  | JetPack 1000   |      35.00 |
    | JP2000  | JetPack 2000   |      55.00 |
    | OL1     | Oil can        |       8.99 |
    | SAFE    | Safe           |      50.00 |
    | SLING   | Sling          |       4.49 |
    | TNT1    | TNT (1 stick)  |       2.50 |
    | TNT2    | TNT (5 sticks) |      10.00 |
    +---------+----------------+------------+
    14 rows in set (0.00 sec)
    ```
- Q:检索所有列
    ```sql
    mysql> SELECT * FROM products;
    +---------+---------+----------------+------------+----------------------------------------------------------------+
    | prod_id | vend_id | prod_name      | prod_price | prod_desc                                                      |
    +---------+---------+----------------+------------+----------------------------------------------------------------+
    | ANV01   |    1001 | .5 ton anvil   |       5.99 | .5 ton anvil, black, complete with handy hook                  |
    | ANV02   |    1001 | 1 ton anvil    |       9.99 | 1 ton anvil, black, complete with handy hook and carrying case |
    | ANV03   |    1001 | 2 ton anvil    |      14.99 | 2 ton anvil, black, complete with handy hook and carrying case |
    | DTNTR   |    1003 | Detonator      |      13.00 | Detonator (plunger powered), fuses not included                |
    | FB      |    1003 | Bird seed      |      10.00 | Large bag (suitable for road runners)                          |
    | FC      |    1003 | Carrots        |       2.50 | Carrots (rabbit hunting season only)                           |
    | FU1     |    1002 | Fuses          |       3.42 | 1 dozen, extra long                                            |
    | JP1000  |    1005 | JetPack 1000   |      35.00 | JetPack 1000, intended for single use                          |
    | JP2000  |    1005 | JetPack 2000   |      55.00 | JetPack 2000, multi-use                                        |
    | OL1     |    1002 | Oil can        |       8.99 | Oil can, red                                                   |
    | SAFE    |    1003 | Safe           |      50.00 | Safe with combination lock                                     |
    | SLING   |    1003 | Sling          |       4.49 | Sling, one size fits all                                       |
    | TNT1    |    1003 | TNT (1 stick)  |       2.50 | TNT, red, single stick                                         |
    | TNT2    |    1003 | TNT (5 sticks) |      10.00 | TNT, red, pack of 10 sticks                                    |
    +---------+---------+----------------+------------+----------------------------------------------------------------+
    14 rows in set (0.00 sec)
    ```
- Q:检索并去重
    ```sql
    mysql> SELECT DISTINCT vend_id FROM products;
    +---------+
    | vend_id |
    +---------+
    |    1001 |
    |    1002 |
    |    1003 |
    |    1005 |
    +---------+
    4 rows in set (0.00 sec)
    ```
- Q:只返回不多于5行
    ```sql
    mysql> SELECT prod_name FROM products LIMIT 5;
    +--------------+
    | prod_name    |
    +--------------+
    | .5 ton anvil |
    | 1 ton anvil  |
    | 2 ton anvil  |
    | Detonator    |
    | Bird seed    |
    +--------------+
    5 rows in set (0.00 sec)
    ```
- Q:检索返回从第5行开始的5行
    ```sql
    mysql> SELECT prod_name FROM products LIMIT 5,5;
    +--------------+
    | prod_name    |
    +--------------+
    | Carrots      |
    | Fuses        |
    | JetPack 1000 |
    | JetPack 2000 |
    | Oil can      |
    +--------------+
    5 rows in set (0.00 sec)
    ```
    - 其中第一个数表示开始的位置，从0开始，第二个数为要检索的行数
    - 支持另一种语法`LIMIT 5 OFFSET 3`：从第3行开始取5行
- Q:使用完全限定的表名查询
    ```sql
    mysql> SELECT products.prod_name FROM crashcourse.products;
    +----------------+
    | prod_name      |
    +----------------+
    | .5 ton anvil   |
    | 1 ton anvil    |
    | 2 ton anvil    |
    | Detonator      |
    | Bird seed      |
    | Carrots        |
    | Fuses          |
    | JetPack 1000   |
    | JetPack 2000   |
    | Oil can        |
    | Safe           |
    | Sling          |
    | TNT (1 stick)  |
    | TNT (5 sticks) |
    +----------------+
    14 rows in set (0.00 sec)
    ```

## 第５章 排序检索数据
- Q:检索数据并按字母顺序排列
    ```sql
    mysql> SELECT prod_name FROM products ORDER BY prod_name;
    +----------------+
    | prod_name      |
    +----------------+
    | .5 ton anvil   |
    | 1 ton anvil    |
    | 2 ton anvil    |
    | Bird seed      |
    | Carrots        |
    | Detonator      |
    | Fuses          |
    | JetPack 1000   |
    | JetPack 2000   |
    | Oil can        |
    | Safe           |
    | Sling          |
    | TNT (1 stick)  |
    | TNT (5 sticks) |
    +----------------+
    14 rows in set (0.01 sec)
    ```
- Q:检索时按照多个条件进行排序
    ```sql
    mysql> SELECT prod_id, prod_price, prod_name 
        -> FROM products ORDER BY prod_price, prod_name;
    +---------+------------+----------------+
    | prod_id | prod_price | prod_name      |
    +---------+------------+----------------+
    | FC      |       2.50 | Carrots        |
    | TNT1    |       2.50 | TNT (1 stick)  |
    | FU1     |       3.42 | Fuses          |
    | SLING   |       4.49 | Sling          |
    | ANV01   |       5.99 | .5 ton anvil   |
    | OL1     |       8.99 | Oil can        |
    | ANV02   |       9.99 | 1 ton anvil    |
    | FB      |      10.00 | Bird seed      |
    | TNT2    |      10.00 | TNT (5 sticks) |
    | DTNTR   |      13.00 | Detonator      |
    | ANV03   |      14.99 | 2 ton anvil    |
    | JP1000  |      35.00 | JetPack 1000   |
    | SAFE    |      50.00 | Safe           |
    | JP2000  |      55.00 | JetPack 2000   |
    +---------+------------+----------------+
    14 rows in set (0.00 sec)
    ```
- Q:检索并降序排列
    ```sql
    mysql> SELECT prod_id, prod_price, prod_name 
        -> FROM products ORDER BY prod_price DESC, prod_name;
    +---------+------------+----------------+
    | prod_id | prod_price | prod_name      |
    +---------+------------+----------------+
    | JP2000  |      55.00 | JetPack 2000   |
    | SAFE    |      50.00 | Safe           |
    | JP1000  |      35.00 | JetPack 1000   |
    | ANV03   |      14.99 | 2 ton anvil    |
    | DTNTR   |      13.00 | Detonator      |
    | FB      |      10.00 | Bird seed      |
    | TNT2    |      10.00 | TNT (5 sticks) |
    | ANV02   |       9.99 | 1 ton anvil    |
    | OL1     |       8.99 | Oil can        |
    | ANV01   |       5.99 | .5 ton anvil   |
    | SLING   |       4.49 | Sling          |
    | FU1     |       3.42 | Fuses          |
    | FC      |       2.50 | Carrots        |
    | TNT1    |       2.50 | TNT (1 stick)  |
    +---------+------------+----------------+
    14 rows in set (0.00 sec)
    ```

## 第６章 过滤数据
- Q:根据指定的搜索条件进行过滤
    ```sql
    mysql> SELECT prod_name, prod_price
        -> FROM products
        -> WHERE prod_price = 2.50;
    +---------------+------------+
    | prod_name     | prod_price |
    +---------------+------------+
    | Carrots       |       2.50 |
    | TNT (1 stick) |       2.50 |
    +---------------+------------+
    2 rows in set (0.00 sec)
    ```
- Q:WHERE子句操作符的条件
    - ![](https://img.shiqi-lu.tech/20210209151932.png)
- Q:使用不同WHERE条件的例子
    ```sql
    mysql> SELECT prod_name, prod_price
        -> FROM products
        -> WHERE prod_price < 10;
    +---------------+------------+
    | prod_name     | prod_price |
    +---------------+------------+
    | .5 ton anvil  |       5.99 |
    | 1 ton anvil   |       9.99 |
    | Carrots       |       2.50 |
    | Fuses         |       3.42 |
    | Oil can       |       8.99 |
    | Sling         |       4.49 |
    | TNT (1 stick) |       2.50 |
    +---------------+------------+
    7 rows in set (0.00 sec)
    ```
    ```sql
    mysql> SELECT prod_name, prod_price
        -> FROM products
        -> WHERE prod_price BETWEEN 5 AND 10;
    +----------------+------------+
    | prod_name      | prod_price |
    +----------------+------------+
    | .5 ton anvil   |       5.99 |
    | 1 ton anvil    |       9.99 |
    | Bird seed      |      10.00 |
    | Oil can        |       8.99 |
    | TNT (5 sticks) |      10.00 |
    +----------------+------------+
    5 rows in set (0.00 sec)
    ```
- Q:检查具有空值
    ```sql
    mysql> SELECT prod_name
        -> FROM products
        -> WHERE prod_price IS NULL;
    Empty set (0.00 sec)
    ```
    ```sql
    mysql> SELECT cust_id
        -> FROM customers
        -> WHERE cust_email IS NULL;
    +---------+
    | cust_id |
    +---------+
    |   10002 |
    |   10005 |
    +---------+
    2 rows in set (0.00 sec)
    ```

## 第7章 数据过滤
- Q:使用AND操作符组合WHERE子句
    ```sql
    mysql> SELECT prod_id, prod_price, prod_name
        -> FROM products
        -> WHERE vend_id = 1003 AND prod_price <= 10;
    +---------+------------+----------------+
    | prod_id | prod_price | prod_name      |
    +---------+------------+----------------+
    | FB      |      10.00 | Bird seed      |
    | FC      |       2.50 | Carrots        |
    | SLING   |       4.49 | Sling          |
    | TNT1    |       2.50 | TNT (1 stick)  |
    | TNT2    |      10.00 | TNT (5 sticks) |
    +---------+------------+----------------+
    5 rows in set (0.00 sec)
    ```
- Q:使用OR操作符
    ```sql
    mysql> SELECT prod_name, prod_price
        -> FROM products
        -> WHERE vend_id = 1002 OR vend_id = 1003;
    +----------------+------------+
    | prod_name      | prod_price |
    +----------------+------------+
    | Detonator      |      13.00 |
    | Bird seed      |      10.00 |
    | Carrots        |       2.50 |
    | Fuses          |       3.42 |
    | Oil can        |       8.99 |
    | Safe           |      50.00 |
    | Sling          |       4.49 |
    | TNT (1 stick)  |       2.50 |
    | TNT (5 sticks) |      10.00 |
    +----------------+------------+
    9 rows in set (0.00 sec)
    ```
- Q:多条件组合
    ```sql
    mysql> SELECT prod_name, prod_price
        -> FROM products
        -> WHERE (vend_id = 1002 OR vend_id = 1003) AND prod_price >= 10;
    +----------------+------------+
    | prod_name      | prod_price |
    +----------------+------------+
    | Detonator      |      13.00 |
    | Bird seed      |      10.00 |
    | Safe           |      50.00 |
    | TNT (5 sticks) |      10.00 |
    +----------------+------------+
    4 rows in set (0.00 sec)
    ```
- Q:IN操作符
    ```sql
    mysql> SELECT prod_name, prod_price
        -> FROM products
        -> WHERE vend_id IN (1002, 1003)
        -> ORDER BY prod_name;
    +----------------+------------+
    | prod_name      | prod_price |
    +----------------+------------+
    | Bird seed      |      10.00 |
    | Carrots        |       2.50 |
    | Detonator      |      13.00 |
    | Fuses          |       3.42 |
    | Oil can        |       8.99 |
    | Safe           |      50.00 |
    | Sling          |       4.49 |
    | TNT (1 stick)  |       2.50 |
    | TNT (5 sticks) |      10.00 |
    +----------------+------------+
    9 rows in set (0.00 sec)
    ```
- Q:NOT操作符示例
    ```sql
    mysql> SELECT prod_name, prod_price
        -> FROM products
        -> WHERE vend_id NOT IN (1002,1003)
        -> ORDER BY prod_name;
    +--------------+------------+
    | prod_name    | prod_price |
    +--------------+------------+
    | .5 ton anvil |       5.99 |
    | 1 ton anvil  |       9.99 |
    | 2 ton anvil  |      14.99 |
    | JetPack 1000 |      35.00 |
    | JetPack 2000 |      55.00 |
    +--------------+------------+
    5 rows in set (0.00 sec)
    ```

## 第8章 用通配符进行过滤
- Q:百分号%通配符示例
    - 可匹配0、1或多个字符
    ```sql
    mysql> SELECT prod_id, prod_name
        -> FROM products
        -> WHERE prod_name LIKE 'jet%';
    +---------+--------------+
    | prod_id | prod_name    |
    +---------+--------------+
    | JP1000  | JetPack 1000 |
    | JP2000  | JetPack 2000 |
    +---------+--------------+
    2 rows in set (0.00 sec)
    ```
- Q:下划线_通配符示例
    ```sql
    mysql> SELECT prod_id, prod_name
        -> FROM products
        -> WHERE prod_name LIKE '_ ton anvil';
    +---------+-------------+
    | prod_id | prod_name   |
    +---------+-------------+
    | ANV02   | 1 ton anvil |
    | ANV03   | 2 ton anvil |
    +---------+-------------+
    2 rows in set (0.00 sec)
    ```

## 第9章 用正则表达式进行搜索
- Q:基本字符匹配
    ```sql
    mysql> SELECT prod_name
        -> FROM products
        -> WHERE prod_name REGEXP '1000'
        -> ORDER BY prod_name;
    +--------------+
    | prod_name    |
    +--------------+
    | JetPack 1000 |
    +--------------+
    1 row in set (0.00 sec)
    ```
- Q:匹配范围
    ```sql
    mysql> SELECT prod_name
        -> FROM products
        -> WHERE prod_name REGEXP '[1-5] Ton';
    +--------------+
    | prod_name    |
    +--------------+
    | .5 ton anvil |
    | 1 ton anvil  |
    | 2 ton anvil  |
    +--------------+
    3 rows in set (0.00 sec)
    ```
- Q:匹配特殊字符
    - `\\-`为查找`-`，`\\.`为查找`.`，`\\\`查找`\`
    ```sql
    mysql> SELECT prod_name 
        -> FROM products 
        -> WHERE prod_name REGEXP '\\.';
    +--------------+
    | prod_name    |
    +--------------+
    | .5 ton anvil |
    +--------------+
    1 row in set (0.01 sec)
    ```
- 基本和Linux的正则没区别了，不展开

## 第10章 创建计算字段
- Q:拼接字段的使用
    ```sql
    mysql> SELECT Concat(vend_name, '  (', vend_country, ')')
        -> FROM vendors
        -> ORDER BY vend_name;
    +---------------------------------------------+
    | Concat(vend_name, '  (', vend_country, ')') |
    +---------------------------------------------+
    | ACME  (USA)                                 |
    | Anvils R Us  (USA)                          |
    | Furball Inc.  (USA)                         |
    | Jet Set  (England)                          |
    | Jouets Et Ours  (France)                    |
    | LT Supplies  (USA)                          |
    +---------------------------------------------+
    6 rows in set (0.01 sec)
    ```
- Q:使用列别名
    ```sql
    mysql> SELECT Concat(vend_name, '  (', vend_country, ')') AS vend_title
        -> FROM vendors
        -> ORDER BY vend_name;
    +--------------------------+
    | vend_title               |
    +--------------------------+
    | ACME  (USA)              |
    | Anvils R Us  (USA)       |
    | Furball Inc.  (USA)      |
    | Jet Set  (England)       |
    | Jouets Et Ours  (France) |
    | LT Supplies  (USA)       |
    +--------------------------+
    6 rows in set (0.00 sec)
    ```
- Q:进行计算
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
    ```
