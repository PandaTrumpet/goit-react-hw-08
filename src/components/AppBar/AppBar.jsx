import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.headerMenu}>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
