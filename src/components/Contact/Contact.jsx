import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { RiContactsLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast("You deleted contact", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
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
          onClick={handleDelete}
          color="primary"
          size="medium"
        >
          Delete contact
        </Button>
      </div>
    </div>
  );
}
