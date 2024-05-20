import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Button } from "@mui/material";
import css from "./LoginForm.module.css";
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
        <Form className={css.mainForm}>
          <h2 className={css.loginTitle}>Please log in</h2>
          <label className={css.loginLabel}>
            Email
            <Field type="email" name="email" className={css.input} />
          </label>
          <label className={css.loginLabel}>
            Password
            <Field type="password" name="password" className={css.input} />
          </label>
          <Button variant="outlined" type="submit" className={css.btnLogin}>
            Log in
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
