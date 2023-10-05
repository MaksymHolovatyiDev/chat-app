import './SidePanelUser.styles.css';
import {ReactSVG} from 'react-svg';
import UserAvatar from '@assets/images/user.webp';
import Chevron from '@assets/icons/chevron-down.svg';
import {useReduxData} from '@/hooks';

export function SidePanelUser() {
  const {name: userName} = useReduxData();

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
