import {useSendMessageMutation} from '@/Redux/operations';
import {Field, Form, Formik} from 'formik';
import {ReactSVG} from 'react-svg';
import PlusSvg from '@assets/plus.svg';
import SmileSvg from '@assets/Smile.svg';
import NavigationSvg from '@assets/navigation.svg';

export function MainChatInput({id}: {id: string}) {
  const [sendMessage] = useSendMessageMutation();

  return (
    <div className="main-chat-input">
      <Formik
        initialValues={{message: ''}}
        onSubmit={(values, {setSubmitting}) => {
          sendMessage({...values, to: id});
          values.message = '';
          setSubmitting(false);
        }}>
        {({handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <Form className="main-chat-input__form" onSubmit={handleSubmit}>
            <button type="button" className="main-chat-input__button">
              <ReactSVG src={PlusSvg} className="side-panel___svg" />
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
                src={SmileSvg}
                className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent"
              />
            </button>

            <button
              type="submit"
              className="main-chat-input__button"
              disabled={isSubmitting}>
              <ReactSVG
                src={NavigationSvg}
                className="side-panel___svg main-chat-input___submit"
              />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
