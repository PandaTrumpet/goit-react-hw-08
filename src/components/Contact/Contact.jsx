import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { RiContactsLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div className={css.contactItemContainer}>
      <div>
        <div className={css.nameContainer}>
          <RiContactsLine />
          <p>{contact.name}</p>
        </div>
        <div className={css.numberContainer}>
          <BsFillTelephoneFill />
          <p>{contact.number}</p>
        </div>
        <Button
          startIcon={<DeleteIcon />}
          variant="outlined"
          className={css.btnContact}
          onClick={() => dispatch(deleteContact(contact.id))}
          color="primary"
          size="large"
        >
          Delete contact
        </Button>
      </div>
    </div>
  );
}
