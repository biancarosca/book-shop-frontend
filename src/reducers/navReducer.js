
const initialState = {
    'browse': false,
    'wishlist' : false,
    'cart': false,
    'history' : false,
}
const path = window.location.pathname;
initialState[path.slice(1)] = true;

export const navItemsState = (state=initialState,action) => {
    switch(action.type){
        case "TOGGLE_ACTIVE":
            return action.payload;
        default:
            return {...state};
    }
}