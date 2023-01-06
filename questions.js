const questions = {
  menu: [
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
      ],
      name: "initQuestion",
    },
  ],
  department: [
    {
      type: "input",
      message: "Enter the name of the department.",
      name: "name",
    },
  ],
  role: [
    {
      type: "input",
      message: "Enter the name of the role.",
      name: "roleName",
    },
    {
      type: "input",
      message: "Enter the salary for the role.",
      name: "roleSalary",
    },
    {
      type: "input",
      message: "Enter the department ID for the role.",
      name: "roleDepartment",
    },
  ],
  employee: [
    {
      type: "input",
      message: "Enter the first name of the employee.",
      name: "employeeFirstName",
    },
    {
      type: "input",
      message: "Enter the last name of the employee.",
      name: "employeeLastName",
    },
    {
      type: "input",
      // role id???
      message: "Enter the role of the employee.",
      name: "employeeRole",
    },
    {
      type: "input",
      message: "Enter the manager's ID of the employee.",
      name: "employeeManager",
    },
  ],
  update: [
    {
      type: "input",
      message: "Enter the ID of the employee.",
      name: "updateID",
    },
    {
      type: "input",
      message: "Enter the new role for this employee.",
      name: "updateRole",
    },
  ],
};

module.exports = questions;
