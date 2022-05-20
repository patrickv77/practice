CREATE DATABASE 1795_rearrange_products_table;
USE 1795_rearrange_products_table;

Create table If Not Exists Products (product_id int, store1 int, store2 int, store3 int);
Truncate table Products;
insert into Products (product_id, store1, store2, store3) values ('0', '95', '100', '105');
insert into Products (product_id, store1, store2, store3) values ('1', '70', NULL, '80');

SELECT * FROM Products;

SELECT product_id,"store1" AS STORE ,store1 AS price FROM Products WHERE  store1 IS NOT NULL
UNION
Select product_id,"store2" AS STORE ,store2 AS price FROM Products WHERE  store2 IS NOT NULL
UNION
Select product_id,"store3" AS STORE ,store3 AS price FROM Products WHERE  store3 IS NOT NULL;

/*
Runtime: 512 ms, faster than 61.80% of MySQL online submissions for Rearrange Products Table.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Rearrange Products Table.
*/