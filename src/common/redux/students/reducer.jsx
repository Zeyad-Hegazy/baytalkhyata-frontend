const INT_STATE = [];

export const students = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_STUDENT":
			return [...state, action.payload];
		case "GET_STUDENTS":
			return [...action.payload];
		case "UPT_STUDENT":
			return state.map((student) => {
				if (student._id === action.payload._id) {
					return action.payload;
				}
				return student;
			});
		case "RMV_STUDENT":
			return state.filter((student) => student._id !== action.payload.id);
		default:
			return state;
	}
};
