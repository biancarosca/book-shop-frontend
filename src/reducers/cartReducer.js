import { getFromLS } from '../util';

let cart0 = [];
if(getFromLS('cart'))
    cart0 = getFromLS('cart');


export const shoppingCart = (state = cart0,action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return [...state, action.payload];
        case "REMOVE_FROM_CART":
            {state.splice(action.payload,1);
            return [...state];
            }
        default:
            return [...state];
    }
}