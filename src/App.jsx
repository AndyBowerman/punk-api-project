import './App.scss';

import Navbar from './Containers/Navbar/Navbar';
import ShowCase from './Containers/Showcase/Showcase';
import CardList from './Containers/CardList/CardList';
import FilterOptions from './Containers/FilterOptions/FilterOptions';

const App = () => {
  return (
    <div className='App'>
      <nav>
        <Navbar />
        <FilterOptions />
      </nav>
      <header>
        <ShowCase />
      </header>
      <main>
        <CardList />
      </main>
    </div>
  )
}

export default App




/*

CONTAINERS

Navbar along the top
    - logo
    - search box
    - filter option
    - fixed in place

Showcase
    - Full screen Image
    - Shadow over the top
    - Some text - "Discover our award winning range"

Card List
    - Cards with beer info mapped over

Filter Options
    - search box
    -checkboxes for the search criteria

COMPONENTS

cards
search box
button
3 checkboxes (in one component) 

*/