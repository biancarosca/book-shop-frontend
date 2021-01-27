import axios from 'axios';
import orderAlphabetically  from '../util';

let categories = ['Cooking','Psychology','Science','Self-Help','Fiction','History','Travel','Education','Art','Mathematics','Poetry','Philosophy'];

const loadBooks = () => async dispatch => {

    let action = {type: 'LOAD_BOOKS', payload: {}}
    categories = orderAlphabetically(categories); 
    for(let category of categories) {
    const results = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=+subject:${category}&maxResults=40&country=US`);
    action = {...action, ...action.payload}
    action.payload[`${category}`] = results.data;
    };
    
    dispatch(action);
}

export default loadBooks;