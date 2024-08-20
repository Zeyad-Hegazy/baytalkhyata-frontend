import API from "..";

export const createChapter = (formData) => API.post("/admin/chapter", formData);
export const addLevelToChapter = (id, formData) =>
	API.patch("admin/chapter/" + id, formData);

export const createQuiz = (formData) =>
	API.post("/admin/chapter/quiz", formData);
