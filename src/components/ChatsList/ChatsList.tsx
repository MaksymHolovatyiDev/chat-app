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
        ? findMessageData.map((el: any) => (
            <li key={el._id}>
              <ChatListItem
                _id={el.chatId}
                unreadMessages={0}
                chatMessage={[el]}
                users={el.owner}
                chatName=""
              />
            </li>
          ))
        : data &&
          !isFetching &&
          data.map(el => (
            <li key={el._id}>
              <ChatListItem
                _id={el._id}
                unreadMessages={el.unreadMessages}
                chatMessage={el.chatMessage}
                users={el.users}
                chatName={el.chatName}
              />
            </li>
          ))}
    </ul>
  );
}
