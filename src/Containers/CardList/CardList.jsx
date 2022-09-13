import React from 'react';
import './CardList.scss';
import Card from '../../Components/Card/Card';

const CardList = ({beers}) => {

  const beerCards = beers.map(beer => <Card id={beer.id} name={beer.name} img={beer.image_url} description={beer.description} abv={beer.abv}/>)
  
  return (
    <div className='cardlist'>
      {beerCards}
    </div>
  )
}

export default CardList