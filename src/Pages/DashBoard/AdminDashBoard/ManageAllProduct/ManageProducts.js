import { Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';



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



const ManageProducts = () => {
    return (
      <Box>
      
       
       <Box container sx={{ width: '100%'}}>
           <Typography variant="h3" sx={{fontWeight: '900',textAlign: 'center',py:2,mb:5,color:'white',backgroundColor:'blue',borderRadius:'20px'}} >Manage All Products</Typography>
       <Grid container  rowSpacing={4} spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, sm: 5, md: 12 }}>
         
        {
            products.map(product=>
                <Grid container  item xs={12} sm={4} md={3}>
         
         <Card   style={{height:"270px",width:"170px",margin:"auto",marginBottom:'10px'}}>
       <CardActionArea>
         <CardMedia style={{maxWidth:"320px"}}>
           <img style={{width:'100%',maxHeight:'120px'}} src={product.image} alt="green iguana"/>
           
           </CardMedia>
         <CardContent>
           <Typography gutterBottom variant="h6" component="div">
            {product.title}
           </Typography>
           <Typography variant="body1" color="red">
             Price: ${product.price}
           </Typography>
           
         </CardContent>
       </CardActionArea>
       <CardActions>
         <Button sx={{fontWeight: 'bold',backgroundColor: 'red'}} variant="contained" size="small">
        
X Delete
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

export default ManageProducts;