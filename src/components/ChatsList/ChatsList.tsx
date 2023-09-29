import {useState, useEffect} from 'react';
import {useLazyGetChatsQuery} from '@/Redux/operations';
import {ChatsListProps, GetChatRes} from '@/Types';
import {ChatListItem} from '../ChatsListItem/ChatListItem';
import {socket} from '@/Pages/Authorized';

export function ChatsList({messagesChats}: ChatsListProps) {
  const [chats, setChats] = useState<GetChatRes[] | []>([]);
  const [getData, {data, isFetching}] = useLazyGetChatsQuery();

  useEffect(() => {
    socket.on('read', () => {
      getData();
    });
    getData();
  }, []);

  useEffect(() => {
    if (!isFetching && data) setChats(data);
  }, [isFetching]);

  return (
    <ul className="chats-list">
      {messagesChats
        ? messagesChats.map(el => (
            <li key={el._id}>
              <ChatListItem _id={el.chatId} user={el.owner} messages={el} />
            </li>
          ))
        : chats.map(el => (
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
