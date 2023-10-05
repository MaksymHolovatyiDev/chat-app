import '@/App.css';

import {UserAuth} from '@/Pages/UserAuth';
import {Authorized} from '@/Pages/Authorized';
import {useReduxData} from '@/hooks';

function App() {
  const {token} = useReduxData();

  return token ? <Authorized /> : <UserAuth />;
}

export default App;
