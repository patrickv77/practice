CREATE DATABASE 1484_group_sold_products_by_the_date;
USE 1484_group_sold_products_by_the_date;

Create table If Not Exists Activities (sell_date date, product varchar(20));
Truncate table Activities;
insert into Activities (sell_date, product) values ('2020-05-30', 'Headphone');
insert into Activities (sell_date, product) values ('2020-06-01', 'Pencil');
insert into Activities (sell_date, product) values ('2020-06-02', 'Mask');
insert into Activities (sell_date, product) values ('2020-05-30', 'Basketball');
insert into Activities (sell_date, product) values ('2020-06-01', 'Bible');
insert into Activities (sell_date, product) values ('2020-06-02', 'Mask');
insert into Activities (sell_date, product) values ('2020-05-30', 'T-Shirt');

SELECT * FROM Activities;

SELECT sell_date, COUNT(DISTINCT product) AS num_sold, group_concat(DISTINCT product) AS products
FROM Activities 
GROUP BY 1
ORDER BY 1;

/*
Runtime: 641 ms, faster than 12.47% of MySQL online submissions for Group Sold Products By The Date.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Group Sold Products By The Date.
*/


/* **REFERENCE**
SELECT b.name AS band_name, COUNT(a.id) AS num_albums
FROM bands AS b
LEFT JOIN albums AS a ON b.id = a.band_id
WHERE b.name = 'Deuce'
GROUP BY b.id
HAVING num_albums = 1;
*/