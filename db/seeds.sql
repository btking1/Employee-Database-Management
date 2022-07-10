INSERT INTO departments (name)
VALUES ('IT'),
    ('Development'),
    ('Customer Service'),
    ('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES ('Cashier', 3000, 1),
    ('Store Manager', 65000, 1),
    ('Human Resource Manager', 75000, 2),
    ('Counselor', 48000, 2),
    ('Software Developer', 100000, 3),
    ('Product Manager', 120000, 3),
    ('Cyber Security Analyst', 120000, 4),
    ('IT Head', 150000, 4);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Sophia', 'Orr', 1, 2),
    ('Drake', 'Mosley', 2, NULL),
    ('Mauricio', 'Waters', 3, NULL),
    ('Devyn', 'Bishop', 4, 3),
    ('Shaniya', 'Hull', 5, 6),
    ('Francesca', 'Cisneros', 6, NULL),
    ('Princess', 'Leia', 7, 8),
    ('Octavio', 'Kaiser', 8, NULL);
