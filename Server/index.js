import  connection  from './db.js';
import express from 'express';
import cors from "cors";
import fetch from 'node-fetch';
import { authHeader } from './auth.js';




const app = express();

app.use(cors({origin: true}))

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
    connection.query(`SELECT * FROM bowlers WHERE ${category} <> 0 ORDER BY ${category} DESC`, function(err,result){
        if(err) throw err;
        res.json(result);
    })
})

// app.get('/schedule/all', (req,res)=>{
//     connection.query('SELECT * FROM schedule;', function(err, result){
//         if(err) throw err;
//         res.json(result);
//     })
// })

// app.get('/schedule', (req,res)=>{
//     var category = req.query.filter;
//     connection.query(`SELECT * FROM schedule WHERE HomeTeam LIKE '%${category}%' OR AwayTeam LIKE '%${category}%' ORDER BY MatchNumber`, function(err, result){
//         if(err) throw err;
//         res.json(result);
//     })
// })

app.get('/schedule', (req,res)=>{
    var category = req.query.filter;
    if(category=="all"){
        connection.query('SELECT * FROM schedule', function(err, result){
                    if(err) throw err;
                    res.json(result);
                })
    }
    else{
        connection.query(`SELECT * FROM schedule WHERE HomeTeam LIKE '%${category}%' OR AwayTeam LIKE '%${category}%' ORDER BY MatchNumber`, function(err, result){
                    if(err) throw err;
                    res.json(result);
                })
    }
})


// Below API's are for feed page...
async function fetchTweets(userId){
    var tweetmeta = [];
    var tweets = [];
    const response = await fetch(`https://api.twitter.com/2/users/${userId}/tweets/?max_results=100`, {
        method: 'GET',
        headers: authHeader
    })
    
    await response.json().then(datas=>{
        tweetmeta = datas.data;
    })

    // console.log(tweetmeta);
    for(let i=0;i<tweetmeta.length;i++){
        tweets.push(tweetmeta[i].text);
    }
    return tweets;
    
}

app.get('/getfeed', async(req,res)=>{
    const userId = "15639696";
    const tweets = await fetchTweets(userId);
    res.send(tweets);   
})


app.listen(3002, ()=>{
    console.log("Listening to port 3002");
})