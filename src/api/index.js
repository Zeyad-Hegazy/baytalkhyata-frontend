import axios from "axios";

const apiUrl = import.meta.env.VITE_HOST;

const API = axios.create({

	baseURL: apiUrl,
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
