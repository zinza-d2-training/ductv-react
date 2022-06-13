import { Box, Grid, Typography, Container, Stack, Button } from '@mui/material';
import * as React from 'react';

const Footer = () => {
    return (
        <Box sx={{
            background: '#2d2188',
            boxShadow: '0 0 12px 0 rgb(0 0 0 / 10%)',
            padding: '5px 0',
            color: '#fff',
            fontSize: '14px',
        }}>
            <Container maxWidth="xl" sx={{ mt: 3, pb: 2 }}>
                <Grid container spacing={2} sx={{ px: 2 }}>
                    <Grid item xs={6}>
                        <Typography>
                            {'© Bản quyền thuộc '}
                            <Box component="span" sx={{ fontFamily: 'SFbold', fontWeight: '600' }}>{'TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19 QUỐC GIA'}</Box>
                        </Typography>
                        <Typography sx={{ fontSize: '15px', pt: '5px' }}>
                            {'Phát triển bởi '}
                            <Box component="span" sx={{ color: 'red' }}>{'viettel'}</Box>
                        </Typography>
                        <Box
                            component="img"
                            src="assets/images/logo2bo.png"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction='column'
                            alignItems="flex-end"
                            spacing={2}
                        >
                            <Typography>
                                <Box component="span" sx={{ fontSize: '14px' }}>{'Tải sổ sức khỏe điện tử để đăng ký tiêm và nhận giấy chứng nhận tiêm'}</Box>
                            </Typography>
                            <Stack spacing={2} direction="row">
                                <Button variant="outlined" color="inherit"> App tiêm di động (Cho HCM) </Button>
                                <Button variant="outlined" color="inherit"> App Store </Button>
                                <Button variant="outlined" color="inherit">Google Play</Button>
                                <Button variant="outlined" color="inherit">App Gallery</Button>
                            </Stack>
                            <Box
                                component="img"
                                sx={{ width: '150px' }}
                                src="assets/images/handle_cert.png"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
}

export default Footer;