import {ReactSVG} from 'react-svg';

export function ChatHeaderButtons() {
  return (
    <div className="chat-header__user-container">
      <button type="button" className="chat-header__button">
        <ReactSVG src="src/assets/attach.svg" className="side-panel___svg" />
      </button>
      <button type="button" className="chat-header__button">
        <ReactSVG src="src/assets/more.svg" className="side-panel___svg" />
      </button>
    </div>
  );
}
