import { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.jpg";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Button from "../../Components/Button/Button";
import FilterOptions from "../../Components/FilterOptions/FilterOptions";

const Navbar = ({
  getSearchTerm,
  getAbvFilter,
  getBrewedBeforeFilter,
  getAcidityFilter,
  homePage
}) => {
  const [filterMenu, setFilterMenu] = useState(false);

  const revealFilterOptions = () => {
    setFilterMenu(!filterMenu);
  };
  return (
    <nav className="nav">
      <div className="nav__container">
        <img src={logo} alt="Brewdog Logo" className="nav__img" />
        {homePage && <SearchBar
          placeholder="Search here..."
          className="nav__searchbar--large"
          getSearchTerm={getSearchTerm}
        />}
        {homePage && <h1 className="nav__header">Discover Our Award Winning Range</h1>}
        {homePage && <Button
          buttonText={!filterMenu ? "Filter Here" : "Hide Filters"}
          className="nav__filterButton"
          revealFilterOptions={revealFilterOptions}
        />}
      </div>
      {filterMenu && (
        <FilterOptions
          getAbvFilter={getAbvFilter}
          getBrewedBeforeFilter={getBrewedBeforeFilter}
          getAcidityFilter={getAcidityFilter}
        />
      )}
    </nav>
  );
};

export default Navbar;
