import './ChatHeaderMainButton.styled.css';
import {ReactSVG} from 'react-svg';

export function ChatHeaderMainButton({icon}: any) {
  return (
    <button type="button" className="chat-header__button">
      <ReactSVG src={icon} className="side-panel___svg" />
    </button>
  );
}
