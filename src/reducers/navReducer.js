
const initialState = {
    'browse': true,
    'wishlist' : false,
    'cart': false,
    'history' : false,
}

export const navItemsState = (state=initialState,action) => {
    switch(action.type){
        case "TOGGLE_ACTIVE":
            return action.payload;
        default:
            return {...state};
    }
}