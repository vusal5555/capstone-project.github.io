import SignUp from '../../components/sign-up-form/sign-up.component';
import SignIn from '../../components/sign-in-form/sign-in.component';
import './auth.styles.scss';

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default Authentication;
