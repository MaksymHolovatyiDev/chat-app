import {Field, Formik, Form} from 'formik';

export function Authentication() {
  return (
    <>
      <p className="base__title">Authentication</p>
      <Formik initialValues={{name: ''}} onSubmit={async values => {}}>
        {({handleBlur, handleSubmit, handleChange}) => (
          <Form className="authentication__form" onSubmit={handleSubmit}>
            <Field
              className="authentication__input"
              onBlur={handleBlur}
              onChange={handleChange}
              maxLength={1}
              name="name"
              type="text"
              autoFocus
            />
            <Field
              className="authentication__input"
              onBlur={handleBlur}
              maxLength={1}
              name="name"
              type="text"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
