import React, { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Product from '../Product/Product';


const HomeProduct = () => {

    const [products,setProducts]=useState();
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        setIsLoading(true);
        fetch('https://protected-lowlands-98831.herokuapp.com/limitProduct')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setIsLoading(false);
        })
    },[])

    
    return (
        <Box  sx={{ width: '100%',my:5 }}>
            {isLoading && <CircularProgress />}
      <Grid container  rowSpacing={5} spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, sm: 5, md: 12 }}>
        
       {
           products?.map(product=><Product key={product?._id} product={product}></Product>)
       }
      </Grid>
    </Box>
    );
};

export default HomeProduct;