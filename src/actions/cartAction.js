export const addToCart = (book) => {
    let action = {type: "ADD_TO_CART", payload: book}
    return action;
}

export const removeFromCart = bookIdx => {
    let action = {type: "REMOVE_FROM_CART", payload: bookIdx};
    return action;
}

export const updateCart = (bookIdx,increment) => {
    let action = {type: "UPDATE_CART", payload: [bookIdx,increment]};
    return action;
}

export const updateTotal = price => {
    let action = {type: "UPDATE_TOTAL",payload: price}
    return action;
}