import { Formik, Form, Field } from "formik";
import { addContact } from "../../redux/contacts/operations";
import css from './ContactEditor.module.css'
import { useDispatch } from "react-redux";
export default function ContactsEditor() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(addContact(values));
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
          <label>
            Name
            <Field type="text" name="name" />
            </label>
          </div>
          <div className={css.formContainer}>
          <label>
            Number
            <Field type="phone" name="number" />
            </label>
            </div>
          <button type="submit" className={css.btnContact}>Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
