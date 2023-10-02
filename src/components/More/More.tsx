import {useState} from 'react';
import {ReactSVG} from 'react-svg';
import MoreSvg from '@assets/more-horizontal.svg';
import {useDeleteMessageMutation} from '@/Redux/operations';
import {useDispatch} from 'react-redux';
import {setEdit} from '@/Redux/Edit/Edit';

export function More({id, text}: {id: string; text: string}) {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  const [deleteMessage] = useDeleteMessageMutation();

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
          <button
            type="button"
            onClick={onEditButtonClick}
            className="more__button more__options-button ">
            Edit
          </button>
          <button
            type="button"
            onClick={onDeleteButtonClick}
            className="more__button more__options-button ">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
