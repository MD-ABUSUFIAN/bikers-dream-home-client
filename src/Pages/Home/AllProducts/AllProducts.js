import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from '../Shared/Footer/Footer'


const AllProducts = () => {
  const [products,setProducts]=useState([]);
  const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
      setIsLoading(true)
        fetch('https://protected-lowlands-98831.herokuapp.com/allProduct')
        .then(res=>res.json())
        .then(data=>{
          setProducts(data)
          setIsLoading(false)
        })
    },[])

    return (
      <Box >
        <Navigation></Navigation>
        {
          isLoading && <CircularProgress />
        }
       <Box container sx={{ width: '100%',backgroundColor:"#1a1a1a",pb:"70px" }}>
           <Typography variant="h4" sx={{fontWeight: '900',textAlign: 'center',py:5,color:'red'}} >NEW BIKE COLLECTION</Typography>
       <Grid container  rowSpacing={4} spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, sm: 5, md: 12 }}>
         
        {
            products?.map(product=>
                <Grid key={product._id} container  item xs={12} sm={6} md={3}>
         
         <Card style={{height:"450px",width:"300px",margin:"auto",marginBottom:'10px'}}>
       <CardActionArea>
         <CardMedia style={{width:"300px"}}>
           <img style={{width:'100%',hight:'200px'}} src={product?.image} alt="green iguana"/>
           
           </CardMedia>
           <CardContent>
        <Typography style={{textAlign:'center',fontWeight:'900'}} gutterBottom variant="h5">
         {product?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
             {product?.description.slice(1-120)}
           </Typography>
        
        <Typography style={{textAlign:'center',fontWeight:'700',color:'tomato'}}  variant="h5" color="text.secondary">
         Price: ${product.price}
        </Typography>
      </CardContent>
       </CardActionArea>
       <CardActions>
       <Link  to={`/productsInfo/${product._id}`}>
              <Button sx={{fontWeight: 'bold',width:'100%'}} variant="contained" size="large" color="primary">
                BUY NOW
              </Button>
         </Link>
       </CardActions>
     </Card>
 
          
          </Grid>
          )
        }
       </Grid>
     </Box>
     <Footer></Footer>
     </Box>
    );
};

export default AllProducts;