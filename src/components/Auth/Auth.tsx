import {useLocation} from 'react-router-dom';
import {AuthTitle} from '../AuthTitle/AuthTitle';
import {AuthForm} from '../AuthForm/AuthForm';

export function Auth() {
  const pathname = useLocation().pathname;

  return (
    <>
      <AuthTitle pathname={pathname} />
      <AuthForm pathname={pathname} />
    </>
  );
}
