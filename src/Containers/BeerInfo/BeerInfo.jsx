import React from 'react';
import './BeerInfo.scss';
import { useParams } from 'react-router-dom';

const BeerInfo = ({beers}) => {
    const {beerId} = useParams();
    const currentBeer = beers.filter(beer => beer.id === beerId*1)
    const foodPairing = currentBeer[0].food_pairing.map(item => <li>{item}</li>)
    
  return (
    <div className='beer-info'>
        <img className='beer-info__img' src={currentBeer[0].image_url} alt={currentBeer[0].name} />
        <div>
            <h1 className='beer-info__name'>{currentBeer[0].name}</h1>
            <h3>{currentBeer[0].tagline}</h3>
            <p>{currentBeer[0].description}</p>
            <div>
                <p>ABV: {currentBeer[0].abv}</p>
                <h4>Why not try it with:</h4>
                <ul>
                    {foodPairing}
                </ul>
            </div>
        </div>
        
        
    </div>
  )
}

export default BeerInfo