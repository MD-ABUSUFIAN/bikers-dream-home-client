import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const CurrentOffer = () => {
    return (

        <Box sx={{my:8}}>

            <Typography style={{textAlign: 'center',fontWeight:"900",color:"red"}} variant="h2">CURRENT OFFERS</Typography>
        <Box  style={{backgroundColor:'black'}} sx={{ width: '100%',my:5 }}>
      <Grid  container  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  container item xs={12} sm={12} md={6}>

            <Box style={{marginTop:'40%',alignItems:'center',justifyContent: 'center',}} >
            <Typography style={{color: 'white',fontWeight:'900',fontSize:'50px',textAlign:'center',marginBottom:'30px'}} variant="h2">
            PLEASE SEE YOUR LOCAL
            </Typography>
            <Typography style={{color: 'red',fontWeight:'900',fontSize:'50px',textAlign:'center',marginBottom:'30px'}} variant="h2">
            YAMAHA MOTORCYCLE DEALER
            </Typography>
            <Typography style={{color: 'white',fontWeight:'900',fontSize:'50px',textAlign:'center'}} variant="h2">
            FOR FINANCING OPTIONS.
            </Typography>
            </Box>
          
        </Grid>


        
        <Grid  item xs={12} sm={12} md={6}>
        <Box>
        <img style={{ width:"100%"}} src="https://coolwallpapers.me/picsup/6071844-yamaha-mt-10-yamaha-hd-4k-bikes-behance.jpg" alt=""/>
        </Box>
        </Grid>
  

      </Grid>
    </Box>
    </Box>
    );
};

export default CurrentOffer;