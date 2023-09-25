import {useEffect, useState} from 'react';
import {socket} from '@/Pages/Authorized';
import {MainChatInput} from '../MainChatInput/MainChatInput';
import {Message} from '@/Types';
import {useGetChatQuery} from '@/Redux/operations';
import {useSelector} from 'react-redux';
import {getId} from '@/Redux/User/User.selectors';

export function MainChat() {
  const [chat, setChat] = useState<Message[] | []>([]);
  const userId = useSelector(getId);
  const {data, isSuccess} = useGetChatQuery('65118efb9bbc5f3f2f6fd94d');

  useEffect(() => {
    socket.on('messageResponse', (data: any) => {
      setChat(prevState => [...prevState, data]);
    });
  }, []);

  useEffect(() => {
    if (isSuccess) setChat(data.messages);
  }, [isSuccess]);

  console.log(data);

  return (
    <div className="main-chat">
      <ul className="main-chat__list">
        {chat.map(el => (
          <li
            key={el._id}
            className={`${
              el.user === userId
                ? 'main-chat__your-message'
                : 'main-chat__user-message'
            }`}>
            <p>{el.text}</p>
          </li>
        ))}
      </ul>
      <MainChatInput />
    </div>
  );
}
