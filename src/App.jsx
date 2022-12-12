import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Containers/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import BeerInfo from "./Pages/BeerInfo/BeerInfo";
import ReactPaginate from 'react-paginate';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [abvFilter, setAbvFilter] = useState("");
  const [brewedBeforeFilter, setBrewedBeforeFilter] = useState(9999);
  const [acidityFilter, setAcidityFilter] = useState("");
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const data = await fetch(
      `https://api.punkapi.com/v2/beers?page=1&per_page=25`
    );
    // 325 beers total
    // 13 pages 25 long
    // 5 pages 65 long
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

  const handlePageClick = async (page) => {
    let currentPage = page.selected + 1;
    console.log(currentPage)
    const data = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=25`);
    const result = await data.json();
    console.log(result)
    setBeers(result);
  }

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
                <BeerInfo beers={beers} />
              </main>
            }
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

      <ReactPaginate
    previousLabel={"previous"}
    nextLabel={"next"}
    breakLevel={"..."}
    pageCount={14}
    marginPagesDisplayed={2}
    pageRangeDisplayed={3}
    onPageChange={handlePageClick}
    containerClassName={"pagination"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
    />

    </Router>
  );
};

export default App;