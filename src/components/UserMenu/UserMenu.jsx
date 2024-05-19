import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from './UserMenu.module.css'
export default function UserMenu() {
  const dispatch = useDispatch();
  const handleClickc = () => {
    dispatch(logout());
  };
  const user = useSelector(selectUser);
  return (
    <div className={ css.userMenu}>
      <p>Welcome,{user.name}</p>
      <button onClick={handleClickc} className={ css.button}>Log out</button>
    </div>
  );
}
