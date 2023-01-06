INSERT INTO department (name)
VALUES ("Web Development"),
       ("Accounting"),
       ("Quality Assurance");

INSERT INTO role (title, salary, department_id)
VALUES ("Web Development Manager", 120000, 1),
       ("Technical Consultant", 110000, 1),
       ("Full-Stack Developer", 100000, 1),
       ("Accounting Manager", 85000, 2),
       ("Accounting Supervisor", 80000, 2),
       ("Quality Assurance Manager", 83000, 3),
       ("Quality Analyst", 60000, 3),
       ("Quality Coordinator", 46000, 3);

-- error??? --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Smith", 1, 0),
       ("Robert", "Johnson", 2, 1),
       ("Mary", "Williams", 3, 1),
       ("John", "Brown", 3, 1),
       ("Linda", "Jones", 4, 0),
       ("Elizabeth", "Garcia", 5, 5),
       ("Jessica", "Miller", 6, 0),
       ("Richaard", "Davis", 7, 7),
       ("Nancy", "Rodriguez", 8, 7);