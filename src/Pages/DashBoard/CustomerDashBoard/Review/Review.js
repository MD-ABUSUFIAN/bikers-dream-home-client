import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const {user}=useAuth();
  

    return (
       <Box container style={{width:'100%'}}>

<Typography variant="h3" sx={{fontWeight: '900',textAlign: 'center',py:2,mb:5,color:'white',backgroundColor:'blue',borderRadius:'20px'}}>Your Review</Typography>
      
        <form style={{width: '100%',margin:'auto',marginLeft:'10%'}} onSubmit={handleSubmit(onSubmit)}>
                        
                
                    <input style={{width: '70%',padding:"10px",borderRadius:"5px",marginBottom:'10px'}}{...register("email")} value={user?.email} />
                    <br/>
                    <textarea style={{width: '70%',padding:"10px",borderRadius:"5px"}}{...register("review")} placeholder="Please Your Valuable Review" type="text-area" />
                    <br/>
                    <input style={{width: '70%',padding:"10px",borderRadius:"5px",marginBottom:'10px'}} type="number" {...register("rating", { min:1, max: 5 })} Placeholder="Please Give Your Service Rating Number  1-5 " />
                    <br/>
                    <input style={{width: '70%',padding:"10px",backgroundColor:'#005af5',color:'#FFFFFF',fontSize:'18px',fontWeight:'bold',border:0,margin:2,borderRadius:"10px"}} type="submit" value="Send Review" />
        </form>
     </Box>
    );
};

export default Review;