import Card from '../Card/Card';
import data from '../../assets/data/data.json';
import './Cards.scss';

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
      images={item.images}
      key={item.id}
    />
  ));
  return <div className="cards">{cardsArray}</div>;
}
