--DROP TABLE EMPLOYEE_NG;
CREATE Table EMPLOYEE_NG(
EMP_ID number(6) primary key,
FIRST_NAME varchar2(30),
LAST_NAME varchar2(30),
email varchar2(30),
age number(3),
salary number
);
create sequence emp_ng_seq start with 10 increment by 1;