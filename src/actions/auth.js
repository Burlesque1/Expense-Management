import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, email) => ({
  type: 'LOGIN',
  uid,
  email
})

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const loginWithEmail = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};