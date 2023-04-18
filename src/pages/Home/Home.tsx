import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import './Home.scss';
import { useAppSelector } from '../../hooks/hooks';

export default function Home() {
  const photos = useAppSelector((state) => state.photos.photos);
  return (
    <main>
      <div className="home">
        <Search />
        {photos.length > 0 ? (
          <Cards array={photos} />
        ) : (
          <h2>Search and press Enter...</h2>
        )}
      </div>
    </main>
  );
}
