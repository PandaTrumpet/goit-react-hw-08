import { Formik, Field, Form } from "formik";
export default function LoginForm() {
  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          logEmail: "",
          logPassword: "",
        }}
      >
        <Form>
          <h2>Please log in</h2>
          <label htmlFor="">
            Email
            <Field type="email" name="logEmail" />
          </label>
          <label>
            Password
            <Field type="password" name="logPassword" />
          </label>
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
}
