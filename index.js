const {prompt} = require('inquirer');
const db = require('./db');
require ('console.table');

start();

// call function here - ask all questions
function start(){
    const {choices} = prompt([
        {
            type: 'list',
            message: 
            name:
            choices: [
                {
                   name: 'View all Employees', 
                   value: viewAllEmployees
                }

        }
    ])
} 
switch (choices){
    case viewAllEmployees;
    return viewAllEmployees()
}
// inside of functions, 
function updateRole(){
    const employee_tracker = db.findAllEmployees()
    const .map 
    return 
}