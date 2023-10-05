import './ChatHeaderButtons.styled.css';
import AttachSvg from '@assets/icons/attach.svg';
import MoreSvg from '@assets/icons/more.svg';
import {ChatHeaderMainButton} from '../ChatHeaderMainButton/ChatHeaderMainButton';

export function ChatHeaderButtons() {
  return (
    <div className="chat-header__user-container">
      <ChatHeaderMainButton icon={AttachSvg} />
      <ChatHeaderMainButton icon={MoreSvg} />
    </div>
  );
}
