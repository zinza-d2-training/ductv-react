import React, { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { init, login } from '../pages/auth/authSlice';
import { selectStateAuth } from '../pages/auth/authSlice';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Loading from '../components/Loading/Loading';
import { myToken, UserCtx } from '../types';

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decodedToken = jwtDecode<myToken>(accessToken);
  const currentTime = new Date().getTime() / 1000;
  const exp = new Date(decodedToken.exp).getTime() / 1000;
  return exp > currentTime;
};

const setSession = (accessToken: string) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const AuthContext = createContext<UserCtx>({
  signIn: () => Promise.resolve()
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  const signIn = async (email: string, password: string) => {
    const response = await axios.post('/api/auth/login', {
      email,
      password
    });
    const { accessToken, user } = response.data;
    setSession(accessToken);
    dispatch(login({ user }));
  };
  useEffect(() => {
    (async () => {
      const accessToken = window.localStorage.getItem('accessToken');
      try {
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          const response = await axios.get('/api/auth/profile');
          const { user } = response.data;
          dispatch(
            init({
              user: user,
              isAuthenticated: true
            })
          );
        } else {
          dispatch(
            init({
              user: null,
              isAuthenticated: false
            })
          );
        }
      } catch (err) {
        dispatch(
          init({
            isAuthenticated: false,
            user: null
          })
        );
      }
    })();
  }, []);

  const stateAuth = useSelector(selectStateAuth);
  if (!stateAuth?.isInitialized) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...stateAuth,
        signIn
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
