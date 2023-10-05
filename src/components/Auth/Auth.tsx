import './Auth.styles.css';
import {AuthTitle} from '../AuthTitle/AuthTitle';
import {AuthForm} from '../AuthForm/AuthForm';

export function Auth() {
  return (
    <div className="auth__container">
      <AuthTitle />
      <AuthForm />
    </div>
  );
}
