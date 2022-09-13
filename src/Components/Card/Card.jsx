import React from "react";
import Button from "../Button/Button";
import "./Card.scss";

const Card = ({ id, name, description, img, abv }) => {
  return (
    <div className="card" key={id}>
      <div className="card__img-container">
        <img src={img} alt={name} className="card__img" />
      </div>      
      <h3 className="card__header">{name}</h3>
      <p className="card__description">{description}</p>
      <div className="card__container">
        <p className="card__abv">{abv}%</p>
        <Button buttonText="More Info" className="card__button" />
      </div>
    </div>
  );
};

export default Card;
