const INT_STATE = [];

export const categoryItems = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_CATEGORY_ITEM":
			return [...state, action.payload];
		case "GET_CATEGORY_ITEMS":
			return [...action.payload];
		case "UPT_CATEGORY_ITEM":
			return state.map((item) => {
				if (item._id === action.payload._id) {
					return action.payload;
				}
				return item;
			});
		case "RMV_CATEGORY_ITEM":
			return state.filter((item) => item._id !== action.payload.id);
		default:
			return state;
	}
};
