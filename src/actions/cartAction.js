export const addToCart = book => {
    let action = {type: "ADD_TO_CART", payload: book}
    return action;
}

export const removeFromCart = bookIdx => {
    let action = {type: "REMOVE_FROM_CART", payload: bookIdx};
    return action;
}