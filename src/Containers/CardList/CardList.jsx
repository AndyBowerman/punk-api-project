import React, { useState, useEffect } from 'react';
import './CardList.scss';
import Card from '../../Components/Card/Card';

const CardList = ({searchTerm}) => {
  const[beers, setBeers] = useState([])

  const getBeers = async () => {
    const data = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=80`);
    const result = await data.json();
    setBeers(result);
  }

  const filterBeers = (beersArr, searchTerm) => beersArr.filter((beer) => beer.name.toLowerCase().includes(searchTerm));

  useEffect(() => {
    getBeers()
  }, [])

  const shortenString = (str) => str.length > 200 ? str.substring(0, 199) + "..." : str;

  const beerCards = filterBeers(beers, searchTerm).map((beer) => <Card id={beer.id} name={beer.name} img={beer.image_url} description={shortenString(beer.description)} abv={beer.abv}/>)
  
  return (
    <div className='cardlist'>
      {beerCards}
    </div>
  )
}

export default CardList