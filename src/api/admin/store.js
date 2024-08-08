import API from "..";

export const createGift = (formData) => API.post("/admin/product", formData);
export const getGifts = () => API.get("/admin/product");
export const getGift = (id) => API.get("/admin/product/" + id);
export const updateGift = (id, formData) =>
	API.patch("/admin/product/" + id, formData);
export const deleteGift = (id) => API.delete("/admin/product/" + id);
export const giftProductToStudent = (id, formData) =>
	API.patch("/admin/product/gift/" + id, formData);
