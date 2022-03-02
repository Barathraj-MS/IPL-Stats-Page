import { createConnection } from 'mysql2';

let connection = createConnection({
    host: 'localhost',
    user: 'varun',
    password: 'Lebronbro100%',
    database: 'ipl'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected Successfully to the database");
});

export default connection;