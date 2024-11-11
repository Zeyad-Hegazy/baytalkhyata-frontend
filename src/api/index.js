import axios from "axios";

// import { productionHost, developmentHost } from "../constants/host";

// const API = axios.create({
// 	baseURL: `http://localhost:3000/api/v1`,
// });
const API = axios.create({
	baseURL: `https://memories-i47i.onrender.com/api/v1`,
});

API.interceptors.request.use((req) => {
	if (localStorage.getItem("auth")) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem("auth")).token
		}`;
	}
	return req;
});

export default API;
