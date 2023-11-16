import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
    return (
        <React.Fragment sx={{}}>
            <CssBaseline />
            <Container maxWidth="100%">
                <Box sx={{ background: '#F5F5FF', display: 'inline-flex', position: 'absolute',bottom:'0px', padding: '10px 0px', width: '100%', margin: '0px ' }} />
            </Container>
        </React.Fragment>
    );
}