import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
        Hello {user?.name}
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        email: {user?.email}
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        age: {user?.age}
      </Typography>
    </>
  );
};

export default Home;
