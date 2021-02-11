import React from 'react';
import styled from 'styled-components';
import RatingComponent from '../components/RatingComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import allActions from '../actions/index';
import { saveToLS,getFromLS,getPrice,cutDecimals } from '../util';
import { StyBtn } from '../components/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';

const BookListingSummary = ({book,children,targetList=''}) =>{
    const dispatch = useDispatch();
    const allCategoriesObj = useSelector(store =>  store.booksReducer );

    const openBookDetail = (event) => {
        const arrayOfCategories = [...Object.values(allCategoriesObj)];
        let arrayOfBooks=[];

        arrayOfCategories.forEach(array => {
            arrayOfBooks.push(...array.items);
        })
        const bookIdx = arrayOfBooks.findIndex(book => book.id === event.target.id);
        dispatch(allActions.bookActive(arrayOfBooks[bookIdx]));
    }

    const removeBook = (event,targetList) => {
        let currentArr = getFromLS(targetList);
        let bookIdx;
    
        currentArr.forEach((current,idx) => {
            if(current.id === event.target.id){
                if(targetList === 'cart') {
                    if(current.cart.edition === book.cart.edition){
                         bookIdx = idx;
                    }
                 }
                 else bookIdx = idx;
            }
        });

        //remove from state
        if(targetList === 'wishlist')
            dispatch(allActions.removeFromWishlist(bookIdx));
        else{
            dispatch(allActions.removeFromCart(bookIdx));
            let price = -getPrice(currentArr[bookIdx],currentArr[bookIdx].cart.amount);
            let currTotal = getFromLS("totalPrice");
            //update total price in state
            dispatch(allActions.updateTotal(price));
            //update total price in local storage
            saveToLS("totalPrice",cutDecimals(currTotal + price));
        }
        
        //remove from local storage
        currentArr.splice(bookIdx,1);
        saveToLS(targetList,currentArr);
    }


    return(
        <StyContent key={book.id}>
               <StyImage src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
               <div className="details-container">
                   <div className="book-container">
                        <div className="book-details">
                            <h1>{book.volumeInfo.title}</h1>
                            {book.volumeInfo && book.volumeInfo.authors.map((author,idx) => <h3 key={idx}>{author}</h3>)}
                            <RatingComponent id={book.id} rating={book.saleInfo.rating} />
                            {React.Children.toArray(children)[0]}
                            {React.Children.toArray(children)[1]}
                        </div>
                        <div className="close-icon" id={book.id} onClick={(event) => removeBook(event,targetList)}>
                            <FontAwesomeIcon style={{pointerEvents: 'none'}}icon={faTimes} />
                        </div>
                   </div>
                   <div className="btns-container">
                       <DetailsBtn id={book.id } onClick={openBookDetail}>View details</DetailsBtn>
                       {React.Children.toArray(children)[2]}
                   </div>
               </div>
           </StyContent>
    );
}

const StyImage = styled.img`
    width: 150px;
    height: 230px;
    @media (max-width: 550px){
        width: 110px;
        height: 180px;
    }
    @media (max-width: 350px){
        width: 80px;
        height: 130px;
    }
`


const DetailsBtn = styled(StyBtn)`
    margin-right:2rem;
    transition: 0.3s;
    width: 180px;

    &:hover {
        border-color: #2B2D30;
    }
    @media (max-width: 550px){
        font-size: smaller;
        margin-right: 0.5rem;
        width: 150px;
        margin-top: 0;
    }
    @media (max-width: 350px){
        margin-top: 0.8rem;
    }
`

const StyContent = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    margin: 2rem;

    .btns-container{
       
        @media (max-width:700px){
            .amount-control{
                display:flex;
                width: fit-content;
                margin: 0.5rem;
                span{
                    text-align: center;
                    width: 30px;
                }
            }
        }
    }

    .details-container{
        margin: 0 2rem;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 550px){
            margin: 0 0.4rem;
        }
    }

    .book-container{
        display: flex;
        width: 100%;
        height: fit-content;
        justify-content: space-between;
    }

    .book-details{
        z-index: -1;
        h1{
            font-size: 1.3rem;
            color: #2B2D30;
            
            @media (max-width: 350px){
                font-size: smaller;
            }
        }
        h3{
            font-size: 0.9rem;
            font-style: italic;
            font-weight: lighter;
            
            @media (max-width: 350px){
                font-size: smaller;
            }
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
        @media (max-width: 550px){
                margin-right: 0.5rem;
            }
    }
    @media (max-width: 550px){
        margin: 0.3rem;
    }
`

export default BookListingSummary;