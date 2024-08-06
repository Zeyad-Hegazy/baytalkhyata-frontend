import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import { students } from "./students/reducer";
import auth from "./auth/reducer";

const rootred = combineReducers({
	cartreducer,
	students,
	auth,
});

export default rootred;
