import axios from 'axios';
import orderAlphabetically  from '../util';

let categories = ['Cooking','Psychology','Science','Self-Help','Fiction','History','Travel','Education','Art','Mathematics','Poetry','Philosophy'];

export const loadBooks = () => async dispatch => {

    let action = {type: 'LOAD_BOOKS', payload: {}}
    categories = orderAlphabetically(categories); 
    for(let category of categories) {
    const results = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=+subject:${category}&maxResults=10&country=US`);
    action = {...action, ...action.payload}
    action.payload[`${category}`] = results.data;
    };
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

export const bookActive = (id) => {
    let action = {type: "ACTIVATE_BOOK",payload: {'activeId': id}}
    return action;
}

