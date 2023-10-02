import {
  useSendMessageMutation,
  useUpdateMessageMutation,
} from '@/Redux/operations';
import {Field, Form, Formik} from 'formik';
import {ReactSVG} from 'react-svg';
import PlusSvg from '@assets/plus.svg';
import SmileSvg from '@assets/Smile.svg';
import NavigationSvg from '@assets/navigation.svg';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/Redux/store';
import {resetEdit} from '@/Redux/Edit/Edit';
import {useEffect, useState} from 'react';
import {resetReply} from '@/Redux/Reply/Reply';

export function MainChatInput({id}: {id: string}) {
  const [message, setMessage] = useState('');
  const [sendMessage] = useSendMessageMutation();
  const [updateMessage] = useUpdateMessageMutation();
  const dispatch = useDispatch();
  const edit = useSelector((state: RootState) => state.edit);
  const reply = useSelector((state: RootState) => state.reply);

  const onHandleChange = (evt: any, callback: any) => {
    callback(evt);
    setMessage(evt.target.value);
  };

  useEffect(() => {
    if (edit.editId) setMessage(edit.text);
  }, [edit.editId]);

  return (
    <div className="main-chat-input">
      <Formik
        initialValues={{message}}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values);
          if (edit.editId) {
            if (values.message && values.message !== edit.text)
              updateMessage({text: values.message, messageId: edit.editId});
            dispatch(resetEdit());
          } else {
            if (values.message)
              sendMessage({
                ...values,
                to: id,
                reply: reply.id ? [reply.id, reply.text] : [],
              });
            dispatch(resetReply());
          }
          values.message = '';
          setMessage('');
          setSubmitting(false);
        }}>
        {({handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <Form className="main-chat-input__form" onSubmit={handleSubmit}>
            <button type="button" className="main-chat-input__button">
              <ReactSVG src={PlusSvg} className="side-panel___svg" />
            </button>

            <Field
              as="textarea"
              onChange={(evt: any) => {
                onHandleChange(evt, handleChange);
              }}
              onBlur={handleBlur}
              name="message"
              placeholder="Type a message here"
              type="text"
              className="main-chat-input__input"
              value={message}
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
