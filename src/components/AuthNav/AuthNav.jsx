import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";
export default function AuthNav() {
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.nav}>
      <NavLink className={linkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={linkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
