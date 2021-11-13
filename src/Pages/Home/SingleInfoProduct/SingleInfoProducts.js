import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardMedia, CircularProgress } from '@mui/material';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Navigation/Navigation';

const SingleInfoProducts = () => {
  const {productId}=useParams();
  const [isLoading,setIsLoading]=useState(true);
const {user}=useAuth();
  const [product,setProduct]=useState({});

  console.log(productId);
  useEffect(()=>{
   setIsLoading(true)
    fetch(`https://protected-lowlands-98831.herokuapp.com/singleProduct/${productId}`)
  .then(res=>res.json())
  .then(data=>{
    setProduct(data)
    setIsLoading(false)
  })
   
 

  },[])
  
  
  
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        data.status="Pending";
       
        fetch('https://protected-lowlands-98831.herokuapp.com/singleOrder',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(data=>{  
            if(data.insertedId){
              alert('Successfully Order')
            }
           
            console.log(data)
            
        })

     
        
       
    }
    return (
        <Box container  sx={{ flexGrow: 1,mb:8}}>
          <Navigation></Navigation>
         <Box> 
              <Typography variant="h3" style={{fontWeight: '900',textAlign: 'center',marginTop:"3%",backgroundColor:'blue',width:'50%',margin:'auto',padding: '15px',borderRadius:'20px',color:'white'}}>
                Purchase Your Product
             </Typography>
             {
          isLoading && <CircularProgress />
        }
          </Box>
        <Grid style={{marginTop:"3%",marginBottom:"100px"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          
         
            <Grid item xs={12} sm={12} md={6}>

            <Card   style={{width:"100%",margin:"auto",marginBottom:'10px'}}>
    <CardActionArea>
      <CardMedia style={{width:"100%"}}>
        <img style={{width:'100%'}} src={product?.image} alt="green iguana"/>
        
        </CardMedia>
      <CardContent>
        <Typography style={{textAlign:'center',fontWeight:'900',padding:"10px"}} gutterBottom variant="h3">
         {product?.title}
        </Typography>
        <Typography style={{textAlign:'center',padding:'10px'}} variant="h5" color="black">
             {product?.description}
           </Typography>
        
        <Typography style={{textAlign:'center',fontWeight:'700',color:'tomato',padding:'10px'}}  variant="h3" color="text.secondary">
         Price: ${product?.price}
        </Typography>
      </CardContent>
    </CardActionArea>
  
  </Card>

              
            </Grid>


            <Grid item xs={12} sm={12} md={6}>
                <Box >
                    <form style={{width: '100%',padding:'20px',marginTop:'10%'}} onSubmit={handleSubmit(onSubmit)}>
                        <input style={{width: '100%',padding:'20px',borderRadius:'10px',marginBottom:'20px'}} {...register("email")} value={user?.email} />

                        <input style={{width: '100%',padding:'20px',borderRadius:'10px',marginBottom:'10px'}} {...register("title",{ required: true })} defaultValue={product?.title}  />

                        <textarea style={{width: '100%',padding:'20px',borderRadius:'10px',marginBottom:'10px'}}{...register("description", { required: true })} defaultValue={product.description} />

                        <input style={{width: '100%',padding:'20px',borderRadius:'10px',marginBottom:'10px'}}{...register("image", { required: true })} defaultValue={product?.image} />

                        <input style={{width: '100%',padding:'20px',borderRadius:'10px',marginBottom:'10px'}} {...register("price",{ required: true })} defaultValue={product?.price}/>

                        <input style={{width: '100%',padding:'20px',borderRadius:'10px',marginBottom:'10px'}}type="number" {...register("phone")} placeholder="Enter Your Phone Number" required />

                        <input style={{width: '100%',padding:'20px',borderRadius:'10px',marginBottom:'10px', color:"white",fontWeight:"700",backgroundColor:"#0065f2",border:0,fontSize:"25px"}} type="submit" value="Confirm Order" />
                    </form>
                </Box>
              
            </Grid>
         
        </Grid>
        <Footer></Footer>
      </Box>
    );
};

export default SingleInfoProducts;