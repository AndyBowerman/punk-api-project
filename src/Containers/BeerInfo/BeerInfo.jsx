import React from "react";
import "./BeerInfo.scss";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const BeerInfo = ({ beers }) => {
  const { beerId } = useParams();
  const currentBeer = beers.filter((beer) => beer.id === beerId * 1);
  const foodPairing = currentBeer[0].food_pairing.map((item, index) => (
    <li key={index + 1}>{item}</li>
  ));

  return (
    <div className="beer-info">
      <div className="beer-info__container">
        <div className="beer-info__left">
          <img
            className="beer-info__img"
            src={currentBeer[0].image_url}
            alt={currentBeer[0].name}
          />
        </div>

        <div className="beer-info__right">
          <h1 className="beer-info__name">{currentBeer[0].name}</h1>
          <h3 className="beer-info__tagline">{currentBeer[0].tagline}</h3>
          <p className="beer-info__description">{currentBeer[0].description}</p>
          <div className="beer-info__sm-container">
            <div className="beer-info__foodpairings">
              <h4>Why not try it with:</h4>
              <ul>{foodPairing}</ul>
            </div>
            <div className="beer-info__abv">
              <p>ABV: {currentBeer[0].abv}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/"} className="beer-info__btn-container">
        <Button buttonText="Home" className="beer-info__button" />
      </Link>
    </div>
  );
};

export default BeerInfo;
