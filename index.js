const inquirer = require('inquirer');
const mysql = require('mysql');
require ('console.table');
// const util = require('util');

// host, user,database, password
const connection = mysql.createConnection ({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Coding2021!',
  database: 'employee_tracker',
});
connection.connect((err) => {
  if (err) throw err;
//   console.log(`connected as id ${connection.threadId}`);
  start();
})
// connection.query = util.promisify(connection.query);
// call function here - ask all questions
// tutor helped me set up start function but I changed to format I know from class
const start = () => {
    inquirer.prompt({
            type: 'list',
            name: 'prompt' ,
            message:'What would you like to do',
            choices: [
                'View all Employees',
                'View all Departments',
                'View all Roles', 
                'Add an Employee',
                'Add a Department',
                'Add a Role',
                'Update Employee Role',
                'Exit',
            ]
        })
        .then((res) => {
            switch (res.prompt) {
                case 'View all Employees':
                    viewEmployees();
                    break;
                case 'View all Departments':
                    viewDepartments();
                    break;
                case 'View all Roles':
                    viewRoles();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                default:
                    console.log("You are all done!")
                    break;
            }
        })
} 
const viewEmployees = () => {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
    });
    start();
};

const viewDepartments = () => {
    connection.query("SELECT * FROM department", function (err,res){
        if (err) throw err;
        console.table(res)
    });
    start();
};

const viewRoles = () => {
    connection.query("SELECT * FROM role", function(err,res){
        if (err) throw err;
        console.table(res)
    });
    start();
}

const addEmployee = () => {
    inquirer.prompt ([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter the first name of the new Employee:',
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter the last name of the new Employee:',
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Enter the role ID of the new Employee:'
        },
        {
            name: 'manager_id',
            type: 'input',
            message: "Enter the Managers ID of the new Employee, if applicable:",
        },
    ])
    .then (function(res) {
        let newQuery = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                        VALUES('${res.first_name}','${res.last_name}','${res.role_id}','${res.manager_id}')`; 
        connection.query(newQuery, function(err, res){
            if(err) throw err;
            viewEmployees();
        });
    });
};
