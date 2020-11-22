import * as actionTypes from "./actionTypes";
import * as http from "../../httpHandler/index";
const { SET_ALL_TODOS, ADD_TODO, EDIT_TODO, REMOVE_TODO } = actionTypes;

export const setAllTodos = (todosList) => {
  return {
    type: SET_ALL_TODOS,
    payload: todosList,
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

export const editTodo = (data) => {
  return {
    type: EDIT_TODO,
    payload: data,
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
  http
    .getTodos()
    .then((res) => {
      const todosList = res.data.data;
      if (res.data.data.length > 0) {
        dispatch(setAllTodos(todosList));
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const addTodoWithApiCall = ({ description }) => async (dispatch) => {
  http
    .addTodo(description)
    .then((res) => {
      const { _id, description, completed } = res.data.data;
      dispatch(addTodo({ id: _id, description, completed }));
    })
    .catch((err) => {
      console.error(err);
    });
};

export const editTodoWithApiCall = (id, data) => async (dispatch) => {
  http
    .editTodo(id, data)
    .then((res) => {
      const { _id, description, completed } = res.data.data;
      dispatch(editTodo({ id: _id, description, completed }));
    })
    .catch((err) => {
      console.error(err);
    });
};

export const removeTodoWithApiCall = (id) => async (dispatch) => {
  http
    .removeTodo(id)
    .then((res) => {
      const { success } = res.data;
      if (success) dispatch(removeTodo(id));
    })
    .catch((err) => {
      console.error(err);
    });
};
