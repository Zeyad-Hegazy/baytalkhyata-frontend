import Loader from "./components/util/Loader";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/util/PrivateRoute";
import AdminLayout from "./pages/admin-view/AdminLayout";
import Dashboard from "./pages/admin-view/Dashboard";
import Students from "./pages/admin-view/Students";
import Libirary from "./pages/admin-view/Libirary";
import Toastar from "./components/Toastar";
import { useSelector } from "react-redux";
import Store from "./pages/admin-view/Store";
import Chat from "./pages/admin-view/Chat";
import Settings from "./pages/admin-view/Settings";
import Chapters from "./pages/admin-view/Chapters";
import Diplomas from "./pages/admin-view/Diplomas";
import Categories from "./pages/admin-view/Categories";
import NewChapters from "./pages/admin-view/NewChapters";
import Notifications from "./pages/admin-view/Notifications";
import Policy from "./pages/admin-view/Policy";
import FQA from "./pages/admin-view/FQA";

const App = () => {
	const toastar = useSelector((state) => state.toastar);
	const isLoading = useSelector((state) => state.loading);

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Routes>
						<Route path="/" element={<Login />} />

						<Route
							path="/admin"
							element={
								<PrivateRoute element={<AdminLayout />} roles={["admin"]} />
							}
						>
							<Route
								path="dashboard"
								element={
									<PrivateRoute element={<Dashboard />} roles={["admin"]} />
								}
							/>
							<Route
								path="students"
								element={
									<PrivateRoute element={<Students />} roles={["admin"]} />
								}
							/>
							<Route
								path="libirary"
								element={
									<PrivateRoute element={<Libirary />} roles={["admin"]} />
								}
							/>
							<Route
								path="store"
								element={<PrivateRoute element={<Store />} roles={["admin"]} />}
							/>
							<Route
								path="chapters/:chapterId?"
								element={
									<PrivateRoute element={<NewChapters />} roles={["admin"]} />
								}
							/>
							<Route
								path="diplomas"
								element={
									<PrivateRoute element={<Diplomas />} roles={["admin"]} />
								}
							/>

							<Route
								path="categories"
								element={
									<PrivateRoute element={<Categories />} roles={["admin"]} />
								}
							/>

							<Route
								path="chat/:senderId?"
								element={<PrivateRoute element={<Chat />} roles={["admin"]} />}
							/>
							<Route
								path="notifications"
								element={
									<PrivateRoute element={<Notifications />} roles={["admin"]} />
								}
							/>
							<Route
								path="policy"
								element={
									<PrivateRoute element={<Policy />} roles={["admin"]} />
								}
							/>
							<Route
								path="fqa"
								element={<PrivateRoute element={<FQA />} roles={["admin"]} />}
							/>
							<Route
								path="setting"
								element={
									<PrivateRoute element={<Settings />} roles={["admin"]} />
								}
							/>
						</Route>
					</Routes>
					<Toastar
						openSnackbar={toastar.open}
						snackbarMessage={toastar.message}
					/>
				</>
			)}
		</div>
	);
};

export default App;
