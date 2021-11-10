import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import { Link,useLocation,useHistory } from 'react-router-dom';
import { typography } from '@mui/system';
import useFirebase from '../../../../../Hooks/useFirebase';
import useAuth from '../../../../../Hooks/useAuth';



const Login = () => {

const {googleLogin,user,
  emailLogin}=useAuth();
const location=useLocation();
const history=useHistory();




    const { register, handleSubmit } = useForm();





    const onSubmit = data =>
    {
      emailLogin(data)
     console.log(user.email,user.name);
    }
     
    

     const handleGoogleLogin=()=>{
      googleLogin(location,history)
     }


    return (
        <Box sx={{ width: '100%' }}>
      <Grid   container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container item xs={12} sm={12} md={6}>
            <Box sx={{mt:'auto',p:8}} style={{width: '100%', height: 'auto',margin:'auto'}}>
            <Typography sx={{my:5}} variant="h3" style={{textAlign:'center',fontWeight:'900'}}>Login</Typography>
            <Typography sx={{my:5}} variant="h5" style={{textAlign:'center',fontWeight:'900'}}>{user.displayName}</Typography>
     <form  onSubmit={handleSubmit(onSubmit)}>
        
        <input style={{width:'100%',margin:3,padding:'10px',marginBottom:'10px'}} {...register("email")} placeholder="Enter Your Email" type="email" required />
        <br/>
        
        <input style={{width:'100%',margin:3,padding:'10px'}} {...register("password")}placeholder="Enter Your Password" required  type="password"/>
        <br/>
        <br/>
         <input style={{width:'100%',padding:'5px',backgroundColor:'#2f6ef7',color:'white',alignItems:'center',fontWeight:'700',fontSize:'20px'}}  type="submit" value="Login"/>
         <br/>
         <br/>
        <Typography style={{textAlign:'center'}}>New User? Please<Link to='/register'>Register</Link></Typography>
        
         <p style={{textAlign:"center"}}>.........................or.........................</p>
         <Button onClick={()=>handleGoogleLogin()} style={{marginLeft:'35%',padding:'10px'}} variant="contained">Google Login</Button>
     </form>
            </Box>
          
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <img style={{width: '100%', height: 'auto'}} src="https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?k=20&m=1281150061&s=170667a&w=0&h=r2JoluPHXUIdKb2cNnvcwFg7BIIf-SrBDFdoU0fZBnc=" alt=""/>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default Login;