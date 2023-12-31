import './MainChat.styles.css';
import {useEffect, useState, useRef} from 'react';
import {socket} from '@/Pages/Authorized';
import {MainChatInput} from '../MainChatInput/MainChatInput';
import {Message, UsersData} from '@/Types';
import {ChatHeaderButtons} from '../ChatHeaderButtons/ChatHeaderButtons';
import {UserChatProfile} from '../UserChatProfile/UserChatProfile';
import {MainChatListItem} from '../MainChatListItem/MainChatListItem';
import {useLazyGetChatByIdQuery} from '@/Redux/operations';
import {Reply} from '../Reply/Reply';
import {useReduxData} from '@/hooks';

export function MainChat() {
  const chatList = useRef<any>(null);
  const [chatData, setChatData] = useState<Message[] | []>([]);
  const [userData, setUserData] = useState<UsersData | null>(null);
  const {userId, chat: chatId} = useReduxData();
  const [getChatById, {data, isFetching}] = useLazyGetChatByIdQuery();

  useEffect(() => {
    socket.on('read', chat => {
      getChatById(chat);
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

  useEffect(() => {
    if (chatList.current)
      chatList.current.scrollTop = chatList.current.scrollHeight;
  }, [chatData]);

  return (
    userData &&
    chatData && (
      <div className="chat">
        <div className="chat-header">
          <UserChatProfile
            online={data?.chatName ? null : userData.socketId}
            name={data?.chatName || userData.fullName}
            lastOnline={data?.chatName ? null : userData.updatedAt}
          />
          <ChatHeaderButtons />
        </div>
        <div className="main-chat">
          <ul className="main-chat__list" ref={chatList}>
            {chatData.map(el => (
              <li
                key={el._id}
                className={`${
                  el.owner._id === userId
                    ? 'main-chat__your-message'
                    : 'main-chat__user-message'
                }`}>
                <MainChatListItem
                  data={el}
                  chatName={data?.chatName}
                  userId={userId}
                />
              </li>
            ))}
          </ul>
          <Reply />
          <MainChatInput id={data ? data._id : ''} />
        </div>
      </div>
    )
  );
}
