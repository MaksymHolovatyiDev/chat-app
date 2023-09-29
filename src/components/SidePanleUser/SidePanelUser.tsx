import {getName} from '@/Redux/User/User.selectors';
import {useSelector} from 'react-redux';
import {ReactSVG} from 'react-svg';
import UserAvatar from '@assets/user.webp';
import Chevron from '@assets/chevron-down.svg';

export function SidePanelUser() {
  const userName = useSelector(getName);

  return (
    <div>
      <img className="user__image" src={UserAvatar} alt="User avatar." />
      <div className="user-name__container">
        <p className="user-name__text">{userName}</p>
        <ReactSVG
          src={Chevron}
          className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent chevron-down__svg--black"
        />
      </div>
    </div>
  );
}
