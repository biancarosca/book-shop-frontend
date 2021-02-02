import React, {useEffect} from 'react';
import styled from 'styled-components';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Book from '../components/Book';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';



const BrowsePage= () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(allActions.loadBooks());
    },[dispatch]);

    const allCategoriesObj = useSelector(store =>  store.booksReducer );
    const renderedBooksObj = useSelector(store => store.renderedBooks);
    const allCategories = Object.keys(allCategoriesObj);
  
    const searchHandler = (event) => {
        console.log(event.target.value);
        if(event.target.value === '')
            {dispatch(allActions.restoreSearch());
            console.log('here');}
         else{
        allCategories.forEach(category => 
            {const result = Object.values(allCategoriesObj[category].items)
              .filter(arr => arr.volumeInfo.title.toLowerCase().includes(event.target.value.toLowerCase()));
            const foundObj = {...allCategoriesObj[category]}
            foundObj.items = [...result]
            foundObj.totalItems = result.length
            dispatch(allActions.searchUpdate(foundObj,category));
            }
            
            ); 
          }
    }

    return(
        <StyledWrapper>
            <StyledHeader>
                <h1>Browse our collection</h1>
                <div className="search-wrapper">
                    <input type="text" onChange={searchHandler}></input>
                    <span>
                        <StyledIcon icon={faSearch} />
                    </span>
                </div>
            </StyledHeader>
            <StyledMain>
            {Object.keys(renderedBooksObj).length ? allCategories.map(category => 
                renderedBooksObj[category].items.map(book => 
                <Book 
                language={book.volumeInfo.language}
                title ={book.volumeInfo.title} 
                image={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} 
                authors={book.volumeInfo.authors}
                key={book.id} 
                 />
                )) : allCategories.length ?  allCategories.map(category => 
                allCategoriesObj[category].items.map(book => 
                <Book 
                language={book.volumeInfo.language}
                title ={book.volumeInfo.title} 
                image={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} 
                authors={book.volumeInfo.authors}
                key={book.id} 
                 />
                )) : <StyledSpinner><div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></StyledSpinner>}
            </StyledMain>
        </StyledWrapper>
    );
}


const StyledMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 10px;
        z-index: 1;
    }

    ::-webkit-scrollbar-track {
        background: #2B2D30;
        z-index :1;
        }
    ::-webkit-scrollbar-thumb {
        background: #18D47C; 
        z-index:1;

    }
    ::-webkit-scrollbar-thumb:hover {
        background:#16b769; 
    }
`

const StyledWrapper = styled.div`
    min-height: 90vh;
    width: 100%;
`
const StyledHeader = styled.div`
    background-color: #EEF1F9;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d8d8d8;

    @media (max-width:700px){
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    @media (max-height:750px){
        height: 15vh;
    }

    @media (max-height:500px){
        height: 18vh;
    }
    h1{
        font-size: 1rem;
        color: #756e6e;
        margin: 1rem;
        @media (max-width:700px){
            margin-bottom: 0;
        }
        @media (max-height:500px){
        font-size: 0.8rem;
        }
    }

    input{
        margin: 1rem;
        margin-right:0;
        outline: none;
        border-radius: 1rem;
        border: none;
        font-size: 1rem;
        padding: 0.5rem 2rem 0.5rem 0.5rem;
        @media (max-width:700px){
            margin-top: 0.4rem;
            font-size: 0.9rem;
        }
        @media (max-height:500px){
        font-size: 0.8rem;
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
        margin-right: 1rem;
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