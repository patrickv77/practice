CREATE DATABASE 586_customer_placing_the_largest_number_of_orders;
USE 586_customer_placing_the_largest_number_of_orders;

Create table If Not Exists orders (order_number int, customer_number int);
Truncate table orders;
insert into orders (order_number, customer_number) values ('1', '1');
insert into orders (order_number, customer_number) values ('2', '2');
insert into orders (order_number, customer_number) values ('3', '3');
insert into orders (order_number, customer_number) values ('4', '3');

SELECT * FROM orders;

/*

*/