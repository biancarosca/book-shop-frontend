import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { StyGlobalHeader, StyScrollBar } from '../components/GlobalStyles';
import BookListingSummary from '../components/BookListingSummary';
import { getPrice } from '../util';
import allActions from '../actions/index';
import { saveToLS,getFromLS, cutDecimals } from '../util';

const ShoppingCartPage = ({locationChanged,variants}) => {
    const dispatch = useDispatch();
    const navDisplay = useSelector(store => store.navToggle);
    const cart = useSelector(store => store.shoppingCart);
    const totalPrice = useSelector(store => store.totalAmount);

    const updateAmount = (event,edition,increment) => {
        let currentArr = getFromLS("cart");

        let bookIdx;
    
        currentArr.forEach((current,idx) => {
            if(current.id === event.target.id && current.cart.edition === edition)
                         bookIdx = idx;
        });
        let currAmount = currentArr[bookIdx].cart.amount;

        let price = parseFloat(getPrice(currentArr[bookIdx],1));
        if(increment === -1)
            price *= -1;

        let currTotal = getFromLS("totalPrice");
        if(!currTotal)
            currTotal = 0;

        if((increment === -1 && currAmount > 1) || increment === 1){
            //state
            dispatch(allActions.updateCart(bookIdx,increment));
            dispatch(allActions.updateTotal(price));

            //update local storage
            currentArr[bookIdx].cart.amount += increment;
            saveToLS("cart",currentArr);
            saveToLS("totalPrice",cutDecimals(currTotal + price));
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
            <div className="total">
                <h2 style={totalPrice > 0 ? {borderColor: '#18D47C'} : {}}>Total: {cutDecimals(totalPrice)} $</h2>
            </div>
            {cart.length ? cart.map(book => 
           <BookListingSummary key={book.id + book.cart.edition} book={book} targetList="cart">
               <p className="edition">Edition: <span>{book.cart.edition.charAt(0).toUpperCase() + book.cart.edition.slice(1)}</span></p>
               <p className="price">{ getPrice(book,book.cart.amount)} $</p>
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

    .total{
        width: 100%;
        height: fit-content;
        display:flex;
        align-items: center;
        margin: 1rem 2rem;
        h2{
            color:#2B2D30;
            border-left: 4px solid #2B2D30;
            padding-left: 1rem;
        }
    }

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