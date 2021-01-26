import React from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import BrowseComponent from '../components/BrowseComponent';
import styled from 'styled-components';

const BrowsePage = () => {
    return(
        <>
            <Header />
            <StyledWrapper>
                <SideNav />
                <BrowseComponent />
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

export default BrowsePage;