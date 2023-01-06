const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

const questions = {
    init: [{
        type: 'list',
        message: "What would you like to do?",
        choices: ["view all departments", "view all roles", "view all employees",
            "add a department", "add a role", "add an employee",
            "update an employee role"],
        name: 'initQuestion',
    }],
    department: [{
        type: 'input',
        message: "Enter the name of the department.",
        name: 'departmentName',
    }],
    role: [
        {
            type: 'input',
            message: "Enter the name of the role.",
            name: 'roleName',
        },
        {
            type: 'input',
            message: "Enter the salary for the role.",
            name: 'roleSalary',
        },
        {
            type: 'input',
            message: "Which department is this role for?",
            name: 'roleDepartment',
        }],
    employee: [
        {
            type: 'input',
            message: "Enter the first name of the employee.",
            name: 'employeeFirstName',
        },
        {
            type: 'input',
            message: "Enter the last name of the employee.",
            name: 'employeeLastName',
        },
        {
            type: 'input',
            // role id???
            message: "Enter the role of the employee.",
            name: 'employeeRole',
        },
        {
            type: 'input',
            message: "Enter the manager's ID of the employee.",
            name: 'employeeManager',
        }
    ],
    update: [
        {
            type: 'input',
            message: "Enter the ID of the employee.",
            name: 'updateID',
        },
        {
            type: 'input',
            message: "Enter the new role for this employee.",
            name: 'updateRole',
        }
    ]
}

function addDepartment() {
    inquirer
        .prompt(questions.department)
        .then((data) => {
            // do i separate lines by comma???
            db.query(`INSERT INTO department (name), VALUES ("${departmentName}")`, (err, results) => {
                console.log(results);
            });
            return init();
        })
}

function addRole() {
    inquirer
        .prompt(questions.role)
        .then((data) => {
            // do i separate lines by comma???
            db.query(`INSERT INTO department (title, salary, department_id), VALUES ("${roleName}", "${roleSalary}", "${roleDepartment}")`, (err, results) => {
                console.log(results);
            });
            return init();
        })
}

function addEmployee() {
    inquirer
        .prompt(questions.employee)
        .then((data) => {
            // do i separate lines by comma???
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id), VALUES ("${employeeFirstName}", "${employeeLastName}", "${employeeRole}", "${employeeManager}")`, (err, results) => {
                console.log(results);
            });
            return init();
        })
}

function updateEmployee() {
    inquirer
        .prompt(questions.update)
        .then((data) => {
            // do i separate lines by comma???
            db.query(`UPDATE employee, SET role = "${updateRole}", WHERE employee_id = ${updateID};`, (err, results) => {
                console.log(results);
            });
            return init();
        })
}

function init() {
    inquirer
        .prompt(questions.init)
        .then((data) => {
            if (data.initQuestion = "view all departments") {
                db.query('SELECT * FROM department', (err, results) => {
                    console.log(results);
                });
            } else if (data.initQuestion = "view all roles") {
                db.query('SELECT * FROM role', (err, results) => {
                    console.log(results);
                });
            } else if (data.initQuestion = "view all employees") {
                db.query('SELECT * FROM employee', (err, results) => {
                    console.log(results);
                });
            } else if (data.initQuestion = "add a department") {
                addDepartment();
            } else if (data.initQuestion = "add arole") {
                addRole();
            } else if (data.initQuestion = "add an employee") {
                addEmployee();
            } else if (data.initQuestion = "update an employee role") {
                updateEmployee();
            }
        })
    //init()
}

init();