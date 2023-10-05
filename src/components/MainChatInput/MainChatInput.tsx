import './MainChatInput.styled.css';
import {
  useSendMessageMutation,
  useUpdateMessageMutation,
} from '@/Redux/operations';
import {Field, Form, Formik} from 'formik';
import {ReactSVG} from 'react-svg';
import SmileSvg from '@assets/icons/Smile.svg';
import NavigationSvg from '@assets/icons/navigation.svg';
import {useDispatch} from 'react-redux';
import {resetEdit} from '@/Redux/Edit/Edit';
import {useEffect, useState} from 'react';
import {resetReply} from '@/Redux/Reply/Reply';
import {AddFiles} from '../AddFiles/AddFiles';
import {SubmitValue} from '@/Types';
import {useReduxData} from '@/hooks';
import {ImagePreview} from '../ImagePreview/ImagePreview';

export function MainChatInput({id}: {id: string}) {
  const [message, setMessage] = useState('');
  const [sendMessage] = useSendMessageMutation();
  const [updateMessage] = useUpdateMessageMutation();
  const [image, setImage] = useState<any>(null);
  const dispatch = useDispatch();
  const {reply, edit} = useReduxData();

  const onHandleChange = (evt: any, callback: any) => {
    callback(evt);
    setMessage(evt.target.value);
  };

  const updateUserMessage = (dataMessage: string) => {
    if (dataMessage && dataMessage !== edit.text)
      updateMessage({text: dataMessage, messageId: edit.editId});
    dispatch(resetEdit());
  };

  const sendUserMessage = (dataMessage: string) => {
    if (dataMessage) {
      const formData = new FormData();
      const replyData: any = reply.id ? [reply.id, reply.text] : [];

      formData.append('message', dataMessage);
      formData.append('to', id);
      formData.append('reply', replyData);
      formData.append('image', image);

      sendMessage(formData);
    }

    dispatch(resetReply());
  };

  const reset = (dataMessage: string, submitting: any) => {
    dataMessage = '';
    setMessage('');
    setImage(null);
    submitting(false);
  };

  const onSubmit = (values: SubmitValue, {setSubmitting}: any) => {
    if (edit.editId) {
      updateUserMessage(values.message);
    } else {
      sendUserMessage(values.message);
    }

    reset(values.message, setSubmitting);
  };

  useEffect(() => {
    if (edit.editId) setMessage(edit.text);
  }, [edit.editId]);

  return (
    <div className="main-chat-input">
      <ImagePreview image={image} setImage={setImage} />
      <Formik initialValues={{message}} onSubmit={onSubmit}>
        {({handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <Form className="main-chat-input__form" onSubmit={handleSubmit}>
            <AddFiles setImage={setImage} />

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
