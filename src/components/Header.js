import React from 'react';
import styled from 'styled-components';

const Header = () => { 
    return (
        <StyledHeader>
            <h3>Book shop</h3>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    width: 100%;
    min-height: 5vh;
    background-color: #2B2D30;
    color: #A1A6AA;
    display: flex;
    align-items:center;
    justify-content: center;
    h3{
        font-size: 0.8rem;
    }
`

export default Header;