import * as actionTypes from "./actionTypes";
const initialState = [];

function newTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1;
}

export default function todos(prevState = initialState, action){
    const {ADD_TODO, EDIT_TODO, REMOVE_TODO} = actionTypes;
    const {payload, type} = action;
    switch(type){

        case ADD_TODO:
            return [
                ...prevState,
                {
                    id: newTodoId(prevState),
                    title: payload.title
                }
            ];

        case EDIT_TODO:
            const newTodosContainModifiedTodo = prevState.map((todo) => todo.id === payload.id ? {...todo, ...payload} : todo);
            return newTodosContainModifiedTodo;
            
        case REMOVE_TODO:
            const newTodosContainRemovedTodo = prevState.map((todo) => todo.id !== payload.id);
            return newTodosContainRemovedTodo;

        default: return prevState;
    }
}