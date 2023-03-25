/* eslint-disable jsx-a11y/label-has-associated-control */
import './Form.scss';
import { useState } from 'react';
import data from '../../assets/data/data.json';
import Card from '../../components/Card/Card';
import Cat from '../../assets/img/cat.jpg';

export default function Form() {
  const array = data.products;
  const categArr = array.map((item) => item.category);
  const filteredCategArr = categArr.filter(
    (item, index) => categArr.indexOf(item) === index
  );
  const optionArr = filteredCategArr.map((item) => (
    <option value={item} key={`${item}`}>
      {item}
    </option>
  ));

  const [name, setName] = useState('');
  const [descr, setDescr] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(Cat);
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState(filteredCategArr[0]);
  const [order, setOrder] = useState('In stock');

  function readFile(target: EventTarget & HTMLInputElement) {
    if (target.files) {
      setImage(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <main>
      <div className="form-n-cards">
        <div className="form-n-example">
          <form className="form">
            <input
              type="text"
              placeholder="Type product name"
              onInput={(e) => setName(e.currentTarget.value)}
              className="form__input"
            />
            <input
              type="text"
              placeholder="Type product description"
              onInput={(e) => setDescr(e.currentTarget.value)}
              className="form__input"
            />
            <input
              type="number"
              placeholder="Type product price"
              onInput={(e) => setPrice(+e.currentTarget.value)}
              className="form__input"
            />
            <input
              type="date"
              name=""
              id=""
              defaultValue={`${new Date().toISOString().split('T')[0]}`}
              max={`${new Date().toISOString().split('T')[0]}`}
              onChange={(e) => setDate(new Date(e.currentTarget.value))}
              className="form__input"
            />
            <label htmlFor="select" className="select-block">
              Select category
              <select
                name="select"
                id="select"
                onChange={(e) => setCategory(e.currentTarget.value)}
                className="form__input_select"
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
                  onChange={(e) => setOrder(e?.target.value)}
                  className="radio-block__input"
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
                  onChange={(e) => setOrder(e?.target.value)}
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
              />
              <span className="input-file-block__text">Choose file</span>
            </div>
            <label htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
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
              <section className="card__wrapper">
                <Card
                  id={data.total + 1}
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
                />
              </section>
            </div>
          </article>
        </div>
        <article className="cards">
          <section className="card__wrapper">
            <Card
              id={data.total + 1}
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
            />
          </section>
          <section className="card__wrapper">
            <Card
              id={data.total + 1}
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
            />
          </section>
          <section className="card__wrapper">
            <Card
              id={data.total + 1}
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
            />
          </section>
          <section className="card__wrapper">
            <Card
              id={data.total + 1}
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
            />
          </section>
          <section className="card__wrapper">
            <Card
              id={data.total + 1}
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
            />
          </section>
          <section className="card__wrapper">
            <Card
              id={data.total + 1}
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
            />
          </section>
        </article>
      </div>
    </main>
  );
}
