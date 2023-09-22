import {MainChatInput} from '../MainChatInput/MainChatInput';

export function MainChat() {
  return (
    <div className="main-chat">
      <ul className="main-chat__list"></ul>
      <MainChatInput />
    </div>
  );
}
