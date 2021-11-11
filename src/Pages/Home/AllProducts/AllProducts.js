import { Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Navigation from '../Navigation/Navigation';


const products=[
    {
        id:1,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/home/desktop-motorcycle-home-111720-st-inset.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
    {
        id:2,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/Category_Pages/Motorcycle_Home/image-motorcycle-home-adventure-link-2020b.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
    {
        id:3,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/home/2022/desktop-motorcycle-home-dirt-cc-link-070122.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
    {
        id:4,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/home/2022/desktop-motorcycle-home-dirt-dual-link-070122.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
    {
        id:5,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/home/2022/desktop-motorcycle-home-dirt-dual-link-070122.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
    {
        id:6,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/home/2022/desktop-motorcycle-home-dirt-dual-link-070122.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
]



const AllProducts = () => {
    return (
      <Box>
      <Navigation></Navigation>
       
       <Box container sx={{ width: '100%',backgroundColor:"#1a1a1a" }}>
           <Typography variant="h3" sx={{fontWeight: '900',textAlign: 'center',py:10,color:'red'}} >NEW BIKE COLLECTION</Typography>
       <Grid container  rowSpacing={4} spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, sm: 5, md: 12 }}>
         
        {
            products.map(product=>
                <Grid container  item xs={12} sm={6} md={4}>
         
         <Card   style={{maxHeight:"450px",maxWidth:"320px",margin:"auto",marginBottom:'10px'}}>
       <CardActionArea>
         <CardMedia style={{maxWidth:"320px"}}>
           <img style={{width:'100%',maxHeight:'200px'}} src={product.image} alt="green iguana"/>
           
           </CardMedia>
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
            {product.title}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             {product.description}
           </Typography>
           <Typography variant="body4" color="text.secondary">
             {product.price}
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
         <Button sx={{fontWeight: 'bold'}} variant="contained" size="large" color="primary">
           BUY NOW
         </Button>
       </CardActions>
     </Card>
 
          
          </Grid>
          )
        }
       </Grid>
     </Box>
     </Box>
    );
};

export default AllProducts;