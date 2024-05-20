import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const links = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={links}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={links}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
