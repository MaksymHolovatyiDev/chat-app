import {ReactSVG} from 'react-svg';

export function SidePanelUser() {
  return (
    <div>
      <img
        className="user__image"
        src="src/assets/chevron-down.svg"
        alt="User avatar."
      />
      <div className="user-name__container">
        <p className="user-name__text">name</p>
        <ReactSVG
          src="src/assets/chevron-down.svg"
          className="side-panel___svg main-chat-input___submit main-chat-input__svg--transparent chevron-down__svg--black"
        />
      </div>
    </div>
  );
}
