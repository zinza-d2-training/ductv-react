import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import LineChart from '../../components/Home/LineChart/LineChart';
import MinBarChart from '../../components/Home/MinBarChart/MinBarChart';
import MaxBarChart from '../../components/Home/MaxBarChart/MaxBarChart';
import SearchAddress from '../../components/Home/SearchAddress/SearchAddress';

function HomeContent() {
  return (
    <>
      <Box
        sx={{
          mt: 15,
          pb: 2,
          backgroundColor: '#f7fbfe',
          zIndex: '10',
          boxShadow: '0 10px 30px 0 rgb(38 57 52 / 15%)'
        }}>
        <Container maxWidth="xl">
          <Grid container component="main" sx={{ padding: '0 20px' }}>
            <Grid
              item
              container
              alignItems="center"
              xs={6}
              sm={6}
              md={6}
              sx={{
                borderRight: '1px solid rgba(0,0,0,.1)',
                padding: '5px 0 5px 10px',
                backgroundColor: 'white'
              }}>
              <Grid textAlign="center">
                <Box
                  component="img"
                  sx={{ mr: 2 }}
                  src="assets/images/ic_injection.svg"
                />
              </Grid>
              <Grid sx={{ textAlign: 'unset' }}>
                <Typography component="h6" variant="h6">
                  Số mũi tiêm hôm qua
                </Typography>
                <Typography
                  component="div"
                  variant="h4"
                  textAlign="left"
                  fontWeight="bold">
                  381,641
                  <Box
                    component="small"
                    sx={{ fontSize: '10pt', fontStyle: 'italic' }}>
                    (mũi)
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              xs={6}
              sm={6}
              md={6}
              sx={{
                borderRight: '1px solid rgba(0,0,0,.1)',
                padding: '5px 0 5px 10px',
                backgroundColor: 'white'
              }}>
              <Grid textAlign="center">
                <Box
                  component="img"
                  sx={{ mr: 2 }}
                  src="assets/images/ic_injected_people.svg"
                />
              </Grid>
              <Grid sx={{ textAlign: 'unset' }}>
                <Typography component="h6" variant="h6">
                  Số mũi đã tiêm toàn quốc
                </Typography>
                <Typography
                  component="div"
                  variant="h4"
                  textAlign="left"
                  fontWeight="bold">
                  221,161,159
                  <Box
                    component="small"
                    sx={{ fontSize: '10pt', fontStyle: 'italic' }}>
                    (mũi)
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Typography
            color="red"
            variant="body2"
            sx={{ textAlign: 'center', fontStyle: 'italic', mt: 1 }}>
            <Box component="span" fontWeight="bold">
              Thông báo
            </Box>
            : Bạn chưa có chứng nhận tiêm chủng hoặc thông tin bị sai. Hãy chọn
            chức năng 'Phản ánh thông tin' bên phải màn hình hoặc cập nhật thông
            tin tiêm tại đây
          </Typography>
        </Container>
      </Box>
      <Container sx={{ mt: 2, pb: 6 }} maxWidth="xl">
        <Stack
          sx={{
            boxShadow: '0 4px 12px 0 rgb(34 41 47 / 12%)',
            border: '1px solid rgba(38,56,150,.1411764705882353)',
            borderRadius: '10px',
            padding: '24px',
            backgroundColor: '#fff',
            mx: 2
          }}>
          <LineChart />
        </Stack>
      </Container>
      <Container maxWidth="xl" sx={{ pb: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={6}>
            <Stack
              sx={{
                boxShadow: '0 4px 12px 0 rgb(34 41 47 / 12%)',
                border: '1px solid rgba(38,56,150,.1411764705882353)',
                borderRadius: '10px',
                padding: '24px',
                backgroundColor: '#fff',
                height: '850px',
                mx: 2
              }}>
              <Typography component="h6" variant="h6" fontWeight="bold">
                10 địa phương có tỷ lệ tiêm cao nhất
              </Typography>
              <Typography component="p" variant="subtitle1">
                (Tính theo số mũi tiêm/ số vắc xin phân bổ theo quyết định)
              </Typography>
              <MaxBarChart />
              <Typography
                component="div"
                variant="body1"
                fontStyle="italic"
                textAlign="center"
                sx={{ my: 4 }}>
                <Box
                  component="span"
                  sx={{
                    fontWeight: '700',
                    fontSize: '15px',
                    whiteSpace: 'nowrap'
                  }}>
                  Ghi chú:
                </Box>
                <Box component="span" sx={{ fontSize: '15px' }}>
                  Số mũi tiêm thực tế có thể nhiều hơn số liều vắc xin phân bổ
                </Box>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Stack
              sx={{
                boxShadow: '0 4px 12px 0 rgb(34 41 47 / 12%)',
                border: '1px solid rgba(38,56,150,.1411764705882353)',
                borderRadius: '10px',
                padding: '24px',
                backgroundColor: '#fff',
                height: '850px',
                mx: 2
              }}>
              <Typography component="h6" variant="h6" fontWeight="bold">
                10 địa phương có tỷ lệ tiêm thấp nhất
              </Typography>
              <Typography component="p" variant="subtitle1">
                (Tính theo số mũi tiêm/ số vắc xin phân bổ theo quyết định)
              </Typography>
              <MinBarChart />
              <Typography
                component="div"
                variant="body1"
                fontStyle="italic"
                sx={{ my: 2 }}>
                <Box
                  component="span"
                  sx={{
                    fontWeight: '700',
                    fontSize: '15px',
                    whiteSpace: 'nowrap'
                  }}>
                  Ghi chú:
                </Box>
                <Box component="span" sx={{ fontSize: '15px' }}>
                  Tỷ lệ tiêm tại một số tỉnh có thể thấp do chưa nhận đủ vắc xin
                  theo quyết định phân bổ
                </Box>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <SearchAddress />
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
