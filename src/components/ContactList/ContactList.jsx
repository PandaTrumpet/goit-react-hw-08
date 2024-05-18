import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
export default function ContactList() {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  return (
    <>
      <ul className={css.contactList}>
        {contacts.length >0 && contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
