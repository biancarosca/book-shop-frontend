import {searchUpdate,loadBooks,restoreSearch,bookActive} from './booksAction';
import {toggleActiveState,toggleSideNav} from './navAction';

const allActions ={
    loadBooks,
    searchUpdate,
    restoreSearch,
    toggleActiveState,
    toggleSideNav,
    bookActive,
};

export default allActions;