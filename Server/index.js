import  connection  from './db.js';

import express from 'express';
import cors from "cors";
const app = express();
app.use(cors())

// app.get('/players/batsman',(req,res)=>{
//     connection.query("SELECT * FROM batsman", function(err,result){
//         if(err) throw err;
//         res.send(result);
//     });
// });



// NOTE: WHILE REQUESTING FROM SITE, REQUEST USING QUERY FOR EXAMPLE: /players/batsman/?filter=MostRuns , this to get the list of players sorted on runs.
app.get('/players/batsman/', (req,res)=>{
    var category = req.query.filter;
    connection.query(`SELECT * FROM batsman ORDER BY ${category} DESC`, function(err,result){
        if(err) throw err;
        res.json(result);
    })
})

app.get('/players/bowlers/', (req,res)=>{
    var category = req.query.filter;
    connection.query(`SELECT * FROM bowlers ORDER BY ${category} DESC`, function(err,result){
        if(err) throw err;
        res.json(result);
    })
})

app.listen(3002, ()=>{
    console.log("Listening to port 3002");
})