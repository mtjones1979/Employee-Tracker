// connection to mysql - host, local host, password, database
const mysql = require('mysql');
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
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
})
// connection.query = util.promisify(connection.query);

module.exports = connection;