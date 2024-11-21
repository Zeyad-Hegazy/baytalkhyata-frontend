import API from "..";

export const createChapter = (formData) => API.post("/admin/chapter", formData);
export const addLevelToChapter = (id, formData) =>
	API.patch("admin/chapter/" + id, formData);

export const addItemToLevel = (id, formData) =>
	API.patch("/admin/chapter/level/item/" + id, formData);

export const deleteLevelItem = (id) =>
	API.delete("/admin/chapter/level/item/" + id);

export const deleteLevel = (id) => API.delete("/admin/chapter/level/" + id);

export const deleteChapter = (id) => API.delete("/admin/chapter/" + id);

export const updateChapter = (id, formData) =>
	API.patch("/admin/chapter/update/" + id, formData);

export const updateLevel = (id, formData) =>
	API.patch("/admin/chapter/level/" + id, formData);

export const updateLevelItem = (id, formData) =>
	API.patch("/admin/chapter/level/item/update/" + id, formData);

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
