import axios from 'axios';
import orderAlphabetically,{saveToLS}  from '../util';

let categories = ['Biography','Non-fiction','Fiction','Science','Business'];

export const loadBooks = () => async dispatch => {

    let action = {type: 'LOAD_BOOKS', payload: {}}
    categories = orderAlphabetically(categories); 
    let arrOfBooks = [];
    for(let category of categories) {
    const results = await axios.get(`https://mock-rest-api-book-shop.herokuapp.com/${category}`);
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

export const activateCategory = category => {
    let action = {type: "ACTIVATE_CATEGORY", payload: category};
    return action;
}

export const renderCategory = (catObj,category) => {
    let action = {type: "RENDER_CATEGORY", payload: {}};
    action.payload[`${category}`] = catObj;
    return action;
}