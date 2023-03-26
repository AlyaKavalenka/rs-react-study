import './Search.scss';

export default function Search() {
  return (
    <div className="search__wrapper">
      <input
        type="text"
        className="search__input"
        placeholder="Type to search"
        onBlur={(e) => {
          localStorage.setItem('inputValue', e.currentTarget.value);
        }}
        defaultValue={
          localStorage.getItem('inputValue')
            ? `${localStorage.getItem('inputValue')}`
            : ''
        }
      />
    </div>
  );
}
