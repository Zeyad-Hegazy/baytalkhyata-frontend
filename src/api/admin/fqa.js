import API from "..";

export const getAnswersForQuestion = (question) =>
	API.get(`/admin/FQA`, { params: { question } });
