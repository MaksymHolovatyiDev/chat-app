import {useEffect, useState} from 'react';
import {socket} from '@/Pages/Authorized';
import {MainChatInput} from '../MainChatInput/MainChatInput';
import {Message, UsersData} from '@/Types';
import {ChatHeaderButtons} from '../ChatHeaderButtons/ChatHeaderButtons';
import {UserChatProfile} from '../UserChatProfile/UserChatProfile';
import {MainChatListItem} from '../MainChatListItem/MainChatListItem';
import {useLazyGetChatByIdQuery} from '@/Redux/operations';
import {useSelector} from 'react-redux';
import {getChat} from '@/Redux/Chat/Chat.selectors';
import {getId} from '@/Redux/User/User.selectors';

export function MainChat() {
  const [chatData, setChatData] = useState<Message[] | []>([]);
  const [userData, setUserData] = useState<UsersData | null>(null);
  const chatId = useSelector(getChat);
  const userId = useSelector(getId);
  const [getChatById, {data, isFetching}] = useLazyGetChatByIdQuery();

  useEffect(() => {
    socket.on('messageResponse', (data: any) => {
      setChatData(prevState => [...prevState, data]);
    });
  }, []);

  useEffect(() => {
    if (chatId) getChatById(chatId);
  }, [chatId]);

  useEffect(() => {
    if (!isFetching && data) {
      setChatData(data.messages);
      setUserData(data.users[0]);
    }
  }, [isFetching]);

  return (
    userData &&
    chatData && (
      <div className="chat">
        <div className="chat-header">
          <UserChatProfile
            online={userData.socketId}
            name={userData.fullName}
            lastOnline={userData.updatedAt}
          />
          <ChatHeaderButtons />
        </div>
        <div className="main-chat">
          <ul className="main-chat__list">
            {chatData.map(el => (
              <li
                key={el._id}
                className={`${
                  el.owner === userId
                    ? 'main-chat__your-message'
                    : 'main-chat__user-message'
                }`}>
                <MainChatListItem data={el} userId={userId} />
              </li>
            ))}
          </ul>
          <MainChatInput id={userData._id} />
        </div>
      </div>
    )
  );
}
