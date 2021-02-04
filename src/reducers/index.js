import {combineReducers} from 'redux';
import {booksReducer,renderedBooks,activeBook,activeEdition} from './booksReducer';
import {navItemsState,navToggle} from './navReducer';

const rootReducer = combineReducers({
    booksReducer,
    renderedBooks,
    navItemsState,
    navToggle,
    activeBook,
    activeEdition,
});

export default rootReducer;