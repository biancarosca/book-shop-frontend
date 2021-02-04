

export const booksReducer = (
	state = {},
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
			return {...state}
	}
}

