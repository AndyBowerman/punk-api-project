import React from 'react';
import './Showcase.scss';
import showcase from '../../assets/images/showcase.jpg';

const Showcase = () => {
  return (
    <div className='showcase'>
      <img className='showcase__background' src={showcase} alt="Brewdog Pub" />
      <div className='showcase__cover'></div>
      <h1 className='showcase__header'>Discover Our Award Winning Range</h1>
    </div>
  )
}

export default Showcase