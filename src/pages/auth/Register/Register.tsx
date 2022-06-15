import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link as LinkRoute, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface FormInputs {
  idCard: string;
  email: string;
  password: string;
  fullName: string;
  gender: 'female' | 'male';
  birthday: Date;
}

const Register = () => {
  const [valueDate, setValueDate] = React.useState<Date | null>(new Date());
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data: FormInputs) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate('/login');
  };

  const validationSchema = Yup.object().shape({
    idCard: Yup.string()
      .required('CMND là bắt buộc')
      .matches(/^[0-9]+$/, 'CMND phải là dạng số ')
      .matches(/^(\d{9}|\d{12})$/, 'CMND chỉ chứa 9 hoặc 12 số'),
    email: Yup.string()
      .required('Email là bắt buộc')
      .email('Email không hợp lệ'),
    password: Yup.string()
      .matches(/^\S*$/, 'Mật khẩu không được chứa khoảng cách và khoảng trống')
      .required('Password là bắt buộc')
      .min(8, 'Password phải ít nhất chứa 8 ký tự'),
    fullName: Yup.string().required('Họ Tên là bắt buộc'),
    gender: Yup.string().required('Vui lòng chọn giới tính'),
    birthday: Yup.date()
      .typeError('Ngày Sinh là bắt buộc')
      .default(() => new Date())
  });
  const {
    handleSubmit,
    control,
    formState: { isValid }
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      idCard: '',
      email: '',
      password: '',
      fullName: '',
      gender: 'female'
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
            mx: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Typography component="h1" variant="h4" fontWeight="bold">
            Đăng Ký Tài Khoản
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1, width: '500px' }}>
            <Controller
              control={control}
              name="idCard"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Số CMND/CCCD"
                  id="idCard"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Email"
                  type="email"
                  id="email"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Mật Khẩu"
                  type="password"
                  id="password"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="fullName"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Họ Và Tên"
                  type="fullName"
                  id="fullName"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={valueDate}
                onChange={(date) => {
                  setValueDate(date);
                }}
                renderInput={(params) => (
                  <Controller
                    control={control}
                    name="birthday"
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        {...params}
                        margin="normal"
                        fullWidth
                        label="Ngày Sinh"
                        id="birthday"
                        error={!!error}
                        helperText={error?.message}
                      />
                    )}
                  />
                )}
              />
            </LocalizationProvider>
            <Controller
              control={control}
              name="gender"
              render={({ field, fieldState: { error } }) => (
                <FormControl error={!!error} variant="standard">
                  <FormLabel>Giới Tính</FormLabel>
                  <RadioGroup {...field} name="gender" row>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                  <Typography variant="body1" color="error">
                    {error}
                  </Typography>
                </FormControl>
              )}
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isValid}
              loading={loading}>
              Đăng Ký
            </LoadingButton>
            <Typography
              component="h4"
              variant="body1"
              textAlign="center"
              mt="5">
              Bạn đã có tài khoản
              <LinkRoute to="/login">Đăng Nhập</LinkRoute>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
