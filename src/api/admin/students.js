import API from "..";

export const createStudent = (formData) => API.post("/admin/student", formData);
export const getStudents = () => API.get("/admin/student");
export const getStudent = (id) => API.get("/admin/student/" + id);
export const updateStudent = (id, formData) =>
	API.patch("/admin/student/" + id, formData);
export const deleteStudent = (id) => API.delete("/admin/student/" + id);
