import API from "..";

export const createConversation = (formData) =>
	API.post("/conversation", formData);

export const getConversations = () => API.get("/conversation");

export const getConversation = (firstId, secondId) =>
	API.get(`/conversation/${firstId}/${secondId}`);
