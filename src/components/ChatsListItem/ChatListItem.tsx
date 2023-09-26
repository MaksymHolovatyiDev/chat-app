import dayjs from 'dayjs';

import {GetChatRes} from '@/Types';
import {useDispatch, useSelector} from 'react-redux';
import {UserChatProfile} from '../UserChatProfile/UserChatProfile';
import {setChat} from '@/Redux/Chat/Chat';
import {getChat} from '@/Redux/Chat/Chat.selectors';

export function ChatListItem({data}: {data: GetChatRes}) {
  const dispatch = useDispatch();
  const chat = useSelector(getChat);
  const selected = chat === data._id;

  const onChatClick = () => dispatch(setChat(data._id));

  return (
    <div
      className={`chat-list-item ${selected && 'chat-list-item--selected'}`}
      onClick={onChatClick}>
      <div className="chat-list-item__container">
        <UserChatProfile
          online={data.users[0].socketId}
          name={data.users[0].fullName}
          lastOnline={data.users[0].updatedAt}
          selected
        />
        <p
          className={`chat__text chat-list-item__text--line-height ${
            selected && 'main__text--white-light'
          }`}>
          {dayjs(data.messages[0].createdAt).fromNow()}
        </p>
      </div>
      <div className="chat-list-item__container chat-list-item__container--gap">
        <p
          className={`chat__text chat-list-item__text--message ${
            selected && 'main__text--white'
          }`}>
          {data.messages[0].text}
        </p>
        {/* <div className="chat-list-item__new-message">
          <p className="chat-list-item__text--line-height chat-list-item__new-message--text">
            1
          </p>
        </div> */}
      </div>
    </div>
  );
}
