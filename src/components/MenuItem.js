import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faHeart, faShoppingCart, faHistory} from '@fortawesome/free-solid-svg-icons';

const MenuItem = ({page}) => {
    const dispatch = useDispatch();
    const navState = useSelector(store => store.navItemsState);
    let iconName;
    switch(page){
        case 'browse':
            iconName = faGlobeEurope;
            break;
        case 'wishlist':
            iconName = faHeart;
            break;
        case 'cart':
            iconName = faShoppingCart;
            break;
        case 'history':
            iconName = faHistory;
            break;
        default:
            iconName = '';
    }
    return(
    <StyledLink to={page === 'browse' ? '/' : `/${page}`} onClick={() => {dispatch(allActions.toggleActiveState(page))}}>
        <li className={ navState[page] ? "active": ""}>
            <span>
                <StyledIcon 
                    style={ navState[page] ? {color: "#18D47C" }: {}} 
                    icon={iconName}/>
            </span>
            <p>{page.charAt(0).toUpperCase() + page.slice(1)}</p>
        </li>
    </StyledLink>
    );
}

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 100%;
    
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: #6D7277;
    font-size: 1.2rem;

    @media (max-width:350px){
        font-size: 1rem;
    }
    @media (max-width:325px){
        font-size: 0.8rem;
    }
`

export default MenuItem;