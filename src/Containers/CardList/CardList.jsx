import "./CardList.scss";
import Card from "../../Components/Card/Card";

const CardList = ({ beers }) => {
  const shortenString = (str) =>
    str.length > 200 ? str.substring(0, 199) + "..." : str;

  const beerCards = beers.map((beer) => (
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
