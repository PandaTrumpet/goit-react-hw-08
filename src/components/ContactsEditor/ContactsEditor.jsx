import { Formik, Form, Field } from "formik";
import { addContact } from "../../redux/contacts/operations";
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
        <Form>
          <label>
            Name
            <Field type="text" name="name" />
          </label>
          <label>
            Number
            <Field type="phone" name="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
