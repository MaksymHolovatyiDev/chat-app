import {useState, useEffect} from 'react';
import {useGetChatsQuery} from '@/Redux/operations';
import {ChatsListProps, GetChatRes} from '@/Types';
import {ChatListItem} from '../ChatsListItem/ChatListItem';

export function ChatsList({messagesChats}: ChatsListProps) {
  const [chats, setChats] = useState<GetChatRes[] | []>([]);
  const {data, isFetching} = useGetChatsQuery();

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
              />
            </li>
          ))}
    </ul>
  );
}
