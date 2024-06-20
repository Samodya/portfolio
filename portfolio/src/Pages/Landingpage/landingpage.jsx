import { useState } from "react";
import { TopNavigation } from "../../Components/Navigation/topnav";
import { ContactMe } from "../Contact/contact_me";
import { Home } from "../Home";
import { MyInfo } from "../MyInfo/myinfo";
import "./landingpage.css";
import { Route, Routes, Router } from "react-router-dom";


export const LandingPage = () => {
  

  return (
    <div className="landing_page">
      <div className="top_section">
        <div className="logo_secton">Portfolio</div>
        <TopNavigation />
      </div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact_me" element={<ContactMe/>}/>
        <Route path="/my_info" element={<MyInfo/>}/>
      </Routes>
      
    </div>
  );
};
