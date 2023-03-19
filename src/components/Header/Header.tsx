import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  const locationName = useLocation().pathname;
  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">
          Ph<span className="logo__second-word">Search</span>
        </h1>
      </Link>
      <section className="header__navigation">
        <Link
          to="/"
          className={
            locationName === '/' ? 'header__link_active' : 'header__link'
          }
        >
          <h3>Home</h3>
        </Link>
        <Link
          to="about"
          className={
            locationName === '/about' ? 'header__link_active' : 'header__link'
          }
        >
          <h3>About Us</h3>
        </Link>
      </section>
    </header>
  );
}
