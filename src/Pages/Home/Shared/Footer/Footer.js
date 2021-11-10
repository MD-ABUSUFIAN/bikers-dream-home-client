import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { List, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';


const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1,backgroundColor:"black", }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Typography variant='h5' sx={{color:'gray',textAListgn:'center',borderBottom: '1px solid white',p:1}}>Bikers Dream Home Link</Typography>


          <Grid container spacing={2} columns={{ xs: 6, sm: 4, md: 12 }}>
       
          <Grid item xs={6} sm={6} md={4}lg={4} >
            <ul style={{color: 'white'}}>
                
                <List>Find a Dealer</List>
                <List>Contact a Dealer</List>
                <List>Current Offers</List>
                <List>Events & Demos</List>
                <List>Rent a Yamaha</List>
                <List>Racing</List>
            </ul>
          </Grid>
          <Grid item xs={6} sm={6} md={4}lg={4} >
          <ul style={{color: 'white'}}>
                
                <List>Build Your Own</List>
                <List>Model History</List>
                <List>Rider Training</List>
                <List>Purchase Tools</List>
                <List>Owner's Manuals</List>
                <List>Buy Manuals Online</List>
            </ul>
            
          </Grid>
          <Grid item xs={6} sm={6} md={4}lg={4} >
          <ul style={{color: 'white'}}>
                
                <List> Bikers Dream Home</List>
                <List>FaceBook</List>
                <List>Instagram</List>
                <List>Twitter</List>
                <List>E-Mail</List>
                <List>YouTube</List>
            </ul>
          </Grid>
    
       
      </Grid>
        </Grid>
        <Grid item xs={6} md={4}>
        <Typography variant='h5' sx={{color:'gray',textAlign:'center',borderBottom: '1px solid white',p:1}}>CORPORATE LINKS
</Typography>
<ul style={{color: 'white'}}>
                
                <List>Connect With Bikers Dream Home</List>
                <List>FaceBook</List>
                <List>Instagram</List>
                <List>Twitter</List>
                <List>E-Mail</List>
                <List>YouTube</List>
            </ul>
        </Grid>
       
      </Grid>
      <Typography sx={{color:'gray',textAlign:'center',py:4}}variant="body1">©2021 Bikers Dream Home Corporation, Bangladesh,cH@MoK All Rights Reserved.</Typography>
    </Box>
    );
};

export default Footer;