const { connection } = require('./db')

const express = require('express');
const app = express();

app.get('/players',(req,res)=>{
    connection.query("SELECT * FROM batsman", function(err,result){
        if(err) throw err;
        res.send(result);
    });
});


app.listen(3000, ()=>{
    console.log("Listening to port 3000");
})