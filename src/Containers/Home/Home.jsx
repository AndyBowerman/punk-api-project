import './Home.scss';
import ShowCase from '../Showcase/Showcase';
import CardList from '../CardList/CardList';

const Home = ({beers, searchTerm, abvFilter, brewedBeforeFilter, acidityFilter}) => {
  return (
    <>
        <ShowCase />
        <CardList beers={beers} searchTerm={searchTerm} abvFilter={abvFilter} brewedBeforeFilter={brewedBeforeFilter} acidityFilter={acidityFilter} />
    </>
  )
}

export default Home