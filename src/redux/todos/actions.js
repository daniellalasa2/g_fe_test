import * as actionTypes from "./actionTypes";
import * as http from "../../httpHandler/index";
import { generateId as generateTempId } from "../../utils/generateId";

const {
  SET_ALL_TODOS,
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TODOSLIST_NETWORK_STATUS,
} = actionTypes;

/**
 * Fill todosList state array
 * @param {string} todosList - list of todos getting from server
 */
export const setAllTodos = (todosList) => {
  return {
    type: SET_ALL_TODOS,
    payload: todosList,
  };
};

/**
 * Handle todos list network status
 * @param {string} status - "idle" | "pending" | "successful" | "failed"
 * @param {boolean} error - true: if any http request failed, false: if each http request is successful
 */
export const toggleTodosListNetworkStatus = (params) => {
  return {
    type: TODOSLIST_NETWORK_STATUS,
    payload: params,
  };
};

/**
 * Add a todo to the state
 * @param {string} id - A random id for todo item
 * @param {string} description - title of todo
 * @param {boolean} completed - completion status of task
 */
export const addTodo = ({ id, description, completed }) => {
  return {
    type: ADD_TODO,
    payload: {
      id,
      description,
      completed,
    },
  };
};
/**
 * Selects a todo and edits its value
 * @param {string} id - target todo id
 * @param {object} data - todo details that going to be updated
 */
export const editTodo = (id, data) => {
  return {
    type: EDIT_TODO,
    payload: {
      targetId: id,
      editedData: data,
    },
  };
};

/**
 * Removes a todo by its id
 * @param {string} id
 */
export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: id,
    },
  };
};

// Async actions (with API call)

/**
 * Get todos list from server and fill the state object
 */
export const setAllTodosWithApiCall = () => async (dispatch) => {
  dispatch(toggleTodosListNetworkStatus({ status: "pending" }));
  http
    .getTodos()
    .then((res) => {
      const todosList = res.data.data.reverse(); // Sort from latest to oldest
      dispatch(toggleTodosListNetworkStatus({ status: "idle", error: false }));
      if (todosList.length > 0) {
        dispatch(setAllTodos(todosList));
      }
    })
    .catch((err) => {
      console.error("Getting list of todo from server error: ", err);
    });
};

/**
 * Add a todo to the server
 * @param {string} param0 - title of todo
 */
export const addTodoWithApiCall = ({ description }) => async (dispatch) => {
  const tempId = generateTempId().toString();
  dispatch(addTodo({ id: tempId, description, completed: false }));
  http
    .addTodo(description)
    .then((res) => {
      const { _id, description, completed } = res.data.data;
      dispatch(editTodo(tempId, { id: _id, description, completed }));
    })
    .catch((err) => {
      dispatch(toggleTodosListNetworkStatus({ status: "idle", error: true }));
      dispatch(setAllTodosWithApiCall()); // Get todosList from the server again if error happened
      console.error("Add todo error: ", err);
    });
};

/**
 * Edit a todo and save it on server
 * @param {string} id
 * @param {object} data - content of todo that going to be edited
 */
export const editTodoWithApiCall = (id, data) => async (dispatch) => {
  dispatch(editTodo(id, data));
  http
    .editTodo(id, data)
    .then((res) => {
      const { _id, description, completed } = res.data.data;
      dispatch(editTodo({ id: _id, description, completed }));
    })
    .catch((err) => {
      dispatch(toggleTodosListNetworkStatus({ status: "idle", error: true }));
      dispatch(setAllTodosWithApiCall()); // Get todosList from the server again if error happened
      console.error("Edit todo error: ", err);
    });
};

/**
 * Remove a todo from serve by its id
 * @param {string} id
 */
export const removeTodoWithApiCall = (id) => async (dispatch) => {
  dispatch(removeTodo(id));
  http
    .removeTodo(id)
    .then((res) => {})
    .catch((err) => {
      dispatch(toggleTodosListNetworkStatus({ status: "idle", error: true }));
      dispatch(setAllTodosWithApiCall()); // Get todosList from the server again if error happened
      console.error("Remove todo error: ", err);
    });
};
