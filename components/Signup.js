import { auth, googleProvider, facebookProvider } from '../firebaseConfig';
import { signInWithPopup } from "firebase/auth";
const SignUp = () => {
  const signUpWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      alert('Signed up successfully with Google');
    } catch (error) {
      console.error("Google sign up error: ", error);
    }
  };

  const signUpWithFacebook = async () => {
    try {
      await auth.signInWithPopup(facebookProvider);
      alert('Signed up successfully with Facebook');
    } catch (error) {
      console.error("Facebook sign up error: ", error);
    }
  };

  return (
    <div>
      <button onClick={signUpWithGoogle} className="btn btn-primary">Sign Up with Google</button>
      <button onClick={signUpWithFacebook} className="btn btn-secondary">Sign Up with Facebook</button>
    </div>
  );
};

export default SignUp;
