import './MoreOptionsButton.styled.css';

import {MoreOptionsButtonProps} from '@/Types';

export function MoreOptionsButton({
  text,
  clickFunction,
}: MoreOptionsButtonProps) {
  return (
    <button
      type="button"
      onClick={clickFunction}
      className="more__button more__options-button">
      {text}
    </button>
  );
}
