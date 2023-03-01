import NavBar from './NavBar';
import style from '../styles/Header.module.css';

const Header = () => (
  <div className={style.container}>
    <h1 className={style.logo}>Math Magicians</h1>
    <NavBar />
  </div>
);

export default Header;
