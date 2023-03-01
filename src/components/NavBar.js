import { NavLink } from 'react-router-dom';
import style from '../styles/NavBar.module.css';

const NavBar = () => {
  const styleActive = `${style.active} ${style.link}`;
  const styleNoActive = `${style.noActive} ${style.link}`;
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styleActive : styleNoActive)}
          >
            Home
          </NavLink>
        </li>
        <li className={style.liBorder}>
          <NavLink
            to="/calculator"
            className={({ isActive }) => (isActive ? styleActive : styleNoActive)}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quote"
            className={({ isActive }) => (isActive ? styleActive : styleNoActive)}
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
