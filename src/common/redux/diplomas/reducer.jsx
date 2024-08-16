const INT_STATE = [];

export const diplomas = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_DIPLOMA":
			return [...state, action.payload];
		case "GET_DIPLOMAS":
			return [...action.payload];
		case "UPT_DIPLOMA":
			return state.map((diploma) => {
				if (diploma._id === action.payload._id) {
					return action.payload;
				}
				return diploma;
			});
		case "RMV_DIPLOMA":
			return state.filter((diploma) => diploma._id !== action.payload.id);
		default:
			return state;
	}
};
