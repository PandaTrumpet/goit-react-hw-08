import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
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
        <Form className={css.mainForm}>
          <h2 className={css.regTitle}>Register your account</h2>
          <label className={css.formInput}>
            Email
            <Field type="email" name="email" className={css.input} />
          </label>
          <label className={css.formInput}>
            Name
            <Field type="text" name="name" className={css.input} />
          </label>
          <label className={css.formInput}>
            Password
            <Field type="password" name="password" className={css.input} />
          </label>
          <button type="submit" className={css.btnReg}>
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}
