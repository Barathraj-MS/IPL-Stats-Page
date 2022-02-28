let mysql = require('mysql2')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0040',
    database: 'ipl'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected Successfully to the database");
});

module.exports = {
    connection: connection
}