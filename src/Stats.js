import './Stats.css';
import React, {useState} from 'react';
import { ReactDOM } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'
const batting_true=true;
var glob_bool = true;
const table_bool = true;
function NavBar(){
  return(	<header className="header">
  <h1 className="logo"><a href="#">IPL</a></h1>
    <ul className="main-nav">
        <li><a href="#">SCHEDULE</a></li>
        <li><a href="#">FEED</a></li>
    </ul>
</header> );
}
function ListItems(props){
  if(props.battingorbowling === true)
  {
    const arr=["MostRuns","Most4s","Most6s","Most50s","Most100s","HighestScore","StrikeRate","AverageRuns"];
    const listItems= arr.map((val,index)=><li key={index}><div id="second" className="buttonBox2">
                                          <button className='button2'>{val}</button>
                                          <div className="border"></div>
                                          <div className="border"></div>
                                        </div></li>);
    return(
      <ul>{listItems}</ul>
    );
  }
  if(props.battingorbowling===false){
    const arr=["Wickets","Maiden","DotBalls","BowlingAvg","EcoRate","StrikeRate","HatTrick","FourWickets"];
    const listItems= arr.map((val,index)=><li key={index}><div id="second" class="buttonBox2">
                                          <button className='button2'>{val}</button>
                                          <div className="border"></div>
                                          <div className="border"></div>
                                        </div></li>);
    return(
      <ul>{listItems}</ul>
    );
  }
}
function SideBar(props)
{
    return(<div className='sideBar'>
        <div className='sideBarRow'>
        <div id="second" className="buttonBox">
        <button onClick={props.battingcall}>BATTING</button>
        <div className="border"></div>
        <div className="border"></div>
      </div>
      <div id="second" className="buttonBox">
        <button onClick={props.bowlingcall}>BOWLING</button>
        <div className="border"></div>
        <div className="border"></div>
      </div>
      </div>
      <ListItems battingorbowling={props.batting_true}/>
      </div>);
}
function List(props)
{
  if(props.batting_true===true){
    console.log("Batting table:"+ glob_bool);
    return(<div className='listTable'>
    <table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>MostRuns</th>
            <th>Most4s</th>
            <th>Most6s</th>
            <th>Most50s</th>
            <th>Most100s</th>
            <th>HighestScore</th>
            <th>StrikeRate</th>
            <th>AverageRuns</th>
        </tr>
    </thead>
    <tbody>
        <tr class="active-row">
            <td>Dom</td>
            <td>6000</td>
            <td>Dom</td>
            <td>6000</td>
            <td>Dom</td>
            <td>6000</td>
            <td>Dom</td>
            <td>6000</td>
            <td>Dom</td>
        </tr>
        <tr>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
        </tr>
    </tbody>
</table>

      </div>);
  }
  if(glob_bool===false){
    console.log("Bowling Table:");
    return(<div className='listTable'>
    <table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Wickets</th>
            <th>Maiden</th>
            <th>DotBalls</th>
            <th>BowlingAvg</th>
            <th>EcoRate</th>
            <th>StrikeRate</th>
            <th>HatTrick</th>
            <th>FourWickets</th>
        </tr>
    </thead>
    <tbody>
        <tr class="active-row">
            <td>Dom</td>
            <td>6000</td>
        </tr>
        <tr >
            <td>Melissa</td>
            <td>5150</td>
        </tr>
    </tbody>
</table>

      </div>);
  }
  }
function MainBody()
{
    const [batting, setBatting]= useState(batting_true);
    function batting_call(){
      setBatting(true);
      glob_bool=true;
      console.log(batting);
    }
    function bowling(){
      setBatting(false);
      glob_bool=false;
      console.log(batting);
    }
 return(<div className='flexContainer'>
   <SideBar batting_true={batting} battingcall={batting_call} bowlingcall={bowling}/>
   <List batting_true={batting}/>
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