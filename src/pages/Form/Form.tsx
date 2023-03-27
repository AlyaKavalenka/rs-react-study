/* eslint-disable jsx-a11y/label-has-associated-control */
import './Form.scss';
import React from 'react';
import data from '../../assets/data/data.json';
import Card from '../../components/Card/Card';
import Cat from '../../assets/img/cat.jpg';
import ICard from '../../types';

interface MyState {
  id: number;
  name: string;
  descr: string;
  price: number;
  image: string;
  date: Date;
  category: string;
  order: string;
  cardsArr: ICard[];
  popup: boolean;
}

export default class Form extends React.Component<ICard, MyState> {
  categArr = data.products.map((item) => item.category);

  filteredCategArr = this.categArr.filter(
    (item, index) => this.categArr.indexOf(item) === index
  );

  private inputNameRef: React.RefObject<HTMLInputElement>;

  private inputDescrRef: React.RefObject<HTMLInputElement>;

  private inputPriceRef: React.RefObject<HTMLInputElement>;

  private inputDateRef: React.RefObject<HTMLInputElement>;

  private inputCategRef: React.RefObject<HTMLSelectElement>;

  private inputOrderRef: React.RefObject<HTMLInputElement>;

  private inputFileRef: React.RefObject<HTMLInputElement>;

  private inputCheckboxRef: React.RefObject<HTMLInputElement>;

  constructor(props: ICard) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      descr: '',
      price: 0,
      image: Cat,
      date: new Date(),
      category: this.filteredCategArr[0],
      order: 'In stock',
      cardsArr: [],
      popup: false,
    };
    this.inputNameRef = React.createRef();
    this.inputDescrRef = React.createRef();
    this.inputPriceRef = React.createRef();
    this.inputDateRef = React.createRef();
    this.inputCategRef = React.createRef();
    this.inputOrderRef = React.createRef();
    this.inputFileRef = React.createRef();
    this.inputCheckboxRef = React.createRef();
  }

  render() {
    const optionArr = this.filteredCategArr.map((item) => (
      <option value={item} key={`${item}`}>
        {item}
      </option>
    ));

    const {
      image,
      name,
      descr,
      price,
      date,
      category,
      order,
      cardsArr,
      id,
      popup,
    } = this.state;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      this.setState({
        cardsArr: [
          ...cardsArr,
          {
            id: cardsArr.length,
            name,
            description: descr,
            price,
            popularity: 0,
            stock: 0,
            animeName: '',
            category,
            images: [image],
            date,
            order,
          },
        ],
        popup: true,
      });
      setTimeout(() => {
        this.setState({
          id: 0,
          name: '',
          descr: '',
          price: 0,
          image: Cat,
          date: new Date(),
          category: this.filteredCategArr[0],
          order: 'In stock',
          popup: false,
        });
      }, 2000);
      if (
        this.inputNameRef.current &&
        this.inputDescrRef.current &&
        this.inputPriceRef.current &&
        this.inputDateRef.current &&
        this.inputCategRef.current &&
        this.inputOrderRef.current &&
        this.inputFileRef.current &&
        this.inputCheckboxRef.current
      ) {
        this.inputNameRef.current.value = '';
        this.inputDescrRef.current.value = '';
        this.inputPriceRef.current.value = '';
        this.inputDateRef.current.value = `${
          new Date().toISOString().split('T')[0]
        }`;
        this.inputCategRef.current.value = `${this.filteredCategArr[0]}`;
        this.inputOrderRef.current.checked = true;
        this.inputFileRef.current.value = '';
        this.inputCheckboxRef.current.checked = false;
      }
    };

    const readFile = (target: EventTarget & HTMLInputElement) => {
      if (target.files) {
        this.setState({ image: URL.createObjectURL(target.files[0]) });
      }
    };

    return (
      <main>
        <div className="form-n-cards">
          <div className="form-n-example">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                placeholder="Type product name"
                onInput={(e) => this.setState({ name: e.currentTarget.value })}
                className="form__input"
                pattern="[A-Z]{1}[A-z]{2,32}"
                required
                title="The name must start with a capital letter and contain more than 3 letters"
                ref={this.inputNameRef}
              />
              <input
                type="text"
                placeholder="Type product description"
                onInput={(e) => this.setState({ descr: e.currentTarget.value })}
                className="form__input"
                required
                pattern="[A-z,\s]{3,64}"
                title="The description field must be entered with a minimum of 3 letters, a maximum of 64"
                ref={this.inputDescrRef}
              />
              <input
                type="number"
                placeholder="Type product price"
                onInput={(e) =>
                  this.setState({ price: +e.currentTarget.value })
                }
                className="form__input"
                required
                ref={this.inputPriceRef}
              />
              <input
                type="date"
                name=""
                id=""
                defaultValue={`${new Date().toISOString().split('T')[0]}`}
                max={`${new Date().toISOString().split('T')[0]}`}
                onChange={(e) =>
                  this.setState({ date: new Date(e.currentTarget.value) })
                }
                className="form__input"
                required
                ref={this.inputDateRef}
              />
              <label htmlFor="select" className="select-block">
                Select category
                <select
                  name="select"
                  id="select"
                  onChange={(e) =>
                    this.setState({ category: e.currentTarget.value })
                  }
                  className="form__input_select"
                  ref={this.inputCategRef}
                >
                  {optionArr}
                </select>
              </label>
              <div className="radio-block">
                <div className="radio-block__input-wrapper">
                  <input
                    type="radio"
                    name="order"
                    id="inStock"
                    defaultChecked
                    value="In stock"
                    onChange={(e) => this.setState({ order: e?.target.value })}
                    className="radio-block__input"
                    ref={this.inputOrderRef}
                  />
                  <label htmlFor="inStock" className="radio-block__label">
                    In stock
                  </label>
                </div>
                <div className="radio-block__input-wrapper">
                  <input
                    type="radio"
                    name="order"
                    id="underOrder"
                    value="Under the order"
                    onChange={(e) => this.setState({ order: e?.target.value })}
                    className="radio-block__input"
                  />
                  <label htmlFor="underOrder" className="radio-block__label">
                    Under the order
                  </label>
                </div>
              </div>
              <div className="input-file-block">
                <input
                  type="file"
                  name=""
                  id=""
                  accept="image/*"
                  onChange={(e) => readFile(e.target)}
                  className="input-file-block__input"
                  ref={this.inputFileRef}
                />
                <span className="input-file-block__text">Choose file</span>
              </div>
              <label htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  required
                  ref={this.inputCheckboxRef}
                />
                Agree to terms and conditions
              </label>
              <input
                type="submit"
                value="Create card"
                className="form__submit-btn"
              />
            </form>
            <article>
              <h3>Card Example</h3>
              <div className="cards">
                <section className="card__wrapper" key="card-example">
                  <Card
                    id={id}
                    name={name}
                    description={descr}
                    price={price}
                    popularity={0}
                    stock={0}
                    animeName=""
                    category={category}
                    images={[image]}
                    date={date}
                    order={order}
                    key="example"
                  />
                </section>
              </div>
            </article>
          </div>
          <article className="cards">
            {cardsArr.map((item) => (
              <section className="card__wrapper" key={`${item.id}`}>
                <Card
                  id={cardsArr.length}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  popularity={item.popularity}
                  stock={item.stock}
                  animeName={item.animeName}
                  category={item.category}
                  images={item.images}
                  date={item.date}
                  order={item.order}
                  key={`${item.id}`}
                />
              </section>
            ))}
          </article>
          <aside className={popup ? 'popup_active' : 'popup'}>
            <h3>A card with the name &#34;{name}&#34; has been created</h3>
          </aside>
        </div>
      </main>
    );
  }
}
