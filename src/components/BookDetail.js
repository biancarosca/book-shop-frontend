import React from "react";
import styled from "styled-components";
import audiobook from "../images/audiobook.png";
import hardback from "../images/hardback.png";
import paperback from "../images/paperback.png";
import kindle from "../images/kindle.png";
import { useSelector } from "react-redux";
import EditionComponent from './EditionComponent';
import RatingComponent from './RatingComponent';
import Btn from './AtcWishlistBtns';

const BookDetail = ({ book }) => {
    const activeEdition = useSelector(store => store.activeEdition);

	const choosePrice = (edition,paperbackPrice) => {
        let price;
		switch (edition) {
			case "paperback": {
				price = paperbackPrice;
				break;
			}
			case "hardback": {
				price = (paperbackPrice + 0.35*paperbackPrice).toFixed(2);
				break;
			}
			case "kindle": {
				price = (paperbackPrice - 0.30*paperbackPrice).toFixed(2);
				break;
            }
            case "audiobook": {
				price = (paperbackPrice*2).toFixed(2);
				break;
            }
            default:
                break;
		}
		return price;
    };
    
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
                    <RatingComponent id={book.id} />
                    <StyDetailWrapper>
                        <StyLeftCol>
                            <p>Genre</p>
                            <p>Publisher</p>
                            <p>First publish</p>
                            <p>ISBN-13</p>
                            <p>Pages</p>
                        </StyLeftCol>
                        <StyRightCol>
                            <p>{book.volumeInfo && book.volumeInfo.categories}</p>
                            <p>{book.volumeInfo && book.volumeInfo.publisher}</p>
                            <p>
                                {book.volumeInfo && book.volumeInfo.publishedDate}
                            </p>
                            <p>
                                {book.volumeInfo &&
                                    book.volumeInfo.industryIdentifiers[0]
                                        .identifier}
                            </p>
                            <p>{book.volumeInfo && book.volumeInfo.pageCount}</p>
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
                <p className="description-text">{book.volumeInfo && book.volumeInfo.description}</p> 
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

    @media (max-width:1120px){
        width: 250px;
        height: 400px;
    }

    @media (max-width:1020px){
        width: 200px;
        height: 350px;
    }

    @media (max-width:950px){
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

const StyLeftCol = styled.div`
	font-weight: bold;
`;

const StyRightCol = styled.div`
	margin-left: 2rem;
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
