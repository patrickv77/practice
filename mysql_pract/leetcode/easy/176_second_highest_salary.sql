CREATE DATABASE 176_second_highest_salary;
USE 176_second_highest_salary;

Create table If Not Exists Employee (id int, salary int);
Truncate table Employee;
insert into Employee (id, salary) values ('1', '100');
insert into Employee (id, salary) values ('2', '200');
insert into Employee (id, salary) values ('3', '300');

SELECT * FROM Employee;

SELECT MAX(salary) AS SecondHighestSalary FROM Employee
WHERE salary NOT IN (SELECT MAX(salary) FROM Employee); 

/*
Runtime: 335 ms, faster than 14.72% of MySQL online submissions for Second Highest Salary.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Second Highest Salary.
*/

