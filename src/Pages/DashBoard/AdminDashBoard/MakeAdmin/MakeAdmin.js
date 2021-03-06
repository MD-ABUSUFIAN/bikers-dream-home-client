import { Alert, AlertTitle, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';


const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const{authError}=useAuth();
    const [isLoading,setIsLoading]=useState(true)
    const onSubmit = email => {
    //   const user=data;
    
        fetch('https://protected-lowlands-98831.herokuapp.com/updateUser/admin',{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(email)     
        })
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
                if(data.modifiedCount){
                    alert('Admin Created SuccessFully') }
        })

    }
    
    return (
        <Box container>
            <Typography variant="h3" sx={{fontWeight: '900',textAlign: 'center',py:2,mb:5,color:'white',backgroundColor:'blue',borderRadius:'20px'}}>Make New Admin Section</Typography>
         
                <form style={{width:'100%',marginTop:'10%',marginLeft:'10%'}} onSubmit={handleSubmit(onSubmit)}>
                <input style={{width:'50%',padding:'12px',borderRadius:'10px'}} {...register("email") }type="email" placeholder="Enter New Admin Email" />
            
                <input style={{backgroundColor:'#005af5',color:'white',border:0,padding:'10px',fontSize:'20px',borderRadius:'10px'}} variant="contained" type="submit" />
        </form>
          
        </Box>
    );
};

export default MakeAdmin;