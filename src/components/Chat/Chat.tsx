import './Chat.styled.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {CreateNewChat} from '../CreateNewChat/CreateNewChat';
import {MainChat} from '../MainChat/MainChat';
import {useReduxData} from '@/hooks';

export function Chat() {
  dayjs.extend(relativeTime);
  const {chat} = useReduxData();
  return (
    <div className="chat-wrapper">
      <CreateNewChat />
      {chat && <MainChat />}
    </div>
  );
}
