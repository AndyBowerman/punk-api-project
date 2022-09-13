import React from 'react';
import './Navbar.scss';
import logo from '../../assets/images/logo.jpg';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Button from '../../Components/Button/Button';

const Navbar = () => {
  return (
    <nav className='nav'>
        <img src={logo} alt="Brewdog Logo" className='nav__img' />
        <SearchBar placeholder="Search our award winning range..." className="nav__searchbar--large" />
        <Button buttonText="Filter Here" className="nav__filterButton" />
    </nav>
  )
}

export default Navbar