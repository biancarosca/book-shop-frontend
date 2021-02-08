import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { StyGlobalHeader, StyScrollBar } from '../components/GlobalStyles';
import BookListingSummary from '../components/BookListingSummary';
import { choosePrice } from '../util';
import allActions from '../actions/index';
import { saveToLS,getFromLS } from '../util';

const ShoppingCartPage = ({locationChanged,variants}) => {
    const dispatch = useDispatch();
    const navDisplay = useSelector(store => store.navToggle);
    const cart = useSelector(store => store.shoppingCart);

    const updateAmount = (event,edition,increment) => {
        let currentArr = getFromLS("cart");

        let bookIdx;
    
        currentArr.forEach((current,idx) => {
            if(current.id === event.target.id && current.cart.edition === edition)
                         bookIdx = idx;
        });
        let currAmount = currentArr[bookIdx].cart.amount;
        if((increment === -1 && currAmount > 1) || increment === 1){
            dispatch(allActions.updateCart(bookIdx,increment));
            //update local storage
            currentArr[bookIdx].cart.amount += increment;
            saveToLS("cart",currentArr);
        }
    }

    return(
        <StyledWrapper
        initial={navDisplay.display ? (!locationChanged ? "open0" : ''): "close0"}
        animate={navDisplay.display ? (!locationChanged ? "open" : '') : "close" }
        transition={{ type:"tween",duration: 0.5 }}
        variants = {variants}
        >
            <CartHeader>
                <h1>Shopping Cart</h1>
            </CartHeader>
            {cart.length ? cart.map(book => 
           <BookListingSummary key={book.id + book.cart.edition} book={book} targetList="cart">
               <p className="edition">Edition: <span>{book.cart.edition.charAt(0).toUpperCase() + book.cart.edition.slice(1)}</span></p>
               <p className="price">{ book.saleInfo && book.saleInfo.listPrice
                            ? (choosePrice(book.cart.edition,book.saleInfo.listPrice.amount)*book.cart.amount).toFixed(2)
                            : (choosePrice(book.cart.edition,8.99)*book.cart.amount).toFixed(2)} $</p>
                <span className="amount-control">
                    <button id={book.id} onClick={(event) => updateAmount(event,book.cart.edition,-1)}>-</button>
                    <span>{book.cart.amount}</span>
                    <button id ={book.id} onClick={(event) => updateAmount(event,book.cart.edition,1)}>+</button>
                </span>
            </BookListingSummary>) 
            : <StyEmptyCart>Your cart is currently empty.</StyEmptyCart>}
        </StyledWrapper>
    );
}

const StyEmptyCart = styled.div`
    margin: 2rem;
    font-size: 1rem;
    color: #2B2D30;
    border-left: 4px solid #2B2D30;
    font-style: italic;
    padding-left: 1rem;
`

const CartHeader = styled(StyGlobalHeader)`
    @media (max-width: 715px){
        height: 8vh;
        h1{
        margin: 0 2rem;
        }
    }
`

const StyledWrapper = motion.custom(styled(StyScrollBar)`
    width: 100%;
    min-height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;

    .edition{
        margin-top: 0.5rem;
        span{
            font-weight: bold;
        }
    }
    .price{
        font-size: 1.2rem;
        font-weight: bold;
    }

    .amount-control{
        span{
            width: 50px;
            margin: 0 1rem;
            font-weight: bold;
        }
        button{
            font-size: 1rem;
            outline: none;
            cursor: pointer;
            background-color: #18D47C;
            color: white;
            padding: 0.1rem 0.5rem;
            border: none;
            border-radius: 0.5rem;
            &:hover{
                background-color:#16b769;
            }
        }
    }
`)


export default ShoppingCartPage;