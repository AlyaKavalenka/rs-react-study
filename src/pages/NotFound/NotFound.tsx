import { Link } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
  return (
    <main>
      <div className="not-found">
        <h2 className="not-found__text">Whoops!</h2>
        <h4 className="not-found__text">404 Page Not Found</h4>
        <img
          src="https://pro-dachnikov.com/uploads/posts/2023-01/1673496652_pro-dachnikov-com-p-foto-na-shezlonge-zimoi-56.jpg"
          alt="dogs chill"
          className="not-found__image"
        />
        <h3 className="not-found__text">
          Looks Like this page went on vacation
        </h3>
        <span className="not-found__text">
          Try to{' '}
          <Link to="/" className="not-found__link">
            go home
          </Link>{' '}
          instead
        </span>
      </div>
    </main>
  );
}
