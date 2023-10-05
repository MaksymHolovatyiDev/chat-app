import {useEffect} from 'react';
import {io} from 'socket.io-client';
import {Routes, Route} from 'react-router-dom';
import {SidePanel} from '@components/SidePanel/SidePanel';
import {Chat} from '@components/Chat/Chat';
import {MainRoutes} from '@/environment';
import { useReduxData } from '@/hooks';

const defaultUrl = import.meta.env.VITE_DEFAULT_URL;

export const socket = io(defaultUrl, {autoConnect: false});

export function Authorized() {
  const {userId} = useReduxData();

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
