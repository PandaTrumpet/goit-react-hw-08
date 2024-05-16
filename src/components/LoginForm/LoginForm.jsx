import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        <Form>
          <h2>Please log in</h2>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
}
