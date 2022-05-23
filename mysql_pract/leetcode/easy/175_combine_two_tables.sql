CREATE DATABASE 175_combine_two_tables;
USE 175_combine_two_tables;

Create table If Not Exists Person (personId int, firstName varchar(255), lastName varchar(255));
Create table If Not Exists Address (addressId int, personId int, city varchar(255), state varchar(255));
Truncate table Person;
insert into Person (personId, lastName, firstName) values ('1', 'Wang', 'Allen');
insert into Person (personId, lastName, firstName) values ('2', 'Alice', 'Bob');
Truncate table Address;
insert into Address (addressId, personId, city, state) values ('1', '2', 'New York City', 'New York');
insert into Address (addressId, personId, city, state) values ('2', '3', 'Leetcode', 'California');

SELECT * FROM Person;

SELECT p.firstName, p.lastName, a.city, a.state
FROM Person p
LEFT JOIN Address a ON p.personId = a.personId;

/*
Runtime: 422 ms, faster than 43.43% of MySQL online submissions for Combine Two Tables.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Combine Two Tables.
*/

