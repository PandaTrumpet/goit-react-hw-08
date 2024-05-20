import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { Button } from "@mui/material";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
export default function UserMenu() {
  const dispatch = useDispatch();
  const handleClickc = () => {
    dispatch(logout());
  };
  const user = useSelector(selectUser);
  return (
    <div className={css.userMenu}>
      <p>Welcome, {user.name}</p>
      <Button
        onClick={handleClickc}
        color="error"
        variant="outlined"
        className={css.button}
      >
        Log out
      </Button>
    </div>
  );
}
