import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Navigation = () => {

  const {userLogOut,user}=useAuth();
 
    return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
       
           {/* <Box>
             <img style={{width:'150px',height:'110px',marginLeft:'-25px'}} src="https://lh3.googleusercontent.com/proxy/HjbKakuhjiyCAXNdnLsV7St4VDHr30vbj7GR1LXByZB4V9KoxgImyejGk4oeukkpXiwdEM1YtjkpLXmKtfciZJJOqRJ4UZ7CjyqMptlnpp4fuvL_kX7u" alt=""/>
           </Box> */}




           <Link to='/home' style={{textDecoration:'none',paddingRight:""}}>
                <Button style={{color:'white',fontSize:'18px',fontWeight:'bold'}}>Home</Button>
            </Link>

           <Link to='/allProduct' style={{textDecoration:'none',paddingRight:"4px"}}> 
           <Button style={{color:'white',fontSize:'18px',fontWeight:'bold'}}>More Item</Button>
           </Link>

           <Link to='/review' style={{textDecoration:'none',paddingRight:"4px"}}>
                <Button style={{color:'white',fontSize:'18px',fontWeight:'bold'}}>Review</Button>
           </Link>


           <Link to='/productsInfo' style={{textDecoration:'none',paddingRight:"4px"}}>
                <Button style={{color:'white',fontSize:'18px',fontWeight:'bold'}}>ABOUT</Button>
            </Link>



          {user?.email?
            <Box>
                  <Link to='/' style={{textDecoration:'none',paddingRight:"4px"}}>
               
                      <Button onClick={userLogOut} style={{color:'red',fontSize:'18px',fontWeight:'bold',paddingRight:"4px"}}>Logout</Button>
                      </Link>
                      
             
                <Typography variant="body1">{user.email}</Typography>
                <Link to='/dashBoard' style={{textDecoration:'none',paddingRight:"4px"}}>
                      <Button style={{color:'red',fontSize:'18px',fontWeight:'bold'}}>DASHBOARD</Button>
                 </Link>
            </Box>
              :
            <Box>
                <Link to='/login' style={{textDecoration:'none',paddingRight:"4px"}}>
                <Button style={{color:'white',fontSize:'18px',fontWeight:'bold'}}>LOGIN {user.email}</Button>
                 </Link>
            </Box>
          }
          


          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;