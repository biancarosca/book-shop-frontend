export const toggleActiveState = (menuItem) => {
    let state = {
        'browse': false,
        'wishlist': false,
        'cart': false,
        'history': false,
    }
    state[menuItem] = true;
    let action = {type: "TOGGLE_ACTIVE" , payload: state }
    return action;
}