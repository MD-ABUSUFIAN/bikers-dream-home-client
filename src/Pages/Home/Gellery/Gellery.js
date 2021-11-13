import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Gellery = () => {
    return (
        <Box sx={{ width: '100%',mb:8 }}>
      <Grid container >
        <Grid item xs={6} sm={6}>
          <img style={{width:'100%'}} src="https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5db7591d2a0ab70310e4ae73&w=1024" alt=""/>
        </Grid>
        <Grid item xs={6} sm={6}>
          <img style={{width:'100%'}} src="https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5db75a3f2a0ab70310e4cea5&w=1024" alt=""/>
        </Grid>

        <Grid item xs={12} sm={4}>
          <img style={{width:'100%'}} src="https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5db75a3e2a0ab70310e4cea1&w=1024" alt=""/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img style={{width:'100%'}} src="https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5db75a3e2a0ab70310e4ce97&w=1024" alt=""/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img style={{width:'100%'}} src="https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5db759202a0ab70310e4aecd&w=1024" alt=""/>
        </Grid>
        <Grid xs={12} sm={6}>
          <img style={{width:'100%'}} src="https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5db7591f2a0ab70310e4aeba&w=1024" alt=""/>
        </Grid>

        <Grid xs={12} sm={6}>
          <img style={{width:'100%'}} src="https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5db7591e2a0ab70310e4aea3&w=1024" alt=""/>
        </Grid>
        

      </Grid>
    </Box>
    );
};

export default Gellery;