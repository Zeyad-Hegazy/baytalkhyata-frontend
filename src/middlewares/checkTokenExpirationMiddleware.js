// import { LOGOUT } from "../constants/action-types";
import { decodeJWT } from "../utils/decodeJWT";

const checkTokenExpirationMiddleware =
	({ dispatch }) =>
	(next) =>
	(action) => {
		if (action.type !== "logout") {
			const profile = JSON.parse(localStorage.getItem("auth"));
			if (profile && profile.token) {
				const token = profile.token;
				const decodedToken = decodeJWT(token);

				if (decodedToken) {
					const expirationDate = new Date(decodedToken.exp * 1000);
					const currentDate = new Date();

					if (currentDate >= expirationDate) {
						dispatch({ type: "logout" });
					}
				}
			}
		}
		return next(action);
	};

export default checkTokenExpirationMiddleware;
