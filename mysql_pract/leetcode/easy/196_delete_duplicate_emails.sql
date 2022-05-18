CREATE DATABASE 196_delete_duplicate_emails;
USE 196_delete_duplicate_emails;

CREATE TABLE Person (
	id INT,
    email VARCHAR(255)
);

INSERT INTO Person (id, email)
VALUES (1,'john@example.com'),
       (2,'bob@example.com'),
       (3,'john@example.com');
       
SELECT * FROM Person;
       
DELETE p1 FROM Person p1
INNER JOIN Person p2
WHERE p1.id > p2.id AND p1.email = p2.email;

INSERT INTO Person (id, email)
VALUES (3,'john@example.com'),
	   (4,'john@example.com'),
       (5,'mike@example.com'),
       (6,'john@example.com'),
       (7,'bob@example.com');
       
/*
Runtime: 1280 ms, faster than 5.75% of MySQL online submissions for Delete Duplicate Emails.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Delete Duplicate Emails.
*/