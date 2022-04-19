const { Router } = require('express');
const customers = require('./customers');
const actions = require('./actions');
const transactions = require('./transactions');

const router = Router();

router.use('/customers', customers);
router.use('/actions', actions);
router.use('/transactions', transactions);

module.exports = router;
