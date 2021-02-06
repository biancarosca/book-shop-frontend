const orderAlphabetically = (arr) => {
    arr.sort((a,b) => {
        return a > b ? 1 : a < b ? -1 : 0;
    });
    return arr;
}

export const saveToLS = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value));
}

export const getFromLS = (key) => {
    return JSON.parse(localStorage.getItem(key));
} 

export default orderAlphabetically;