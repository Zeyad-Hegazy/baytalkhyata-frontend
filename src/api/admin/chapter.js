import API from "..";

export const createChapter = (formData) => API.post("/admin/chapter", formData);
export const addLevelToChapter = (id, formData) =>
	API.patch("admin/chapter/" + id, formData);

export const createQuiz = (formData) =>
	API.patch("/admin/chapter/quiz", formData);

export const getChapterLevels = (chapterId) =>
	API.get("/admin/chapter/levels/" + chapterId);
