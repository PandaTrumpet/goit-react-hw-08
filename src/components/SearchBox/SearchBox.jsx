import { useDispatch, useSelector } from "react-redux";
// import css from "./SearchBox.module.css";
import { selectSearchContact } from "../../redux/filters/selectors";
import { findContact } from "../../redux/filters/slice";
export default function SearchBox() {
  const dispatch = useDispatch();
  const textFilter = useSelector(selectSearchContact);
  const handleChange = (e) => {
    dispatch(findContact(e.target.value));
  };
  return (
    <div>
      <input
        type="text"
        name="searchContact"
        value={textFilter}
        onChange={handleChange}
      />
    </div>
  );
}
