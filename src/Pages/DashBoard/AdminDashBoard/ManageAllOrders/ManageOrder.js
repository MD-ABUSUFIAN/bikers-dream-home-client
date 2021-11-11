import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ManageOrder = () => {
    return (
        <Box>
            <Typography variant="h3" sx={{fontWeight: '900',textAlign: 'center',py:2,mb:5,color:'white',backgroundColor:'blue',borderRadius:'20px'}}>Manage Order</Typography>
        </Box>
    );
};

export default ManageOrder;