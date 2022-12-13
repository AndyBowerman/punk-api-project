import ShowCase from "../../Containers/Showcase/Showcase";
import CardList from "../../Containers/CardList/CardList";
import UsePagination from "../../Components/UsePagination/UsePagination";
import Navbar from "../../Containers/Navbar/Navbar";
import { useState, useEffect } from "react";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    searchTerm: "",
    abvFilter: "",
    brewedBeforeFilter: "",
  });
  const [pagination, setPagination] = useState(true);

  const getSearchTerm = (event) => {
    event.preventDefault();
    if (event.target.firstChild.value) {
      setSearchCriteria({
        ...searchCriteria,
        searchTerm: `&beer_name=${event.target.firstChild.value.replace(
          /\s/g,
          "_"
        )}`,
      });
      setPagination(false);
    }
    event.target.firstChild.value = "";
  };

  const getAbvFilter = (event) => {
    if (event.target.checked) {
      setSearchCriteria({
        ...searchCriteria,
        abvFilter: `&abv_gt=${event.target.value}`,
      });
      setPagination(false);
    } else {
      setSearchCriteria({ ...searchCriteria, abvFilter: "" });
      setPagination(true);
    }
  };

  const getBrewedBeforeFilter = (event) => {
    if (event.target.checked) {
      setSearchCriteria({
        ...searchCriteria,
        brewedBeforeFilter: `&brewed_before=01-2010`,
      });
      setPagination(false);
    } else {
      setSearchCriteria({ ...searchCriteria, brewedBeforeFilter: "" });
      setPagination(true);
    }
  };

  const resetSearchCriteria = () => {
    setSearchCriteria({
      ...searchCriteria,
      searchTerm: "",
    });
    setPagination(true);
  };

  const resetFilters = () => {
    setSearchCriteria({
      ...searchCriteria,
      abvFilter: "",
      brewedBeforeFilter: "",
    });
    setPagination(true);
  };

  const getBeers = async () => {
    const data = await fetch(
      `https://api.punkapi.com/v2/beers?page=1&per_page=80${searchCriteria.searchTerm}${searchCriteria.abvFilter}${searchCriteria.brewedBeforeFilter}`
    );
    const result = await data.json();
    setBeers(result);
  };

  useEffect(() => {
    getBeers();
    // eslint-disable-next-line
  }, [searchCriteria]);

  const handlePageClick = async (page) => {
    let currentPage = page.selected + 1;
    const data = await fetch(
      `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=80${searchCriteria.searchTerm}${searchCriteria.abvFilter}${searchCriteria.brewedBeforeFilter}`
    );
    const result = await data.json();
    setBeers(result);
  };

  return (
    <>
      <Navbar
        getSearchTerm={getSearchTerm}
        getAbvFilter={getAbvFilter}
        getBrewedBeforeFilter={getBrewedBeforeFilter}
        resetSearchCriteria={resetSearchCriteria}
        resetFilters={resetFilters}
        homePage={true}
      />
      <ShowCase />
      <CardList beers={beers} />
      <UsePagination handlePageClick={handlePageClick} display={pagination} />
    </>
  );
};

export default Home;
