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




function App() {
  return (
    <Box >

      <ContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/allProduct">
            <AllProducts></AllProducts>
          </PrivateRoute>
          <Route exact path="/productInfo">
            <AllProducts></AllProducts>
          </Route>
          <Route  exact path="/login">
            <Login></Login>
          
          </Route>
          <Route  exact path="/register">
            <Register></Register>
          
          </Route>
          
        </Switch>

      </Router>

      </ContextProvider>
    
      
    </Box>
  );
}

export default App;
