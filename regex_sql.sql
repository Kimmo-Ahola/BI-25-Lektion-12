-- use against Northwind

select
	Address
from Employees
where [Address] like '%[0-9]%';

select
	Address
from Employees
where REGEXP_LIKE(Address, '[0-9]{3,4}');

select
	Address
from Employees
where REGEXP_LIKE(Address, '[0-9]{4}.*[0-9]{2}');