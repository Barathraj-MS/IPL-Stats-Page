import './Stats.css';
import React, {useState, useEffect} from 'react';
import Axios from "axios";
import NavBar from './NavBar/NavBar';
import { ReactDOM } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'
const batting_true=true;
var glob_bool = true;
const table_bool = true;
// function NavBar(){
//   return(	<header className="header">
//   <h1 className="logo"><a href="#">IPL</a></h1>
//     <ul className="main-nav">
//         <li><a href="#">SCHEDULE</a></li>
//         <li><a href="/feed">FEED</a></li>
//     </ul>
// </header> );
// }


function ListItems(props){

  function handlebattingStats(filterAtt) {
    return function (e) {
      props.toggle(true);
      props.Setapifilter(filterAtt,true)
    }
  }
  

  if(props.battingorbowling === true)
  {
    const arr=["MostRuns","Most4s","Most6s","Most50s","Most100s","HighestScore","StrikeRate","AverageRuns"];
    const listItems= arr.map((val,index)=><li key={index}><div id="second" className="buttonBox2">
                                          <button className='button2' onClick={handlebattingStats(val)}>{val}</button>
                                          <div className="border"></div>
                                          <div className="border"></div>
                                        </div></li>);
    return(
      <ul>{listItems}</ul>
    );
  }
  if(props.battingorbowling===false){
    const arr=["Wickets","Maiden","DotBalls","BowlingAvg","EcoRate","StrikeRate","HatTrick","FourWickets"];
    const listItems= arr.map((val,index)=><li key={index}><div id="second" className="buttonBox2">
                                          <button className='button2' onClick={()=>{props.toggle(false); props.Setapifilter(val,false)}}>{val}</button>
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
        <button onClick={() =>{ props.toggle(true); props.Setapifilter('MostRuns',true)}}>BATTING</button>
        <div className="border"></div>
        <div className="border"></div>
      </div>
      <div id="second" className="buttonBox">
        <button onClick={()=>{props.toggle(false); props.Setapifilter('Wickets',false)}}>BOWLING</button>
        <div className="border"></div>
        <div className="border"></div>
      </div>
      </div>
      <ListItems battingorbowling={props.batting_true} toggle={props.toggle} Setapifilter={props.Setapifilter}/>
      </div>);
}
function Table(props){
  console.log(props.apidata);
  return(props.batting_true !== undefined ? <div className='listTable'>
  <table className="styled-table">
  <thead>
    {
      props.batting_true ? 
      (<tr>
          <th>Name</th>
          <th>MostRuns</th>
          <th>Most4s</th>
          <th>Most6s</th>
          <th>Most50s</th>
          <th>Most100s</th>
          <th>HighestScore</th>
          <th>StrikeRate</th>
          <th>AverageRuns</th>
      </tr>) : (
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
      )
    }
  </thead>
  <tbody>
      {props.batting_true ? props.apidata.map((val,index)=>{
        if(index===0)
        {
          return (<tr key={index} className="active-row">
            <td>{val.Name}</td>
            <td>{val.MostRuns}</td>
            <td>{val.Most4s}</td>
            <td>{val.Most6s}</td>
            <td>{val.Most50s}</td>
            <td>{val.Most100s}</td>
            <td>{val.HighestScore}</td>
            <td>{val.StrikeRate}</td>
            <td>{val.AverageRuns}</td>
           </tr>)
        }
        else{
          return (<tr key={index}>
            <td>{val.Name}</td>
            <td>{val.MostRuns}</td>
            <td>{val.Most4s}</td>
            <td>{val.Most6s}</td>
            <td>{val.Most50s}</td>
            <td>{val.Most100s}</td>
            <td>{val.HighestScore}</td>
            <td>{val.StrikeRate}</td>
            <td>{val.AverageRuns}</td>
           </tr>)
        }
     }) : props.apidata.map((val,index)=>{
       if(index===0){
        return (<tr key={index} className="active-row">
          <td>{val.Name}</td>
          <td>{val.Wickets}</td>
          <td>{val.Maiden}</td>
          <td>{val.DotBalls}</td>
          <td>{val.BowlingAvg}</td>
          <td>{val.EcoRate}</td>
          <td>{val.StrikeRate}</td>
          <td>{val.HatTrick}</td>
          <td>{val.FourWickets}</td>
         </tr>)
       }
       else{
        return (<tr key={index}>
          <td>{val.Name}</td>
          <td>{val.Wickets}</td>
          <td>{val.Maiden}</td>
          <td>{val.DotBalls}</td>
          <td>{val.BowlingAvg}</td>
          <td>{val.EcoRate}</td>
          <td>{val.StrikeRate}</td>
          <td>{val.HatTrick}</td>
          <td>{val.FourWickets}</td>
         </tr>)
       }
     })}
  </tbody>
</table>
    </div> : <> </>);

}
function List(props)
{
  if(props.batting_true===true){
    return(<Table batting_true={props.batting_true} apidata={props.apires}/>);
  }
  else{
    return(<Table batting_true={props.batting_true} apidata={props.apires}/>);
  }
  }
function MainBody()
{
    const [batting, setBatting]= useState(true);
    const [apires, setApi]=useState([]);
    const [apifilter_batting ,setFilterBatting]=useState('MostRuns');
    const [apifilter_bowler, setFilterBowling]=useState('Wickets')
    function toggle(val){
      if(val !== batting){
        setBatting(val);
      }
    }
   function Setapifilter(apifilterval,boolval)
   {
    if(boolval){
      setFilterBatting(apifilterval);   
    }
    else{
      setFilterBowling(apifilterval);
    }
   }
    useEffect(() => {
      if(batting){
        Axios.get(`http://localhost:3002/players/batsman/?filter=${apifilter_batting}`).then((response) => {
        setApi(response.data);
      });
      }
      else{
        Axios.get(`http://localhost:3002/players/bowlers/?filter=${apifilter_bowler}`).then((response) => {
        setApi(response.data);
      });
      }
    }, [batting,apifilter_bowler,apifilter_batting]);
 return(<div className='flexContainer'>
   <SideBar batting_true={batting} toggle={toggle} Setapifilter={Setapifilter}/>
   <List batting_true={batting} apires={apires}/>
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