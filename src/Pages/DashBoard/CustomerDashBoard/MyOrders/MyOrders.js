import { CircularProgress, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';


const AllProducts = () => {
   const[products,setProducts]=useState([]);
   const {user}=useAuth();
   const [isLoading,setIsLoading]=useState(true);
   useEffect(()=>{
    setIsLoading(true);
    fetch(`https://protected-lowlands-98831.herokuapp.com/myOrder/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
    setIsLoading(false)

   },[isLoading]);


const handleDelete=(id)=>{
  setIsLoading(true);
  fetch(`https://protected-lowlands-98831.herokuapp.com/myOrder/${id}`,{
    method: 'DELETE',
    headers:{ 'Content-Type': 'application/json'},
    body: JSON.stringify()
  })
  .then(res=>res.json())
  .then(data=>{
    alert("Are You Sure Delete This Order")
    setIsLoading(false);
    console.log(data)
  })
  console.log(id)
}
  

    return (
      <Box>
      
       
       <Box container sx={{ width: '100%'}}>
           <Typography variant="h3"  sx={{fontWeight: '900',textAlign: 'center',py:2,mb:5,color:'white',backgroundColor:'blue',borderRadius:'20px'}} >My Order List</Typography>
          
      
       <Grid container  rowSpacing={4} spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, sm: 5, md: 12 }}>
         
       {
           products?.map(product=>
               <Grid key={product._key} container  item xs={12} sm={4} md={3}>
        
        <Card   style={{height:"300px",width:"auto",margin:"auto",marginBottom:'10px'}}>
      <CardActionArea>
        <CardMedia style={{maxWidth:"320px"}}>
          <img style={{width:'100%',maxHeight:'120px'}} src={product?.image} alt="green iguana"/>
          
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           {product.title}
          </Typography>
          <Typography variant="body1" color="red">
            Price: ${product?.price}
          </Typography>
          <Typography variant="body1" color="blue">
            status: {product?.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>handleDelete(product?._id)} sx={{fontWeight: 'bold',backgroundColor: 'red'}} variant="contained" size="small">
       
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

export default AllProducts;