import React from 'react';
import './Button.scss';

const Button = ({buttonText, className, revealFilterOptions}) => {
  return (
    <button className={className} onClick={revealFilterOptions}>{buttonText}</button>
  )
}

export default Button