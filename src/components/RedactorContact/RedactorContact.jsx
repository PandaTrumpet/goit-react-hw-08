import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { changeContact } from "../../redux/contacts/operations";
import css from "./RedactorContact.module.css";
export default function RedactorContact({ contact, editor }) {
  const handleSubmit = (values, actions) => {
    const newData = { name: values.name, number: values.number };
    dispatch(changeContact({ contactId: contact.id, newData }));
    editor(false);
    actions.resetForm();
  };
  const dispatch = useDispatch();
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: "",
        number: "",
      }}
    >
      <Form className={css.mainForm}>
        <label className={css.inputForm}>
          Name
          <Field type="text" name="name" />
        </label>

        <label className={css.inputForm}>
          Number
          <Field type="text" name="number" />
        </label>
        <Button type="submit" variant="contained" className={css.btn}>
          Save changes
        </Button>
      </Form>
    </Formik>
  );
}
