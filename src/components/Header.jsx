import styles from "../styles/Header.module.css";
import Logo from "../assets/img/logo.png";
import { useLocation, Link } from "react-router-dom";
import { HiHome, HiCode } from "react-icons/hi";

const Header = () => {
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <header>
      <div className={styles.brand}>
        <Link to="/">
          <img src={Logo} alt="logo" />
          <h1>Bye Background!</h1>
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              to="/"
              className={
                pathMatchRoute("/") ? styles.navLinkActive : styles.navLink
              }
            >
              <HiHome />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/about"
              className={
                pathMatchRoute("/about") ? styles.navLinkActive : styles.navLink
              }
            >
              <HiCode />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
