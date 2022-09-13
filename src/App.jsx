import './App.scss';

import Navbar from './Containers/Navbar/Navbar';
import ShowCase from './Containers/Showcase/Showcase';
import CardList from './Containers/CardList/CardList';
// import FilterOptions from './Containers/FilterOptions/FilterOptions';

import beers from './assets/data/beers'

const App = () => {
  return (
    <div className='App'>
      <header>
        <Navbar />
        {/* <FilterOptions /> */}
      </header>
      <main>
        <ShowCase />
      </main>
      <section>
        <CardList beers={beers} />
      </section>
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