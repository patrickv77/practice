CREATE DATABASE 1527_patients_with_a_condition;
USE 1527_patients_with_a_condition;

Create table If Not Exists Patients (patient_id int, patient_name varchar(30), conditions varchar(100));
Truncate table Patients;
insert into Patients (patient_id, patient_name, conditions) values ('1', 'Daniel', 'YFEV COUGH');
insert into Patients (patient_id, patient_name, conditions) values ('2', 'Alice', '');
insert into Patients (patient_id, patient_name, conditions) values ('3', 'Bob', 'DIAB100 MYOP');
insert into Patients (patient_id, patient_name, conditions) values ('4', 'George', 'ACNE DIAB100');
insert into Patients (patient_id, patient_name, conditions) values ('5', 'Alain', 'DIAB201');

SELECT * FROM Patients;

SELECT * FROM Patients
WHERE conditions RLIKE '(?<= )DIAB1.*|^DIAB1.*';


/*
Runtime: 338 ms, faster than 53.57% of MySQL online submissions for Patients With a Condition.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Patients With a Condition.
*/