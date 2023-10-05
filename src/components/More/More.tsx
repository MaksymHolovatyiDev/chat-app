import './More.styled.css';

import {useState} from 'react';
import {ReactSVG} from 'react-svg';
import MoreSvg from '@assets/icons/more-horizontal.svg';
import {useLazyDeleteMessageQuery} from '@/Redux/operations';
import {useDispatch} from 'react-redux';
import {setEdit} from '@/Redux/Edit/Edit';
import {MoreOptionsButton} from '../MoreOptionsButton/MoreOptionsButton';

export function More({id, text}: {id: string; text: string}) {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  const [deleteMessage] = useLazyDeleteMessageQuery();

  const onMoreClick = () => {
    setShowOptions(prevState => !prevState);
  };

  const onMoreBlur = () => {
    setTimeout(() => {
      setShowOptions(false);
    }, 200);
  };

  const onEditButtonClick = () => {
    dispatch(setEdit({text, id}));
  };

  const onDeleteButtonClick = () => {
    deleteMessage(id);
  };

  return (
    <div className="more">
      <button
        type="button"
        onClick={onMoreClick}
        onBlur={onMoreBlur}
        className="more__button more__button--svg">
        <ReactSVG src={MoreSvg} className="side-panel___svg" />
      </button>
      {showOptions && (
        <div className="more__options">
          <MoreOptionsButton text="Edit" clickFunction={onEditButtonClick} />
          <MoreOptionsButton
            text="Delete"
            clickFunction={onDeleteButtonClick}
          />
        </div>
      )}
    </div>
  );
}
