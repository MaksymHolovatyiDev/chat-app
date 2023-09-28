import dayjs from 'dayjs';

import {Message} from '@/Types';
import {ReactSVG} from 'react-svg';

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
            src="src/assets/user.webp"
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
          (data.delivered ? (
            <ReactSVG
              src="src/assets/all-done.svg"
              className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent"
            />
          ) : (
            <ReactSVG
              src="src/assets/checkmark.svg"
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
