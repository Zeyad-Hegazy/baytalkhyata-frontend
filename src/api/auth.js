import API from "./index";

export const logIn = (formData) => API.post("/auth/login", formData);
export const logOut = () => API.post("/auth/logout");
