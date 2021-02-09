import React, {useEffect} from 'react';
import styled from 'styled-components';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Book from '../components/Book';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
import { motion } from "framer-motion";
import { StyScrollBar, StyGlobalHeader } from '../components/GlobalStyles';
import { getFromLS } from '../util'; 
import CarouselComp from '../components/CarouselComp';


const BrowsePage= ({locationChanged,variants}) => {
    const dispatch = useDispatch();
    
    //load all the books
    useEffect(() => {
        const books = getFromLS('books'); 
        if(!books)
          dispatch(allActions.loadBooks());
    },[dispatch]);

    const allCategoriesObj = useSelector(store =>  store.booksReducer );
    const renderedBooksObj = useSelector(store => store.renderedBooks);
    const allCategories = Object.keys(allCategoriesObj);
    const navDisplay = useSelector(store => store.navToggle);
    
    //when the page is changed and searched books are rendered, clear search
    useEffect(() => dispatch(allActions.restoreSearch()),[dispatch]);
  
    const searchHandler = (event) => {
        
        if(event.target.value === '')
            dispatch(allActions.restoreSearch());  
        else{
          allCategories.forEach(category => 
              {const result = Object.keys(allCategoriesObj) && Object.values(allCategoriesObj[category].items)
      
                .filter(arr => {
                  let arrOfAuthors=[];
                  if(arr.volumeInfo.authors)
                    arrOfAuthors = arr.volumeInfo.authors.map(author => author.toLowerCase());
                   return arr.volumeInfo.title.toLowerCase().includes(event.target.value.toLowerCase()) || arrOfAuthors.join(' ').includes(event.target.value.toLowerCase()) } ) ;
              const foundObj = {...allCategoriesObj[category]}
              foundObj.items = [...result]
              foundObj.totalItems = result.length
              dispatch(allActions.searchUpdate(foundObj,category));
              }
              
              ); 
          }
    }

    return(
        <StyledWrapper  
        initial={navDisplay.display ? (!locationChanged  ? "open0" : ''): ""}
        animate={navDisplay.display ? (!locationChanged  ? "open" : ''): "" }
        transition={{ type:"tween",duration: 0.5 }}
        variants = {variants}
        >
            <StyledHeader>
                <h1>Browse our collection</h1>
                <div className="search-wrapper">
                    <input placeholder="Enter a keyword.."type="text" onChange={searchHandler}></input>
                    <span>
                        <StyledIcon icon={faSearch} />
                    </span>
                </div>
            </StyledHeader>
            <StyledMain>
            <CarouselComp />
            {Object.keys(renderedBooksObj).length ? allCategories.map(category => 
                renderedBooksObj[category] && renderedBooksObj[category].items.map(book => 
                <Book 
                language={book.volumeInfo.language}
                title ={book.volumeInfo.title} 
                image={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} 
                authors={book.volumeInfo.authors}
                id={book.id}
                key={book.id} 
                 />
                )) : allCategories.length && Object.keys(allCategoriesObj) ?  allCategories.map(category => 
                allCategoriesObj[category].items.map(book => 
                <Book 
                language={book.volumeInfo.language}
                title ={book.volumeInfo.title} 
                image={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} 
                authors={book.volumeInfo.authors}
                id={book.id}
                key={book.id} 
                 />
                )) : <StyledSpinner><div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></StyledSpinner>}
            </StyledMain>
        </StyledWrapper>
    );
}

// const StyCarousel = styled(CarouselComp)`
//   height: 50px;
// `

const StyledMain = styled(StyScrollBar)`
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
    overflow-y: scroll;
    @media (max-width:700px){
      height: 77vh;
    }

    @media (max-height:580px){
        height: 75vh;
    }
`

const StyledWrapper = styled(motion.div)`
    min-height: 90vh;
    width: 100%;
`
const StyledHeader = styled(StyGlobalHeader)`

    @media (max-width:700px){
        flex-direction: column;
        justify-content: center;
        text-align: center;
        height: 13vh;
        h1{
          margin: 0.8rem 2rem;
          margin-bottom: 0;
        }
    }

    @media (max-height:580px){
        height: 15vh;
    }

    input{
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        margin-right:0;
        outline: none;
        border-radius: 1rem;
        border: none;
        font-size: 1rem;
        padding: 0.5rem 2rem 0.5rem 0.5rem;
        @media (max-width:700px){
            margin-top: 0.4rem;
            margin-bottom: 1rem;
        }
        
    }

    span{
        background-color: white;
        height: 1rem;
        border-radius: 1rem;
        position: relative;
        right: 1.5rem;
    }

    .search-wrapper{
        @media (max-width:700px){
            margin-top: 0;
        }
    }

    
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: #bab8b8;
`

const StyledSpinner = styled.div`
    height: 80vh;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
.lds-spinner {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #18D47C;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
 ` 

export default BrowsePage;