import {useLocation} from 'react-router-dom';
import {MainRoutes} from '@/environment';
import {Link} from 'react-router-dom';

export function AuthTitle() {
  const {pathname} = useLocation();
  const SignUpPage = pathname === MainRoutes.SignUp;

  return (
    <div className="auth__title base__title">
      <Link
        className={`${
          !SignUpPage && 'auth__title--decoration'
        } auth__title--inherit`}
        to={MainRoutes.SignIn}>
        Sign In
      </Link>

      <p>/</p>

      <Link
        className={`${
          SignUpPage && 'auth__title--decoration'
        } auth__title--inherit`}
        to={MainRoutes.SignUp}>
        Sign Up
      </Link>
    </div>
  );
}
