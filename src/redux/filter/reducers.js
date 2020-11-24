import * as actionTypes from "./actionTypes";
const initialState = { filter: "all" };

/**
 *  Filter reducer function
 * @param {object} prevState  - previous filter state
 * @param {object} action - action details
 */
export default function filter(prevState = initialState, action) {
  const { SET_FILTER } = actionTypes;
  const { payload, type } = action;
  switch (type) {
    case SET_FILTER:
      return {
        filter: payload.filter,
      };

    default:
      return prevState;
  }
}
