import {combineReducers} from 'redux';
import {booksReducer,renderedBooks,activeBook,activeEdition} from './booksReducer';
import {navItemsState,navToggle} from './navReducer';
import {wishlist} from './wishlistReducer';

const rootReducer = combineReducers({
    booksReducer,
    renderedBooks,
    navItemsState,
    navToggle,
    activeBook,
    activeEdition,
    wishlist
});

export default rootReducer;