import React from "react";
import "./Card.css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Card = ({emoji, heading, detail, color}) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{ color: darkMode ? "white" : "" }}>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
