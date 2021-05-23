const dotenv = require("dotenv");
// Configure env variable
dotenv.config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const {
  login,
  signup,
  passwordReset,
  verifyResetURL,
  resetPassword,
  verifySignup,
  getTransactions,
  addTransaction,
} = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => login(req, res));

app.post("/signup", (req, res) => signup(req, res));

app.post("/verify-signup", (req, res) => verifySignup(req, res));

app.post("/forgot-password", (req, res) => passwordReset(req, res));

app.post("/verify-resetURL", (req, res) => verifyResetURL(req, res));

app.post("/reset-password", (req, res) => resetPassword(req, res));

app.post("/get-transactions", (req, res) => getTransactions(req, res));

app.post("/add-transaction", (req, res) => addTransaction(req, res));

app.listen(PORT, () => {
  console.log("Server started and running on port", PORT);
});
