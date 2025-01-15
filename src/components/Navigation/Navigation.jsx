// components/Navigation/Navigation.jsx
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const handleActiveLink = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={handleActiveLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={handleActiveLink}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
