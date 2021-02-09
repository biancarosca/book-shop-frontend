import {combineReducers} from 'redux';
import {booksReducer,renderedBooks,activeBook,activeEdition,activeCategory} from './booksReducer';
import {navItemsState,navToggle} from './navReducer';
import {wishlist} from './wishlistReducer';
import {shoppingCart,totalAmount} from './cartReducer';

const rootReducer = combineReducers({
    booksReducer,
    renderedBooks,
    navItemsState,
    navToggle,
    activeBook,
    activeEdition,
    wishlist,
    shoppingCart,
    totalAmount,
    activeCategory,
});

export default rootReducer;