import './MainChatListItem.styled.css';

import dayjs from 'dayjs';
import ReplyIcon from '@mui/icons-material/Reply';

import {Message} from '@/Types';
import {ReactSVG} from 'react-svg';
import UserAvatar from '@assets/images/user.webp';
import DoneSvg from '@assets/icons/all-done.svg';
import CheckmarkSvg from '@assets/icons/checkmark.svg';
import {More} from '../More/More';
import {useDispatch} from 'react-redux';
import {setReply} from '@/Redux/Reply/Reply';

const defaultUrl = import.meta.env.VITE_DEFAULT_URL;

export function MainChatListItem({
  data,
  userId,
}: {
  data: Message;
  userId: string;
}) {
  const dispatch = useDispatch();
  const isOwner = data.owner === userId;

  const onReplyClick = () => {
    dispatch(setReply({id: data._id, text: data.text}));
  };

  return (
    <>
      {data.reply.length !== 0 && (
        <p
          className={` main-chat__text--reply ${
            isOwner ? 'main-chat__user-text' : 'main-chat__your-text--reply'
          }`}>
          Replied: {data?.reply[1]}
        </p>
      )}
      <div
        className={`${
          !isOwner
            ? 'main-chat__user-message-container'
            : 'main-chat__your-message-container'
        }`}>
        {!isOwner && (
          <img
            className="main-chat__image"
            src={UserAvatar}
            alt="User avatar."
          />
        )}

        {isOwner && <More id={data._id} text={data.text} />}
        <div
          className={`main-chat__text-container ${
            !isOwner && 'main-chat__text-container--transparent'
          }`}>
          {data.image && (
            <img
              className="main-chat__image--width"
              src={`${defaultUrl}/api/Message/image/${data.image}`}
              alt="Chat image"
              loading="lazy"
            />
          )}
          <p
            className={`chat__text ${
              isOwner ? 'main-chat__your-text' : 'main-chat__user-text'
            }`}>
            {data.text}
          </p>
        </div>
        {!isOwner && (
          <button
            type="button"
            onClick={onReplyClick}
            className="main-chat__reply-button">
            <ReplyIcon />
          </button>
        )}

        {isOwner &&
          (data.read ? (
            <ReactSVG
              src={DoneSvg}
              className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent"
            />
          ) : (
            <ReactSVG
              src={CheckmarkSvg}
              className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent"
            />
          ))}
      </div>
      <p
        className={`main-chat__day-text ${
          isOwner
            ? 'main-chat__day-text--margin-right'
            : 'main-chat__day-text--margin-left'
        }`}>
        {dayjs(data.createdAt).fromNow()}
      </p>
    </>
  );
}
