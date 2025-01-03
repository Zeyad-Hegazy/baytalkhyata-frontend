/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoute = ({ element, roles }) => {
	const dispatch = useDispatch();
	const authData = JSON.parse(localStorage.getItem("auth"));

	if (authData) {
		if (roles && !roles.includes(authData.user.role)) {
			return <Navigate to={`/pages/authentication/lockscreen`} replace />;
		}
		return element;
	} else {
		dispatch({ type: "logout" });
		return <Navigate to={`/`} replace />;
	}
};

export default PrivateRoute;
