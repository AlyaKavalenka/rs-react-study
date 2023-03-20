import './Form.scss';
import data from '../../assets/data/data.json';

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
  return (
    <main>
      <div className="form-container">
        <form className="form">
          <input type="text" placeholder="Type product name" />
          <input type="text" placeholder="Type product description" />
          <input type="text" placeholder="Type product price" />
          <input type="date" name="" id="" />
          <label htmlFor="select">
            Select category
            <select name="select" id="select">
              {optionArr}
            </select>
          </label>
          <input type="radio" name="" id="" />
          <input type="file" name="" id="" />
          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            Agree to terms and conditions
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </main>
  );
}
