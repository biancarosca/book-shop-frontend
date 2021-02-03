import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';

const WishlistPage = ({locationChanged,variants}) => {
    const navDisplay = useSelector(store => store.navToggle);
    return(
        <StyledWrapper
        initial={navDisplay.display ? (!locationChanged ? "open0" : ''): "close0"}
        animate={navDisplay.display ? (!locationChanged ? "open" : '') : "close" }
        transition={{ type:"tween",duration: 0.5 }}
        variants = {variants}
        >
            Wishlist
        </StyledWrapper>
    );
}

const StyledWrapper = styled(motion.div)`
    width: 100%;
    min-height: 90vh;
`

export default WishlistPage;