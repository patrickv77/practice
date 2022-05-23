CREATE DATABASE 1581_customers_who_visited_but_did_not_make_any_transactions;
USE 1581_customers_who_visited_but_did_not_make_any_transactions;

Create table If Not Exists Visits(visit_id int, customer_id int);
Create table If Not Exists Transactions(transaction_id int, visit_id int, amount int);
Truncate table Visits;
insert into Visits (visit_id, customer_id) values ('1', '23');
insert into Visits (visit_id, customer_id) values ('2', '9');
insert into Visits (visit_id, customer_id) values ('4', '30');
insert into Visits (visit_id, customer_id) values ('5', '54');
insert into Visits (visit_id, customer_id) values ('6', '96');
insert into Visits (visit_id, customer_id) values ('7', '54');
insert into Visits (visit_id, customer_id) values ('8', '54');
Truncate table Transactions;
insert into Transactions (transaction_id, visit_id, amount) values ('2', '5', '310');
insert into Transactions (transaction_id, visit_id, amount) values ('3', '5', '300');
insert into Transactions (transaction_id, visit_id, amount) values ('9', '5', '200');
insert into Transactions (transaction_id, visit_id, amount) values ('12', '1', '910');
insert into Transactions (transaction_id, visit_id, amount) values ('13', '2', '970');

SELECT customer_id, COUNT(visit_id) as count_no_trans
FROM Visits
WHERE visit_id NOT IN (
    SELECT  visit_id FROM Transactions)
GROUP BY customer_id;

/*
Runtime: 1171 ms, faster than 64.24% of MySQL online submissions for Customer Who Visited but Did Not Make Any Transactions.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Customer Who Visited but Did Not Make Any Transactions.
*/