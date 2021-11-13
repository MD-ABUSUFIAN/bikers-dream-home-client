import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {  CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const CustomerReview = () => {
    const [reviews,setReviews]=useState([]);
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
          setIsLoading(true)
        fetch('https://protected-lowlands-98831.herokuapp.com/allReview')
        .then(res=>res.json())
        .then(data=>{
          setReviews(data)
          setIsLoading(false)
        })

    },[])
    return ( 
      <Box >
         {/* <Navigation></Navigation> */}
         <Box sx={{ width: '100%',mb:8}}>
           <Typography variant="h3" sx={{fontWeight: '700',textAlign: 'center',py:4,color:'white',width:'70%',margin:'auto',backgroundColor:'red',borderRadius:'20px'}} >Customer Review</Typography>

           {
             isLoading && <CircularProgress />
           }
    <Box style={{marginTop: '50px'}}>
    <Grid container  rowSpacing={4} spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 5, md: 12 }}>
         
         {
            reviews?.map(review=>
                 <Grid  key={reviews?._id}  item xs={6} sm={6} md={3} lg={3}>
          
          <Card   style={{height:"300px",width:"290px",margin:"auto",marginBottom:'10px',padding:'5px',textAlign:'center'}}>
        <CardActionArea>
        <Typography sx={{color:"blue",my:2,fontWeight:"bold"}} variant="h5">
             Customer Review
            </Typography>
              <Typography sx={{color:'red',fontWeight:'bold'}} variant='h5'>
             {review?.displayName}
            </Typography>
              <Typography sx={{color:'black',fontWeight:'bold'}} variant='primary'>
             {review?.email}
            </Typography>

          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
             {review?.review}
            </Typography>
          </CardContent>
         
        </CardActionArea>
        <CardActions sx={{fontWeight: 'bold',width: '50%'}}>
          <Stack spacing={1}>
          <Rating name="size-large" value={review?.rating} size="large" readOnly/>
           </Stack>
        </CardActions>
      </Card> 
           </Grid>
           )
         }
        </Grid>
    </Box>
     </Box>
      </Box>
     
    );
};

export default CustomerReview;