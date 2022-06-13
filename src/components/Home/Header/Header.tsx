
import * as React from 'react';
import { AppBar, Avatar, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import HeaderLink, { HeaderLinkDropDown } from '../../HeaderLink/HeaderLink';
import { DataLink } from '../../../types';

const Header = () => {
    const dataSearch: DataLink = {
        data: [
            {
                title: 'Tra cứu chứng nhận tiêm',
                link: '#',
                key: 1,
            },
            {
                title: 'Tra cứu kết quả đăng ký',
                link: '#',
                key: 2,
            },
            {
                title: 'Tra cứu Phản ánh',
                link: '#',
                key: 3,
            },
            {
                title: 'Tra cứu Hộ chiếu vắc xin',
                link: '#',
                key: 4,
            },
        ]
    }

    const dataRegister: DataLink = {
        data: [
            {
                title: 'Tra cứu chứng nhận tiêm',
                link: '#',
                key: 1,
            },
            {
                title: 'Tra cứu kết quả đăng ký',
                link: '#',
                key: 2,
            }
        ]
    }

    return (
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
            <Container maxWidth="xl">
                <Toolbar sx={{ flexWrap: 'wrap', alignItems: 'center' }} color="white">
                    <Avatar alt="CỔNG THÔNG TIN TIÊM CHỦNG COVID-19" src="assets/images/u7.png" sx={{ marginRight: '15px' }} />
                    <Typography variant="h6" color="white" noWrap sx={{ flexGrow: 1 }}>
                        CỔNG THÔNG TIN TIÊM CHỦNG COVID-19
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <HeaderLink text="Trang chủ" />
                        <HeaderLinkDropDown id="link-register" idMenu="link-register-menu" text="Đăng ký tiêm" dataLink={dataRegister} />
                        <HeaderLinkDropDown id="link-search" idMenu="link-search-menu" text="Tra cứu" dataLink={dataSearch} />
                        <HeaderLink text="Tài liệu" />
                        <Button href="#" variant="contained" color="inherit" sx={{ my: 1, mx: 1.5, color: '#281ba4', textTransform: 'unset', borderRadius: '8px 8px 8px 0', p: '5px 25px', fontWeight: '700' }}>
                            Đăng nhập
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;