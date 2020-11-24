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

export const setAllTodos = (todosList) => {
  return {
    type: SET_ALL_TODOS,
    payload: todosList,
  };
};

/**
 * Handle todos list network status
 * @param {string} status - "idle" | "pending" | "successful" | "failed"
 */
export const toggleTodosListNetworkStatus = (status) => {
  return {
    type: TODOSLIST_NETWORK_STATUS,
    payload: {
      status: status,
    },
  };
};
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

export const editTodo = (id, data) => {
  return {
    type: EDIT_TODO,
    payload: {
      targetId: id,
      editedData: data,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: id,
    },
  };
};

// Async actions (with API call)
export const setAllTodosWithApiCall = () => async (dispatch) => {
  dispatch(toggleTodosListNetworkStatus("pending"));
  http
    .getTodos()
    .then((res) => {
      const todosList = res.data.data.reverse(); // Sort from latest to oldest
      dispatch(toggleTodosListNetworkStatus("idle"));
      if (todosList.length > 0) {
        dispatch(setAllTodos(todosList));
      }
    })
    .catch((err) => {
      console.error("Getting list of todo from server error: ", err);
    });
};

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
      dispatch(setAllTodosWithApiCall()); // Get todosList from the server again if error happened
      console.error("Add todo error: ", err);
    });
};

export const editTodoWithApiCall = (id, data) => async (dispatch) => {
  dispatch(editTodo(id, data));
  http
    .editTodo(id, data)
    .then((res) => {
      const { _id, description, completed } = res.data.data;
      dispatch(editTodo({ id: _id, description, completed }));
    })
    .catch((err) => {
      dispatch(setAllTodosWithApiCall()); // Get todosList from the server again if error happened
      console.error("Edit todo error: ", err);
    });
};

export const removeTodoWithApiCall = (id) => async (dispatch) => {
  dispatch(removeTodo(id));
  http
    .removeTodo(id)
    .then((res) => {})
    .catch((err) => {
      dispatch(setAllTodosWithApiCall()); // Get todosList from the server again if error happened
      console.error("Remove todo error: ", err);
    });
};
