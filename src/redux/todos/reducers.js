import * as actionTypes from "./actionTypes";
const initialState = {
  list: [],
  status: "pending", // network request status for todos list - "idle" | "pending" | "successful" | "failed"
  error: false,
};

/**
 *  Todos reducer function
 * @param {Object} prevState - previous state
 * @param {Object} action - action details
 */
export default function todos(prevState = initialState, action) {
  const prevList = prevState.list;
  const {
    ADD_TODO,
    EDIT_TODO,
    REMOVE_TODO,
    SET_ALL_TODOS,
    TODOSLIST_NETWORK_STATUS,
  } = actionTypes;

  const { payload, type } = action;

  switch (type) {
    case SET_ALL_TODOS:
      const todosList = payload.map((item) => {
        return {
          id: item._id,
          description: item.description,
          completed: item.completed,
        };
      });
      return { ...prevState, list: todosList };

    case ADD_TODO:
      // Add todo into first index of todos list
      const newTodosList = [
        {
          id: payload.id,
          description: payload.description,
          completed: payload.completed,
        },
        ...prevList,
      ];
      return {
        ...prevState,
        list: newTodosList,
      };

    case EDIT_TODO:
      // select todo by its id and replace incoming data from action payload
      const newTodosContainModifiedTodo = prevState.list.map((todo) =>
        todo.id === payload.targetId ? { ...todo, ...payload.editedData } : todo
      );
      return { ...prevState, list: newTodosContainModifiedTodo };

    case REMOVE_TODO:
      const newTodosContainRemovedTodo = prevState.list.filter(
        (todo) => todo.id !== payload.id
      );
      return { ...prevState, list: newTodosContainRemovedTodo };

    case TODOSLIST_NETWORK_STATUS:
      // Controling access of action to manipulate other part of state
      let data = {};
      if (payload.hasOwnProperty("status"))
        data = { ...data, status: payload.status };
      if (payload.hasOwnProperty("error"))
        data = { ...data, error: payload.error };
      return { ...prevState, ...data };
    default:
      return prevState;
  }
}
