CREATE DATABASE 1873_calculate_special_bonus;
USE 1873_calculate_special_bonus;

CREATE TABLE Employees (
	employee_id INT,
    name VARCHAR(255),
    salary INT
);

INSERT INTO Employees (employee_id, name, salary)
VALUES (2,'Meir',3000),
	   (3,'Michael',3800),
	   (7,'Addilyn',7400),
       (8,'Juan',6100),
       (9,'Kannon',7700);
       
SELECT employee_id,
CASE 
  WHEN name NOT LIKE 'M%' AND employee_id%2=1 
  THEN salary ELSE 0 
END 
AS bonus FROM Employees;


/*
Runtime: 700 ms, faster than 24.25% of MySQL online submissions for Calculate Special Bonus.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Calculate Special Bonus.
*/
