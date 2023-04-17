import { useState } from 'react';
import { Photo } from 'pexels';
import queryPhotos from '../../API/API';
import './Search.scss';

export default function Search(props: { callback: (photos: Photo[]) => void }) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { callback } = props;

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
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            callback(photos);
          }
        }}
        onInput={(e) => {
          setPhotos(queryPhotos(e.currentTarget.value));
        }}
      />
    </div>
  );
}
