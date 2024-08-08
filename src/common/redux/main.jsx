import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import { students } from "./students/reducer";
import auth from "./auth/reducer";
import { library } from "./libraryItmes/reducer";
import { toastar } from "./toastar/reducer";
import { gifts } from "./store/reducer";

const rootred = combineReducers({
	cartreducer,
	students,
	auth,
	library,
	gifts,
	toastar,
});

export default rootred;
