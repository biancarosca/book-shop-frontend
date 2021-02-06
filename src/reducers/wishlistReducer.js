import {getFromLS} from '../util';

let initialState = [];
if (getFromLS('wishlist'))
    initialState = getFromLS('wishlist');

export const wishlist = (state=initialState,action) => {
	switch(action.type){
		case "WISHLIST_BOOK":
            return [...state,action.payload];
        case "REMOVE_WISHLIST":
            {state.splice(action.payload,1);
            return [...state];
            }
		default:
			return [...state];
	}
}