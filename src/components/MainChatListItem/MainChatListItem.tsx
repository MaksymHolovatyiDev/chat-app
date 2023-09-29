import dayjs from 'dayjs';

import {Message} from '@/Types';
import {ReactSVG} from 'react-svg';
import UserAvatar from '@assets/user.webp';
import DoneSvg from '@assets/all-done.svg';
import CheckmarkSvg from '@assets/checkmark.svg';

export function MainChatListItem({
  data,
  userId,
}: {
  data: Message;
  userId: string;
}) {
  return (
    <>
      <div
        className={`${
          data.owner !== userId
            ? 'main-chat__user-message-container'
            : 'main-chat__your-message-container'
        }`}>
        {data.owner !== userId && (
          <img
            className="main-chat__image"
            src={UserAvatar}
            alt="User avatar."
          />
        )}
        <p
          className={`chat__text ${
            data.owner === userId
              ? 'main-chat__your-text'
              : 'main-chat__user-text'
          }`}>
          {data.text}
        </p>
        {data.owner === userId &&
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
          data.owner === userId && 'main-chat__day-text--margin-right'
        }`}>
        {dayjs(data.createdAt).fromNow()}
      </p>
    </>
  );
}
