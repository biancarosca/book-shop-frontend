const booksReducer = (
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

export default booksReducer;
