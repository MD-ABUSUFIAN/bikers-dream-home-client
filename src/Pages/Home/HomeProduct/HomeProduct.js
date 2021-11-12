import React, { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Product from '../Product/Product';


const HomeProduct = () => {

    const [products,setProducts]=useState();
    useEffect(()=>{
        fetch('https://protected-lowlands-98831.herokuapp.com/limitProduct')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
console.log(products)
    
    return (
        <Box  sx={{ width: '100%',my:5 }}>
      <Grid container  rowSpacing={5} spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, sm: 5, md: 12 }}>
        
       {
           products?.map(product=><Product key={product?._id} product={product}></Product>)
       }
      </Grid>
    </Box>
    );
};

export default HomeProduct;