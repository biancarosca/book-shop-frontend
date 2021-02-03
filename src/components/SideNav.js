import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faStar, faShoppingCart, faHistory} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
import { motion } from "framer-motion";


const SideNav = () => {
    const dispatch = useDispatch();
    const navState = useSelector(store => store.navItemsState);
    const navDisplay = useSelector(store => store.navToggle);
    const variants = {
        close0:{
            x:"0%",
            display: "block"
        },
        close:{
            x: "-100%",
            // transitionEnd: {
            //     display: "none",
            //   },
        },
        open0:{
            x:"-100%",
        },
        open: {
         x: "0%",
        display:"block"
        },
      }
    return(
        <StyledNav 
            initial={navDisplay.display ? "open0" : "close0"}
            animate={navDisplay.display ? "open" : "close" }
            transition={{ type:"tween",duration: 0.5 }}
            variants = {variants}
        >
            <ul>
                <StyledLink to="/" onClick={() => {dispatch(allActions.toggleActiveState('browse'))}}>
                    <li className={ navState['browse'] ? "active": ""}>
                        <span><StyledIcon style={ navState['browse'] ? {color: "#18D47C" }: {}} icon={faGlobeEurope}/></span>
                        <p>Browse</p>
                    </li>
                </StyledLink>
                <StyledLink to="/wishlist" onClick={() => {dispatch(allActions.toggleActiveState('wishlist'))}}>
                    <li className={ navState['wishlist'] ? "active": ""}>
                        <span><StyledIcon style={ navState['wishlist'] ? {color: "#18D47C" }: {}} icon={faStar}/></span>
                        <p>Wishlist</p>
                    </li>
                </StyledLink>
                <StyledLink to="/cart" onClick={() => {dispatch(allActions.toggleActiveState('cart'))}}>
                    <li className={ navState['cart'] ? "active": ""}>
                        <span><StyledIcon style={ navState['cart'] ? {color: "#18D47C" }: {}} icon={faShoppingCart}/></span>
                        <p>Cart</p>
                    </li>
                </StyledLink>
                <StyledLink to="/history" onClick={() => {dispatch(allActions.toggleActiveState('history'))}}>
                    <li className={ navState['history'] ? "active": ""}>
                        <span><StyledIcon style={ navState['history'] ? {color: "#18D47C" }: {}} icon={faHistory}/></span>
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

const StyledNav = styled(motion.nav)`
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
    .active{
            border-left: 5px solid #18D47C;
            color: #18D47C;
        }
    
`

export default SideNav;