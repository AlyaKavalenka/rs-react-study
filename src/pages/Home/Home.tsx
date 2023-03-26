import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import './Home.scss';

export default function Home() {
  return (
    <main>
      <div className="home">
        <Search />
        <Cards />
      </div>
    </main>
  );
}
