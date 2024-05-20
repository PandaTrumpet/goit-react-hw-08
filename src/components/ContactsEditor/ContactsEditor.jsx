import { Formik, Form, Field } from "formik";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactEditor.module.css";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
export default function ContactsEditor() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // console.log(values);
    dispatch(addContact(values));
    toast.success("You added contact");
    actions.resetForm();
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: "",
          number: "",
        }}
      >
        <Form className={css.mainForm}>
          <div className={css.formContainer}>
            <label className={css.inputForm}>
              Name
              <Field type="text" name="name" />
            </label>
          </div>
          <div className={css.formContainer}>
            <label className={css.inputForm}>
              Number
              <Field type="phone" name="number" />
            </label>
          </div>
          <Button type="submit" variant="contained" className={css.btnContact}>
            Add contact
          </Button>
        </Form>
      </Formik>
    </>
  );
}
