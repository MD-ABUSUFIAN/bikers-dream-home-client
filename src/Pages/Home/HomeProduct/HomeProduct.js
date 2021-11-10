import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Product from '../Product/Product';

const products=[
    {
        id:1,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/home/desktop-motorcycle-home-111720-st-inset.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
    {
        id:2,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/Category_Pages/Motorcycle_Home/image-motorcycle-home-adventure-link-2020b.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
    {
        id:3,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/home/2022/desktop-motorcycle-home-dirt-cc-link-070122.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
    {
        id:4,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/home/2022/desktop-motorcycle-home-dirt-dual-link-070122.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
    {
        id:5,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/home/2022/desktop-motorcycle-home-dirt-dual-link-070122.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
    {
        id:6,
        title:"GIXER",
        image:"https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/home/2022/desktop-motorcycle-home-dirt-dual-link-070122.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore commodi possimus vitae. Dolorum perferendis minima deleniti voluptates autem corporis!",
        price:3000
    },
]


const HomeProduct = () => {

    
    return (
        <Box  sx={{ width: '100%',my:5 }}>
      <Grid container  rowSpacing={5} spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, sm: 5, md: 12 }}>
        
       {
           products.map(product=><Product key={product.id} product={product}></Product>)
       }
      </Grid>
    </Box>
    );
};

export default HomeProduct;