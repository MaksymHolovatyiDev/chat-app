import './UsersListModal.styled.css';

import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  backendAPI,
  useCreateNewChatMutation,
  useGetAllUsersQuery,
} from '@/Redux/operations';
import {useDispatch } from 'react-redux';
import {UserChatProfile} from '../UserChatProfile/UserChatProfile';
import {setChat} from '@/Redux/Chat/Chat';
import {Notify} from 'notiflix';
import {useReduxData} from '@/hooks';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function UsersListModal({open, setOpen}: any) {
  const {data, isSuccess} = useGetAllUsersQuery();
  const dispatch = useDispatch();
  const {userId} = useReduxData();

  const [
    createChat,
    {data: createChatData, isSuccess: createChatSuccess, isError},
  ] = useCreateNewChatMutation();

  const handleClose = () => setOpen(false);
  const onListItemClick = (chatUserId: string) => {
    createChat({chatUserId});
  };

  useEffect(() => {
    if (createChatSuccess && createChatData) {
      dispatch(backendAPI.util.invalidateTags(['Chats']));
      dispatch(setChat(createChatData._id));
      setOpen(false);
    }
  }, [createChatSuccess]);

  useEffect(() => {
    if (isError)
      Notify.failure('Chat already exist!', {
        clickToClose: true,
        timeout: 2000,
      });
  }, [isError]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <ul className="modal-list">
            {isSuccess &&
              data &&
              data.map(
                el =>
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
        </Box>
      </Modal>
    </div>
  );
}
