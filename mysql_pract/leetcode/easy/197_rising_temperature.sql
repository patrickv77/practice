CREATE DATABASE 197_rising_temperature;
USE 197_rising_temperature;

Create table If Not Exists Weather (id int, recordDate date, temperature int);
Truncate table Weather;
insert into Weather (id, recordDate, temperature) values ('1', '2015-01-01', '10');
insert into Weather (id, recordDate, temperature) values ('2', '2015-01-02', '25');
insert into Weather (id, recordDate, temperature) values ('3', '2015-01-03', '20');
insert into Weather (id, recordDate, temperature) values ('4', '2015-01-04', '30');

SELECT * FROM Weather;

SELECT p.id FROM Weather p,Weather q where p.temperature > q.temperature AND DATEDIFF(p.recordDate,q.recordDate)=1;

/*
Runtime: 420 ms, faster than 76.91% of MySQL online submissions for Rising Temperature.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Rising Temperature.
*/