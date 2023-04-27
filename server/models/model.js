const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// goal amount => field => ['amount']
const goal_amount = new Schema({
  amount: { type: Number, default: 100 },
});

// transactions  => field => ['name', 'type', 'amount', 'date']
const transaction_model = new Schema({
  title: { type: String, default: 'Unknown' },
  type: { type: String },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
});

const GoalAmount = mongoose.model('goalAmount', goal_amount);
const Transaction = mongoose.model('transaction', transaction_model);

//exports.default = Transaction;
module.exports = {
  GoalAmount,
  Transaction,
};
