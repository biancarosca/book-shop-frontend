
export const wishlistBook = book => {
    let action = {type: "WISHLIST_BOOK",payload:book};
    return action;
}

export const removeFromWishlist = idx => {
    let action = {type: "REMOVE_WISHLIST",payload: idx};
    return action;
}