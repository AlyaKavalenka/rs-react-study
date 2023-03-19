import Search from '../../components/Search/Search';
import './Home.scss';

export default function Home() {
  return (
    <main>
      <div className="home">
        <Search />
        <div>Cards</div>
      </div>
    </main>
  );
}
