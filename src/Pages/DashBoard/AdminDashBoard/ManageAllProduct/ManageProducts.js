import { CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';




const ManageProducts = () => {
  const[products,setProducts]=useState();
  const [isLoading,setIsLoading]=useState(false);
 
  useEffect(()=>{
   
    fetch('http://localhost:5000/manageProducts')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data)
      setIsLoading(false)
    })
  }
  ,[isLoading])

  
  const handleDelete= (id) => {
    
    setIsLoading(false);
    fetch(`http://localhost:5000/adminDelete/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify()
    }).then(res=>res.json())
    .then(data=>{ 

      if(data.deletedCount){
      
        alert('successfully deleted')
        setIsLoading(true);
      }
      
     console.log(data)
      
    })
   
  
  }
    return (
      <Box>
      
       
       <Box container sx={{ width: '100%'}}>
           <Typography variant="h3" sx={{fontWeight: '900',textAlign: 'center',py:2,mb:5,color:'white',backgroundColor:'blue',borderRadius:'20px'}} >Manage All Products</Typography>
       
         <Grid container  rowSpacing={4} spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, sm: 5, md: 12 }}>
         
         {
             products?.map(product=>
                 <Grid container key={product._id}  item xs={12} sm={4} md={3}>
          
          <Card   style={{height:"300px",width:"300px",margin:"auto",marginBottom:'10px'}}>
        <CardActionArea>
          <CardMedia style={{maxWidth:"350px"}}>
            <img style={{width:'100%',maxHeight:'120px'}} src={product.image} alt="green iguana"/>
            
            </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
             {product.title}
            </Typography>
            <Typography gutterBottom variant="body1" >
             {product.email}
            </Typography>
            <Typography variant="body1" color="red">
              Price: ${product.price}
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
       {
         isLoading &&<CircularProgress />
       }
     </Box>
     </Box>
    );
};

export default ManageProducts;