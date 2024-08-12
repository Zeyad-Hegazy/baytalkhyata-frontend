const INT_STATE = { profile: null, token: "", isLoggedIn: false };

const auth = (state = INT_STATE, action) => {
	switch (action.type) {
		case "login":
			const authData = JSON.parse(localStorage.getItem("auth"));
			return {
				...state,
				profile: authData ? authData.user : null,
				token: authData ? authData.token : "",
				isLoggedIn: true,
			};
		case "logout":
			localStorage.removeItem("auth");
			return { ...INT_STATE };
		default:
			return state;
	}
};

export default auth;
