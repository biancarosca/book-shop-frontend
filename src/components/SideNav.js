import React from 'react';
import styled from 'styled-components';
import {  useSelector } from 'react-redux';
import { motion } from "framer-motion";
import MenuItem from './MenuItem';



const SideNav = () => {
    const navDisplay = useSelector(store => store.navToggle);
    const variants = {
        close0:{
            display: "block",
            opacity: 1,
        },
        close:{
            width: 0,
            opacity: 0,
        
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
                <MenuItem page="browse" />
                <MenuItem page="wishlist" />
                <MenuItem page="cart" />
                <MenuItem page="history" />

            </ul>
        </StyledNav>
    );
}

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
            position:absolute;
            left: 1.5rem;
            width: 30px;
            display: flex;
            justify-content: center;
            @media (max-width:540px){
                left:1rem;
                }
            @media (max-width:350px){
                left:0.4rem;
            }
            @media (max-width:325px){
                left:0;
            }
        }
    }
    li{
        
        width: 100%;
        padding: 0.8rem 0;
        color: #A1A6AA;
        display: flex;
        align-items: center;
        height: 3rem;
        @media (max-width:540px){
            text-align:center;
        }
        @media (max-width:350px){
            height: 2rem;
        }
        &:hover{
            background-color:#34373A;
            cursor: pointer;
        }

        p{
            font-size: 1rem;
            position: absolute;
            left: 3.5rem;

            @media (max-width:540px){
                font-size:0;
                }
        }

    }
    .active{
            border-left: 5px solid #18D47C;
            color: #18D47C;
            @media (max-width:350px){
                border-left: 2px solid #18D47C;
            }
        }
    
`

export default SideNav;