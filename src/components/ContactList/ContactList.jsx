import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contactSelector = useSelector(selectContacts);
  console.log(contactSelector);
  return (
    <>
      <ul>
        {contactSelector.map((contact) => {
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
