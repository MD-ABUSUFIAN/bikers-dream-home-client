import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button,CardActions } from '@mui/material';
import { useForm } from "react-hook-form";

const SingleInfoProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        data.status="Panding";
        console.log(data);
    }
    return (
        <Box container  sx={{ flexGrow: 1 }}>
        <Grid style={{marginTop:"10%"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
         
            <Grid item xs={12} sm={12} md={6}>

            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
        
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
              
            </Grid>


            <Grid item xs={12} sm={12} md={6}>
                <Box >
                    <form style={{width: '100%',padding:'10px'}} onSubmit={handleSubmit(onSubmit)}>
                        <input style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px'}} {...register("email")} value='Customer Email' />
                        <input style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px'}} {...register("title")} value='Product Title' />
                        <textarea style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px'}}{...register("description")} value='Product Description' />
                        <input style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px'}}{...register("image")} value='Product Image URL' type="text"/>
                        <input style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px'}}type="number" {...register("price")} value='500'/>
                        <input style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px'}}type="number" {...register("phone")} placeholder="Enter Your Phone Number" />
                        <input style={{width: '70%',padding:'7px',marginLeft:"5%",marginBottom:'10px', color:"white",fontWeight:"700",backgroundColor:"#0065f2",border:0,padding:'10px'}} type="submit" value="Confirm Order" />
                    </form>
                </Box>
              
            </Grid>
         
        </Grid>
      </Box>
    );
};

export default SingleInfoProducts;