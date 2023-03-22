import React from 'react'
import "./RightSideBar.css";
import Cycle from "../../assets/cycle.png";
import business from "../../assets/business.png";

const Righsidebar = () => {
  return (
    <div className='RighSidebar'>
      <div className='rightside-top'>
        <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="" />
        <h6>Abhay parmar</h6>
      </div>
      <div className='piechart'>
        <img src={Cycle} alt="Cycle" />
      </div>
      <div className='text'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolor nobis voluptatibus tempore veniam animi soluta possimus velit optio a. sit amet consectetur adipisicing elit. Deserunt dolor nobis voluptatibus tempore veniam animi soluta possimus velit optio a ipsum dolor sit amet. voluptatibus tempore veniam animi soluta possimus velit optio a. sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className='business-chart'>
        <img src={business} alt="" />
      </div>
    </div>
  )
}

export default Righsidebar