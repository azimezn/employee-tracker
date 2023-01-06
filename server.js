// connect npms
const inquirer = require("inquirer");
const mysql = require("mysql2");
const table = require("console.table");

const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());


// destructure variables from the question.js
const { menu, department, role, employee, update } = require("./questions");

// connect mysql
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
    inquirer
        // prompt the questions to add a department
        // don't need to write "questions.department" because I destructured it
        .prompt(department)
        .then((data) => {
            // {name: data.name} is the whole data anyway, so just call the data
            db.query(`INSERT INTO department SET ?`, data, (err, results) => {
                console.log(`${data.name} is added to the department list.`);
                // go back to the menu
                init();
            });
        });
}

function addRole() {
    inquirer.prompt(role).then((data) => {
        // {title: data.title, salary: data.salary, department_id: data.department_id}
        db.query(`INSERT INTO role SET ?`, data, (err, results) => {
            console.log(`${data.title} is added to the role list.`);
            init();
        });
    });
}

function addEmployee() {
    inquirer.prompt(employee).then((data) => {
        // {first_name: data.first_name, last_name: data.last_name, role_id: data.role_id, manager_id: data.manager.id}
        db.query(`INSERT INTO employee SET ?`, data, (err, results) => {
            console.log(`${data.first_name} ${data.last_name} is added to the employee list.`);
            init();
        });
    });
}

function updateEmployee() {
    inquirer.prompt(update).then((data) => {
        db.query(
            `UPDATE employee SET role = "${data.updateRole}" WHERE employee_id = ${data.updateID};`, (err, results) => {
                console.log(`employee is updated`);
                init();
            });
    });
}

function init() {



    console.log(
        logo({
            name: 'Employee Tracker',
            font: 'Speed',
            lineChars: 10,
            padding: 2,
            margin: 3,
            borderColor: 'grey',
            logoColor: 'bold-green',
            textColor: 'green',
        })
            .emptyLine()
            .right('version 3.7.123')
            .emptyLine()
            .render()
    );

    inquirer
        // prompt menu questions
        .prompt(menu)
        // i destructured data, so data.initQuestion == initQuestion
        .then(({ initQuestion }) => {
            // according to what the user chooses in the menu, the results come from mysql
            if (initQuestion == "view all departments") {
                db.query("SELECT * FROM department", (err, results) => {
                    //results are shown as a table
                    console.table(results);
                    init();
                });
            } else if (initQuestion == "view all roles") {
                db.query("SELECT * FROM role", (err, results) => {
                    console.table(results);
                    init();
                });
            } else if (initQuestion == "view all employees") {
                db.query("SELECT * FROM employee JOIN role ON role.id = employee.role_id JOIN department ON department.id = role.department_id", (err, results) => {
                    console.table(results);
                    init();
                });
            } else if (initQuestion == "add a department") {
                db.query("SELECT * FROM department", (err, results) => {
                    console.table(results);
                    addDepartment();
                });
            } else if (initQuestion == "add a role") {
                db.query("SELECT * FROM role", (err, results) => {
                    console.table(results);
                    addRole();
                });
            } else if (initQuestion == "add an employee") {
                db.query("SELECT * FROM employee", (err, results) => {
                    console.table(results);
                    addEmployee();
                });
            } else if (initQuestion == "update an employee role") {
                db.query("SELECT * FROM employee", (err, results) => {
                    console.table(results);
                    updateEmployee();
                });
            } else {
                return
            }
        });
}

init();