import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import BrowsePage from './BrowsePage';
import WishlistPage from './WishlistPage';
import ShoppingCartPage from './ShoppingCartPage';
import HistoryPage from './HistoryPage';
import styled from 'styled-components';
import { useLocation} from 'react-router-dom'; 


const BasePage = ({page}) => {
    const location = useLocation();
    const changed = useRef(true);

    useEffect(() => {
        changed.current = true;
    },[location])


    const variants = {
        // close0:{
        //     // x:"0%",
        //     display: "block"
        // },
        // close:{
        //     // x: "-15%",
        //     // position: 'absolute'
        // },
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
                {(page === 'browse') && <BrowsePage locationChanged = {changed.current} variants={variants}/>}
                {(page === 'wishlist') && <WishlistPage locationChanged = {changed.current} variants={variants}/>}
                {(page === 'cart') && <ShoppingCartPage locationChanged = {changed.current} variants={variants}/>}
                {(page === 'history') && <HistoryPage locationChanged = {changed.current} variants={variants}/>}
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