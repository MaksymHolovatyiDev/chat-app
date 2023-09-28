import dayjs from 'dayjs';

import {ChatListItemProps} from '@/Types';
import {useDispatch, useSelector} from 'react-redux';
import {UserChatProfile} from '../UserChatProfile/UserChatProfile';
import {setChat} from '@/Redux/Chat/Chat';
import {getChat} from '@/Redux/Chat/Chat.selectors';

export function ChatListItem({_id, messages, user}: ChatListItemProps) {
  const dispatch = useDispatch();
  const chat = useSelector(getChat);
  const selected = chat === _id;

  const onChatClick = () => dispatch(setChat(_id));

  return (
    <div
      className={`chat-list-item ${selected && 'chat-list-item--selected'}`}
      onClick={onChatClick}>
      <div className="chat-list-item__container">
        <UserChatProfile
          online={user.socketId}
          name={user.fullName}
          lastOnline={user.updatedAt}
          selected={selected}
        />
        {messages && (
          <p
            className={`chat__text chat-list-item__text--line-height ${
              selected && 'main__text--white-light'
            }`}>
            {dayjs(messages.createdAt).fromNow()}
          </p>
        )}
      </div>
      <div className="chat-list-item__container chat-list-item__container--gap">
        {messages && (
          <p
            className={`chat__text chat-list-item__text--message ${
              selected && 'main__text--white'
            }`}>
            {messages.text}
          </p>
        )}
        {/* <div className="chat-list-item__new-message">
          <p className="chat-list-item__text--line-height chat-list-item__new-message--text">
            1
          </p>
        </div> */}
      </div>
    </div>
  );
}
