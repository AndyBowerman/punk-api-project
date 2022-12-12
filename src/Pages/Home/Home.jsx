import "./Home.scss";
import ShowCase from "../../Containers/Showcase/Showcase";
import CardList from "../../Containers/CardList/CardList";
import UsePagination from "../../Components/UsePagination/UsePagination";
import Navbar from "../../Containers/Navbar/Navbar";
import { useState, useEffect } from "react";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abvFilter, setAbvFilter] = useState("");
  const [brewedBeforeFilter, setBrewedBeforeFilter] = useState(9999);
  const [acidityFilter, setAcidityFilter] = useState("");

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

  const getBeers = async () => {
    const data = await fetch(
      `https://api.punkapi.com/v2/beers?page=1&per_page=25`
    );
    // 325 beers total
    const result = await data.json();
    setBeers(result);
  };

  useEffect(() => {
    getBeers();
  }, [searchTerm, abvFilter, brewedBeforeFilter, acidityFilter]);

  const handlePageClick = async (page) => {
    let currentPage = page.selected + 1;
    const data = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=25`);
    const result = await data.json();
    setBeers(result);
  }


  return (
    <>
      <Navbar
            getSearchTerm={getSearchTerm}
            getAbvFilter={getAbvFilter}
            getBrewedBeforeFilter={getBrewedBeforeFilter}
            getAcidityFilter={getAcidityFilter}
            homePage={true}
          />
      <ShowCase />
      <CardList
        beers={beers}
        searchTerm={searchTerm}
        abvFilter={abvFilter}
        brewedBeforeFilter={brewedBeforeFilter}
        acidityFilter={acidityFilter}
      />
      <UsePagination handlePageClick={handlePageClick}/>
    </>
  );
};

export default Home;
