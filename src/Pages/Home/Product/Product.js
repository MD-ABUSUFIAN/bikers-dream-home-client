import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {title,description,price,image,_id}=product;
    return (
        
      <Grid container  item xs={12} sm={6} md={4}>
         
      <Card   style={{height:"450px",width:"300px",margin:"auto",marginBottom:'10px'}}>
    <CardActionArea>
      <CardMedia style={{width:"300px"}}>
        <img style={{width:'100%',hight:'200px'}} src={image} alt="green iguana"/>
        
        </CardMedia>
      <CardContent>
        <Typography style={{textAlign:'center',fontWeight:'900'}} gutterBottom variant="h5">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
             {description.slice(1-120)}
           </Typography>
        
        <Typography style={{textAlign:'center',fontWeight:'700',color:'tomato'}}  variant="h5" color="text.secondary">
         Price: ${price}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
     <Link to={`/productsInfo/${_id}`}>
     
     <Button  sx={{fontWeight: 'bold',width:'100%'}} variant="contained" size="large" color="primary">
     
        BUY NOW
      </Button>
     </Link>

     
    </CardActions>
  </Card>

       
       </Grid>
       
    );
};

export default Product;