const INT_STATE = [];

export const messagesList = (state = INT_STATE, action) => {
	switch (action.type) {
		case "GET_MESSAGES_LIST":
			return [...action.payload];
		case "RMV_MESSAGES_LIST":
			return INT_STATE;
		default:
			return state;
	}
};
