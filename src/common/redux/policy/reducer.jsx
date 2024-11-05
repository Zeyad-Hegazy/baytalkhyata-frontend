const INT_STATE = [];

export const policies = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_POLICY":
			return [...state, action.payload];
		case "GET_POLICIES":
			return [...action.payload];
		case "UPT_POLICY":
			return state.map((policy) => {
				if (policy._id === action.payload._id) {
					return action.payload;
				}
				return policy;
			});
		case "RMV_POLICY":
			return state.filter((policy) => policy._id !== action.payload.id);
		default:
			return state;
	}
};
