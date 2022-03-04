import './Feed.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import React, { useEffect, useState } from "react";



function Feed(){

    const [tweets ,setTweets] = useState([]);

    useEffect(()=>{
        const response = axios.get('http://localhost:3002/getfeed')
        .then((response)=>{
            console.log(response.data);
            setTweets(response.data);
        })
    }, [])

    return (
        <div>
            <NavBar />
            <div>
                <ol className="tweets">
                    {tweets.map(tweet=><li>{tweet}</li>)}
                </ol>
            </div>
        </div>
    )
}

export default Feed;