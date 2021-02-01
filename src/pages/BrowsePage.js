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
    const allCategories = Object.keys(allCategoriesObj);

    return(
        <StyledWrapper>
            <StyledHeader>
                <h1>Browse our collection</h1>
                <div className="search-wrapper">
                    <input type="text"></input>
                    <span>
                        <StyledIcon icon={faSearch} />
                    </span>
                </div>
            </StyledHeader>
            <StyledMain>
            {allCategories && (allCategories.map(category => 
                allCategoriesObj[category].items.map(book => 
                <Book 
                language={book.volumeInfo.language}
                title ={book.volumeInfo.title} 
                image={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} 
                authors={book.volumeInfo.authors} 
                 />
                )
            ))}
            </StyledMain>
        </StyledWrapper>
    );
}

const StyledMain = styled.div`
    display: flex;
    /* margin: 1rem; */
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

export default BrowsePage;