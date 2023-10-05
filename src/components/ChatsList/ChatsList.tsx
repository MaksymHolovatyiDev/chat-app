import './ChatList.styled.css';

import {useEffect} from 'react';
import {useLazyGetChatsQuery} from '@/Redux/operations';
import {ChatsListProps} from '@/Types';
import {ChatListItem} from '../ChatsListItem/ChatListItem';
import {socket} from '@/Pages/Authorized';

export function ChatsList({findMessageData}: ChatsListProps) {
  const [getData, {data, isFetching}] = useLazyGetChatsQuery();

  useEffect(() => {
    socket.on('read', () => {
      getData();
    });
    getData();
  }, []);

  return (
    <ul className="chats-list">
      {findMessageData
        ? findMessageData.map(el => (
            <li key={el._id}>
              <ChatListItem _id={el.chatId} user={el.owner} messages={el} />
            </li>
          ))
        : data &&
          !isFetching &&
          data.map(el => (
            <li key={el._id}>
              <ChatListItem
                _id={el._id}
                user={el.users[0]}
                messages={el.messages[0]}
                unreadMessages={el.unreadMessages}
                unreadUser={el.unreadUser}
              />
            </li>
          ))}
    </ul>
  );
}
