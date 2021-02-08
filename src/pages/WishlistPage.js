import React, {useEffect} from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { StyScrollBar, StyGlobalHeader } from '../components/GlobalStyles';
import allActions from '../actions/index';
import { getFromLS } from '../util';
import BookListingSummary from '../components/BookListingSummary';

const WishlistPage = ({locationChanged,variants}) => {
    const dispatch = useDispatch();
    const navDisplay = useSelector(store => store.navToggle);
    const wishlist = useSelector(store => store.wishlist);

    //load all the books
    useEffect(() => {
        const books = getFromLS('books'); 
        if(!books)
          dispatch(allActions.loadBooks());
    },[dispatch]);


    return(
        <StyledWrapper
        initial={navDisplay.display ? (!locationChanged ? "open0" : ''): "close0"}
        animate={navDisplay.display ? (!locationChanged ? "open" : '') : "close" }
        transition={{ type:"tween",duration: 0.5 }}
        variants = {variants}
        >
            < WishlistHeader>
                <h1>Wishlist</h1>
            </ WishlistHeader>
           {wishlist.length ? wishlist.map(book => 
           <BookListingSummary key={book.id} book={book} targetList="wishlist">
            </BookListingSummary>) 
            : <StyEmptyWish>Your wishlist is currently empty.</StyEmptyWish>}
        </StyledWrapper>
    );
}

const WishlistHeader = styled(StyGlobalHeader)`
    @media (max-width: 715px){
        height: 8vh;
        h1{
        margin: 0 2rem;
        }
    }
`


const StyEmptyWish = styled.div`
    margin: 2rem;
    font-size: 1rem;
    color: #2B2D30;
    border-left: 4px solid #2B2D30;
    font-style: italic;
    padding-left: 1rem;
`


const StyledWrapper = motion.custom(styled(StyScrollBar)`
    width: 100%;
    min-height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;

`)

export default WishlistPage;