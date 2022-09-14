import './App.scss';
import { useState } from 'react';
import Navbar from './Containers/Navbar/Navbar';
import ShowCase from './Containers/Showcase/Showcase';
import CardList from './Containers/CardList/CardList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getSearchTerm = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  }

  return (
    <div className='App'>
      <header>
        <Navbar getSearchTerm={getSearchTerm}/>
      </header>
      <main>
        <ShowCase />
      </main>
      <section>
        <CardList searchTerm={searchTerm} />
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