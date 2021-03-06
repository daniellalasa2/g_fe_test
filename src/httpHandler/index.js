import { axiosInstance as axios } from "./interceptors";
import config from "./config";

const { URLs } = config;

/**
 * Get all todos and return a promise
 */
function getTodos() {
  return axios.get(URLs.getTodos);
}

/**
 * Add a todo
 *
 * @param {string} title - title of todo
 */
function addTodo(title) {
  return axios.post(URLs.addTodo, { description: title.toString() });
}

/**
 * Edit a todo by its id
 *
 * @param {string,int} id - id of todo
 * @param {obj} payload - todo parameters user wants to edit
 */
function editTodo(id, payload) {
  return axios.put(URLs.editTodo + id, { ...payload });
}

/**hd
 * Delete a todo by its id
 * @param {string,int} id - id of todo
 */
function removeTodo(id) {
  return axios.delete(URLs.removeTodo + id);
}

export { getTodos, addTodo, editTodo, removeTodo };
