import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { typography } from '@mui/system';


const Navigation = () => {

  const {userLogOut,user}=useAuth();
  console.log(user.email)
    return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
           <Box>
             <img style={{width:'150px',height:'110px',marginLeft:'-25px'}} src="https://lh3.googleusercontent.com/proxy/HjbKakuhjiyCAXNdnLsV7St4VDHr30vbj7GR1LXByZB4V9KoxgImyejGk4oeukkpXiwdEM1YtjkpLXmKtfciZJJOqRJ4UZ7CjyqMptlnpp4fuvL_kX7u" alt=""/>
           </Box>




           <Link to='/home' style={{textDecoration:'none',paddingRight:""}}>
                <Button style={{color:'white',fontSize:'18px',fontWeight:'bold'}}>Home</Button>
            </Link>

           <Link to='/allProduct' style={{textDecoration:'none',paddingRight:"4px"}}> 
           <Button style={{color:'white',fontSize:'18px',fontWeight:'bold'}}>More Item</Button>
           </Link>

           <Link to='/' style={{textDecoration:'none',paddingRight:"4px"}}>
                <Button style={{color:'white',fontSize:'18px',fontWeight:'bold'}}>Review</Button>
           </Link>


           <Link to='/productsInfo' style={{textDecoration:'none',paddingRight:"4px"}}>
                <Button style={{color:'white',fontSize:'18px',fontWeight:'bold'}}>ABOUT</Button>
            </Link>



          {user?.email?
            <Box>
                
               
                      <Button onClick={userLogOut} style={{color:'red',fontSize:'18px',fontWeight:'bold',paddingRight:"4px"}}>Logout</Button>
                      
             
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