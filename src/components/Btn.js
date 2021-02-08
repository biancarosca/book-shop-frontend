import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyBtn } from './GlobalStyles';
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
import {saveToLS,getFromLS} from '../util';

const Btn = ({type,book,origin=''}) => {
    const dispatch = useDispatch();
    const wishlistedBooks = useSelector(store => store.wishlist);
    const cart = useSelector(store => store.shoppingCart);
    const activeEdition = useSelector(store => store.activeEdition);

    //add/remove from wishlist/cart
    const toggleItem = (key) => {
        let currentArr = getFromLS(key);
        if (!currentArr)
            currentArr = [];

        let bookIdx = -1;
       
        currentArr.forEach((current,idx) => {
            if(current.id === book.id){
                if(key === 'cart') {
                   if(current.cart.edition === Object.keys(activeEdition)[0]){
                        bookIdx = idx;
                   }
                }
                else bookIdx = idx;
            }
        });

        if(bookIdx === -1){
            if(key === 'wishlist')
                dispatch(allActions.wishlistBook(book));
            else{
                book.cart = {};
                book.cart.amount = 0;
                book.cart = {edition: Object.keys(activeEdition)[0], amount: book.cart.amount + 1};
                dispatch(allActions.addToCart(book));
            }
            currentArr.push(book);
        }
        else{
            currentArr.splice(bookIdx,1);
            if(key === 'wishlist')
                dispatch(allActions.removeFromWishlist(bookIdx));
            else
                dispatch(allActions.removeFromCart(bookIdx));
        }
       
        saveToLS(key,currentArr);
    }


    return(
        <>
        {type === "cart" ? <ATCbtn style={origin === 'detail' ? {marginTop: '2rem', fontSize: '1rem', width: '180px'} : {}} 
                onClick={() => toggleItem('cart')}>{cart.filter(item => item.id === book.id && Object.keys(activeEdition)[0] === item.cart.edition).length ? 'Remove' : 'Add To Cart'}</ATCbtn> : 
        <StyHeart 
            icon={wishlistedBooks.filter(wishlisted => wishlisted.id === book.id).length === 0 ? 
            faHeart : solidHeart} 
            onClick={() => toggleItem('wishlist')}/> }
        </>
    );
}

const ATCbtn = styled(StyBtn)`
    width: 180px;
    @media (max-width: 750px){
        margin-top: 0.5rem;
    }

    @media (max-width: 550px){
        font-size: smaller;
        margin-right: 0.5rem;
        width: 150px;
    }
    
`

const StyHeart = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    color: #EC1F26;
    margin-left: 1rem;
    &:hover {
    transform: scale(1.2);
    transition: all 0.5s ease-in-out;
    }
`

export default Btn;