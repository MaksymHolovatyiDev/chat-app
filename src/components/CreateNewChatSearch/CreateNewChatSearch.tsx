import {useEffect} from 'react';
import {useLazyFindByMessageQuery} from '@/Redux/operations';
import {Field, Form, Formik} from 'formik';
import {ReactSVG} from 'react-svg';
import { CreateNewChatSearchProps } from '@/Types';

export function CreateNewChatSearch({setMessagesChats}: CreateNewChatSearchProps) {
  const [findChatsByMessage, {data, isSuccess}] = useLazyFindByMessageQuery();

  useEffect(() => {
    if (isSuccess && data) setMessagesChats(data);
  }, [isSuccess]);

  return (
    <Formik
      initialValues={{message: ''}}
      onSubmit={async ({message}) => {
        if (message) {
          findChatsByMessage(message);
        } else {
          setMessagesChats(null);
        }
      }}>
      {({handleBlur, handleChange, handleSubmit}) => (
        <Form className="new-chat__form" onSubmit={handleSubmit}>
          <ReactSVG
            src="src/assets/search.svg"
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
              src="src/assets/chevron-down.svg"
              className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent chevron-down__svg--gray"
            />
          </button>
        </Form>
      )}
    </Formik>
  );
}
