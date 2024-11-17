const INT_STATE = [];

export const chapter = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_CHAPTER":
			return [...state, action.payload];
		case "GET_CHAPTERS":
			return [...action.payload];
		default:
			return state;
	}
};
