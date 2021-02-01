import {combineReducers} from 'redux';
import {booksReducer,renderedBooks} from './booksReducer';

const rootReducer = combineReducers({
    booksReducer,
    renderedBooks,
});

export default rootReducer;