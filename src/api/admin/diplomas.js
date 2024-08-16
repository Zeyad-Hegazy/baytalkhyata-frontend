import API from "..";

export const createDiploma = (formData) => API.post("/admin/diploma", formData);
export const getDiplomas = () => API.get("/admin/diploma");
