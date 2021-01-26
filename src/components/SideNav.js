import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faStar, faShoppingCart, faHistory} from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
    return(
        <StyledNav>
            <ul>
                <li>
                    <span><StyledIcon icon={faGlobeEurope}/></span>
                    <p>Browse</p>
                </li>
                <li>
                    <span><StyledIcon icon={faStar}/></span>
                    <p>Wishlist</p>
                </li>
                <li>
                    <span><StyledIcon icon={faShoppingCart}/></span>
                    <p>Cart</p>
                </li>
                <li>
                    <span><StyledIcon icon={faHistory}/></span>
                    <p>History</p>
                </li>

            </ul>
        </StyledNav>
    );
}

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
    ul{
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style-type: none;

        span{
            position:relative;
            left: 1rem;
        }
    }
    li{
        
        width: 80%;
        padding: 0.8rem 0; 
        color: #A1A6AA;
        display: flex;
        align-items: center;
        &:hover{
            background-color:#34373A;
            border-radius: 2rem;
            cursor: pointer;
        }
        p{
            font-size: 1rem;
            position: relative;
            left: 1.5rem;
        }

    }
    
`

export default SideNav;