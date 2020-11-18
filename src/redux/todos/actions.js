import * as actionTypes from "./actionTypes";
const {ADD_TODO,EDIT_TODO,REMOVE_TODO} = actionTypes;


export const addTodo = (data = {})=>{
    const {title} = data;
    return {
        type: ADD_TODO,
        payload: {
            title: title,
            completedStatus: false
        }
    }
}

export const editTodo = (data = {})=>{
    const {id, title, completedStatus} = data;
    return {
        type: EDIT_TODO,
        payload: data
    }
};

export const removeTodo = (data = {})=>{
    const {id} = data;
    return {
        type: REMOVE_TODO,
        payload:{
            id: id
        }
    }
}