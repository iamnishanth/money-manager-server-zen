const User = require("../models/users");

const getTransactions = async (req, res) => {
  let oneYear = new Date();
  let oneMonth = new Date();
  let currentDay = new Date();
  let oneWeek = new Date();
  oneWeek.setDate(oneWeek.getDate() - 7);
  oneMonth.setDate(oneMonth.getDate() - 30);
  oneYear.setDate(oneYear.getDate() - 365);
  try {
    let oneYearRecord = await User.findById(req.body.id).populate({
      path: "transactions",
      match: { date: { $gte: new Date(oneYear), $lte: new Date(currentDay) } },
    });
    let oneMonthRecord = await User.findById(req.body.id).populate({
      path: "transactions",
      match: { date: { $gte: new Date(oneMonth), $lte: new Date(currentDay) } },
    });
    let oneWeekRecord = await User.findById(req.body.id).populate({
      path: "transactions",
      match: { date: { $gte: new Date(oneWeek), $lte: new Date(currentDay) } },
    });
    res.json({ success: true, oneYearRecord, oneMonthRecord, oneWeekRecord });
  } catch {
    res.json({ success: false });
  }
};

module.exports = getTransactions;
