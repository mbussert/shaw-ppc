const router = require('express').Router();
const userRoutes = require('./userRoutes');
const calculatorRoutes = require('./calculatorRoutes')
const accountRoutes = require('./accountRoutes');
const messageRoutes = require('./messageRoutes')

router.use('/users', userRoutes);
router.use('/orders', calculatorRoutes);
router.use('/account', accountRoutes);
router.use('/message', messageRoutes);

module.exports = router;