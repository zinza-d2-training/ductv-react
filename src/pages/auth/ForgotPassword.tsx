import {
  Grid,
  Typography,
  Box,
  TextField,
  Paper,
  Button,
  Stack
} from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface FormInputs {
  email: string;
}

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data: FormInputs) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate('/login');
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid')
  });
  const {
    handleSubmit,
    control,
    formState: { isValid }
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      email: ''
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
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ height: '100vh' }}>
        <Box
          sx={{
            my: 20,
            mx: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Typography component="h6" variant="h6" align="center">
            Để khôi phục mật khẩu, vui lòng nhập đúng email bạn đã đăng ký
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1, width: '80%' }}>
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  id="email"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate('/login')}>
                Quay Lại
              </Button>

              <LoadingButton
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid}
                loading={loading}>
                Gửi
              </LoadingButton>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
