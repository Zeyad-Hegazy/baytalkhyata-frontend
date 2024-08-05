/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({ element, roles }) => {
	const authData = JSON.parse(localStorage.getItem("auth")).user;

	if (authData) {
		if (roles && !roles.includes(authData.role)) {
			return <Navigate to={`/pages/authentication/lockscreen`} replace />;
		}
		return element;
	} else {
		return <Navigate to={`/authentication/login`} replace />;
	}
};

export default PrivateRoute;
