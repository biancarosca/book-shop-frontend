import {searchUpdate,loadBooks,restoreSearch,bookActive,bookEdition} from './booksAction';
import {toggleActiveState,toggleSideNav} from './navAction';
import {wishlistBook,removeFromWishlist} from './wishlistAction' ;

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
};

export default allActions;