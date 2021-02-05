import React from "react";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import audiobook from "../images/audiobook.png";
import hardback from "../images/hardback.png";
import paperback from "../images/paperback.png";
import kindle from "../images/kindle.png";
import { useSelector } from "react-redux";
import EditionComponent from './EditionComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


const BookDetail = ({ book }) => {
	const activeEdition = useSelector((store) => store.activeEdition);
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
                        <StyHeart icon={faHeart}/>
                    </div>
                    {book.volumeInfo &&
                        book.volumeInfo.authors.map((author,idx) => <h3 key={idx}>{author}</h3>)}
                    <h2 className="price">
                        {book.saleInfo && book.saleInfo.listPrice
                            ? choosePrice(Object.keys(activeEdition)[0],book.saleInfo.listPrice.amount)
                            : choosePrice(Object.keys(activeEdition)[0],8.99)}
                        $
                    </h2>
                    <StyledRevsBox>
                        <StyledRating
                            name="read-only"
                            value={4.3}
                            precision={0.5}
                            readOnly
                        />
                        <span className="numRev">(14)</span>
                    </StyledRevsBox>
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
                <StyBtn>Add to Cart</StyBtn>
                </StyCompleteDetails>
            </StyContainer>
            <StyDescriptionWrapper>
                <p className="title">Description</p>
                <p className="description-text">{book.volumeInfo && book.volumeInfo.description}</p> 
            </StyDescriptionWrapper>
        </StyModalWrapper> )
    
};

const StyBtn = styled.button`
    text-decoration: none;
    font-family: 'Poppins',sans-serif;
    font-size: 1rem;
    background-color: white;
    padding: 0 2rem;
    border-radius: 1rem;
    border: 1px solid #18D47C;
    margin-top: 2rem;

`

const StyHeart = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    color: #EC1F26;
    margin-left: 1rem;
`

const StyDescriptionWrapper = styled.div`
    width: 85%;
    height: fit-content;
    margin-right: auto;
    margin-left: auto;
    /* p{
        margin: 0 8rem;
    } */
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
	/* width: 100%; */
	height: fit-content;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	margin-top: 3rem;
	margin-left: 2rem;
    margin-right: 2rem;
    
`;

const StyledCover = styled.img`
	height: 500px;
	width: 350px;
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
`;

const StyledRevsBox = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
	.numRev {
		font-size: 0.9rem;
	}
`;

const StyledRating = withStyles({
	iconFilled: {
		color: "#18D47C",
	},
})(Rating);

export default BookDetail;
