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
import { useDispatch,useSelector } from 'react-redux';
import allActions from '../actions/index';
import BookDetail from '../components/BookDetail';


const BasePage = ({page}) => {
    const dispatch = useDispatch();
    const activeBook = useSelector(store => store.activeBook);
    const location = useLocation();
    const changed = useRef(true);

    useEffect(() => {
        changed.current = true;
    },[location])

    const toggleBackdrop = () => {
        dispatch(allActions.bookActive(''));
        dispatch(allActions.bookEdition('paperback'));      //restore state to default after closing the modal
    }
    const variants = {
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
            <StyledBackdrop style={Object.keys(activeBook).length ? {display:'flex'} : {display:'none'}} onClick= {toggleBackdrop}>
                <StyledWhiteBox></StyledWhiteBox>
            </StyledBackdrop>

            <BookContainer style={Object.keys(activeBook).length ? {display:'flex'} : {display:'none'}}>
                <StyContainer><BookDetail book={activeBook}/></StyContainer>
            </BookContainer>
            

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

const StyContainer = styled.div`

    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: #18D47C #2B2D30;
    scrollbar-width: thin;
    ::-webkit-scrollbar {
        width: 10px;
        z-index: 1;
    }

    ::-webkit-scrollbar-track {
        background: #2B2D30;
        z-index :1;
        }
    ::-webkit-scrollbar-thumb {
        background: #18D47C; 
        z-index:1;

    }
    ::-webkit-scrollbar-thumb:hover {
        background:#16b769; 
    }
`

const StyledBackdrop = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    left:0;
    top:0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BookContainer = styled.div`
    width: 60vw;
    height: 60vh;
    background-color: white;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin: auto;
    z-index:2;

    @media (max-width:650px){
        width: 80vw;
    }

    @media (max-width:390px){
        width: 90vw;
    }
`

const StyledWhiteBox = styled(BookContainer)`
    z-index: 1;
    overflow: hidden;
    height: 60vh;
`

const StyledWrapper = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
`


export default BasePage;