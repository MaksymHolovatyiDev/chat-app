import {CreateGroupChatProps, UsersData} from '@/Types';
import './CreateGroupChat.styled.css';
import {GroupListItem} from '../GroupListItem/GroupListItem';
import {useRef, useState} from 'react';

export function CreateGroupChat({
  usersList,
  usersListSuccess,
  createChat,
}: CreateGroupChatProps) {
  const [groupName, setGroupName] = useState('');

  const set = useRef(new Set([]));

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    createChat({chatUsersId: [...set.current.values()], chatName: groupName});
  };

  return (
    <form className="group-chat" onSubmit={onSubmit}>
      <label className="group-chat__label">
        Chat name:{' '}
        <input
          type="text"
          className="group-chat__input"
          onChange={el => setGroupName(el.target.value)}
          value={groupName}
          required
        />
      </label>
      {usersListSuccess && usersList && (
        <ul className="modal-list">
          {usersList.map((el: UsersData) => (
            <li key={el._id}>
              <GroupListItem el={el} set={set} />
            </li>
          ))}
        </ul>
      )}

      <button className="group-chat__button">Create chat</button>
    </form>
  );
}
