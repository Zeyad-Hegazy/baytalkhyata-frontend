const INT_STATE = { conversation: null };

export const conversation = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_CONVERSATION":
			return {
				...state,
				conversation: action.payload,
			};
		case "GET_CONVERSATION":
			return {
				...state,
				conversation: action.payload,
			};
		default:
			return state;
	}
};
