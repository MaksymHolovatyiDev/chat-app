import {Field, Form, Formik} from 'formik';
import {socket} from '@/Pages/Authorized';
import {ReactSVG} from 'react-svg';

export function MainChatInput() {
  return (
    <div className="main-chat-input">
      <Formik
        initialValues={{message: ''}}
        onSubmit={async (values, {setSubmitting}) => {
          if (values.message)
            await socket.emit('message', {...values, socket: socket.id});
          setSubmitting(false);
        }}>
        {({handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <Form className="main-chat-input__form" onSubmit={handleSubmit}>
            <button type="button" className="main-chat-input__button">
              <ReactSVG
                src="src/assets/plus.svg"
                className="side-panel___svg"
              />
            </button>

            <Field
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              name="message"
              placeholder="Type a message here"
              type="text"
              className="main-chat-input__input"
            />

            <button
              type="button"
              className="main-chat-input__button main-chat-input__button--transparent">
              <ReactSVG
                src="src/assets/Smile.svg"
                className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent"
              />
            </button>

            <button
              type="submit"
              className="main-chat-input__button"
              disabled={isSubmitting}>
              <ReactSVG
                src="src/assets/navigation.svg"
                className="side-panel___svg main-chat-input___submit"
              />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
