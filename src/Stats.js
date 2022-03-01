import './Stats.css';
import React, {useState} from 'react';
import { ReactDOM } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'
const batting_true=true;
function NavBar(){
  return(	<header class="header">
  <h1 class="logo">IPL</h1>
    <ul class="main-nav">
        <li><a href="#">SCHEDULE</a></li>
        <li><a href="#">FEED</a></li>
    </ul>
</header> );
}
function ListItems(props){
  if(props.battingorbowling === true)
  {
    const arr=["MostRuns","Most4s","Most6s","Most50s","Most100s","HighestScore","StrikeRate","AverageRuns"];
    const listItems= arr.map((val,index)=><div id="second" class="buttonBox2">
                                          <button className='button2'>{val}</button>
                                          <div class="border"></div>
                                          <div class="border"></div>
                                        </div>);
    return(
      <ul>{listItems}</ul>
    );
  }
  else{
    const arr=["Wickets","Maiden","DotBalls","BowlingAvg","EcoRate","StrikeRate","HatTrick","FourWickets"];
    const listItems= arr.map((val,index)=><div id="second" class="buttonBox2">
                                          <button className='button2'>{val}</button>
                                          <div class="border"></div>
                                          <div class="border"></div>
                                        </div>);
    return(
      <ul>{listItems}</ul>
    );
  }
}
function SideBar(props)
{
    const [batting, setBatting]= useState(props.batting_true);
    function batting_call(){
      setBatting(true);
    }
    function bowling(){
      setBatting(false);
    }
    return(<div className='sideBar'>
      <div className='sideBarRow'>
      <div id="first" class="buttonBox">
        <button onClick={batting_call}>BATTING</button>
        <div class="border"></div>
        <div class="border"></div>
      </div>
      <div id="second" class="buttonBox">
        <button onClick={bowling}>BOWLING</button>
        <div class="border"></div>
        <div class="border"></div>
      </div>
      </div>
      <ListItems battingorbowling={batting}/>
      </div>);
}

function List()
{
  return(<div className='list'>
    <li><a href="#">SCHEDULE</a></li>
        <li><a href="#">FEED</a></li>
      </div>);
}
function MainBody()
{
 return(<div className='flexContainer'>
   <SideBar batting_true={batting_true}/>
   <List/>
 </div>);
}
function Stats() {
  return (
    <div className="body2">
     <NavBar/>
     <MainBody/>
    </div>
  );
}

export default Stats;