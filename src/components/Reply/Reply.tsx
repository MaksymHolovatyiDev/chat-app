import './Reply.styled.css';

import {resetReply} from '@/Redux/Reply/Reply';
import {useReduxData} from '@/hooks';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from 'react-redux';

export function Reply() {
  const {reply: replyData} = useReduxData();
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
