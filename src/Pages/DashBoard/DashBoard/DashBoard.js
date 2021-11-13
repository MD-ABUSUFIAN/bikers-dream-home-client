import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link,useRouteMatch,Switch,Route } from 'react-router-dom';
import { Button } from '@mui/material';
import MyOrders from '../CustomerDashBoard/MyOrders/MyOrders';
import Pay from '../CustomerDashBoard/Payment/Pay';
import Review from '../CustomerDashBoard/Review/Review';
import useAuth from '../../../Hooks/useAuth';
import AddProduct from '../AdminDashBoard/AddProduct/AddProduct';
import ManageProducts from '../AdminDashBoard/ManageAllProduct/ManageProducts';
import MakeAdmin from '../AdminDashBoard/MakeAdmin/MakeAdmin';
import ManageOrder from '../AdminDashBoard/ManageAllOrders/ManageOrder';




const drawerWidth = 240;
const DashBoard=(props)=> {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {userLogOut,isAdmin}=useAuth();
  // const [isLoading,setIsLoading]=React.useState(true);
 


  const handleDrawerToggle = () => {
  
    
    
    setMobileOpen(!mobileOpen);
  };


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
     
    <Container container sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'black'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
          
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Bikers Dream Home DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {/* {drawer} */}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {/* {drawer} */}

         
          
            <ul>
            
              
            <Link style={{textDecoration:'none'}} to='/'>
               <List >
                 <Button onClick={userLogOut}  style={{fontSize:'20px',color:'Black',fontWeight:'700'}}><img style={{width:'50px',borderRadius:'10px',padding:'3px',}} src="https://png.pngtree.com/png-vector/20190425/ourlarge/pngtree-vector-home-icon-png-image_991177.jpg" alt=""/>LogOut</Button>
                 </List>
             </Link>
            


              {
                !isAdmin && 
             
                <Box>
                 <Link style={{textDecoration:'none'}}to={`${url}/pay`}>
                   <List >
                     <Button style={{fontSize:'15px',color:'red',fontWeight:'700'}} ><img style={{width:'40px',borderRadius:'10px',padding:'3px'}} src="https://icon2.cleanpng.com/20180605/suf/kisspng-computer-icons-icon-design-clip-art-order-icon-5b164061dbd306.2382823615281849299004.jpg" alt=""/> Payment</Button>
                     </List>
                </Link>
                <Link style={{textDecoration:'none'}}to={`${url}/myOrder`}>
                   <List >
                     <Button style={{fontSize:'15px',color:'red',fontWeight:'700'}} ><img style={{width:'40px',borderRadius:'10px',padding:'3px'}} src="https://icon2.cleanpng.com/20180605/suf/kisspng-computer-icons-icon-design-clip-art-order-icon-5b164061dbd306.2382823615281849299004.jpg" alt=""/> My Order</Button>
                     </List>
                </Link>
 
 
 
                <Link style={{textDecoration:'none'}} to={`${url}/review`}>
                   <List >
                     <Button style={{fontSize:'15px',color:'red',fontWeight:'700'}} ><img style={{width:'40px',borderRadius:'10px',padding:'3px'}} src="https://icon-library.com/images/services-icon-png/services-icon-png-8.jpg" alt=""/> Review</Button>
                     </List>
               </Link>
               </Box>
              }
             

               
              {
                isAdmin && 
                <Box>
                <Link style={{textDecoration:'none'}} to={`${url}/addProduct`}>
                   <List >
                     <Button style={{fontSize:'15px',color:'red',fontWeight:'700'}} ><img style={{width:'40px',borderRadius:'10px',padding:'3px'}} src="https://icon-library.com/images/services-icon-png/services-icon-png-8.jpg" alt=""/>Add Product</Button>
                     </List>
               </Link>
              
              
                <Link style={{textDecoration:'none'}} to={`${url}/makeAdmin`}>
                       <List >
                         <Button style={{fontSize:'15px',color:'red',fontWeight:'700'}}>
                           <img style={{width:'40px',borderRadius:'10px',padding:'3px'}} src="https://e7.pngegg.com/pngimages/9/763/png-clipart-computer-icons-login-user-system-administrator-admin-desktop-wallpaper-megaphone-thumbnail.png" alt=""/> Make Admin</Button>
                           </List>
                 </Link>
              
              
                <Link style={{textDecoration:'none'}}to={`${url}/manageOrder`}> 
                     <List >
                       <Button style={{fontSize:'15px',color:'red',fontWeight:'700'}} ><img style={{width:'40px',borderRadius:'10px',padding:'3px'}} src="https://e7.pngegg.com/pngimages/267/100/png-clipart-sharepoint-for-project-management-others-miscellaneous-logo.png" alt=""/> Manage Order</Button>
                       </List>
                 </Link>
                <Link style={{textDecoration:'none'}}to={`${url}/manageProducts`}> 
                     <List >
                       <Button style={{fontSize:'15px',color:'red',fontWeight:'700'}} ><img style={{width:'40px',borderRadius:'10px',padding:'3px'}} src="https://e7.pngegg.com/pngimages/267/100/png-clipart-sharepoint-for-project-management-others-miscellaneous-logo.png" alt=""/>Manage Product</Button>
                       </List>
                 </Link>
              </Box>
              
              }
            
            </ul>
            
          
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3,width: { sm: `calc(5% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>



           <Switch>
                        <Route exact path={path}>
                        <MyOrders></MyOrders>
                        </Route>

                        {/* Customer DashBoard Route Area */}
                     
                        <Route path={`${path}/pay`}>
                          <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myOrder`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>

                          {/* Admin DashBoard Route Area */}

                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageOrder`}>
                          <ManageOrder></ManageOrder>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                       

                  </Switch>
        </Typography>
        
      </Box>
    </Container>
  );
}

DashBoard.propTypes = {

  window: PropTypes.func,
};

export default DashBoard;
