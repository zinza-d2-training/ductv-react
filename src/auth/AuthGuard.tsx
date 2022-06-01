import useAuth from '../hooks/useAuth';
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  const [previousRoute, setPreviousRoute] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (previousRoute !== null) setPreviousRoute(pathname);
  }, [pathname, previousRoute]);

  if (isAuthenticated) return <>{children}</>;
  else {
    return <Navigate to="/login" state={{ redirectUrl: previousRoute }} />;
  }
};

export default AuthGuard;
