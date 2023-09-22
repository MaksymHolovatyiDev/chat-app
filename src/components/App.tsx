import '@/App.css';
import {Routes, Route} from 'react-router-dom';
import {Auth} from '@components/Auth/Auth';
import {SidePanel} from './SidePanel/SidePanel';
import {Chat} from './Chat/Chat';

function App() {
  return (
    // <div className="base-container">
    //   <SidePanel />
    //   <Routes>
    //     <Route path="*" element={<Chat />} />
    //   </Routes>
    // </div>
    <Routes>
      <Route path="*" element={<Auth />} />
    </Routes>
  );
}

export default App;
