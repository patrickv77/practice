CREATE DATABASE 627_swap_salary;
USE 627_swap_salary;

CREATE TABLE Salary (
  id INT,
  name VARCHAR(255),
  sex ENUM('m', 'f'),
  salary INT
);

INSERT INTO Salary (id, name, sex, salary)
VALUES (1,'A','m',2500),
	   (2,'B','f',1500),
       (3,'C','m',5500),
       (4,'D','f',500);
       
SELECT * FROM Salary;
       
UPDATE Salary
SET sex = CASE 
			WHEN sex = 'm' THEN 'f'
            ELSE 'm'
            END;

/*
Runtime: 304 ms, faster than 25.47% of MySQL online submissions for Swap Salary.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Swap Salary.
*/