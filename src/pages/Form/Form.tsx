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

  function readFile(target: EventTarget & HTMLInputElement) {
    if (target.files) {
      setImage(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <main>
      <div className="form-container">
        <form className="form">
          <input
            type="text"
            placeholder="Type product name"
            onInput={(e) => setName(e.currentTarget.value)}
          />
          <input
            type="text"
            placeholder="Type product description"
            onInput={(e) => setDescr(e.currentTarget.value)}
          />
          <input
            type="number"
            placeholder="Type product price"
            onInput={(e) => setPrice(+e.currentTarget.value)}
          />
          <input
            type="date"
            name=""
            id=""
            defaultValue={`${new Date().toISOString().split('T')[0]}`}
            max={`${new Date().toISOString().split('T')[0]}`}
            onChange={(e) => setDate(new Date(e.currentTarget.value))}
          />
          <label htmlFor="select">
            Select category
            <select name="select" id="select">
              {optionArr}
            </select>
          </label>
          <div>
            <input type="radio" name="order" id="inStock" defaultChecked />
            <label htmlFor="inStock">In stock</label>

            <input type="radio" name="order" id="underOrder" />
            <label htmlFor="underOrder">Under the order</label>
          </div>
          <input
            type="file"
            name=""
            id=""
            accept="image/*"
            onChange={(e) => readFile(e.target)}
          />
          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            Agree to terms and conditions
          </label>
          <input type="submit" value="Submit" />
        </form>
        <article>
          <h3>Card Example</h3>
          <section className="card__wrapper">
            <Card
              id={data.total + 1}
              name={name}
              description={descr}
              price={price}
              popularity={0}
              stock={0}
              animeName=""
              category=""
              images={[image]}
              date={date}
            />
          </section>
        </article>
      </div>
    </main>
  );
}
