import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{

            fetch('https://protected-lowlands-98831.herokuapp.com/newProduct',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res=>res.json()).then(data=>
               {
               if(data.insertedId){
                alert('successfully data added')
                console.log(data)
               }
               }
                )
           
        
    }
    return (
        <Box >
            <Typography variant="h3" sx={{fontWeight: '900',textAlign: 'center',py:2,mb:5,color:'white',backgroundColor:'blue',borderRadius:'20px'}}>New Product Added Section</Typography>
        <form style={{width: '100%',padding:'10px',marginLeft:'10%'}} onSubmit={handleSubmit(onSubmit)}>
            
            <input style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px'}} {...register("title")} placeholder='Product Title' />

            <textarea style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px'}}{...register("description")} placeholder='Product Description' />

            <input style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px'}}{...register("image")} placeholder='Product Image URL' type="text"/>

            <input style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px'}}type="number" {...register("price")} placeholder="Product Price" />
        
            <input style={{width: '70%',padding:'10px',marginLeft:"5%",marginBottom:'10px', color:"white",fontWeight:"700",backgroundColor:"#0065f2",border:0,borderRadius:'10px'}} type="submit" value="Add A Product" />
        </form>
    </Box>
    );
};

export default AddProduct;