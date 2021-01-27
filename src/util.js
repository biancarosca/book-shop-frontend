const orderAlphabetically = (arr) => {
    arr.sort((a,b) => {
        return a > b ? 1 : a < b ? -1 : 0;
    });
    return arr;
}

export default orderAlphabetically;