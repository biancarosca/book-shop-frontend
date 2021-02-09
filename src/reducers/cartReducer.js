import { getFromLS, cutDecimals } from '../util';

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
        case "UPDATE_CART":
            {
            state[action.payload[0]].cart.amount += action.payload[1];
            return [...state]; 
            }
        default:
            return [...state];
    }
}

let price0 = 0;
if(getFromLS("totalPrice"))
    price0 = getFromLS("totalPrice");

export const totalAmount = (state=price0,action) => {
    switch(action.type){
        case "UPDATE_TOTAL":
            return cutDecimals(state + action.payload);
        default:
            return state;
    }
}