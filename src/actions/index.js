import {searchUpdate,loadBooks,restoreSearch,bookActive,bookEdition,activateCategory,renderCategory} from './booksAction';
import {toggleActiveState,toggleSideNav} from './navAction';
import {wishlistBook,removeFromWishlist} from './wishlistAction' ;
import {addToCart,removeFromCart,updateCart, updateTotal} from './cartAction';

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
    updateCart,
    updateTotal,
    activateCategory,
    renderCategory,
};

export default allActions;