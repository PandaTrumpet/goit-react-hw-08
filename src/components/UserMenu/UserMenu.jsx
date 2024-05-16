import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
export default function UserMenu() {
  const dispatch = useDispatch();
  const handleClickc = () => {
    dispatch(logout());
  };
  const user = useSelector(selectUser);
  return (
    <>
      <p>Welcome,{user.name}</p>
      <button onClick={handleClickc}>Log out</button>
    </>
  );
}
