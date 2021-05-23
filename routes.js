const login = require("./routes/login");
const signup = require("./routes/signup");
const passwordReset = require("./routes/passwordReset");
const verifyResetURL = require("./routes/verifyResetURL");
const resetPassword = require("./routes/resetPassword");
const verifySignup = require("./routes/verifySignup");
const getTransactions = require("./routes/getTransactions");
const addTransaction = require("./routes/addTransaction");

module.exports = {
  login,
  signup,
  passwordReset,
  verifyResetURL,
  resetPassword,
  verifySignup,
  getTransactions,
  addTransaction,
};
