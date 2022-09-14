import React from 'react';
import './FilterOptions.scss';

const FilterOptions = () => {
  return (
    <div className='filterOptions'>
      <input className='filterOptions__checkbox' type="checkbox" id="highABV" name="highABV" value="6"/>
      <label className='filterOptions__checkbox' htmlFor="highABV">ABV above 6%</label>
      <input className='filterOptions__checkbox' type="checkbox" name="classic-range" id="classic-range" value="01/2010"/>
      <label className='filterOptions__checkbox' htmlFor="classic-range">Brewed before 2010</label>
      <input className='filterOptions__checkbox' type="checkbox" id="high-acidity" name="high-acidity" value="4"/>
      <label className='filterOptions__checkbox' htmlFor="high-acidity">High Acidity</label>
    </div>
  )
}

export default FilterOptions