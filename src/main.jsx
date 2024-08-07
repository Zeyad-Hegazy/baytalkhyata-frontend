import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./common/redux/store.jsx";

import "./index.scss";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
