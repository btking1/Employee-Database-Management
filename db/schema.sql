DROP TABLE IF EXISTS `departments`;
DROP TABLE IF EXISTS `employee`;
DROP TABLE IF EXISTS `roles`;
CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE roles (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES departments(id)
);
CREATE TABLE employees (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    role_id INTEGER (30) NOT NULL,
    manager_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);
CREATE View vManagers AS
SELECT *
FROM employees
WHERE manager_id IS NULL;
-- 
CREATE View vEmployeesAndManagers AS
select employees.*,
    CONCAT(vManagers.first_name, " ", vManagers.last_name) AS manager_name
FROM employees
    LEFT JOIN vManagers ON employees.manager_id = vManagers.id;
-- 
CREATE View vRolesAndDepts AS
select roles.*,
    departments.name
FROM roles
    LEFT JOIN departments ON roles.department_id = departments.id;
--
CREATE view vMASTER AS
select vEmployeesAndManagers.id AS ID,
    CONCAT(
        vEmployeesAndManagers.first_name,
        " ",
        vEmployeesAndManagers.last_name
    ) AS employeeName,
    vRolesAndDepts.title AS Title,
    vRolesAndDepts.salary AS Salary,
    vRolesAndDepts.name AS Dept,
    vEmployeesAndManagers.manager_name AS Manager
from vEmployeesAndManagers
    inner join vrolesanddepts on vEmployeesAndManagers.role_id = vRolesAndDepts.id;