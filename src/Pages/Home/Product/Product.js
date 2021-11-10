import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Product = ({product}) => {
    const {title,description,price,image}=product;
    return (
        
        <Grid container  item xs={12} sm={6} md={4}>
         
        <Card   style={{maxHeight:"450px",maxWidth:"320px",margin:"auto",marginBottom:'10px'}}>
      <CardActionArea>
        <CardMedia style={{maxWidth:"320px"}}>
          <img style={{width:'100%',maxHeight:'200px'}} src={image} alt="green iguana"/>
          
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body4" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          BUY NOW
        </Button>
      </CardActions>
    </Card>

         
         </Grid>
       
    );
};

export default Product;