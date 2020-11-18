import todosReducer from "./todos/reducers";
import { combineReducers } from "redux";
// import filterReducer from "./filter/reducers";
import todos from "./todos/reducers";

export default combineReducers({
    todos//,filter
});
