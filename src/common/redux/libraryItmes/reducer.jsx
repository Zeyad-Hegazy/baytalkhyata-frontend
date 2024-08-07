const INT_STATE = {
	libraryItems: [],
	filteredItems: [],
};

export const library = (state = INT_STATE, action) => {
	switch (action.type) {
		case "ADD_LIBITEM":
			return {
				...state,
				libraryItems: [...state.libraryItems, action.payload],
			};
		case "GET_LIBITEMS":
			return {
				...state,
				libraryItems: [...action.payload],
			};
		case "UPT_LIBITEM":
			return {
				...state,
				libraryItems: state.libraryItems.map((item) => {
					if (item._id === action.payload._id) {
						return action.payload;
					}
					return item;
				}),
			};
		case "RMV_LIBITEM":
			return {
				...state,
				libraryItems: state.libraryItems.filter(
					(item) => item._id !== action.payload.id
				),
			};
		case "SET_FILTERED_LIBITEMS":
			return {
				...state,
				filteredItems: action.payload,
			};
		default:
			return state;
	}
};
