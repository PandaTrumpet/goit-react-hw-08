import { Formik, Field, Form } from "formik";
export default function RegistrationForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          regName: "",
          regEmail: "",
          regPassword: "",
        }}
      >
        <Form>
          <h2>Register your account</h2>
          <label htmlFor="">
            Name
            <Field type="text" name="regName" />
          </label>
          <label htmlFor="">
            Email
            <Field type="email" name="regEmail" />
          </label>
          <label htmlFor="">
            Password
            <Field type="password" name="regPassword" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
