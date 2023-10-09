import './CreateUserChat.styled.css';

import {useEffect} from 'react';
import {Notify} from 'notiflix';
import {UserChatProfile} from '../UserChatProfile/UserChatProfile';
import {useReduxData} from '@/hooks';
import {CreateUserChatProps, UsersData} from '@/Types';

export function CreateUserChat({
  usersList,
  usersListSuccess,
  isError,
  createChat,
}: CreateUserChatProps) {
  const {userId} = useReduxData();

  useEffect(() => {
    if (isError)
      Notify.failure('Chat already exist!', {
        clickToClose: true,
        timeout: 2000,
      });
  }, [isError]);

  const onListItemClick = (chatUsersId: string) => {
    createChat({chatUsersId: [chatUsersId]});
  };

  return (
    <ul className="modal-list">
      {usersListSuccess &&
        usersList &&
        usersList.map(
          (el: UsersData) =>
            el._id !== userId && (
              <li
                key={el._id}
                className="modal-list__item"
                onClick={() => onListItemClick(el._id)}>
                <UserChatProfile
                  online={el.socketId}
                  name={el.fullName}
                  lastOnline={el.updatedAt}
                />
              </li>
            ),
        )}
    </ul>
  );
}
