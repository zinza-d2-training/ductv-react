import React from 'react';
import { Link } from '@mui/material';

const HeaderLink = ({ text }: { text: string }) => {
    return (
        <Link
            variant="button"
            underline="none"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 1.5, textTransform: 'unset' }}
        >
            {text}
        </Link>
    )
}

export default HeaderLink;
