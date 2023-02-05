import { NavLink } from 'react-router-dom';
import css from '../Nav/nav.module.css';

function Nav() {
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to={'/react-homework-template/'}>
        Home
      </NavLink>
      <NavLink className={css.link} to={'/react-homework-template/movies'}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Nav;
