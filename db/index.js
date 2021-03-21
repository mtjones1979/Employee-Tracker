const connection = require('./connection');
// function for all things we want to ask

class DB {
    constructor(connection) {
        this.connection = connection;
    }
}

// next is all functions
 function updateEmployeeRole(employeeID, roleID) {
    return this.connection.query(
    "UPDATE employee SET role_id = ? WHERE id = ?",
    [roleID, employeeID]
    )
};

module.exports = new DB(connection);