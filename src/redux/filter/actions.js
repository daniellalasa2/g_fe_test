import * as actionTypes from "./actionTypes";
const { SET_FILTER } = actionTypes;

// Filter types: All, Incompleted, Completed
// This action changes the filter value
export const setFilter = ({ filter }) => {
  return {
    type: SET_FILTER,
    payload: {
      filter: filter ? filter : "all",
    },
  };
};
