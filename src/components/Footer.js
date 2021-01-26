import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <StyledFooter>All rights reserved.</StyledFooter>
    );
}

const StyledFooter = styled.div`
    width: 100%;
    min-height: 5vh;
    position: absolute;
    bottom:0;
    left:0;
    background-color: #2B2D30;
    color: #A1A6AA;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
`

export default Footer;