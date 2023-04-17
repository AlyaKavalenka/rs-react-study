import { Photo } from 'pexels';
import Card from '../Card/Card';
import './Cards.scss';

export default function Cards(props: { array: Photo[] }) {
  const { array } = props;
  const cardsArray = array.map((item) => (
    <Card
      id={item.id}
      name={item.photographer}
      description={item.alt || ''}
      price={10}
      popularity={0}
      stock={0}
      animeName={item.photographer}
      category=""
      images={[item.src.original]}
      date={
        new Date(
          new Date(2012, 0, 1).getTime() +
            Math.random() *
              (new Date().getTime() - new Date(2012, 0, 1).getTime())
        )
      }
      order=""
      key={item.id}
    />
  ));
  return <div className="cards">{cardsArray}</div>;
}
