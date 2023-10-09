import './CreateChatModal.styled.css';

import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  backendAPI,
  useGetAllUsersQuery,
  useCreateNewChatMutation,
} from '@/Redux/operations';
import {CreateUserChat} from '../CreateUserChat/CreateUserChat';
import {CreateGroupChat} from '../CreateGroupChat/CreateGroupChat';
import {setChat} from '@/Redux/Chat/Chat';
import {useDispatch} from 'react-redux';

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

export function CreateChatModal({open, setOpen}: any) {
  const {data: usersList, isSuccess: usersListSuccess} = useGetAllUsersQuery();
  const [groupChat, setGroupChat] = useState(false);

  const [createChat, {data, isSuccess, isError}] = useCreateNewChatMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(backendAPI.util.invalidateTags(['Chats']));
      dispatch(setChat(data._id));
      setOpen(false);
    }
  }, [isSuccess]);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="modal-title">
            <button
              className={`${
                !groupChat &&
                'auth__title--decoration modal-title__button--blue'
              } modal-title__button`}
              onClick={() => setGroupChat(false)}>
              User
            </button>

            <button
              className={`${
                groupChat && 'auth__title--decoration modal-title__button--blue'
              } modal-title__button`}
              onClick={() => setGroupChat(true)}>
              Group
            </button>
          </div>
          {groupChat ? (
            <CreateGroupChat
              createChat={createChat}
              usersList={usersList}
              usersListSuccess={usersListSuccess}
            />
          ) : (
            <CreateUserChat
              createChat={createChat}
              isError={isError}
              usersList={usersList}
              usersListSuccess={usersListSuccess}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
