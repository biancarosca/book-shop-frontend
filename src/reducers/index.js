import {combineReducers} from 'redux';
import {booksReducer,renderedBooks,activeBook} from './booksReducer';
import {navItemsState,navToggle} from './navReducer';

const rootReducer = combineReducers({
    booksReducer,
    renderedBooks,
    navItemsState,
    navToggle,
    activeBook,
});

export default rootReducer;