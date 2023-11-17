import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function BasicButtons() {
    const navigate = useNavigate();
    return (
        <Stack onClick={() => navigate("/singup")} spacing={2} direction="row">
            <Button variant="contained" sx={{
                display: 'flex',
                width: '200px',
                padding: '15.5px 67.203px 16.5px 67.797px',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#33C2FF',
                borderRadius: '0px'
            }}>Register</Button>
        </Stack>
    );
}