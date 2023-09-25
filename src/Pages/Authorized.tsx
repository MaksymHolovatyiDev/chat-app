import {useEffect} from 'react';
import {io} from 'socket.io-client';
import {Routes, Route} from 'react-router-dom';
import {SidePanel} from '@components/SidePanel/SidePanel';
import {Chat} from '@components/Chat/Chat';
import {MainRoutes, defaultUrl} from '@/environment';
import {useSelector} from 'react-redux';
import {getId} from '@/Redux/User/User.selectors';

export let socket = io(defaultUrl, {autoConnect: false});

export function Authorized() {
  const userId = useSelector(getId);

  useEffect(() => {
    socket.auth = {userId};
    socket.connect();
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="base-container">
      <SidePanel />
      <Routes>
        <Route path={MainRoutes.Chat} element={<Chat />} />
      </Routes>
    </div>
  );
}
