import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Card.scss";

const Card = ({ id, name, description, img, abv }) => {
  return (
    <div className="card">
      <div className="card__img-container">
        <img src={img} alt={name} className="card__img" />
      </div>
      <h3 className="card__header">{name}</h3>
      <p className="card__description">{description}</p>
      <div className="card__container">
        <p className="card__abv">{abv}%</p>
        <Link to={`/beers/${id}`}>
          <Button buttonText="More Info" className="card__button" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
