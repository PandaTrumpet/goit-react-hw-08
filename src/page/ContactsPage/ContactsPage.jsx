import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactsEditor from "../../components/ContactsEditor/ContactsEditor";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactsEditor />
      <ContactList />
    </>
  );
}
