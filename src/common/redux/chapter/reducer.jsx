const INT_STATE = { chapter: null };

export const chapter = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_CHAPTER":
			return {
				...state,
				chapter: action.payload,
			};
		case "GET_CHAPTER":
			return {
				...state,
				chapter: action.payload,
			};
		default:
			return state;
	}
};
