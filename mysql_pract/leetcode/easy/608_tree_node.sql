CREATE DATABASE 608_tree_node;
USE 608_tree_node;

Create table If Not Exists Tree (id int, p_id int);
Truncate table Tree;
insert into Tree (id, p_id) values ('1', NULL);
insert into Tree (id, p_id) values ('2', '1');
insert into Tree (id, p_id) values ('3', '1');
insert into Tree (id, p_id) values ('4', '2');
insert into Tree (id, p_id) values ('5', '2');

SELECT * FROM Tree;

SELECT id,
CASE
	WHEN p_id IS NULL THEN 'Root'
    WHEN id IN (SELECT p_id FROM Tree) then 'Inner'
	ELSE 'Leaf'
END AS type
FROM Tree
ORDER BY id;

/*
Runtime: 518 ms, faster than 27.88% of MySQL online submissions for Tree Node.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Tree Node.
*/