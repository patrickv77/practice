CREATE DATABASE 1729_find_followers_count;
USE 1729_find_followers_count;

Create table If Not Exists Followers(user_id int, follower_id int);
Truncate table Followers;
insert into Followers (user_id, follower_id) values ('0', '1');
insert into Followers (user_id, follower_id) values ('1', '0');
insert into Followers (user_id, follower_id) values ('2', '0');
insert into Followers (user_id, follower_id) values ('2', '1');

SELECT * FROM Followers;

SELECT user_id, COUNT(DISTINCT(follower_id)) AS followers_count
FROM Followers
GROUP BY user_id
ORDER BY user_id;

/*
Runtime: 752 ms, faster than 14.97% of MySQL online submissions for Find Followers Count.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Find Followers Count.
*/