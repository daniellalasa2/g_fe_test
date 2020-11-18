import { combineReducers } from "redux";
import filter from "./filter/reducers";
import todos from "./todos/reducers";

export default combineReducers({todos,filter});
