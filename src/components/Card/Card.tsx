import React from 'react';
import './Card.scss';

interface ICard {
  id: number;
  name: string;
  description: string;
  price: number;
  popularity: number;
  stock: number;
  animeName: string;
  category: string;
  images: string[];
}

export default class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, images, description, price, popularity } = this.props;
    return (
      <div className="card">
        <article className="card__header">
          <span>{name}</span>
          <span>{popularity}</span>
        </article>
        <div className="card__img-wrapper">
          <img src={`src${images[0]}`} alt={`${name}`} className="card__img" />
        </div>
        <article className="card__description">
          <span>{description}</span>
          <span>{`${price}р.`}</span>
        </article>
      </div>
    );
  }
}
