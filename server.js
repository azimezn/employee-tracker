const inquirer = require("inquirer");
const mysql = require("mysql2");

const questions = {
    init: [{
        type: 'input',
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
            message: "Enter the role of the employee.",
            name: 'employeeRole',
        },
        {
            type: 'input',
            message: "Enter the manager of the employee.",
            name: 'employeeManager',
        }
        // ,{
        //     type: 'list',
        //     message: 'Which type of team member would you like to add?',
        //     name: 'addMember',
        //     choices: ["Engineer", "Intern", "I don't need to add any more team members."],
        // }
    ]
}

function init() {
    inquirer
        .prompt(questions.init)
        .then((data) => {
            if (data.initQuestion = "view all departments") {
                console.log("departments");
            } else if (data.initQuestion = "view all roles") {
                console.log("roles");
            } else if (data.initQuestion = "view all employees") {
                console.log("employees");
            } else if (data.initQuestion = "add a department") {
                console.log("prompt questions.department");
            } else if (data.initQuestion = "add arole") {
                console.log("prompt questions.role");
            } else if (data.initQuestion = "add an employee") {
                console.log("prompt questions.employee");
            } else if (data.initQuestion = "update an employee role") {
                console.log("prompt to select employee and their new role");
            }
        })
    init()
}

init();


// function addManager() {
//     inquirer
//         // ask the manager questions
//         .prompt(questions.manager)
//         .then((data) => {
//             if (data.addMember == "Engineer") {
//                 return addEngineer();
//             } else if (data.addMember == "Intern") {
//                 return addIntern();
//             } else {
//                 return createTeam();
//             }
//         })
// }




// console.table
// https://developer.mozilla.org/en-US/docs/Web/API/console/table