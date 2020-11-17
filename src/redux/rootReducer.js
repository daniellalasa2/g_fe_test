import todosReducer from "./todos/reducers";
import filterReducer from "./filter/reducers";
import { combineReducers } from "redux";

export default combineReducers({
    todos: todosReducer,
    filter: filterReducer
});
