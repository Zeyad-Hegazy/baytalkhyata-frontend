import API from "..";

export const createPdfItem = (formData) => API.post("/admin/library", formData);
export const getPdfItems = () => API.get("/admin/library");
export const getPdfFile = (id) => API.get("/admin/library/" + id);
export const deletePdfFile = (id) => API.delete("/admin/library/" + id);
export const updatePdfFile = (id, formData) =>
	API.patch("/admin/library/" + id, formData);
