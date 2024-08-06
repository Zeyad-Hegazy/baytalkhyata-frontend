import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/util/PrivateRoute";
import AdminLayout from "./pages/admin-view/AdminLayout";
import Dashboard from "./pages/admin-view/Dashboard";
import Students from "./pages/admin-view/Students";
import Libirary from "./pages/admin-view/Libirary";

const App = () => {
	return (
		<div>
			<Routes>
				<Route index replace path="/authentication/login" element={<Login />} />

				<Route
					path="/admin"
					element={<PrivateRoute element={<AdminLayout />} roles={["admin"]} />}
				>
					<Route
						path="dashboard"
						element={<PrivateRoute element={<Dashboard />} roles={["admin"]} />}
					/>
					<Route
						path="students"
						element={<PrivateRoute element={<Students />} roles={["admin"]} />}
					/>
					<Route
						path="libirary"
						element={<PrivateRoute element={<Libirary />} roles={["admin"]} />}
					/>
				</Route>
			</Routes>
		</div>
		// <div>
		// 	<Routes>
		// 		<Route index replace path="/authentication/login" element={<Login />} />

		// 		<Route path="/admin" element={<AdminLayout />}>
		// 			<Route path="dashboard" element={<Dashboard />} />
		// 		</Route>
		// 	</Routes>
		// </div>
	);
};

export default App;
