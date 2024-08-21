const INT_STATE = [];

export const messages = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
			return [...state, action.payload];
		case "GET_MESSAGES":
			return [...action.payload];
		default:
			return state;
	}
};
