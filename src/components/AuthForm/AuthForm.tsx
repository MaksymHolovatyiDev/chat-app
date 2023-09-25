import {Formik, Form, Field} from 'formik';
import {MainRoutes, SignIn, SignUp} from '@/environment';
import {useLocation} from 'react-router-dom';
import {userSignIn, userSignUp} from '@/Redux/operations';
import {useDispatch} from 'react-redux';

export function AuthForm() {
  const {pathname} = useLocation();
  const authData = pathname === MainRoutes.SignUp ? SignUp : SignIn;
  const dispatch = useDispatch<any>();

  return (
    <Formik
      initialValues={authData.initialValues}
      onSubmit={async (values, {setSubmitting}) => {
        pathname === MainRoutes.SignUp
          ? dispatch(userSignUp({...values}))
          : dispatch(userSignIn({...values}));
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
