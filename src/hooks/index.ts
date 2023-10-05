import {getChat} from '@/Redux/Chat/Chat.selectors';
import {getEdit} from '@/Redux/Edit/Edit.Selectors';
import {getReply} from '@/Redux/Reply/Reply.selectors';
import {getId, getName, getToken} from '@/Redux/User/User.selectors';
import {useSelector} from 'react-redux';

export const useReduxData = () => ({
  token: useSelector(getToken),
  name: useSelector(getName),
  userId: useSelector(getId),
  chat: useSelector(getChat),
  reply: useSelector(getReply),
  edit: useSelector(getEdit),
});
