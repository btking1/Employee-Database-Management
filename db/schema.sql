DROP TABLE IF EXISTS `departments`;
DROP TABLE IF EXISTS `employee`;
DROP TABLE IF EXISTS `roles`;
CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER,
    PRIMARY KEY (id),
    CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES departments(id)
);
CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER REFERENCES employees(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);
