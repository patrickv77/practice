CREATE DATABASE 1667_fix_names_in_a_table;
USE 1667_fix_names_in_a_table;

Create table If Not Exists Users (user_id int, name varchar(40));
Truncate table Users;
insert into Users (user_id, name) values ('1', 'aLice');
insert into Users (user_id, name) values ('2', 'bOB');

