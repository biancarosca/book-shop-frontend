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

export const choosePrice = (edition,paperbackPrice) => {
    let price;
    switch (edition) {
        case "paperback": {
            price = paperbackPrice;
            break;
        }
        case "hardback": {
            price = (paperbackPrice + 0.35*paperbackPrice).toFixed(2);
            break;
        }
        case "kindle": {
            price = (paperbackPrice - 0.30*paperbackPrice).toFixed(2);
            break;
        }
        case "audiobook": {
            price = (paperbackPrice*2).toFixed(2);
            break;
        }
        default:
            break;
    }
    return price;
};

export default orderAlphabetically;