import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { StyGlobalHeader } from '../components/GlobalStyles';

const ShoppingCartPage = ({locationChanged,variants}) => {
    const navDisplay = useSelector(store => store.navToggle);
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
        </StyledWrapper>
    );
}

const CartHeader = styled(StyGlobalHeader)`
    @media (max-width: 715px){
        height: 8vh;
        h1{
        margin: 0 2rem;
        }
    }
`

const StyledWrapper = styled(motion.div)`
    width: 100%;
    min-height: 90vh;
`


export default ShoppingCartPage;