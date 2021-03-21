// connection to mysql - host, local host, password, database

const mysql = require('mysql');
// const util = require('util');
const connection = mysql.createConnection ({
// host, user,database, password
})
connection.connect();
// connection.query = util.promisify(connection.query);

module.exports = connection;