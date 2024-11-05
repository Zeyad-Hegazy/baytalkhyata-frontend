import API from "..";

export const createQuestion = (formData) => API.post("/admin/FQA", formData);

export const getAnswersForQuestion = (question) =>
	API.get(`/admin/FQA`, { params: { question } });
