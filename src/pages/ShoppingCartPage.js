import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { StyGlobalHeader, StyScrollBar } from '../components/GlobalStyles';
import BookListingSummary from '../components/BookListingSummary';

const ShoppingCartPage = ({locationChanged,variants}) => {
    const navDisplay = useSelector(store => store.navToggle);
    const cart = useSelector(store => store.shoppingCart);

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
           <BookListingSummary key={book.id} book={book} targetList="cart">
               <button>add</button>
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

`)


export default ShoppingCartPage;