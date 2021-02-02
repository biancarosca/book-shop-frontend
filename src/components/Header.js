import React from 'react';
import styled from 'styled-components';
import { faBars,faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';

const Header = () => {
    const dispatch = useDispatch();
    const navState = useSelector(store => store.navToggle);
    

    const toggleSideNav = () =>{
        dispatch(allActions.toggleSideNav());
    }
    
    return (
        <StyledHeader>
            <StyledIconWrapper onClick={toggleSideNav}><StyledIcon icon={navState.display ? faAngleLeft : faBars} ></StyledIcon></StyledIconWrapper>
            <StyledContainer>
                <h3>Book shop</h3>
            </StyledContainer>
        </StyledHeader>
    );
}

const StyledIconWrapper = styled.span`
    width: 30px;
    height: 30px;
    margin-left: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledContainer = styled.div`
    width:100vw;
    display:flex;
    justify-content:center;
    position: absolute;
`

const StyledHeader = styled.div`
    width: 100vw;
    min-height: 5vh;
    background-color: #2B2D30;
    color: #A1A6AA;
    display: flex;
    align-items:center;
    justify-content: flex-start;
    h3{
        font-size: 0.8rem;
    }
`
const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 1.2rem;
    z-index:1;

`

export default Header;