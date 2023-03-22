import React from 'react'
import "./App.css";
import SlideBar from "./components/Sidebar/SlideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import MyProfile from './components/Dashboard/MyProfile';
import MyDocuments from './components/Dashboard/MyDocuments';
import MyPay from './components/Dashboard/MyPay';
import MyRetirement from './components/Dashboard/MyRetirement';
import Righsidebar from './components/RightSideBar/Righsidebar';

const App = () => {
  return (
    <div className='App'>
      <div className="AppGlass">
        <SlideBar />
        <Routes>
          <Route path='/' element={< Dashboard />} />
          <Route path='/MyProfile' element={< MyProfile />} />
          <Route path='/MyDocuments' element={< MyDocuments />} />
          <Route path='/MyPay' element={< MyPay />} />
          <Route path='/MyRetirement' element={< MyRetirement />} />
        </Routes>
        <Righsidebar />
      </div>
    </div>
  )
}

export default App