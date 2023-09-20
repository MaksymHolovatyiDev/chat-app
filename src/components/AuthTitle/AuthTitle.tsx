import {AuthProps} from '@/Types';
import {MainRoutes} from '@/environment';
import {Link} from 'react-router-dom';

export function AuthTitle({pathname}: AuthProps) {
  return (
    <div className="auth__title base__title">
      <Link
        className={`${
          pathname === MainRoutes.SignIn && 'auth__title--decoration'
        } auth__title--inherit`}
        to={MainRoutes.SignIn}>
        Sign In
      </Link>

      <p>/</p>

      <Link
        className={`${
          pathname === MainRoutes.SignUp && 'auth__title--decoration'
        } auth__title--inherit`}
        to={MainRoutes.SignUp}>
        Sign Up
      </Link>
    </div>
  );
}
