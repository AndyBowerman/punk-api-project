import React, { useState, useEffect } from "react";
import "./CardList.scss";
import Card from "../../Components/Card/Card";

const CardList = ({ searchTerm, abvFilter, brewedBeforeFilter, acidityFilter }) => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const data = await fetch(
      `https://api.punkapi.com/v2/beers?page=1&per_page=80`
    );
    const result = await data.json();
    setBeers(result);
  };

  const searchBeers = (beersArr, searchTerm, abvFilter, brewedBeforeFilter, acidityFilter) => {
    return beersArr
      .filter((beer) => beer.name.toLowerCase().includes(searchTerm))
      .filter((beer) => beer.abv > abvFilter)
      .filter((beer) => beer.first_brewed.split('/')[1]*1 < brewedBeforeFilter)
      .filter((beer) => beer.ph > acidityFilter);
  }

  useEffect(() => {
    getBeers();
  }, [searchTerm, abvFilter, brewedBeforeFilter, acidityFilter]);

  const shortenString = (str) =>
    str.length > 200 ? str.substring(0, 199) + "..." : str;

  const beerCards = searchBeers(beers, searchTerm, abvFilter, brewedBeforeFilter, acidityFilter).map((beer) => (
    <Card
      id={beer.id}
      name={beer.name}
      img={beer.image_url}
      description={shortenString(beer.description)}
      abv={beer.abv}
    />
  ));

  return <div className="cardlist">{beerCards}</div>;
};

export default CardList;
