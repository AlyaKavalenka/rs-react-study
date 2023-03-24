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
  images: string[] | undefined[];
  date: Date;
  order: string;
}

export default class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name,
      description,
      price,
      popularity,
      images,
      date,
      category,
      order,
    } = this.props;
    return (
      <div className="card">
        <article className="card__header">
          <span className="card__category">{category}</span>
          <span className="card__name">{name}</span>
          <span className="card__popularity">{popularity || 'no reviews'}</span>
        </article>
        <div className="card__img-wrapper">
          <img src={images[0]} alt={`${name}`} className="card__img" />
        </div>
        <article className="card__description">
          <span>{description}</span>
          <span>{`${price}р.`}</span>
        </article>
        <article className="card__date-n-order">
          <span className="card__date">{`${date.toLocaleDateString()}`}</span>
          <span className="card__order">{order}</span>
        </article>
      </div>
    );
  }
}
