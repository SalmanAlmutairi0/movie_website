import React from "react";
import "./divider.css";
export default function Divider({icon, text,}) {
  
    return (
      <div className="divider">
        <div className="title">
       <img src={icon} alt="fireIcon" /> 
        <h3>{text}</h3>

        </div>
        <div className="line"></div>
        <a href="#">See More</a>
      </div>
    );
  }