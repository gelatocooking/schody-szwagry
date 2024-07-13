import style from "./module-css/Card.module.css";
import png from "../assets/projects-1.jpg";
import React from "react";
// import styled from "styled-components";


interface CardProps {

      name:string;
      icon:string;
      text:string;
      


}

const Card : React.FC<CardProps>= (props) => {
  return (
    <button
      className={style.Card}
     
    >
      <span>{props.name}</span>
      <img className={style.cardIcon} src={props.icon}></img>
      {/* <img className={style.cardBackground} src={png}></img> */}
      <p>{props.text}</p>
    </button>
  );
};
export default Card;
