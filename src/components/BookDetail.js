import React from "react";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
// import {  useSelector } from 'react-redux';
import styled from "styled-components";
import audiobook from '../images/audiobook.png';
import hardback from '../images/hardback.png';
import paperback from '../images/paperback.png';
import kindle from '../images/kindle.png';


const BookDetail = ({ book }) => {
	return (
		<StyContainer>
			<StyledCover
				src={
					book.volumeInfo && `${book.volumeInfo.imageLinks.thumbnail}`
				}
				alt={book.volumeInfo && `${book.volumeInfo.title}`}
			/>
			<StyCompleteDetails>
				<h1>{book.volumeInfo && book.volumeInfo.title}</h1>
				{book.volumeInfo &&
					book.volumeInfo.authors.map((author) => <h3>{author}</h3>)}
                <h2 className="price">{book.saleInfo && book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 8.99}$</h2>
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
							ISBN:{" "}
							{book.volumeInfo &&
								book.volumeInfo.industryIdentifiers[0]
									.identifier}
						</p>
						<p>{book.volumeInfo && book.volumeInfo.pageCount}</p>
					</StyRightCol>
				</StyDetailWrapper>
                <StyIconsWrapper>
                    <StyIconContainer>
                        <StyledIcons src={paperback} alt='paperback' />
                        <p>Paperback</p>
                    </StyIconContainer>
                    <StyIconContainer>
                        <StyledIcons src={hardback} alt='hardback' />
                        <p>Hardback</p>
                    </StyIconContainer>
                    <StyIconContainer>
                        <StyledIcons src={kindle} alt='kindle' />
                        <p>Kindle</p>
                    </StyIconContainer>
                    <StyIconContainer>
                        <StyledIcons src={audiobook} alt='audiobook' />
                        <p>Audiobook</p>
                    </StyIconContainer>
                </StyIconsWrapper>
                
			</StyCompleteDetails>
		</StyContainer>
	);
};

const StyIconsWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    margin-top: 1rem;
` 

const StyIconContainer = styled.div`
    width: 80px;
    height: fit-content;
    background-color: #b8ddcb;
    margin-right: 1rem;
    padding: 0.5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        color: black;
        font-size: 0.8rem;
    }
    &:hover{
        background-color: #8dd6b1;
        cursor: pointer;
    }
`

const StyledIcons = styled.img`
    width: 50px;
    height: auto;
`

const StyContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 2rem;
	margin-left: 2rem;
`;

const StyledCover = styled.img`
	height: 500px;
	width: 350px;
`;

const StyCompleteDetails = styled.div`
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
    .price{
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
