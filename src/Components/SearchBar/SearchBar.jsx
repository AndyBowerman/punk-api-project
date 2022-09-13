import React from 'react';
import './SearchBar.scss';

const SearchBar = ({placeholder, className}) => {
  return (
    <input type="text" placeholder={placeholder} className={className}/>
  )
}

export default SearchBar