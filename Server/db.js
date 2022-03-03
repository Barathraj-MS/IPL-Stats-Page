import { createConnection } from 'mysql2';
import dotenv from "dotenv"
dotenv.config();

let connection = createConnection( {
    host: 'localhost',
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected Successfully to the database");
});

export default connection;