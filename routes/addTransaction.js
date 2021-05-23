const User = require("../models/users");
const Transaction = require("../models/transactions");

const addTransaction = async (req, res) => {
  let transaction = new Transaction({
    type: req.body.type,
    amount: parseInt(req.body.amount),
    description: req.body.description,
    category: req.body.category,
    division: req.body.division,
    date: new Date(),
  });

  await transaction.save();
  let user = await User.findById(req.body.userId);
  if (user) {
    user.transactions.push(transaction);
    await user.save();
    res.json({
      success: true,
      message: "Transaction has been added to user successfully",
    });
  } else {
    res.json({
      success: false,
      message: "Error on adding transaction to user.",
    });
    console.log("User not found");
  }
};

module.exports = addTransaction;
