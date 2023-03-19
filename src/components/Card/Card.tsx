import React from 'react';

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
        <article className="name-n-pop">
          <span>{name}</span>
          <span>{popularity}</span>
        </article>
        <img src={`src${images[0]}`} alt={`${name}`} />
        <article className="description-n-price">
          <span>{description}</span>
          <span>{price}</span>
        </article>
      </div>
    );
  }
}
