import { Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const ManageOrder = () => {
    const [products,setProducts]=useState();
    const [isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
      setIsLoading(true);
        fetch('https://protected-lowlands-98831.herokuapp.com/manageorders')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setIsLoading(false)
        })
    },[])


    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    
    return (
        <Box>
            <Typography variant="h3" sx={{fontWeight: '900',textAlign: 'center',py:2,mb:5,color:'white',backgroundColor:'blue',borderRadius:'20px'}}>Manage Order</Typography>
        
            <Grid container  rowSpacing={4} spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, sm: 5, md: 12 }}>
         
         {  
             products?.map(product=>
                
                
                 <Grid container key={product._id}  item xs={12} sm={4} md={3}>
                   
          
          <Card   style={{height:"340px",width:"320px",margin:"auto",marginBottom:'10px'}}>
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
            
        <form onSubmit={handleSubmit(onSubmit)}>
      
      <select {...register("status")}>
        <option  value={product._id}>Id:</option>
       
        <option type={'text'} value="Shipped">Shipped</option>
       { console.log(product._id)}
      </select>
      
      <input type="submit" />
      </form>
     
         
        </CardActions>
       
       
      </Card>
      {
         isLoading &&<CircularProgress />
       }
 
    
           </Grid>
           
      
          )
        }
       </Grid>
      

     </Box>
     
    );
};

export default ManageOrder;