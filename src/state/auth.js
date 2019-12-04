import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { auth } from '../firebase';

const initial = {
  user: null,
  isAuthenticating: false,
  authError: null,
}

function useAuth(initialState = initial) {
  const [ user, setUser ] = useState(initialState.user);
  const [ isAuthenticating, setIsAuthenticating ] = useState(initialState.isAuthenticating);
  const [ authError, setAuthError ] = useState(initialState.authError);

  useEffect(() => {

    setIsAuthenticating(true);
    const unsub = auth.onAuthStateChanged(user => {
      if(user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setIsAuthenticating(false);
    });

    return () => {
      unsub();
    }
  }, []);

  const login = ({ email, password }) => {
    setIsAuthenticating(true);

    auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      setIsAuthenticating(false);
    })
    .catch(console.log);
  }

  const logout = () => {
    setIsAuthenticating(true);
    auth.signOut()
    .then(() => {
      setIsAuthenticating(false);
    })
    .catch(console.log);
  }

  const signup = ({ email, password }) => {
    setIsAuthenticating(true);

    auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      setIsAuthenticating(false);
    })
    .catch(console.log);
  }

  return {
    user,
    isAuthenticating,
    authError,
    signup,
    login,
    logout,
  }
}

export const Auth = createContainer(useAuth);