INSERT INTO department (department_name)
VALUES ("Sales"), ("Legal"), ("Engineer");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 150000, 1), ("Salesperson", 100000, 1), ("Lead Engineer", 125000, 2), ("Engineer", 85000, 2), ("Lead Lawyer", 130000, 3), ("Lawyer", 105000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Natacha", "Ndabahagamye", 1, 1), ("Mateo", "Starity", 2, 1), ("Steven", "Brown", 3, 2), ("Charlie", "Holleman", 4, 2), ("Mia", "Jones", 5, 3), ("Natalya", "Rae", 6, 3);


-- SELECT  role.department_id, employee.first_name, employee.last_name, role.title, role.salary
-- FROM role INNER JOIN employee
-- ON (role.department_id = employee.department_id)
-- WHERE (topalbum.artist = 'Queen' and top5000.artist = 'Queen')
-- ORDER BY topalbum.year, topalbum.position;