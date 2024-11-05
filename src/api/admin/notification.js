import API from "..";

export const sendNotification = (formData) =>
	API.post("/admin/send-notification", formData);
