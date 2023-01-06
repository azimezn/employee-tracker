SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

INSERT INTO department (name)
  VALUES ("${departmentName}");

INSERT INTO department (title, salary, department_id)
  VALUES ("${roleName}", "${roleSalary}", "${roleDepartment}");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES ("${employeeFirstName}", "${employeeLastName}", "${employeeRole}", "${employeeManager}");

UPDATE employee
SET role = "${updateRole}"
WHERE employee_id = ${updateID};