import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Navigation from '../Navigation/Navigation';

const CustomerReview = () => {

    const [reviews,setReviews]=useState([]);

    useEffect(()=>{

        fetch('https://protected-lowlands-98831.herokuapp.com/allReview')
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[])
    return ( 
      <Box >
         {/* <Navigation></Navigation> */}
         <Box sx={{ width: '100%',my:5}}>
           <Typography variant="h3" sx={{fontWeight: '700',textAlign: 'center',py:4,color:'white',width:'50%',margin:'auto',backgroundColor:'red',borderRadius:'20px'}} >Customer Review</Typography>
    <Box style={{marginTop: '50px'}}>
    <Grid container  rowSpacing={4} spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 5, md: 12 }}>
         
         {
            reviews?.map(review=>
                 <Grid  key={reviews?._id}  item xs={6} sm={6} md={4} lg={3}>
          
          <Card   style={{height:"250px",width:"270px",margin:"auto",marginBottom:'10px',padding:'5px',textAlign:'center'}}>
        <CardActionArea>
        <Typography variant="h5">
             Customer Feedback
            </Typography>
        <Typography>
             {review?.email}
            </Typography>

          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
             {review?.review}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{fontWeight: 'bold',backgroundColor: 'red',width: '50%'}}>
        
         
                   {review?.rating}
         
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