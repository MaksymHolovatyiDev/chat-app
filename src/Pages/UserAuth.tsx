import {Routes, Route} from 'react-router-dom';
import {Auth} from '@components/Auth/Auth';

export function UserAuth() {
  return (
    <Routes>
      <Route path="*" element={<Auth />} />
    </Routes>
  );
}
