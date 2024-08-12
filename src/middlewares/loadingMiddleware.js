const loadingMiddleware =
	({ dispatch }) =>
	(next) =>
	(action) => {
		console.log(action);
		if (action.type.endsWith("/pending")) {
			console.log("pending....");
			dispatch({ type: "LOADING_START" });
		} else if (
			action.type.endsWith("/fulfilled") ||
			action.type.endsWith("/rejected")
		) {
			console.log("done....");
			dispatch({ type: "LOADING_STOP" });
		}
		return next(action);
	};

export default loadingMiddleware;
