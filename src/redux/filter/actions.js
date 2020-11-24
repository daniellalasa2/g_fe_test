import * as actionTypes from "./actionTypes";
const { SET_FILTER } = actionTypes;

/**
 * This action changes the filter value
 * @param {string} param0 - type of filter: All | Incompleted | Completed
 */
export const setFilter = ({ filter }) => {
  return {
    type: SET_FILTER,
    payload: {
      filter: filter ? filter : "all",
    },
  };
};
