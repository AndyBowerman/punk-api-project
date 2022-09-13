import React from 'react';
import './Card.scss';

const Card = ({id, name, description, img, abv}) => {
  return (
    <div className='card' key={id}>
      <img src={img} alt="Beer bottle" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{abv}</p>
    </div>
  )
}

export default Card