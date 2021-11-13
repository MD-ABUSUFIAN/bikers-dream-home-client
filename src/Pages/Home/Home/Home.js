import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Banner from '../Banner/Banner';
import CurrentOffer from '../CurrentOffer/CurrentOffer';
import HomeProduct from '../HomeProduct/HomeProduct';
import Navigation from '../Navigation/Navigation';
import CustomerReview from '../Reviews/CustomerReview';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <Box container style={{backgroundColor:'#000205'}}>
            <Navigation></Navigation>
            <Banner></Banner>
            <marquee><Typography sx={{color:'white',fontWeight:'900',my:4}} variant="h1">WELCOME BIKERS DREAM HOME</Typography> </marquee>
            <HomeProduct></HomeProduct>
            <CurrentOffer></CurrentOffer>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
           
        </Box>
    );
};

export default Home;