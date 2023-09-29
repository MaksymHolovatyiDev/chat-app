import {useState} from 'react';
import {ReactSVG} from 'react-svg';
import {CreateNewChatSearch} from '../CreateNewChatSearch/CreateNewChatSearch';
import {ChatsList} from '../ChatsList/ChatsList';
import {UsersListModal} from '../UsersListModal/UsersListModal';
import {FindByMessageProps} from '@/Types';
import ChevronSvg from '@assets/chevron-down.svg';
import PlusSvg from '@assets/plus.svg';

export function CreateNewChat() {
  const [open, setOpen] = useState(false);
  const [messagesChats, setMessagesChats] = useState<
    FindByMessageProps[] | [] | null
  >(null);

  const onButtonClick = () => {
    setOpen(true);
  };

  return (
    <div className="create-chat">
      <div className="create-chat__container">
        <div className="create-chat__container--text">
          <p className="create-chat__text">Chats</p>
          <div className="create-chat__container--sub-text">
            <p className="create-chat__sub-text">Recent Chats</p>
            <ReactSVG
              src={ChevronSvg}
              className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent chevron-down__svg--gray"
            />
          </div>
        </div>
        <button
          type="button"
          className="auth__button create-chat__button"
          onClick={onButtonClick}>
          <ReactSVG src={PlusSvg} className="side-panel___svg" />
          Create New Chat
        </button>
      </div>
      <CreateNewChatSearch setMessagesChats={setMessagesChats} />
      <ChatsList messagesChats={messagesChats} />
      {open && <UsersListModal open={open} setOpen={setOpen} />}
    </div>
  );
}
