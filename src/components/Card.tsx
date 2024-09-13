import React from "react";
import style from "./module-css/Card.module.css";

interface CardProps {
  name: string;
  icon: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ name, icon, text }) => {
  return (
    <button
      className={style.Card}
      aria-label={`Przejdź do sekcji ${name}`}
    >
      <span className={style.cardTitle}>{name}</span>
      <img
        className={style.cardIcon}
        src={icon}
        alt={`${name} ikona`}
        loading="lazy"
      />
      <p className={style.cardText}>{text}</p>
    </button>
  );
};

export default Card;
