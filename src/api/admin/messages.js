import API from "..";

export const createMessage = (formData) => API.post("/message", formData);
export const getMessages = (id) => API.get(`/message/${id}`);
export const getMessagesList = () => API.get("/message/list");
