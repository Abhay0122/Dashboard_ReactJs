import React from 'react'
import pay from "../../assets/pay.png";

const MyPay = () => {
    return (
        <div className='MainDash'>
            <h1>My Pay</h1>
            <img className='Pay' src={pay} alt="" />
        </div>
    )
}

export default MyPay