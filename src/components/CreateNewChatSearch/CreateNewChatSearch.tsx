import './CreateNewChatSearch.css';

import {Field, Form, Formik} from 'formik';
import {ReactSVG} from 'react-svg';
import ChevronSvg from '@assets/icons/chevron-down.svg';
import SearchSvg from '@assets/icons/search.svg';

export function CreateNewChatSearch({findChatsByMessage}: any) {
  return (
    <Formik
      initialValues={{message: ''}}
      onSubmit={async ({message}) => {
        if (message) findChatsByMessage(message);
      }}>
      {({handleBlur, handleChange, handleSubmit}) => (
        <Form className="new-chat__form" onSubmit={handleSubmit}>
          <ReactSVG
            src={SearchSvg}
            className="side-panel___svg new-chat__svg"
          />
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
              src={ChevronSvg}
              className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent chevron-down__svg--gray"
            />
          </button>
        </Form>
      )}
    </Formik>
  );
}
