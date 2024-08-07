import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import { students } from "./students/reducer";
import auth from "./auth/reducer";
import { library } from "./libraryItmes/reducer";

const rootred = combineReducers({
	cartreducer,
	students,
	auth,
	library,
});

export default rootred;
