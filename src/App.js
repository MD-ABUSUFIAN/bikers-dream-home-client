import { Box } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Box } from '@mui/system';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Home/Shared/Login/Register/Register';
import Login from './Pages/Home/Shared/Login/Login/Login';
import ContextProvider from './Context/ContextProvider';
import PrivateRoute from './Pages/Home/Shared/Login/PrivateRoute/PrivateRoute';
import Navigation from './Pages/Home/Navigation/Navigation';
import SingleInfoProducts from './Pages/Home/SingleInfoProduct/SingleInfoProducts';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';




function App() {
  return (
    <Box >

      <ContextProvider>
      <Router>
    
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/allProduct">
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute exact path="/productsInfo">
          <SingleInfoProducts></SingleInfoProducts>
          </PrivateRoute>
          <PrivateRoute path="/dashBoard">
          <DashBoard></DashBoard>
          </PrivateRoute>
          <Route  path="/login">
            <Login></Login>
          
          </Route>
          <Route path="/register">
            <Register></Register>
          
          </Route>
          
        </Switch>

      </Router>

      </ContextProvider>
    
      
    </Box>
  );
}

export default App;
