import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Containers/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import BeerInfo from "./Containers/BeerInfo/BeerInfo";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [abvFilter, setAbvFilter] = useState("");
  const [brewedBeforeFilter, setBrewedBeforeFilter] = useState(9999);
  const [acidityFilter, setAcidityFilter] = useState("");
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const data = await fetch(
      `https://api.punkapi.com/v2/beers?page=1&per_page=80`
    );
    const result = await data.json();
    setBeers(result);
  };

  useEffect(() => {
    getBeers();
  }, [searchTerm, abvFilter, brewedBeforeFilter, acidityFilter]);

  const getSearchTerm = (event) =>
    setSearchTerm(event.target.value.toLowerCase());

  const getAbvFilter = (event) =>
    event.target.checked ? setAbvFilter(event.target.value) : setAbvFilter("");

  const getBrewedBeforeFilter = (event) =>
    event.target.checked
      ? setBrewedBeforeFilter(event.target.value * 1)
      : setBrewedBeforeFilter(9999);

  const getAcidityFilter = (event) =>
    event.target.checked
      ? setAcidityFilter(event.target.value)
      : setAcidityFilter("");

  return (
    <Router>
      <div className="App">
        <header>
          <Navbar
            getSearchTerm={getSearchTerm}
            getAbvFilter={getAbvFilter}
            getBrewedBeforeFilter={getBrewedBeforeFilter}
            getAcidityFilter={getAcidityFilter}
          />
        </header>
        <Routes>
          <Route
            path="/beers/:beerId"
            element={
              <main>
                <BeerInfo beers={beers}/>
              </main>}
          ></Route>
          <Route
            path="/"
            element={
              <main>
                <Home
                  beers={beers}
                  searchTerm={searchTerm}
                  abvFilter={abvFilter}
                  brewedBeforeFilter={brewedBeforeFilter}
                  acidityFilter={acidityFilter}
                />
              </main>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

/*

Questions

1. best way to filter results - pulling the whole lot once so then just filter results or should I be making a new request for each filter?
2. best practice for styling component - nav__button, reusable component so style in the button scss or the nav scss

*/
