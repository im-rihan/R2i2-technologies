import React from "react";
import "./Item.css";

function Item({ time, Icon, desc, background }) {
  return (
    <div className="item">
      <div className="flex">
        <p className="time">{time}</p>
        <span className="icon" style={{ backgroundColor: background }}>
          <Icon />
        </span>
        <p className="desc"> {desc}</p>
      </div>
      <div className="user">
        <img
          className="user-img"
          src="https://i.ibb.co/rZrzfBn/user.png"
          alt=""
        />
        <h2 className="title">Rihan Mohammed</h2>
      </div>
    </div>
  );
}

export default Item;
