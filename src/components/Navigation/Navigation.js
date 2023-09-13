import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Home
    </NavLink>

    <NavLink
      to="/catalog"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Catalog
    </NavLink>
    <NavLink
      to="/favorites"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Favorites
    </NavLink>
  </nav>
);

export default Navigation;
