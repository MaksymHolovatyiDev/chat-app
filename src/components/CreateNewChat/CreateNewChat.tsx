import {ReactSVG} from 'react-svg';
import {CreateNewChatSearch} from '../CreateNewChatSearch/CreateNewChatSearch';

export function CreateNewChat() {
  return (
    <div>
      <div className="create-chat__container">
        <div className="create-chat__container--text">
          <p className="create-chat__text">Chats</p>
          <div className="create-chat__container--sub-text">
            <p className="create-chat__sub-text">Recent Chats</p>
            <ReactSVG
              src="src/assets/chevron-down.svg"
              className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent chevron-down__svg--gray"
            />
          </div>
        </div>
        <button type="button" className="auth__button create-chat__button">
          <ReactSVG src="src/assets/plus.svg" className="side-panel___svg" />
          Create New Chat
        </button>
      </div>
      <CreateNewChatSearch />
    </div>
  );
}
