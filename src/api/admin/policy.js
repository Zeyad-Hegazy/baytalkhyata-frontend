import API from "..";

export const createPolicy = (formData) => API.post("/admin/policy", formData);

export const getPolicies = () => API.get("/admin/policy");

export const getPolicy = (id) => API.get("/admin/policy/" + id);

export const updatePolicy = (id) => API.patch("/admin/policy/" + id);

export const deletePolicy = (id) => API.delete("/admin/policy/" + id);
