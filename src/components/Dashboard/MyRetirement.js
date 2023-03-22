import React from 'react'
import retirement from "../../assets/retirement.png";

const MyRetirement = () => {
    return (
        <div className='MainDash'>
            <h1>My Retirement</h1>
            <img className='retirement' src={retirement} alt="" />
        </div>
    )
}

export default MyRetirement