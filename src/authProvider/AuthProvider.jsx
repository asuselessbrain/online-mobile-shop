import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig/forebase.config";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  //   google signIn

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   github signIn

  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // twitter signIN

  const twitterSignIn = () => {
    return signInWithPopup(auth, twitterProvider);
  };

  //   facebook signIn

  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // logOut User

  const logOut = () => {
    return signOut(auth);
  };

  //   manage user

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log("user is: ", user);
    });

    return () => unSubscribe();
  }, []);

  const info = {
    user,
    loading,
    googleSignIn,
    githubSignIn,
    twitterSignIn,
    facebookSignIn,
    logOut,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;