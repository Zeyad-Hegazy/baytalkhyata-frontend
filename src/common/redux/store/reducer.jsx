const INT_STATE = [];

export const gifts = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_GIFT":
			return [...state, action.payload];
		case "GET_GIFTS":
			return [...action.payload];
		case "UPT_GIFT":
			return state.map((gift) => {
				if (gift._id === action.payload._id) {
					return action.payload;
				}
				return gift;
			});
		case "RMV_GIFT":
			return state.filter((gift) => gift._id !== action.payload.id);
		default:
			return state;
	}
};
