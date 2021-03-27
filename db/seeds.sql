INSERT INTO department (department_name)
VALUES ("Sales"), ("Legal"), ("Engineer");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 150000, 1), ("Salesperson", 100000, 1), ("Lead Engineer", 125000, 2), ("Engineer", 85000, 2), ("Lead Lawyer", 130000, 3), ("Lawyer", 105000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Natacha", "Ndabahagamye", 1, 1), ("Mateo", "Starity", 4, 1), ("Steven", "Brown", 2, 2), ("Charlie", "Holleman", 5, 2), ("Mia", "Jones", 3, 3), ("Natalya", "Rae", 6, 3);


