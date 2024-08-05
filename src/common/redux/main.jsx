import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import { students } from "./students/reducer";

const rootred = combineReducers({
	cartreducer,
	students,
});

export default rootred;
