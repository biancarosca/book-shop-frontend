
const initialState = {
    'browse': false,
    'wishlist' : false,
    'cart': false,
    'history' : false,
}
const path = window.location.pathname;
if(path === '/')
    initialState['browse'] = true;
else
    initialState[path.slice(1)] = true;

export const navItemsState = (state=initialState,action) => {
    switch(action.type){
        case "TOGGLE_ACTIVE":
            return action.payload;
        default:
            return {...state};
    }
}

export const navToggle = (state={'display': true},action) => {
    switch(action.type){
        case "TOGGLE_SIDENAV":
            return {display: !state['display']};
        default: 
            return {...state};
    }
}