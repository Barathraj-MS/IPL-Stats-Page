import './Schedule.css';
import NavBar from '../NavBar/NavBar';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Select from 'react-select';


const options = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "CSK",
      value: "Chennai",
    },
    {
      label: "RCB",
      value: "Bangalore",
    },
    {
      label: "MI",
      value: "Mumbai",
    },
    {
      label: "RR",
      value: "Rajasthan",
    },
    {
        label: "DC",
        value: "Delhi",
    },
    {
        label: "PBKS",
        value: "Punjab",
    },
    {
        label: "SRH",
        value: "Hyderabad",
    },
    {
        label: "KKR",
        value: "Kolkata",
    },
  ];


function Schedule(){
    
    const [tableRow, setTableRow] = useState([]);
    const [team, setTeam] = useState("all");

    useEffect(()=>{
        // setTeam(prompt("Enter your fav team city name:"));
        console.log("updaated : ", team);
        const response = axios.get(`http://localhost:3002/schedule/?filter=${team}`)
        .then((response)=>{
            console.log(response.data);
            setTableRow(response.data);
        })
    }, [team])

    return (
        <div>
        <NavBar />  
        <div className='content'>   
        <div className='filter-bar'>
         <Select className='filter-select' options={options} onChange={data=>setTeam(data.value)}/>
        </div>
            <div className='Sch'>
                    <table>
                        <tr>
                            <th>Match Number</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Home Team</th>
                            <th>Away Team</th>
                        </tr>
                        {tableRow.map(oruRow=>{
                            return <tr>
                            <td>{oruRow.MatchNumber}</td>
                            <td>{oruRow.Dates}</td>
                            <td>{oruRow.Location}</td>
                            <td>{oruRow.HomeTeam}</td>
                            <td>{oruRow.AwayTeam}</td>
                            </tr>
                        })}
                    </table>
            </div>
            </div>
        </div>
    )
}

export default Schedule;