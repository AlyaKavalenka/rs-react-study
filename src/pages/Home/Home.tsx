import { Photo } from 'pexels';
import { useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import './Home.scss';

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const updateCards = (value: Photo[]) => {
    setPhotos(value);
  };

  return (
    <main>
      <div className="home">
        <Search callback={updateCards} />
        {photos.length > 0 ? (
          <Cards array={photos} />
        ) : (
          <h2>Search and press Enter...</h2>
        )}
      </div>
    </main>
  );
}
