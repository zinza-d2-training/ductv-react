import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link as LinkRoute, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField, Button, Paper, Box, Grid, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

interface IFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  return <LoginComponent />;
};

export default Login;

const LoginComponent = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const onSubmit = async (data: IFormInputs) => {
    setLoading(true);
    setMessage('');
    try {
      await signIn(data.email, data.password);
      navigate('/');
    } catch (e: any) {
      setMessage('Invalid email or password');
      setLoading(false);
      console.log(e);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is valid'),
    password: Yup.string()
      .trim('The password cannot include leading and trailing spaces')
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: 'admin@gmail.com',
      password: '12345678'
    }
  });

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Typography component="h1" variant="h5">
            Đăng Nhập vào tài khoản
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange } }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  id="email"
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                  onChange={(event) => {
                    onChange(event.target.value);
                    setMessage('');
                  }}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  error={errors.password ? true : false}
                  helperText={errors.password?.message}
                  onChange={(event) => {
                    onChange(event.target.value);
                    setMessage('');
                  }}
                />
              )}
            />
            <Typography variant="body1" color="error">
              {message}
            </Typography>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isValid || loading}
              loading={loading}>
              Đăng Nhập
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkRoute to="/forgot-password">{'Quên mật khẩu?'}</LinkRoute>
              </Grid>
            </Grid>
            <Typography component="h4" variant="body1">
              Hoặc đăng ký tài khoản nếu bạn chưa đăng ký!
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              color="success"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate('/register')}>
              Đăng Ký
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
