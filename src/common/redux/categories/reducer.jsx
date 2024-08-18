const INT_STATE = [];

export const categories = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_CATEGORY":
			return [...state, action.payload];
		case "GET_CATEGORYIES":
			return [...action.payload];
		case "UPT_CATEGORY":
			return state.map((category) => {
				if (category._id === action.payload._id) {
					return action.payload;
				}
				return category;
			});
		case "RMV_CATEGORY":
			return state.filter((category) => category._id !== action.payload.id);
		default:
			return state;
	}
};
