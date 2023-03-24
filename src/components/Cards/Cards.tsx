import Card from '../Card/Card';
import data from '../../assets/data/data.json';
import './Cards.scss';
import Cat from '../../assets/img/cat.jpg';

export default function Cards() {
  const array = data.products;
  const cardsArray = array.map((item) => (
    <Card
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      popularity={item.popularity}
      stock={item.stock}
      animeName={item.animeName}
      category={item.category}
      images={[Cat]}
      key={item.id}
    />
  ));
  return <div className="cards">{cardsArray}</div>;
}
