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
            price = paperbackPrice + 0.35*paperbackPrice;
            break;
        }
        case "kindle": {
            price = paperbackPrice - 0.30*paperbackPrice;
            break;
        }
        case "audiobook": {
            price = paperbackPrice*2;
            break;
        }
        default:
            break;
    }
    return parseFloat(price.toFixed(2));
};

export const getPrice = (book,amount,edition='') => {
    if(!edition)
        edition = book.cart.edition;

    return book.saleInfo && book.saleInfo.listPrice ? parseFloat((choosePrice(edition,book.saleInfo.listPrice.amount)*amount).toFixed(2))
        : parseFloat((choosePrice(edition,8.99)*amount).toFixed(2));
}

export const cutDecimals = number =>{
    return parseFloat(number.toFixed(2));
}



export default orderAlphabetically;