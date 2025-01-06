const mongoose = require('mongoose');
const Transaction = require('../models/transaction');

const getTransactionsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const { status, type, from, to, page = 1, limit = 10 } = req.query;

    const match = { userId: new mongoose.Types.ObjectId(userId) }; // Convert userId to ObjectId

    if (status) match.status = status;
    if (type) match.type = type;
    if (from || to) {
      match.transactionDate = {};
      if (from) match.transactionDate.$gte = new Date(from);
      if (to) match.transactionDate.$lte = new Date(to);
    }

    const transactions = await Transaction.aggregate([
      { $match: match },
      { $sort: { transactionDate: -1 } },
      { $skip: (page - 1) * parseInt(limit) },
      { $limit: parseInt(limit) }
    ]);

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getAllTransactionsWithUserDetails = async (req, res) => {
  try {
    const { status, type, from, to, page = 1, limit = 10 } = req.query;

    const match = {};

    if (status) match.status = status;
    if (type) match.type = type;
    if (from || to) {
      match.transactionDate = {};
      if (from) match.transactionDate.$gte = new Date(from);
      if (to) match.transactionDate.$lte = new Date(to);
    }

    const transactions = await Transaction.aggregate([
      { $match: match },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'userDetails',
        },
      },
      { $unwind: '$userDetails' },
      { $sort: { transactionDate: -1 } },
      { $skip: (page - 1) * limit },
      { $limit: parseInt(limit) },
    ]);

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTransactionsByUserId, getAllTransactionsWithUserDetails };
