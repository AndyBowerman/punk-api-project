import React from "react";
import "./BeerInfo.scss";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const BeerInfo = () => {
  const [beer, setBeer] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { beerId } = useParams();


  const getBeer = async () => {
    const data = await fetch(
      `https://api.punkapi.com/v2/beers/${beerId}`
    );
    const result = await data.json();
    setBeer(result[0]);
    setIsLoading(false)
  };

  useEffect(() => {
    getBeer();
  }, [])

  let foodPairing = [];
  if(!isLoading) {
    foodPairing = beer.food_pairing.map((item, index) => (
    <li key={index + 1}>{item}</li>
  ));
  }
  

  return (
    <div className="beer-info">
      <div className="beer-info__container">
        <div className="beer-info__left">
          <img
            className="beer-info__img"
            src={beer.image_url}
            alt={beer.name}
          />
        </div>

        <div className="beer-info__right">
          <h1 className="beer-info__name">{beer.name}</h1>
          <h3 className="beer-info__tagline">{beer.tagline}</h3>
          <p className="beer-info__description">{beer.description}</p>
          <div className="beer-info__sm-container">
            <div className="beer-info__foodpairings">
              <h4>Why not try it with:</h4>
              <ul>{foodPairing}</ul>
            </div>
            <div className="beer-info__abv">
              <p>ABV: {beer.abv}</p>
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
