import {combineReducers} from 'redux';
import {booksReducer,renderedBooks} from './booksReducer';
import {navItemsState,navToggle} from './navReducer';

const rootReducer = combineReducers({
    booksReducer,
    renderedBooks,
    navItemsState,
    navToggle,
});

export default rootReducer;