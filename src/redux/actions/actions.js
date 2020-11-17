import * as actionTypes from "./actionTypes";

export function toggleLoading(value) {
    return {
        type: actionTypes.ADD_TODO,
        payload: value,
    };
}
export function successSubmit() {
    return {
        type: actionTypes.DELETE_TODO,
    };
}
export function failed(error) {
    return {
        type: actionTypes.EDIT_TOD,
        payload: error,
    };
}
export function toggleColumnsLoading() {
    return {
        type: actionTypes.CHANGE_TODO_STATUS,
        payload: true,
    };
}
export function successLoadColumns(result) {
    return {
        type: actionTypes.FILTER_CHANGED,
        payload: result,
    };
}

  

