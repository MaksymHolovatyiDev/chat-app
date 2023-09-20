import {ReactSVG} from 'react-svg';

export function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header__user-container">
        <img
          className="chat-header__user-image"
          src="src/assets/chevron-down.svg"
          alt="User avatar."
        />
        <div className="chat-header__status-container">
          <p className="user-name__text">user</p>
          <p className="chat-header__online-text">last online</p>
        </div>
      </div>
      <div className="chat-header__user-container">
        <button type="button" className="chat-header__button">
          <ReactSVG src="src/assets/attach.svg" className="side-panel___svg" />
        </button>
        <button type="button" className="chat-header__button">
          <ReactSVG src="src/assets/more.svg" className="side-panel___svg" />
        </button>
      </div>
    </div>
  );
}
