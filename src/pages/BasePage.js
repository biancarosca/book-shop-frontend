import React from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import BrowsePage from './BrowsePage';
import WishlistPage from './WishlistPage';
import ShoppingCartPage from './ShoppingCartPage';
import HistoryPage from './HistoryPage';
import styled from 'styled-components';


const BasePage = ({page}) => {
    const variants = {
        close0:{
            x:"0%",
            display: "block"
        },
        close:{
            x: "-15%",
        },
        open0:{
            x:"-15%",
        },
        open: {
         x: "0%",
        display:"block",
        },
      }


    return(
        <>
            <Header />
            <StyledWrapper>
                <SideNav />
                {(page === 'browse') && <BrowsePage variants={variants}/>}
                {(page === 'wishlist') && <WishlistPage variants={variants}/>}
                {(page === 'cart') && <ShoppingCartPage variants={variants}/>}
                {(page === 'history') && <HistoryPage variants={variants}/>}
            </StyledWrapper>
            <Footer />
        </>
    );
}

const StyledWrapper = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
`


export default BasePage;