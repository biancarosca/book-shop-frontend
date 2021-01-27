import React from 'react';
import styled from 'styled-components';

const Book = ({language,title,image,authors}) => {
  
    return(
        <>
            {language === 'en' &&
            <StyledContainer>
                <StyledImg src={image} alt={title}></StyledImg>
                <StyledTitle>{title.length > 20 ? `${title.slice(0,20)}...` : title}</StyledTitle>
                {authors && (authors.length > 1 ? <StyledAuthor>{authors[0]}...</StyledAuthor> : <StyledAuthor>{authors[0]}</StyledAuthor> )}
                <div>reviews</div>
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
    width: 15vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 auto;
    /* padding: 1rem; */

`

const StyledTitle = styled.h3`
    font-size: 0.9rem;
    color: #2B2D30;
`

const StyledImg = styled.img`
    height: 300px;
    width: 70%;

    object-fit: cover;
`

export default Book;