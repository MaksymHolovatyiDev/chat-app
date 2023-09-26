import {useState, useEffect} from 'react';
import {useGetChatsQuery} from '@/Redux/operations';
import {GetChatRes} from '@/Types';
import {ChatListItem} from '../ChatsListItem/ChatListItem';

export function ChatsList() {
  const [chats, setChats] = useState<GetChatRes[] | []>([]);
  const {data, isSuccess} = useGetChatsQuery();

  useEffect(() => {
    if (isSuccess) setChats(data);
  }, [isSuccess]);

  return (
    <ul className="chats-list">
      {chats.map(el => (
        <li key={el._id}>
          <ChatListItem data={el} />
        </li>
      ))}
    </ul>
  );
}
