const INT_STATE = {
	open: false,
	message: "",
	status: 200,
};

export const toastar = (state = INT_STATE, action) => {
	switch (action.type) {
		case "open":
			return {
				open: true,
				message: action.payload.message,
				status: state.status,
			};

		case "close":
			return INT_STATE;
		default:
			return state;
	}
};
