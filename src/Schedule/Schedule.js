import './Schedule.css';
import NavBar from '../NavBar/NavBar';
import React, { useEffect, useState } from "react";
import axios from 'axios';

// const options = [
//     {
//       label: "CSK",
//       value: "Chennai",
//     },
//     {
//       label: "RCB",
//       value: "Bangalore",
//     },
//     {
//       label: "MI",
//       value: "Mumbai",
//     },
//     {
//       label: "RR",
//       value: "Rajastan",
//     },
//     {
//         label: "DC",
//         value: "Delhi",
//     },
//     {
//         label: "PBKS",
//         value: "Punjab",
//     },
//     {
//         label: "SRH",
//         value: "Hyderabad",
//     },
//     {
//         label: "KKR",
//         value: "Kolkata",
//     },
//   ];

function Schedule(){
    
    const [tableRow, setTableRow] = useState([]);
    const [team, setTeam] = useState("");

    useEffect(()=>{
        const response = axios.get('http://localhost:3002/schedule/all')
        .then((response)=>{
            console.log(response.data);
            setTableRow(response.data);
        })
    }, [])

    // handleChange(e){
    //     console.log("Fruit Selected!!");
    //     // this.setState({ fruit: e.target.value });
    //     setTeam(e.target.value);
    //   }

    return (
        <div>
        <NavBar />
        <div className='content'>
            {/* <select value={team} onChange={handleChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select> */}
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