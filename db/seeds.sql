INSERT INTO department (department_name)
VALUES ("Sales"), ("Legal"), ("Engineer");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 150000, 1), ("Salesperson", 100000, 2), ("Lead Engineer", 125000, 3), ("Engineer", 85000, 4), ("Lead Lawyer", 130000, 5), ("Lawyer", 105000, 6);

INSERT INTO employee (first_name, last_name, department_id)
VALUES ("Natacha", "Ndabahagamye", 3), ("Mateo", "Starity", 1), ("Steven", "Brown", 5), ("Charlie", "Holleman", 6), ("Mia", "Jones", 2), ("Natalya", "Rae", 4);

SELECT  role.department_id, employee.first_name, employee.last_name, role.title, role.salary
FROM role INNER JOIN employee
ON (role.department_id = employee.department_id)
-- WHERE (topalbum.artist = 'Queen' and top5000.artist = 'Queen')
-- ORDER BY topalbum.year, topalbum.position;