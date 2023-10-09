import './GroupListItem.styled.css';

import {UsersData} from '@/Types';
import {UserChatProfile} from '../UserChatProfile/UserChatProfile';

export function GroupListItem({el, set}: {el: UsersData; set: any}) {
  const onCheckboxChange = (evt: any) =>
    evt.target.checked ? set.current.add(el._id) : set.current.delete(el._id);

  return (
    <label className="group-list-item">
      <UserChatProfile
        online={el.socketId}
        name={el.fullName}
        lastOnline={el.updatedAt}
      />
      <input
        type="checkbox"
        id={el._id}
        name={el._id}
        onChange={onCheckboxChange}
      />
    </label>
  );
}
