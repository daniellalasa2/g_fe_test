import * as actionTypes from "./actionTypes";
const { SET_FILTER } = actionTypes;

// Filter types: All, Incompleted, Completed
// This action changes the filter value
export const setFilter = (data = {}) => {
  const { filter } = data;
  return {
    type: SET_FILTER,
    payload: {
      filter: filter ? filter : "all",
    },
  };
};
