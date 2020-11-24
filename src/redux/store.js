import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import rootReducer from "./rootReducer";

/**
 * Configure store and middlewares
 * @param {object} initialState - initial state object ,could be an empty object
 */
function configureStore(initialState) {
  // You can use logger for debugging purposes
  const middleware = [
    thunk,
    // logger
  ];
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
  return store;
}
const store = configureStore();
export default store;
