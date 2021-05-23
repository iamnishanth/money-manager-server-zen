const db = require("../config/db");

const transactionSchema = new db.Schema({
  type: String,
  amount: Number,
  description: String,
  category: String,
  division: String,
  date: Date,
});

const Transaction = new db.model("Transaction", transactionSchema);

module.exports = Transaction;
