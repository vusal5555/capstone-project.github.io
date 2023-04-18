import {
  signInWithGooglePopUp,
  createUserDataBase,
} from '../../utils/firebase.utils';

import SignUp from '../../components/sign-up-form/sign-up.component';

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDataBase(user);
  };
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <SignUp></SignUp>
    </div>
  );
};

export default SignIn;
