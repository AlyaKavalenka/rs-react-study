/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { IFormInputs } from '../../types';
import './Form.scss';
import Card from '../../components/Card/Card';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { formCardsValue } from '../../Store/Slicers/FormCards';
import data from '../../assets/data/data.json';
import Popup from '../../components/Popup/Popup';

export default function Form() {
  const dispatch = useAppDispatch();
  const formCards = useAppSelector((state) => state.formCards.value);

  const [img, setImg] = useState('');
  const [popup, setPopup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>();

  const categArr = data.products.map((item) => item.category);
  const filteredCategArr = categArr.filter(
    (item, index) => categArr.indexOf(item) === index
  );
  const optionArr = filteredCategArr.map((item) => (
    <option value={item} key={`${item}`}>
      {item}
    </option>
  ));

  const readFile = (target: EventTarget & HTMLInputElement) => {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  };

  const onSubmit: SubmitHandler<IFormInputs> = (cardsData) => {
    const { name, description, price, date, category, order, check } =
      cardsData;
    const newId = formCards.length;
    const newCard: IFormInputs = {
      id: newId,
      name,
      description,
      price,
      date: new Date(date).toLocaleDateString(),
      category,
      order,
      images: [img],
      check,
    };
    dispatch(formCardsValue([...formCards, newCard]));
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
      reset();
    }, 2000);
  };

  return (
    <main>
      <div className="form-n-cards">
        <div className="form-n-example">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Type product name"
              className="form__input"
              {...register('name', {
                required: true,
                pattern: /[A-Z]{1}[A-z]{2,32}/,
              })}
            />
            {errors?.name && (
              <p>
                The name must start with a capital letter and contain more than
                3 letters
              </p>
            )}

            <input
              type="text"
              className="form__input"
              placeholder="Type product description"
              {...register('description', {
                required: true,
                pattern: /[A-z,\s]{3,64}/,
              })}
            />
            {errors?.description && (
              <p>
                The description field must be entered with a minimum of 3
                letters, a maximum of 64
              </p>
            )}

            <input
              type="number"
              className="form__input"
              placeholder="Type product price"
              {...register('price', {
                required: true,
                pattern: /\d/,
              })}
            />
            {errors?.price && <p>Only digits</p>}

            <input
              type="date"
              className="form__input"
              defaultValue={`${new Date().toISOString().split('T')[0]}`}
              max={`${new Date().toISOString().split('T')[0]}`}
              {...register('date', {
                required: true,
              })}
            />

            <label htmlFor="select" className="select-block">
              Select category
              <select
                id="select"
                {...register('category')}
                className="form__input_select"
              >
                {optionArr}
              </select>
            </label>

            <div className="radio-block">
              <div className="radio-block__input-wrapper">
                <input
                  type="radio"
                  {...register('order')}
                  className="radio-block__input"
                  id="inStock"
                  defaultChecked
                  value="In stock"
                />
                <label htmlFor="inStock" className="radio-block__label">
                  In stock
                </label>
              </div>

              <div className="radio-block__input-wrapper">
                <input
                  type="radio"
                  {...register('order')}
                  className="radio-block__input"
                  id="underOrder"
                  value="Under the order"
                />
                <label htmlFor="underOrder" className="radio-block__label">
                  Under the order
                </label>
              </div>
            </div>

            <div className="input-file-block">
              <input
                type="file"
                {...register('images')}
                accept="image/*"
                className="input-file-block__input"
                onChange={(e) => readFile(e.target)}
              />
              <span className="input-file-block__text">Choose file</span>
            </div>

            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                required
                {...register('check', { required: true })}
              />
              Agree to terms and conditions
            </label>

            <input
              type="submit"
              value="Create card"
              className="form__submit-btn"
            />
          </form>
        </div>

        <article className="cards">
          {formCards.map((card) => (
            <section className="card__wrapper" key={`${card.id}`}>
              <Card
                id={card.id}
                name={card.name}
                description={card.description}
                price={card.price}
                popularity={0}
                stock={0}
                animeName=""
                category={card.category}
                images={card.images}
                date={card.date}
                order={card.order}
              />
            </section>
          ))}
        </article>
        <Popup popup={popup} name={formCards[formCards.length - 1].name} />
      </div>
    </main>
  );
}
