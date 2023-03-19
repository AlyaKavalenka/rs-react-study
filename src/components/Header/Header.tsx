import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">
          Ph<span className="logo__second-word">Search</span>
        </h1>
      </Link>
      <section className="header__navigation">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="about">
          <h3>About Us</h3>
        </Link>
      </section>
    </header>
  );
}
