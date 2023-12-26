import React from "react";
import "./moveCard.css";

function MoveCard({poster, title, year, time, onClick}) {
  return (

    <div className="movies" onClick={onClick}>
      <img src={poster} alt="" />
      <p className="title">{title}</p>
      <div className="info">
        <p>{year}</p>
        <div className="time">
          <div className="dot"></div>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default MoveCard;
