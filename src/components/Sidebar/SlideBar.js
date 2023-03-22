import React, { useState } from 'react'
import './Slidebar.css';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { SidebarData } from "../../data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";


const SlideBar = () => {
  const [selected, setselected] = useState(0);

  return (
    <div className='Sidebar'>
      {/* top */}
      <div className="sidebar-top">
        <img src={logo} alt="" />
        <div className='heading'>
          Logo<span>t</span>ech
        </div>
      </div>

      {/* menu */}
      <div className="menu">
        {
          SidebarData.map((elem, idx) => {
            return (
              <Link to={elem.path} className={selected === idx ? 'menuItems active' : 'menuItems'}
                onClick={() => setselected(idx)}
                key={idx}
              >
                <elem.icon />
                <span>
                  {elem.heading}
                </span>
              </Link>
            )
          })
        }
        <div className="menuItems">
          <UilSignOutAlt />
        </div>
      </div>

    </div>
  )
}

export default SlideBar