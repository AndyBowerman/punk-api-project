import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Containers/Navbar/Navbar';
import ShowCase from './Containers/Showcase/Showcase';
import CardList from './Containers/CardList/CardList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [abvFilter, setAbvFilter] = useState("");
  const [brewedBeforeFilter, setBrewedBeforeFilter] = useState(9999);
  const [acidityFilter, setAcidityFilter] = useState("");

  const getSearchTerm = (event) => setSearchTerm(event.target.value.toLowerCase());
  const getAbvFilter = (event) => event.target.checked ? setAbvFilter(event.target.value) : setAbvFilter("");
  const getBrewedBeforeFilter = (event) => event.target.checked ? setBrewedBeforeFilter(event.target.value * 1) : setBrewedBeforeFilter(9999);
  const getAcidityFilter = (event) => event.target.checked ? setAcidityFilter(event.target.value) : setAcidityFilter("");

  return (
    <div className='App'>
      <header>
        <Navbar getSearchTerm={getSearchTerm} getAbvFilter={getAbvFilter} getBrewedBeforeFilter={getBrewedBeforeFilter} getAcidityFilter={getAcidityFilter}/>
      </header>
      <main>
        <ShowCase />
      </main>
      <section>
        <CardList searchTerm={searchTerm} abvFilter={abvFilter} brewedBeforeFilter={brewedBeforeFilter} acidityFilter={acidityFilter} />
      </section>
    </div>
  )
}

export default App




/*

Questions

1. best way to filter results - pulling the whole lot once so then just filter results or should I be making a new request for each filter?
2. best practice for styling component - nav__button, reusable component so style in the button scss or the nav scss
3. why is the key thing not working!

*/