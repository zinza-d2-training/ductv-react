
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Avatar, Stack } from '@mui/material';
import HeaderLink from '../../components/HeaderLink/HeaderLink';
import LineChart from '../auth/LineChart/LineChart';
import MinBarChart from '../auth/MinBarChart/MinBarChart';
import MaxBarChart from '../auth/MaxBarChart/MaxBarChart';

function HomeContent() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          padding: '10px 0',
          transition: 'all .5s',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundImage: 'linear-gradient(133deg, rgb(237, 27, 35), rgb(46, 48, 145), rgb(37, 52, 148))'
        }}
      >
        <Container>
          <Toolbar sx={{ flexWrap: 'wrap', alignItems: 'center' }} color="white">
            <Avatar alt="CỔNG THÔNG TIN TIÊM CHỦNG COVID-19" src="assets/images/u7.png" sx={{ marginRight: '15px' }} />
            <Typography variant="h6" color="white" noWrap sx={{ flexGrow: 1 }}>
              CỔNG THÔNG TIN TIÊM CHỦNG COVID-19
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <HeaderLink text="Trang chủ" />
              <HeaderLink text="Đăng ký tiêm" />
              <HeaderLink text="Trang chủ" />
              <HeaderLink text="Tra cứu" />
              <HeaderLink text="Tài liệu" />
              <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5, textTransform: 'unset' }}>
                Login
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ mt: 15, pb: 2, backgroundColor: '#f7fbfe', zIndex: '10', boxShadow: '0 10px 30px 0 rgb(38 57 52 / 15%)' }}>
        <Container>
          <Grid container component="main" sx={{ padding: '0 20px' }}>
            <Grid
              item
              container
              alignItems='center'
              xs={6} sm={6} md={6}
              sx={{
                borderRight: '1px solid rgba(0,0,0,.1)',
                padding: "5px 0 5px 10px",
                backgroundColor: 'white'
              }}
            >
              <Grid
                textAlign='center'
              >
                <Avatar src="assets/images/ic_injection.svg" sx={{ marginRight: '15px', overflow: 'unset' }} />
              </Grid>
              <Grid
                sx={{ textAlign: 'unset' }}
              >
                <Typography component="h6" variant="h6" >Số mũi tiêm hôm qua</Typography>
                <Typography component="div" variant="h4" textAlign="left" fontWeight="bold">381,641
                  <Box component="small" sx={{ fontSize: '10pt', fontStyle: "italic" }}>(mũi)</Box>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems='center'
              xs={6} sm={6} md={6}
              sx={{
                borderRight: '1px solid rgba(0,0,0,.1)',
                padding: "5px 0 5px 10px",
                backgroundColor: 'white'
              }}
            >
              <Grid
                textAlign='center'
              >
                <Avatar src="assets/images/ic_injected_people.svg" sx={{ marginRight: '15px', overflow: 'unset' }} />
              </Grid>
              <Grid
                sx={{ textAlign: 'unset' }}
              >
                <Typography component="h6" variant="h6" >Số mũi đã tiêm toàn quốc</Typography>
                <Typography component="div" variant="h4" textAlign="left" fontWeight="bold">221,161,159
                  <Box component="small" sx={{ fontSize: '10pt', fontStyle: "italic" }}>(mũi)</Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Typography color="red" variant="body2" sx={{ textAlign: 'center', fontStyle: 'italic', mt: 1 }}><Box component="span" fontWeight="bold">Thông báo</Box> : Bạn chưa có chứng nhận tiêm chủng hoặc thông tin bị sai. Hãy chọn chức năng 'Phản ánh thông tin' bên phải màn hình hoặc cập nhật thông tin tiêm tại đây</Typography>
        </Container>
      </Box>
      <Container sx={{ mt: 2, pb: 6 }}>
        <Stack sx={{
          boxShadow: '0 4px 12px 0 rgb(34 41 47 / 12%)',
          border: '1px solid rgba(38,56,150,.1411764705882353)',
          borderRadius: '10px',
          padding: '24px',
          backgroundColor: '#fff',
        }}>
          <LineChart />

        </Stack>
      </Container>
      <Container sx={{ pb: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={6} >
            <Stack sx={{
              boxShadow: '0 4px 12px 0 rgb(34 41 47 / 12%)',
              border: '1px solid rgba(38,56,150,.1411764705882353)',
              borderRadius: '10px',
              padding: '24px',
              backgroundColor: '#fff',
              height: '710px'
            }}>
              <Typography component='h6' variant='h6' fontWeight={'bold'}>10 địa phương có tỷ lệ tiêm cao nhất</Typography>
              <Typography component='p' variant='subtitle1'>(Tính theo số mũi tiêm/ số vắc xin phân bổ theo quyết định)</Typography>
              <MaxBarChart />
              <Typography component='div' variant='body1' fontStyle="italic" textAlign="center" sx={{ my: 2 }}>
                <Box component="span" sx={{ fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }}>Ghi chú:</Box>
                <Box component="span" sx={{ fontSize: '15px' }}>Số mũi tiêm thực tế có thể nhiều hơn số liều vắc xin phân bổ</Box>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={6} md={6} >
            <Stack sx={{
              boxShadow: '0 4px 12px 0 rgb(34 41 47 / 12%)',
              border: '1px solid rgba(38,56,150,.1411764705882353)',
              borderRadius: '10px',
              padding: '24px',
              backgroundColor: '#fff',
              height: '710px'
            }}>
              <Typography component='h6' variant='h6' fontWeight={'bold'}>10 địa phương có tỷ lệ tiêm thấp nhất</Typography>
              <Typography component='p' variant='subtitle1'>(Tính theo số mũi tiêm/ số vắc xin phân bổ theo quyết định)</Typography>
              <MinBarChart />
              <Typography component='div' variant='body1' fontStyle="italic" sx={{ my: 2 }}>
                <Box component="span" sx={{ fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }}>Ghi chú:</Box>
                <Box component="span" sx={{ fontSize: '15px' }}>Tỷ lệ tiêm tại một số tỉnh có thể thấp do chưa nhận đủ vắc xin theo quyết định phân bổ</Box>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment >
  );
}

export default function Home() {
  return <HomeContent />;
}