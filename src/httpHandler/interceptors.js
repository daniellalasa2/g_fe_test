import axios from "axios";
import config from "./config";
import errMessages from "./errorMessages";
/**
 * process status codes and return appropriate result based on erorMessages config file for error handling.
 *
 * @param {int} statusCode
 */
function processStatus(statusCode) {
  const resultObj = { success: false, message: null, code: statusCode };
  const statusObj = errMessages.filter((item) => {
    //Check if item is a range then check is statusCode falls in the range or not
    if (item.isRange) {
      if (item.code[0] <= statusCode && item.code[1] >= statusCode) {
        return item;
      }
    } else {
      //Check if item type is not range but contains various of status codes
      //then check if statusCode is in the array or not
      if (Array.isArray(item.code) && item.code.indexOf(statusCode) > -1) {
        return item;
      } else if (item.code === statusCode) {
        return item;
      }
    }
  });
  resultObj.success = statusObj[0].success;
  resultObj.message = statusObj[0].message;
  return resultObj;
}

// Axios request default configs
const axiosInstance = axios.create({
  baseURL: config.BASEURL,
  headers: {
    Authorization: config.MOCK_TOKEN,
    "Content-Type": "application/json",
  },
  validateStatus: (status) => {
    const { success } = processStatus(status);
    return success;
  },
  timeout: 20000, // 20s timeout for requests
});

// Error handling for http responses
axiosInstance.interceptors.response.use(
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

export { axiosInstance };
