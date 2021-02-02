import {combineReducers} from 'redux';
import {booksReducer,renderedBooks} from './booksReducer';
import {navItemsState} from './navReducer';

const rootReducer = combineReducers({
    booksReducer,
    renderedBooks,
    navItemsState,
});

export default rootReducer;