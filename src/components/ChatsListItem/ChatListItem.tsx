import './ChatListItem.styled.css';

import dayjs from 'dayjs';

import {ChatListItemProps} from '@/Types';
import {useDispatch} from 'react-redux';
import {UserChatProfile} from '../UserChatProfile/UserChatProfile';
import {setChat} from '@/Redux/Chat/Chat';
import {useReduxData} from '@/hooks';

export function ChatListItem({
  _id,
  unreadMessages,
  chatMessage,
  users,
  chatName,
}: ChatListItemProps) {
  const messages = chatMessage[0];

  const dispatch = useDispatch();
  const {chat} = useReduxData();
  const selected = chat === _id;

  const onChatClick = () => dispatch(setChat(_id));
  return (
    <div
      className={`chat-list-item ${selected && 'chat-list-item--selected'}`}
      onClick={onChatClick}>
      <div className="chat-list-item__container">
        <UserChatProfile
          online={chatName ? '' : users[0].socketId}
          name={chatName || users[0].fullName}
          lastOnline={chatName ? null : users[0].updatedAt}
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
        {!!unreadMessages && (
          <div className="chat-list-item__new-message">
            <p className="chat-list-item__text--line-height chat-list-item__new-message--text">
              {unreadMessages}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
