import API from "..";

export const createCategory = (formData) =>
	API.post("/admin/category", formData);

export const getCategories = () => API.get("/admin/category");
