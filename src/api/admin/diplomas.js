import API from "..";

export const createDiploma = (formData) => API.post("/admin/diploma", formData);
export const getDiplomas = () => API.get("/admin/diploma");
export const deleteDiploma = (id) => API.delete("/admin/diploma/" + id);
export const updateDiploma = (id, formData) =>
	API.patch("/admin/diploma/" + id, formData);
export const assignDiploma = (id, formData) =>
	API.patch("/admin/student/assign/" + id, formData);
