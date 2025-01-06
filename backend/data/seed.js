const mongoose = require('mongoose');
const User = require('../models/user');
const Transaction = require('../models/transaction');
require('dotenv').config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    await User.deleteMany();
    await Transaction.deleteMany();

    const users = [];
    for (let i = 1; i <= 10; i++) {
      users.push({ name: `User${i}`, phoneNumber: `123456789${i}` });
    }
    const insertedUsers = await User.insertMany(users);

    const transactions = [];
    insertedUsers.forEach((user) => {
      for (let j = 1; j <= 5; j++) {
        transactions.push({
          status: ['success', 'pending', 'failed'][Math.floor(Math.random() * 3)],
          type: ['debit', 'credit'][Math.floor(Math.random() * 2)],
          transactionDate: new Date(),
          amount: Math.random() * 1000,
          userId: user._id,
        });
      }
    });
    await Transaction.insertMany(transactions);

    console.log('Data seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding data', error);
    process.exit(1);
  }
};

seedData();
