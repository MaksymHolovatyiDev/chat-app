import {ReactSVG} from 'react-svg';
import AttachSvg from '@assets/attach.svg';
import MoreSvg from '@assets/more.svg';

export function ChatHeaderButtons() {
  return (
    <div className="chat-header__user-container">
      <button type="button" className="chat-header__button">
        <ReactSVG src={AttachSvg} className="side-panel___svg" />
      </button>
      <button type="button" className="chat-header__button">
        <ReactSVG src={MoreSvg} className="side-panel___svg" />
      </button>
    </div>
  );
}
