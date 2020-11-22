import * as actionTypes from "./actionTypes";
const initialState = [];

export default function todos(prevState = initialState, action) {
  const { ADD_TODO, EDIT_TODO, REMOVE_TODO, SET_ALL_TODOS } = actionTypes;
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
      return [...todosList, ...prevState];
    case ADD_TODO:
      // Add todo into first index of todos list
      return [
        {
          id: payload.id,
          description: payload.description,
          completed: payload.completed,
        },
        ...prevState,
      ];

    case EDIT_TODO:
      const newTodosContainModifiedTodo = prevState.map((todo) =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
      return newTodosContainModifiedTodo;

    case REMOVE_TODO:
      const newTodosContainRemovedTodo = prevState.filter(
        (todo) => todo.id !== payload.id
      );
      return newTodosContainRemovedTodo;

    default:
      return prevState;
  }
}
