import "./CardList.scss";
import Card from "../../Components/Card/Card";

const CardList = ({
  beers,
  searchTerm,
  abvFilter,
  brewedBeforeFilter,
  acidityFilter,
}) => {
  const searchBeers = (
    beersArr,
    searchTerm,
    abvFilter,
    brewedBeforeFilter,
    acidityFilter
  ) => {
    return beersArr
      .filter((beer) => beer.name.toLowerCase().includes(searchTerm))
      .filter((beer) => beer.abv > abvFilter)
      .filter(
        (beer) => beer.first_brewed.split("/")[1] * 1 < brewedBeforeFilter
      )
      .filter((beer) => beer.ph > acidityFilter);
  };

  const shortenString = (str) =>
    str.length > 200 ? str.substring(0, 199) + "..." : str;

  const beerCards = searchBeers(
    beers,
    searchTerm,
    abvFilter,
    brewedBeforeFilter,
    acidityFilter
  ).map((beer) => (
    <Card
      key={beer.id}
      id={beer.id}
      name={beer.name}
      img={beer.image_url}
      description={shortenString(beer.description)}
      abv={beer.abv}
    />
  ));

  return <div className="cardlist">{beerCards}</div>;
};

export default CardList;
