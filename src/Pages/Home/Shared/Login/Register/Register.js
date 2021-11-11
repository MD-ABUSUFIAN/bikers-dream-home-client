import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { Alert, CircularProgress, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import { Link,useLocation,useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../../../Hooks/useAuth';




const Register = () => {

  const {googleLogin,user,emailRegistration,isLoading,authError}=useAuth();
  const location=useLocation();
  const history=useHistory();
  const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        if(data.password===data.password2){
          
          emailRegistration(data,location,history)
          alert("Register Successfully")
        }
    }
     
const handleGoogleLogin =()=>{
  googleLogin(location,history)
}
  
    return (
        <Box sx={{ width: '100%' }}>
      <Grid   container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container item xs={12} sm={12} md={6}>
            <Box sx={{mt:'auto',p:8}} style={{width: '100%', height: 'auto',margin:'auto'}}>
            <Typography sx={{my:5}} variant="h3" style={{textAlign:'center',fontWeight:'900'}}>Register</Typography>


            { !isLoading && <form  onSubmit={handleSubmit(onSubmit)}>
                
                <input style={{width:'100%',margin:3,padding:'10px',marginBottom:'10px'}} {...register("displayName")} placeholder="Enter Your Name" type="text" required />
                <br/>
                <input style={{width:'100%',margin:3,padding:'10px',marginBottom:'10px'}} {...register("email")} placeholder="Enter Your Email" type="email" required />
                <br/>
                
                <input style={{width:'100%',margin:3,padding:'10px'}} {...register("password")}placeholder="Enter Your Password" required  type="password"/>
                <br/>
                <input style={{width:'100%',margin:3,padding:'10px'}} {...register("password2")}placeholder="Confirm Your Password" required  type="password"/>
                <br/>
                <br/>
                <input style={{width:'100%',padding:'5px',backgroundColor:'#2f6ef7',color:'white',alignItems:'center',fontWeight:'700',fontSize:'20px'}}  type="submit" value="Register"/>
                <br/>
                <br/>
                <Typography style={{textAlign:'center'}}>Already Register? Please <Link to='/login'>Login</Link></Typography>
                
                <p style={{textAlign:"center"}}>.........................or.........................</p>
                <Button onClick={()=>handleGoogleLogin()} style={{marginLeft:'35%',padding:'10px'}} variant="contained">Google Login</Button>
                
            </form>}
            {
              isLoading && <CircularProgress />
            }

{/* ; <Alert severity="success">Registered SuccessFully Please Login</Alert> */}
            
           



            {
              authError && <Alert severity="error">{authError}</Alert>
            }
            </Box>
           
          
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <img style={{width: '100%', height: 'auto'}} src="https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?k=20&m=1281150061&s=170667a&w=0&h=r2JoluPHXUIdKb2cNnvcwFg7BIIf-SrBDFdoU0fZBnc=" alt=""/>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default Register;