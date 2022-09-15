import {useState} from 'react';
import "./Navbar.scss";
import logo from "../../assets/images/logo.jpg";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Button from "../../Components/Button/Button";
import FilterOptions from "../../Components/FilterOptions/FilterOptions";

const Navbar = ({ getSearchTerm, getAbvFilter, getBrewedBeforeFilter, getAcidityFilter }) => {
  const [filterMenu, setFilterMenu] = useState(false);

  const revealFilterOptions = () => {
    setFilterMenu(!filterMenu);
  }
  return (
    <nav className="nav">
      <div className="nav__container">
        <img src={logo} alt="Brewdog Logo" className="nav__img" />
        <SearchBar
          placeholder="Search our award winning range..."
          className="nav__searchbar--large"
          getSearchTerm={getSearchTerm}
        />
        <Button buttonText="Filter Here" className="nav__filterButton" revealFilterOptions={revealFilterOptions} />
      </div>
      {filterMenu && <FilterOptions getAbvFilter={getAbvFilter} getBrewedBeforeFilter={getBrewedBeforeFilter} getAcidityFilter={getAcidityFilter} />}
    </nav>
  );
};

export default Navbar;
