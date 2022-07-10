INSERT INTO departments (name)
VALUES ('IT'),
    ('Development'),
    ('Customer Service'),
    ('Sales');
-- CREATE TABLE role (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(30), salary DECIMAL(10, 10), department_id INTEGER NOT NULL,
--     CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES department(id)
-- );
INSERT INTO roles (title, salary, department_id)
VALUES ('Cashier', 3000, 4),
    ('Store Manager', 65000, 4),
    ('Human Resource Manager', 75000, 3),
    ('Counselor', 48000, 3),
    ('Software Developer', 100000, 2),
    ('Product Manager', 120000, 2),
    ('Cyber Security Analyst', 120000, 1),
    ('IT Head', 150000, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jacob', 'Butler', 1, 2),
    ('Kyle', 'Chili', 2, NULL),
    ('Jarvis', 'Landry', 3, NULL),
    ('Todd', 'Harris', 4, 3),
    ('Frank', 'Butler', 5, 6),
    ('Jan', 'Role', 6, NULL),
    ('Princess', 'Leia', 7, 8),
    ('Roe', 'Powers', 8, NULL);
-- INSERT INTO employees (first_name, last_name, role_id, manager_id) -- put unique mock data into employee table including: first_name, last_name, role_id, manager_id
-- VALUES ('John', 'Doe', 8, NULL),
--     ('Soren', 'Fane', 6, NULL),
--     ('Jessica', 'Smith', 1, 4),
--     ('George', 'Thomson', 2, NULL),
--     ('Selena', 'Rechard', 7, 1),
--     ('Rose', 'Heart', 5, 2),
--     ('Madis', 'Corn', 3, NULL),
--     ('Jane', 'Smith', 4, 7);