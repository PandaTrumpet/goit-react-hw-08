import { useSelector } from "react-redux";
// import { selectContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";
export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  // console.log(contacts);
  return (
    <>
      <ul className={css.contactList}>
        {contacts.length > 0 &&
          contacts.map((contact) => {
            return (
              <li key={contact.id} className={css.contactList}>
                <Contact contact={contact} />
              </li>
            );
          })}
      </ul>
    </>
  );
}
