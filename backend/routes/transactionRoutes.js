const express = require('express');
const {
  getTransactionsByUserId,
  getAllTransactionsWithUserDetails,
} = require('../controllers/transactionController');

const router = express.Router();

router.get('/user/:userId', getTransactionsByUserId);
router.get('/all', getAllTransactionsWithUserDetails);

module.exports = router;
