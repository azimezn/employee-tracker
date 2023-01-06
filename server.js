const inquirer = require("inquirer");
const mysql = require("mysql2");
const table = require("console.table");
const logo = require("asciiart-logo");
const { menu, department, role, employee, update } = require("./questions");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "employee_db",
    },
    console.log(`Connected to the employee_db database.`)
);

function addDepartment() {
    // db.query("SELECT * FROM department", (err, results) => {
    //     console.table(results);
    // });
    inquirer
        // questions.department but now I destructured it
        .prompt(department)
        .then((data) => {
            // {name: data.name} is the whole data anyway, so just write data
            db.query(`INSERT INTO department SET ?`, data, (err, results) => {
                console.table(results[0]);
                init();
            });
        });
}


function addRole() {
    // db.query("SELECT * FROM department", (err, results) => {
    //     console.table(results);
    // });
    inquirer
        .prompt(role)
        .then((data) => {
            console.log(data);
            // `INSERT INTO department (title, salary, department_id), VALUES ("${roleName}", "${roleSalary}", "${roleDepartment}")`,
            db.query(`INSERT INTO department SET ?`, { title: roleName, salary: roleSalary, department_id: roleDepartment }, (err, results) => {
                console.log(results[0]);
                init();
            });
        });
}

function addEmployee() {
    inquirer.prompt(employee).then((data) => {
        db.query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${employeeFirstName}", "${employeeLastName}", "${employeeRole}", "${employeeManager}")`,
            (err, results) => {
                console.log(results);
            }
        );
        return init();
    });
}

function updateEmployee() {
    inquirer.prompt(update).then((data) => {
        db.query(
            `UPDATE employee SET role = "${updateRole}" WHERE employee_id = ${updateID};`,
            (err, results) => {
                console.log(results);
            }
        );
        return init();
    });
}

function init() {
    inquirer
        .prompt(menu)
        .then(({ initQuestion }) => {
            // data.initQuestion but i destructured it
            if (initQuestion == "view all departments") {
                db.query("SELECT * FROM department", (err, results) => {
                    console.table(results);
                    init();
                });
            } else if (initQuestion == "view all roles") {
                db.query("SELECT * FROM role", (err, results) => {
                    console.table(results);
                    init();
                });
            } else if (initQuestion == "view all employees") {
                db.query("SELECT * FROM employee", (err, results) => {
                    console.table(results);
                    init();
                });
            } else if (initQuestion == "add a department") {
                addDepartment();
            } else if (initQuestion == "add a role") {
                addRole();
            } else if (initQuestion == "add an employee") {
                addEmployee();
            } else if (initQuestion == "update an employee role") {
                updateEmployee();
            }
        });
    //init()
}

init();

// how to do manager IDs after adding an employee or changing a role???
