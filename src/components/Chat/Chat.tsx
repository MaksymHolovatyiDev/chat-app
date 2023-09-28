import dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

import {CreateNewChat} from '../CreateNewChat/CreateNewChat';
import {MainChat} from '../MainChat/MainChat';
import {useSelector} from 'react-redux';
import {getChat} from '@/Redux/Chat/Chat.selectors';

export function Chat() {
  dayjs.extend(relativeTime);
  const chat = useSelector(getChat);

  return (
    <div className="chat-wrapper">
      <CreateNewChat />
      {chat && <MainChat />}
    </div>
  );
}
