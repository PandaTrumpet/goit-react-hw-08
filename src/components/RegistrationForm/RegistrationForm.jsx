import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: "",
          name: "",
          password: "",
        }}
      >
        <Form>
          <h2>Register your account</h2>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Name
            <Field type="text" name="name" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
