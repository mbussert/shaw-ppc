const router = require('express').Router();
const userRoutes = require('./userRoutes');
const calculatorRoutes = require('./calculatorRoutes')
const accountRoutes = require('./accountRoutes');

router.use('/users', userRoutes);
router.use('/orders', calculatorRoutes);
router.use('/account', accountRoutes);

module.exports = router;