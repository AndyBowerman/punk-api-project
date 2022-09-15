import React from "react";
import "./FilterOptions.scss";

const FilterOptions = ({ getAbvFilter, getBrewedBeforeFilter, getAcidityFilter }) => {
  return (
    <div className="filterOptions">
      <input
        className="filterOptions__checkbox"
        type="checkbox"
        id="highABV"
        name="highABV"
        value="6"
        onChange={getAbvFilter}
      />
      <label className="filterOptions__checkbox" htmlFor="highABV">
        ABV above 6%
      </label>
      <input
        className="filterOptions__checkbox"
        type="checkbox"
        name="classic-range"
        id="classic-range"
        value="2010"
        onChange={getBrewedBeforeFilter}
      />
      <label className="filterOptions__checkbox" htmlFor="classic-range">
        Brewed before 2010
      </label>
      <input
        className="filterOptions__checkbox"
        type="checkbox"
        id="high-acidity"
        name="high-acidity"
        value="4"
        onChange={getAcidityFilter}
      />
      <label className="filterOptions__checkbox" htmlFor="high-acidity">
        High Acidity
      </label>
    </div>
  );
};

export default FilterOptions;
