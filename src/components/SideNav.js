import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faStar, faShoppingCart, faHistory} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return(
        <StyledNav>
            <ul>
                <StyledLink to="/">
                    <li>
                        <span><StyledIcon icon={faGlobeEurope}/></span>
                        <p>Browse</p>
                    </li>
                </StyledLink>
                <StyledLink to="/wishlist">
                    <li>
                        <span><StyledIcon icon={faStar}/></span>
                        <p>Wishlist</p>
                    </li>
                </StyledLink>
                <StyledLink to="/cart">
                    <li>
                        <span><StyledIcon icon={faShoppingCart}/></span>
                        <p>Cart</p>
                    </li>
                </StyledLink>
                <StyledLink to="/history">
                    <li>
                        <span><StyledIcon icon={faHistory}/></span>
                        <p>History</p>
                    </li>
                </StyledLink>

            </ul>
        </StyledNav>
    );
}

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 100%;
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: #6D7277;
    font-size: 1.2rem;
`

const StyledNav = styled.nav`
    width: 15vw;
    min-height: 90vh;
    background-color:#2B2D30;
    border-top : 3px solid #212523;
    border-bottom : 3px solid #212523;
    @media (max-width:950px){
        width: 20vw;
    }

    @media (max-width:750px){
        width: 25vw;
    }

    @media (max-width:650px){
        width: 30vw;
    }

    @media (max-width:540px){
        width: 60px;
    }
    ul{
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style-type: none;


        span{
            position:relative;
            left: 1.5rem;
            @media (max-width:540px){
                left:1rem;
                }
        }
    }
    li{
        
        width: 100%;
        padding: 0.8rem 0;
        color: #A1A6AA;
        display: flex;
        align-items: center;
        @media (max-width:540px){
                text-align:center;
                }
        &:hover{
            background-color:#34373A;
            cursor: pointer;
        }
        p{
            font-size: 1rem;
            position: relative;
            left: 2rem;

            @media (max-width:540px){
                font-size:0;
                }
        }

    }
    
`

export default SideNav;