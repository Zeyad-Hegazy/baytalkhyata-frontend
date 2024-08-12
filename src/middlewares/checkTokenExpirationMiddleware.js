// import { LOGOUT } from "../constants/action-types";
import { decodeJWT } from "../utils/decodeJWT";

const checkTokenExpirationMiddleware =
	({ dispatch }) =>
	(next) =>
	(action) => {
		console.log(action.type);
		if (action.type !== "logout") {
			const authState = JSON.parse(localStorage.getItem("auth"));

			const decodedToken = decodeJWT(authState?.token);

			if (decodedToken) {
				const expirationDate = new Date(decodedToken.exp * 1000);
				const currentDate = new Date();

				if (currentDate >= expirationDate) {
					dispatch({ type: "logout" });
				}
			}
		}
		return next(action);
	};

export default checkTokenExpirationMiddleware;
