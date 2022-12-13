import React from "react";
import "./BeerInfo.scss";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../Containers/Navbar/Navbar";

const BeerInfo = () => {
  const [beer, setBeer] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { beerId } = useParams();

  const getBeer = async () => {
    const data = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`);
    const result = await data.json();
    setBeer(result[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getBeer();
  }, []);

  let foodPairing = [];
  if (!isLoading) {
    foodPairing = beer.food_pairing.map((item, index) => (
      <li key={index + 1}>{item}</li>
    ));
  }

  return (
    <>
      <Navbar homePage={false} />
      <div className="beer-info">
        <h1 className="beer-info__name">{beer.name}</h1>
        <div className="beer-info__container">
          <div className="beer-info__container--left">
            <img
              className="beer-info__img"
              src={beer.image_url}
              alt={beer.name}
            />
            <h3 className="beer-info__tagline">"{beer.tagline}"</h3>
          </div>
          <div className="beer-info__container--right">
            <p className="beer-info__description">{beer.description}</p>
            <div className="beer-info__container--sm">
              <p className="beer-info__text beer-info__text--abv">
                ABV: {beer.abv}%
              </p>
              <p className="beer-info__text beer-info__text--ph">
                PH: {beer.ph}
              </p>
            </div>
            <h4>Recommended Food Pairings</h4>
            <ul>{foodPairing}</ul>
            <h4>Brewers Tips:</h4>
            <p>{beer.brewers_tips}</p>
            <div className="beer-info__btn-container">
              <Link to={"/punk-api-project"}>
                <Button
                  buttonText="Return to Beers"
                  className="beer-info__button"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeerInfo;
