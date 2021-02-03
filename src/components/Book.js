import React from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch} from 'react-redux';
import allActions from '../actions/index';

const Book = ({language,title,image,authors,id}) => {
    const dispatch = useDispatch();
    
    return(
        <>
            {language === 'en' &&
            <StyledContainer id={id} onClick = {(event) => dispatch(allActions.bookActive(event.target.id))}>
                <StyledImg id={id} src={image} alt={title}></StyledImg>
                <StyledTitle id={id}>{title.length > 20 ? `${title.slice(0,20)}...` : title}</StyledTitle>
                {authors && (authors.length > 1 ? <StyledAuthor id={id} >{authors[0]}...</StyledAuthor> : <StyledAuthor id={id}>{authors[0]}</StyledAuthor> )}
                <StyledRevsBox id={id}>
                    <StyledRating id={id} name="read-only" value={4.3} precision={0.5} readOnly />
                    <span id={id} className="numRev">(14)</span>
                </StyledRevsBox>
            </StyledContainer>
            }   
        </>
    );
}

const StyledRevsBox = styled.div`
    display: flex;
    align-items: center;
    .numRev{
        font-size: 0.9rem;
    }
    z-index: -1;
    
`

const StyledRating = withStyles({
    iconFilled: {
      color: '#18D47C',
    },
  })(Rating);

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