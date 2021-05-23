const db = require("../config/db");

const userSchema = new db.Schema({
  email: String,
  password: String,
  transactions: [{ type: db.Schema.Types.ObjectId, ref: "Transaction" }],
  randomString: String,
  isActive: Boolean,
});

const User = db.model("User", userSchema);

module.exports = User;
