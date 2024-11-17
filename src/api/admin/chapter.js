import API from "..";

export const createChapter = (formData) => API.post("/admin/chapter", formData);
export const addLevelToChapter = (id, formData) =>
	API.patch("admin/chapter/" + id, formData);

export const addItemToLevel = (id, formData) =>
	API.patch("/admin/chapter/level/item/" + id, formData);

export const createQuiz = (formData) =>
	API.patch("/admin/chapter/quiz", formData);

export const getChapterLevels = (chapterId) =>
	API.get("/admin/chapter/levels/" + chapterId);

export const getlevelSections = (levelId) =>
	API.get("/admin/chapter/level/" + levelId);

export const getSectionItem = (itemId) =>
	API.get("/admin/chapter/level/item/" + itemId);

export const getDiplomaChapters = (diplomaId) =>
	API.get("/admin/chapter/" + diplomaId);
