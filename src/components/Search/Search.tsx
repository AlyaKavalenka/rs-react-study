import './Search.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { searchValue } from '../../Store/Slicers/SearchSlice';
import { fetchByPhotos } from '../../Store/Slicers/PhotosSlice';

export default function Search() {
  const dispatch = useAppDispatch();
  const searchInputValue = useAppSelector((state) => state.search.value);

  return (
    <div className="search__wrapper">
      <input
        type="text"
        className="search__input"
        placeholder="Type to search"
        defaultValue={searchInputValue}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            dispatch(fetchByPhotos(searchInputValue));
          }
        }}
        onInput={(e) => {
          dispatch(searchValue(e.currentTarget.value));
        }}
      />
    </div>
  );
}
