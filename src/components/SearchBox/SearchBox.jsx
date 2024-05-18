import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectSearchContact } from "../../redux/filters/selectors";
import { findContact } from "../../redux/filters/slice";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectSearchContact);

  return (
    <div>
      <input
        type="text"
        name="searchContact"
        value={filter}
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(findContact(e.target.value));
        }}
      />
    </div>
  );
}
