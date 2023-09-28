import '@/App.css';

import {useSelector} from 'react-redux';
import {getToken} from '@/Redux/User/User.selectors';
import {UserAuth} from '@/Pages/UserAuth';
import {Authorized} from '@/Pages/Authorized';

function App() {
  const token = useSelector(getToken);

  return token ? <Authorized /> : <UserAuth />;
}

export default App;
