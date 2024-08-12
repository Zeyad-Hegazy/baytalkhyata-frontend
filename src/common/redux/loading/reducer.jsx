const INT_STATE = false;

export const loading = (state = INT_STATE, action) => {
	switch (action.type) {
		case "LOADING_START":
			return true;
		case "LOADING_STOP":
			return false;
		default:
			return state;
	}
};
