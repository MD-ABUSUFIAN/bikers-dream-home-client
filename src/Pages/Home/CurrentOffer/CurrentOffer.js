import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const CurrentOffer = () => {
    return (

        <Box sx={{my:8}}>

            <Typography sx={{py:3}} style={{textAlign: 'center',fontWeight:"900",color:"red", backgroundColor:'white',width:'75%',margin:'auto',borderRadius:'20px',marginTop:'40px',marginBottom:'50px'}} variant="h3">CURRENT OFFERS</Typography>
        <Box  style={{backgroundColor:'black'}} sx={{ width: '100%',my:2 }}>
      <Grid  container  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={6}>

            <Box sx={{p:2}} style={{marginTop:'30%',alignItems:'center',justifyContent: 'center',}} >
            <Typography style={{color: 'white',fontWeight:'900',fontSize:'50px',textAlign:'center',marginBottom:'30px'}} variant="h2">
            PLEASE SEE YOUR LOCAL
            </Typography>
            <Typography style={{color: 'red',fontWeight:'900',fontSize:'40px',textAlign:'center',marginBottom:'30px'}} variant="h2">
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

              <Box sx={{ width: '100%',marginTop:'-15px' }}>
                        <Grid container >


                          <Grid item xs={12} sm={12} md={6}>
                                
                                <Box>
                                  <img style={{width:'100%'}} src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/current-offers/responsive/072419-desktop-letsride-mcy-link.jpg" alt=""/>
                                </Box>
                          
                          </Grid>

                          <Grid  item xs={12} sm={12} md={6} >



                                <Grid container >
        <Grid item xs={12} sm={12} md={6}>
         


            <Box>
                    <img style={{width:'100%'}} src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/current-offers/responsive/072419-desktop-letsride-tc-link2.jpg" alt=""/>
            </Box>


        </Grid>

        <Grid item xs={12} sm={12} md={6} >


        <Box sx={{ width: '100%' }}>

      <Grid container >
        <Grid item xs={12} sm={12}>


              <img style={{width:'100%'}} src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/current-offers/responsive/072419-desktop-letsride-scooter-link2.jpg" alt=""/>
        
        </Grid>

        <Grid item xs={12} sm={12}>
              <img style={{width:'100%'}} src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/current-offers/responsive/072419-desktop-letsride-pp-link2.jpg" alt=""/>
   
              </Grid>
            
            </Grid>
          </Box>
          
      </Grid>


        </Grid>
     </Grid>

          <Grid item xs={12} sm={12} md={6}>
                                  
                  <img style={{width:'100%'}} src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/current-offers/responsive/111720-desktop-letsride-sxs-link.jpg" alt=""/>
                                  
                            
          </Grid>
        <Grid item xs={12} sm={12} md={6}>
            <Grid container >
              <Grid item xs={6}>
                      
                  <img style={{width:'100%'}} src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/current-offers/responsive/111720-desktop-letsride-atv-link2.jpg" alt=""/>

               </Grid>

        <Grid item xs={6}>


        <Box sx={{ width: '100%' }}>

          <Grid container >

              <Grid item xs={12}>

                  <img style={{width:'100%'}} src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/current-offers/responsive/link-snowmobile-03092020.jpg" alt=""/>
             </Grid>

            </Grid>

          </Box>
              
    </Grid>

      </Grid>

      </Grid>
</Grid>
  </Box>
       
    </Box>
    );
};

export default CurrentOffer;