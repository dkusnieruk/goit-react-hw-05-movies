import { NavLink } from 'react-router-dom';
import css from '../Nav/nav.module.css';

function Nav() {
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to={'/goit-react-hw-05-movies/'}>
        Home
      </NavLink>
      <NavLink className={css.link} to={'/goit-react-hw-05-movies/movies'}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Nav;
