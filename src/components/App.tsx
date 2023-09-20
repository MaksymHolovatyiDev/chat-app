import '@/App.css';
import {Routes, Route} from 'react-router-dom';
import {Auth} from '@components/Auth/Auth';
import {Authentication} from './Authentication/Authentication';
import {SidePanel} from './SidePanel/SidePanel';
import {Chat} from './Chat/Chat';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Chat />} />
    </Routes>
  );
}

export default App;
