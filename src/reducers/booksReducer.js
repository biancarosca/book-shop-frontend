import { getFromLS } from '../util';

let books0;
if(getFromLS('books'))
	books0 = getFromLS('books');
else
	books0 = {};

export const booksReducer = (
	state = books0,
	action
) => {
	switch (action.type) {
		case "LOAD_BOOKS": 
			return {
				...state,
				...action.payload,
			};
		default:
			return { ...state };
	}
};

export const renderedBooks = (state={},action) => {
	switch (action.type) {
		case "SEARCH_UPDATE":
			return {
				...state,
				...action.payload,
			}
		case "RENDER_CATEGORY":
			return {
				...action.payload
			}

		case "RESTORE_SEARCH":
			return {};
		default:
			return { ...state };
		}
}

export const activeBook = (state='',action) => {
	switch(action.type){
		case "ACTIVATE_BOOK":
			return action.payload;
		default:
			return {...state};
	}
}

const actEdiState0 = {
	'paperback' : true,
}

export const activeEdition = (state = actEdiState0 , action) => {
	switch(action.type){
		case "ACTIVATE_EDITION":
			return action.payload;
		default:
			return {...state};
	}
}



export const activeCategory = (state='All',action) => {
	switch(action.type){
		case "ACTIVATE_CATEGORY":
			return action.payload;
		default:
			return state;
	}
}