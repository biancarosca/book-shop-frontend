import {searchUpdate,loadBooks,restoreSearch,bookActive,bookEdition} from './booksAction';
import {toggleActiveState,toggleSideNav} from './navAction';

const allActions ={
    loadBooks,
    searchUpdate,
    restoreSearch,
    toggleActiveState,
    toggleSideNav,
    bookActive,
    bookEdition,
};

export default allActions;