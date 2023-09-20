import {Formik, Form, Field} from 'formik';
import { MainRoutes, SignIn, SignUp } from '@/environment';
import {AuthProps} from '@/Types';


export function AuthForm({pathname}: AuthProps) {
  const authData = pathname === MainRoutes.SignUp ? SignUp : SignIn;

  return (
    <Formik
      initialValues={authData.initialValues}
      onSubmit={async (values, {setSubmitting}) => {
        setSubmitting(false);
      }}>
      {({handleBlur, handleChange, handleSubmit, isSubmitting}) => (
        <Form className="auth__form" onSubmit={handleSubmit}>
          <ul className="auth__list">
            {authData.data.map(el => (
              <li key={el.field}>
                <Field
                  className="auth__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={el.field}
                  placeholder={el.text}
                  type={el.type}
                />
              </li>
            ))}
          </ul>
          <button
            className="auth__button"
            type="submit"
            disabled={isSubmitting}>
            {authData.buttonText}
          </button>
        </Form>
      )}
    </Formik>
  );
}
