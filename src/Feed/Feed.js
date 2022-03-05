import './Feed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { SocialIcon } from 'react-social-icons';


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
            <div className='bfeed'>
                <ul className="tweets">
                    {tweets.map(tweet=><li className="tweetlist"><div className='tweetdiv'><div className='icondiv'><SocialIcon url="https://twitter.com/jaketrent" /></div>{tweet}</div></li>)}
                </ul> 
            </div>
        </div>
    )   
}

export default Feed;