import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import RatingComponent from '../components/RatingComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { StyScrollBar, StyGlobalHeader } from '../components/GlobalStyles';
import { StyBtn } from '../components/GlobalStyles';
import allActions from '../actions/index';
import {saveToLS,getFromLS} from '../util';


const WishlistPage = ({locationChanged,variants}) => {
    const dispatch = useDispatch();
    const navDisplay = useSelector(store => store.navToggle);
    const wishlist = useSelector(store => store.wishlist);
    const allCategoriesObj = useSelector(store =>  store.booksReducer );
    
    const openBookDetail = (event) => {
        const arrayOfCategories = [...Object.values(allCategoriesObj)];
        let arrayOfBooks=[];
        arrayOfCategories.forEach(array => {
            arrayOfBooks.push(...array.items);
        })
    const bookIdx = arrayOfBooks.findIndex(book => book.id === event.target.id);
    dispatch(allActions.bookActive(arrayOfBooks[bookIdx]));
    }

    const removeBook = (event) => {
        let currentWishlist = getFromLS('wishlist');
        let bookIdx;
    
        currentWishlist.forEach((wishlisted,idx) => {
            if(wishlisted.id === event.target.id)
                bookIdx = idx;
        });

        //remove from state
        dispatch(allActions.removeFromWishlist(bookIdx));
        
        //remove from local storage
        currentWishlist.splice(bookIdx,1);
        saveToLS('wishlist',currentWishlist);
    }

    return(
        <StyledWrapper
        initial={navDisplay.display ? (!locationChanged ? "open0" : ''): "close0"}
        animate={navDisplay.display ? (!locationChanged ? "open" : '') : "close" }
        transition={{ type:"tween",duration: 0.5 }}
        variants = {variants}
        >
            <StyGlobalHeader>
                <h1>Wishlist</h1>
            </StyGlobalHeader>
           {wishlist.length ? wishlist.map(book => 
           <StyContent key={book.id}>
               <StyImage src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
               <div className="details-container">
                   <div className="book-container">
                        <div className="book-details">
                            <h1>{book.volumeInfo.title}</h1>
                            {book.volumeInfo && book.volumeInfo.authors.map((author,idx) => <h3 key={idx}>{author}</h3>)}
                            <RatingComponent id={book.id} />
                        </div>
                        <div className="close-icon" id={book.id} onClick={removeBook}>
                            <FontAwesomeIcon style={{pointerEvents: 'none'}}icon={faTimes} />
                        </div>
                   </div>
                   <div className="btns-container">
                       <DetailsBtn id={book.id } onClick={openBookDetail}>View details</DetailsBtn>
                       <StyBtn>Add to cart</StyBtn>
                   </div>
               </div>
           </StyContent>): <StyEmptyWish>Your wishlist is currently empty.</StyEmptyWish>}
        </StyledWrapper>
    );
}

const StyEmptyWish = styled.div`
    margin: 2rem;
    font-size: 1rem;
    color: #2B2D30;
    border-left: 4px solid #2B2D30;
    font-style: italic;
    padding-left: 1rem;
`

const DetailsBtn = styled(StyBtn)`
    margin-right:2rem;
    outline: none;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        border-color: #2B2D30;
    }
`

const StyContent = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    margin: 2rem;

    .details-container{
        margin: 0 2rem;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    .book-container{
        display: flex;
        width: 100%;
        height: fit-content;
        justify-content: space-between;
    }

    .book-details{
        h1{
            font-size: 1.3rem;
            color: #2B2D30;
        }
        h3{
            font-size: 0.9rem;
            font-style: italic;
            font-weight: lighter;
        }
    }

    .close-icon{
        margin-right: 2rem;
        height: fit-content;
        color: #2B2D30;
        cursor: pointer;
        &:hover{
            color:#18D47C;
        }
    }
`

const StyImage = styled.img`
    width: 150px;
    height: 230px;
`

const StyledWrapper = motion.custom(styled(StyScrollBar)`
    width: 100%;
    min-height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;
`)

export default WishlistPage;