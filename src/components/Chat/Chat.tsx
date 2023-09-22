import {ChatHeader} from '../ChatHeader/ChatHeader';
import {CreateNewChat} from '../CreateNewChat/CreateNewChat';
import {MainChat} from '../MainChat/MainChat';

export function Chat() {
  return (
    <div className="chat-wrapper">
      <CreateNewChat />
      <div className="chat">
        <ChatHeader />
        <MainChat />
      </div>
    </div>
  );
}
