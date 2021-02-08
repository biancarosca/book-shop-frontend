import axios from 'axios';
import orderAlphabetically, {saveToLS}  from '../util';

let categories = ['Cooking','Psychology','Science','Self-Help','Fiction','History','Travel','Education','Art','Mathematics','Poetry','Philosophy'];

export const loadBooks = () => async dispatch => {

    let action = {type: 'LOAD_BOOKS', payload: {}}
    categories = orderAlphabetically(categories); 
    let arrOfBooks = [];
    for(let category of categories) {
    const results = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=+subject:${category}&maxResults=10&country=US`);
    arrOfBooks.push(...results.data.items);
    action = {...action, ...action.payload}
    action.payload[`${category}`] = results.data;
    };

    //save book to local storage
    saveToLS('books',action.payload);
    
    dispatch(action);
}

export const searchUpdate = (searchObj,category='') => {
    let action = {type: 'SEARCH_UPDATE' ,payload: {}}
    if(category)
        action.payload[`${category}`] = searchObj;
    return action;
}

export const restoreSearch = () => {
    let action = {type: "RESTORE_SEARCH" }
    return action;
}

export const bookActive = (book) => {
    let action = {type: "ACTIVATE_BOOK",payload: book}
    return action;
}

export const bookEdition = (edition) => {
    let state = {}
    state[edition] = true;
    let action = {type: "ACTIVATE_EDITION", payload: state}
    return action;
}