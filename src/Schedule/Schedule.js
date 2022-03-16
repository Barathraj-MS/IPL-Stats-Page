import './Schedule.css';
import NavBar from '../NavBar/NavBar';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Select from 'react-select';
import {Card} from 'react-bootstrap'

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

  const title = "Schedule";



function Schedule(){
    
    const [tableRow, setTableRow] = useState([]);
    const [team, setTeam] = useState("all");
    const [color, setColor] = useState('rgb(117, 114, 114)');
    function setVal(data){
        const teamcolors={'ALL':'rgb(117, 114, 114)','CSK':'rgb(231, 212, 37)','RCB':'rgb(245, 60, 60)','MI':'rgb(26,85,215,255)', 'RR':'rgb(252,68,132)','DC':'rgb(27, 42, 180)','PBKS':'rgb(124,13,19,255)','SRH':'rgb(247,111,11,255)','KKR':'rgb(54,41,79,255)'};
        setTeam(data.value);
        console.log(data);
        if(data.label==='All'){
            setColor('rgb(117, 114, 114)');
        }
        else{
            var lab=data.label;
            setColor(teamcolors[lab]);
        }
    }
    useEffect(()=>{
        // setTeam(prompt("Enter your fav team city name:"));
        const response = axios.get(`http://localhost:3002/schedule/?filter=${team}`)
        .then((response)=>{
            setTableRow(response.data);
        })
    }, [team],[color])

    return (
        <div>
        <NavBar title={title}/>  
        <div className='content'>   
        <div className='filter-bar'>
         <Select className='filter-select'  options={options} onChange={data=>setVal(data)}/>
        </div>
            {tableRow.map(oruRow=>{
                return <Card className='Sch'>
                <Card.Header style={{backgroundColor : color}} className='cardHeader'>Match-{oruRow.MatchNumber} | {oruRow.Dates}</Card.Header>
                <Card.Body   className='cardBody'>
                    <Card.Title>{oruRow.HomeTeam} vs {oruRow.AwayTeam}</Card.Title>
                    <Card.Text>
                    {oruRow.Location}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            })
            }
           
            </div>
        </div>
    )
}

export default Schedule;