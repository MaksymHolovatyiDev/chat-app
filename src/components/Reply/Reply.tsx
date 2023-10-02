import {resetReply} from '@/Redux/Reply/Reply';
import {RootState} from '@/Redux/store';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from 'react-redux';

export function Reply() {
  const replyData = useSelector((state: RootState) => state.reply);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(resetReply());
  };

  return (
    replyData.id && (
      <div className="reply">
        <button type="button" onClick={onButtonClick} className="reply__button">
          <CloseIcon />
        </button>
        Reply to: <p className="reply__text">{replyData.text}</p>
      </div>
    )
  );
}
