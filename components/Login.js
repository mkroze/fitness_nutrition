import { auth, googleProvider, facebookProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in successfully with Google");
    } catch (error) {
      console.error("Google login error: ", error);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      alert("Logged in successfully with Facebook");
    } catch (error) {
      console.error("Facebook login error: ", error);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle} className="btn btn-primary">
        Login with Google
      </button>
      <button onClick={signInWithFacebook} className="btn btn-secondary">
        Login with Facebook
      </button>
    </div>
  );
};

export default Login;
