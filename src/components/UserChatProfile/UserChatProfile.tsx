import './UserChatProfile.styled.css';
import {UserChatProfileProps} from '@/Types';
import dayjs from 'dayjs';
import UserAvatar from '@assets/images/user.webp';

export function UserChatProfile({
  online,
  name,
  lastOnline,
  selected,
}: UserChatProfileProps) {
  return (
    <div className="chat-list-item__user-container">
      <div className="chat-list-item__container--relative">
        <img
          className="chat-header__user-image"
          src={UserAvatar}
          alt="User avatar."
        />
        {online && <div className="chat-list-item__online" />}
      </div>
      <div className="chat-list-item__user-container--column">
        <p className="chat-list-item__text--line-height chat-list-item__text--name">
          {name}
        </p>
        <p
          className={`chat-list-item__text--line-height chat-list-item__text--online  ${
            selected && 'main__text--white'
          }`}>
          {lastOnline !== null &&
            (online ? 'online' : 'last online ' + dayjs(lastOnline).fromNow())}
        </p>
      </div>
    </div>
  );
}
