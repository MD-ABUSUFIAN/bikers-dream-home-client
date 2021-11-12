import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { IconButton, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const Navigation = () => {
  const theme=useTheme();

  const {userLogOut,user}=useAuth();
  const useStyle=makeStyles({
    navItem: {
      color:'white',
      textDecoration:'none',
      
    },
    navIcon:{
      [theme.breakpoints.up('sm')]: {
       display:'none'
      }
    },

    navItemContainer:{
      [theme.breakpoints.down('sm')]: {
        display:'none'
       }
    },
    navLogo:{
      [theme.breakpoints.down('sm')]: {
       textAlign: 'right'
       }
    },

    mobileNavIcon:{
      textDecoration:'none',
      color:'black'

    },

    // navBg:{
    //   backgroundColor:'black',
    //   height:'80px',
    //   padding:'5px'
     
    // },

    // navText:{
    //   fontSize:'20px',
    //   fontWeight:'bold',
    //   marginRight:'10px',
    // }

  })
  const {navItem,navIcon,navItemContainer, mobileNavIcon,navLogo,navBg,navText}=useStyle();
  const [state, setState] = React.useState(false);
    return (
      <>
        <Box sx={{ flexGrow: 1}}>
        <AppBar sx={{backgroundColor:'black', height:'80px',padding:'5px'}}position="static">
          <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={()=>setState(true)}
          >
            <MenuIcon />
          </IconButton>


          <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BIKERS DREAM HOME
          </Typography>

           <Box className={navItemContainer}>
            <Link className={navItem} to='/'>
              <Button sx={{ fontSize:'20px',fontWeight:'bold',marginRight:'10px'}} color='inherit'>Home</Button>
            </Link>

            <Link className={navItem} to='/allProduct'>
              <Button sx={{ fontSize:'20px',fontWeight:'bold',marginRight:'10px'}} color='inherit'>More Collection</Button>
            </Link>

            <Link className={navItem} to='/contactUs'>
              <Button sx={{ fontSize:'20px',fontWeight:'bold',marginRight:'10px'}} color='inherit'>Contact Us</Button>
            </Link>
         
           {
              !user?.email ?
              <Link className={navItem} to='/Login'>
                <Button sx={{ fontSize:'20px',fontWeight:'bold',marginRight:'10px'}} color='inherit'>Login</Button>
              </Link>:
              <>
                <Link className={navItem} to='/'>
              <Button onClick={userLogOut} style={{color:'red',fontSize:'21px',border:'1px solid white',marginRight:'15px'}} sx={{ fontSize:'20px',fontWeight:'bold',marginRight:'10px'}} color='inherit'>Logout</Button>
            </Link>

            <Link className={navItem} to='/dashBoard'>
              <Button sx={{ fontSize:'20px',fontWeight:'bold',marginRight:'10px'}} style={{color:'white',border:'1px solid white'}} color='inherit'>DashBoard</Button>
            </Link>
              </>
           }
          
          </Box>


          </Toolbar>
        </AppBar>
      </Box>
      <div>
     
        <React.Fragment>
          <Drawer
            
            open={state}
            onClose={()=>setState(false)}
          >    <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
              <ListItem button >
                <ListItemText>
                  <Link className={mobileNavIcon} to='/'>Home</Link>
                </ListItemText>
              </ListItem>
              <Divider />
    
              <ListItem button >
                <ListItemText>
                <Link  className={mobileNavIcon} to='/allProduct'>More Collection</Link>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button >
                <ListItemText>
                <Link  className={mobileNavIcon} to='/contactUs'>Contact Us</Link>
                </ListItemText>
              </ListItem>
              <Divider />
                  {user?.email ? <div>
                    <ListItem button >
                          <ListItemText>
                              <Link className={mobileNavIcon} to='/dashBoard'>DashBoard</Link>
                          </ListItemText>
                        </ListItem>
                        <Divider />
                       
                          <ListItem button >
                                <ListItemText>
                                <Link className={mobileNavIcon} to='/'>Logout</Link>
                                </ListItemText>
                           </ListItem>
                             <Divider />
                  </div>
                  :<div>
                        <ListItem button >
                              <ListItemText>
                              <Link  className={mobileNavIcon} to='/login'>Login</Link>
                              </ListItemText>
                      </ListItem>
                  </div>}    
          </List>
           </Box>
          </Drawer>
        </React.Fragment>

    </div>
      </>
    );
};

export default Navigation;