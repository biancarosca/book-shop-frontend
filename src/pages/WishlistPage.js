import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import RatingComponent from '../components/RatingComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { StyScrollBar, StyGlobalHeader } from '../components/GlobalStyles';
import { StyBtn } from '../components/GlobalStyles';


const WishlistPage = ({locationChanged,variants}) => {
    const navDisplay = useSelector(store => store.navToggle);
    const wishlist = useSelector(store => store.wishlist);
    return(
        <StyledWrapper
        initial={navDisplay.display ? (!locationChanged ? "open0" : ''): "close0"}
        animate={navDisplay.display ? (!locationChanged ? "open" : '') : "close" }
        transition={{ type:"tween",duration: 0.5 }}
        variants = {variants}
        >
            <StyGlobalHeader>
                <h1>Wishlist</h1>
            </StyGlobalHeader>
           {wishlist.map(book => 
           <StyContent key={book.id}>
               <StyImage src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
               <div className="details-container">
                   <div className="book-container">
                        <div className="book-details">
                            <h1>{book.volumeInfo.title}</h1>
                            {book.volumeInfo && book.volumeInfo.authors.map((author,idx) => <h3 key={idx}>{author}</h3>)}
                            <RatingComponent id={book.id} />
                        </div>
                        <div className="close-icon">
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                   </div>
                   <div className="btns-container">
                       <DetailsBtn>View details</DetailsBtn>
                       <StyBtn>Add to cart</StyBtn>
                   </div>
               </div>
           </StyContent>)}
        </StyledWrapper>
    );
}

const DetailsBtn = styled(StyBtn)`
    margin-right:2rem;
`

const StyContent = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    margin: 2rem;

    .details-container{
        margin: 0 2rem;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    .book-container{
        display: flex;
        width: 100%;
        height: fit-content;
        justify-content: space-between;
    }

    .book-details{
        h1{
            font-size: 1.3rem;
            color: #2B2D30;
        }
        h3{
            font-size: 0.9rem;
            font-style: italic;
            font-weight: lighter;
        }
    }

    .close-icon{
        margin-right: 2rem;
        height: fit-content;
        color: #2B2D30;
        cursor: pointer;
        &:hover{
            color:#18D47C;
        }
    }
`

const StyImage = styled.img`
    width: 150px;
    height: 230px;
`

const StyledWrapper = motion.custom(styled(StyScrollBar)`
    width: 100%;
    min-height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;
`)

export default WishlistPage;