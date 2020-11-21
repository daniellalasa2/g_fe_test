import { axios } from "axios";
import errMessages from "./errorMessages";
import config from "./config";

/**
 * process status codes and return appropriate result for error handling.
 *
 * @param {int} statusCode - The integer in question
 */
function processStatus(statusCode) {
  const resultObj = { success: true, message: null };
  const statusObj = errMessages.filter((item) => {
    if (item.isRange) {
      if (item.code[0] <= statusCode || item.code[1] >= statusCode) {
        return item;
      }
    } else {
      if (Array.isArray(item.code) && item.code.indexOf(statusCode) > -1) {
        return item;
      } else if (item.code === statusCode) {
        return item;
      }
    }
    return item;
  });
  resultObj.success = statusObj.success;
  resultObj.message = statusObj.message;
  return resultObj;
}

// Axios request default configs
const ax = axios.create({
  baseURL: config.BASEURL,
  headers: {
    Authorization: config.MOCK_TOKEN,
    "Content-Type": "application/json",
  },
  validateStatus: (status) => {
    const { success } = processStatus(status);
    return success;
  },
  timeout: 10000, // 10s request timeout
});

// Error handling for http responses
ax.interceptors.response.use(
  (res) => {
    const { code, message } = processStatus(res.status);
    res.status = code;
    res.statusText = message;
    return res;
  },
  (err) => {
    return Promise.reject(err.status);
  }
);

export default ax;
