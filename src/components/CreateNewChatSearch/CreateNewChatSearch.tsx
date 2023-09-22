import {Field, Form, Formik} from 'formik';
import {ReactSVG} from 'react-svg';

export function CreateNewChatSearch() {
  return (
    <Formik initialValues={{message: ''}} onSubmit={async values => {}}>
      {({handleBlur, handleChange, handleSubmit}) => (
        <Form className="new-chat__form" onSubmit={handleSubmit}>
          <Field
            onChange={handleChange}
            onBlur={handleBlur}
            name="message"
            placeholder="Search"
            type="text"
            className="new-chat__input"
          />

          <button
            type="button"
            className="main-chat-input__button main-chat-input__button--transparent new-chat__button">
            Messages{' '}
            <ReactSVG
              src="src/assets/chevron-down.svg"
              className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent chevron-down__svg--gray"
            />
          </button>
        </Form>
      )}
    </Formik>
  );
}
