import { configureStore } from "@reduxjs/toolkit";
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

import rootred from "./main";

import checkTokenExpirationMiddleware from "../../middlewares/checkTokenExpirationMiddleware";

const store = configureStore({
	reducer: rootred,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(checkTokenExpirationMiddleware),
});

export default store;
