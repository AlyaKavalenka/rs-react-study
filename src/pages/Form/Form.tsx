import './Form.scss';

export default function Form() {
  return (
    <main>
      <div className="form-container">
        <form className="form">
          <input type="text" name="" id="" />
          <input type="date" name="" id="" />
          <label htmlFor="select">
            <select name="select" id="select">
              <option value="puck">Puck</option>
            </select>
          </label>
          <input type="checkbox" />
          <input type="radio" name="" id="" />
          <input type="file" name="" id="" />
          <input type="submit" value="" />
        </form>
      </div>
    </main>
  );
}
