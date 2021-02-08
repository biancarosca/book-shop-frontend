import {searchUpdate,loadBooks,restoreSearch,bookActive,bookEdition} from './booksAction';
import {toggleActiveState,toggleSideNav} from './navAction';
import {wishlistBook,removeFromWishlist} from './wishlistAction' ;
import {addToCart,removeFromCart} from './cartAction';

const allActions ={
    loadBooks,
    searchUpdate,
    restoreSearch,
    toggleActiveState,
    toggleSideNav,
    bookActive,
    bookEdition,
    wishlistBook,
    removeFromWishlist,
    addToCart,
    removeFromCart,
};

export default allActions;