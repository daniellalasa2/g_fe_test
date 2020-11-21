/**
 * Customized error message handling
 *
 * To show a specific message for:
 * "specific status code" use the following structure:
 * {
 *     isRange: true
 *     code: <Array>
 * }
 *
 * "range of status codes" use following structure:
 * {
 *     isRange: false
 *     code: <Array>
 * }
 *
 * "various status codes" use following structure:
 * {
 *     isRange: false
 *     code: <Number>
 * }
 *
 *  */

export default [
  {
    isRange: true,
    code: [100, 199],
    message: "Informatiom recieved",
    success: true,
  },
  {
    isRange: true,
    code: [200, 299],
    message: "Successful",
    success: true,
  },
  {
    isRange: true,
    code: [300, 399],
    message: "Redirected",
    success: true,
  },
  {
    isRange: false,
    code: 400,
    message: "Bad request",
    success: false,
  },
  {
    isRange: false,
    code: 401,
    message: "Unauthorized",
    success: false,
  },
  {
    isRange: false,
    code: 403,
    message: "Forbidden",
    success: false,
  },
  {
    isRange: false,
    code: 404,
    message: "Not found",
    success: false,
  },
  {
    isRange: false,
    code: 405,
    message: "Method Not Allowed",
    success: false,
  },
  {
    isRange: true,
    code: [406, 407],
    message: "",
    success: false,
  },
  {
    isRange: false,
    code: 408,
    message: "Request timeout, try again",
    success: false,
  },
  {
    isRange: false,
    code: 409,
    message: "Conflicted with current state",
    success: false,
  },
  {
    isRange: true,
    code: [410, 428],
    message: "Bad request",
    success: false,
  },
  {
    isRange: false,
    code: 429,
    message: "Too many requests",
    success: false,
  },
  {
    isRange: true,
    code: [430, 499],
    message: "Bad request",
    success: false,
  },
  {
    isRange: false,
    code: 500,
    message: "Internal server error",
    success: false,
  },
  {
    isRange: true,
    code: [501, 502],
    message: "Server error, try later",
    success: falses,
  },
  {
    isRange: false,
    code: 503,
    message: "Service unavailable",
  },
  {
    isRange: true,
    code: [504, 599],
    message: "Server error",
  },
];
