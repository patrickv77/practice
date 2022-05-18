CREATE DATABASE 185_department_top_three_salaries;
USE 185_department_top_three_salaries;

Create table If Not Exists Employee (id int, name varchar(255), salary int, departmentId int);
Create table If Not Exists Department (id int, name varchar(255));
Truncate table Employee;
insert into Employee (id, name, salary, departmentId) values ('1', 'Joe', '85000', '1');
insert into Employee (id, name, salary, departmentId) values ('2', 'Henry', '80000', '2');
insert into Employee (id, name, salary, departmentId) values ('3', 'Sam', '60000', '2');
insert into Employee (id, name, salary, departmentId) values ('4', 'Max', '90000', '1');
insert into Employee (id, name, salary, departmentId) values ('5', 'Janet', '69000', '1');
insert into Employee (id, name, salary, departmentId) values ('6', 'Randy', '85000', '1');
insert into Employee (id, name, salary, departmentId) values ('7', 'Will', '70000', '1');
Truncate table Department;
insert into Department (id, name) values ('1', 'IT');
insert into Department (id, name) values ('2', 'Sales');

SELECT * FROM Employee;

SELECT * FROM Employee
JOIN Department ON Department.id = Employee.departmentId;

SELECT * 
FROM
	( SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
	  FROM Employee AS e
	  JOIN Department AS d ON d.id = e.departmentId
      #ORDER BY e.salary DESC, e.id asc LIMIT 3
	) AS tmp;
    
    
    
with cte as (
    select 
        d.name as Department,
        e.name as Employee,
        e.salary as Salary,
        dense_rank() over(partition by e.departmentId order by e.salary desc) as rnk
    from Employee e
    inner join Department d on e.departmentId = d.id
)
select Department, Employee, Salary
from cte
where rnk <= 3;

/*
Runtime: 732 ms, faster than 74.56% of MySQL online submissions for Department Top Three Salaries.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Department Top Three Salaries.
*/
