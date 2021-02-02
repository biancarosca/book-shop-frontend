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

    return(
        <>
            <Header />
            <StyledWrapper>
                <SideNav />
                {(page === 'browse') && <BrowsePage />}
                {(page === 'wishlist') && <WishlistPage />}
                {(page === 'cart') && <ShoppingCartPage />}
                {(page === 'history') && <HistoryPage />}
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