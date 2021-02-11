import React from "react";
import styled from "styled-components";
import audiobook from "../images/audiobook.png";
import hardback from "../images/hardback.png";
import paperback from "../images/paperback.png";
import kindle from "../images/kindle.png";
import { useSelector } from "react-redux";
import EditionComponent from './EditionComponent';
import RatingComponent from './RatingComponent';
import Btn from './Btn';
import { choosePrice } from '../util';
import { v4 as uuidv4 } from 'uuid';

const BookDetail = ({ book }) => {
    const activeEdition = useSelector(store => store.activeEdition);
  
	return (
        <StyModalWrapper>
            <StyContainer>
                <StyledCover
                    src={
                        book.volumeInfo && `${book.volumeInfo.imageLinks.thumbnail}`
                    }
                    alt={book.volumeInfo && `${book.volumeInfo.title}`}
                />
                <StyCompleteDetails>
                    <div className="title-container">
                        <h1>{book.volumeInfo && book.volumeInfo.title}</h1>
                        <Btn type="wishlist" book={book}></Btn>
                    </div>
                    {book.volumeInfo &&
                        book.volumeInfo.authors.map((author,idx) => <h3 key={idx}>{author}</h3>)}
                    <h2 className="price">
                        {book.saleInfo && book.saleInfo.listPrice
                            ? choosePrice(Object.keys(activeEdition)[0],book.saleInfo.listPrice.amount)
                            : choosePrice(Object.keys(activeEdition)[0],8.99)}
                        $
                    </h2>
                    {book.saleInfo && <RatingComponent id={book.id} rating={ book.saleInfo.rating} />}
                    <StyDetailWrapper>
                        <StyLeftCol>
                            <p>Publisher</p>
                            <p>Publish date</p>
                            <p>ISBN-13</p>
                            <p>Pages</p>
                        </StyLeftCol>
                        <StyRightCol>
                            {book.volumeInfo &&
                            <>
                            <p className="publisher">{book.volumeInfo.publisher}</p>
                            <p>
                                {book.volumeInfo.publishedDate}
                            </p>
                            <p>
                                {book.volumeInfo.industryIdentifiers[0].identifier}</p>
                            <p>{book.volumeInfo.pageCount}</p>
                            </>
                        }
                        </StyRightCol>
                    </StyDetailWrapper>
                    <StyIconsWrapper>
                        <EditionComponent image={paperback} edition="paperback"/>
                        <EditionComponent image={hardback} edition="hardback"/>
                        <EditionComponent image={kindle} edition="kindle"/>
                        <EditionComponent image={audiobook} edition="audiobook"/>
                    </StyIconsWrapper>
                <Btn type="cart" book={book} origin="detail"></Btn>
                </StyCompleteDetails>
            </StyContainer>
            <StyDescriptionWrapper>
                <p className="title">Description</p>
                {book.volumeInfo ? book.volumeInfo.description.map(para => <p className="description-text" key={uuidv4()}>{para}</p>) : ''} 
            </StyDescriptionWrapper>
        </StyModalWrapper> )
    
};


const StyDescriptionWrapper = styled.div`
    width: 85%;
    height: fit-content;
    margin-right: auto;
    margin-left: auto;
    .title{
        font-weight: bold;
        margin-bottom: 1rem;
    }
    .description-text{
        margin-bottom: 2rem;
    }
    margin-top: 3rem;
`

const StyLeftCol = styled.div`
	font-weight: bold;
    p{
        width:100px;
    }
`;

const StyRightCol = styled.div`
	margin-left: 2rem;
    .publisher{
        font-size: smaller;
        width: fit-content;
    }
`;

const StyModalWrapper = styled.div`
    width: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const StyIconsWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	margin-top: 1rem;
`;


const StyContainer = styled.div`
	height: fit-content;
	display: flex;
	justify-content: center;
	margin-top: 3rem;
	margin-left: 2rem;
    margin-right: 2rem;

    @media (max-width:950px){
        flex-direction: column;
        align-items: center;
    }
    
`;

const StyledCover = styled.img`
	height: 500px;
	width: 350px;


    @media (max-width:1420px){
        width: 300px;
        height: 450px;
    }

    @media (max-width:1240px){
        width: 270px;
        height: 410px;
    }

    @media (max-width:1180px){
        width: 260px;
        height: 400px;
    }

    @media (max-width:1150px){
        width: 230px;
        height: 370px;
    }
    

    @media (max-width:1100px){
        width: 210px;
        height: 330px;
    }

    @media (max-width:1050px){
        width: 140px;
        height: 230px;
    }

    @media (max-width:950px){
        width: 230px;
        height: 370px;
        margin-bottom: 1.5rem;
    }
`;

const StyCompleteDetails = styled.div`
    .title-container{
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
	margin-left: 2rem;
	h1 {
		font-size: 1.3rem;
	}
	h3 {
		font-size: 1rem;
		font-weight: lighter;
		font-style: italic;
	}
	margin-right: 2rem;
	.price {
		margin-top: 1rem;
	}

    @media (max-width: 550px){
        h1{
            font-size: 1rem;
        }

        h3{
            font-size: 0.8rem;
        }

    }
`;


const StyDetailWrapper = styled.div`
	display: flex;
	width: fit-content;
	height: fit-content;
	margin-top: 1rem;
	margin-right: 2rem;
    @media (max-width:1350px){
        p{
            font-size: 0.9rem;
        }
    }

    @media (max-width:950px){
        p{
            font-size: 1rem;
        }
    }
`;


export default BookDetail;
