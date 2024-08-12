import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootred from "./main";

import checkTokenExpirationMiddleware from "../../middlewares/checkTokenExpirationMiddleware";
import loadingMiddleware from "../../middlewares/loadingMiddleware";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth", "loading"],
};

const persistedReducer = persistReducer(persistConfig, rootred);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(checkTokenExpirationMiddleware, loadingMiddleware),
});

const persistor = persistStore(store);

export { store, persistor };
