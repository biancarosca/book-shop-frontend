import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector} from 'react-redux';
import allActions from '../actions/index';
import RatingComponent from './RatingComponent';

const Book = ({language,title,image,authors,id}) => {
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


    return(
        <>
            {language === 'en' &&
            <StyledContainer id={id} onClick = {openBookDetail}>
                <StyledImg id={id} src={image} alt={title}></StyledImg>
                <StyledTitle id={id}>{title.length > 20 ? `${title.slice(0,20)}...` : title}</StyledTitle>
                {authors && (authors.length > 1 ? <StyledAuthor id={id} >{authors[0]}...</StyledAuthor> : <StyledAuthor id={id}>{authors[0]}</StyledAuthor> )}
                <RatingComponent id={id} />
            </StyledContainer>
            }   
        </>
    );
}

const StyledAuthor = styled.h4`
    font-size: 0.7rem;
    color: #2B2D30;
`

const StyledContainer = styled.div`
    margin: 1rem;
    width: 250px;
    display:flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 auto;
    cursor: pointer;
`

const StyledTitle = styled.h3`
    font-size: 0.9rem;
    color: #2B2D30;
`

const StyledImg = styled.img`
    height: 400px;
    width: 250px;

`

export default Book;