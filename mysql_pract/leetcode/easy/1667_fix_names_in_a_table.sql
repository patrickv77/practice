CREATE DATABASE 1667_fix_names_in_a_table;
USE 1667_fix_names_in_a_table;

Create table If Not Exists Users (user_id int, name varchar(40));
Truncate table Users;
insert into Users (user_id, name) values ('1', 'aLice');
insert into Users (user_id, name) values ('2', 'bOB');

SELECT * FROM Users;

#UPDATE Users
#SET name = CONCAT(UPPER(LEFT(name, 1)) + LOWER(RIGHT(name, (LENGTH(name)-1))));

DROP TABLE Users;


SELECT user_id,
CONCAT(
UPPER(LEFT(name,1)), LOWER(RIGHT(name,(LENGTH(name)-1)))
)AS name
FROM Users ORDER BY 1;


/*
Runtime: 1245 ms, faster than 5.01% of MySQL online submissions for Fix Names in a Table.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Fix Names in a Table.
*/