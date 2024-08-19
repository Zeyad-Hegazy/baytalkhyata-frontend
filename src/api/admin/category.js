import API from "..";

export const createCategory = (formData) =>
	API.post("/admin/category", formData);

export const getCategories = () => API.get("/admin/category");

export const createCategoryItem = (formData) =>
	API.post("/admin/category/item", formData);

export const getCategoryItems = (id) => API.get("/admin/category/item/" + id);
