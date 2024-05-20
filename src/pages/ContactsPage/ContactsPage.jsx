import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactsEditor from "../../components/ContactsEditor/ContactsEditor";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import css from './ContactPage.module.css'
export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={ css.contactPage}>
      <ContactsEditor />
      <SearchBox />
      <ContactList />
    </div>
  );
}
