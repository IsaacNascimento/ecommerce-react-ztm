import React from 'react';
import { SignUp } from '../../components/sign-up-form/signUpFormComponent';
import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
} from '../../utils/firebase/firebaseUtil';


export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      SignInComponent
      <button onClick={() => logGoogleUser()}>Sign in with Google</button>
      <SignUp />
    </div>
  )
}
