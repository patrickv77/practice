CREATE DATABASE 586_customer_placing_the_largest_number_of_orders;
USE 586_customer_placing_the_largest_number_of_orders;

Create table If Not Exists orders (order_number int, customer_number int);
Truncate table orders;
insert into orders (order_number, customer_number) values ('1', '1');
insert into orders (order_number, customer_number) values ('2', '2');
insert into orders (order_number, customer_number) values ('3', '3');
insert into orders (order_number, customer_number) values ('4', '3');

SELECT * FROM orders;

SELECT customer_number FROM orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC
LIMIT 1;


/*
Runtime: 493 ms, faster than 47.26% of MySQL online submissions for Customer Placing the Largest Number of Orders.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Customer Placing the Largest Number of Orders.
*/