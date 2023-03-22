import React from 'react'
import "./MainDash.css";
import perc from "../../assets/perc.png";
import chart from "../../assets/chart.png";
import pie from "../../assets/pie.png";

const Dashboard = () => {
    return (
        <div className='MainDash'>
            <h1>Dashboard</h1>
            <div className='perc'>
                <img src={perc} alt="" />
            </div>
            <div className='pie'>
                <img src={chart} alt="" />
                <img  className='pie-img' src={pie} alt="" />
            </div>
        </div>
    )
}

export default Dashboard