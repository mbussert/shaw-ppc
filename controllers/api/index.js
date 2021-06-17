const router = require('express').Router();
const userRoutes = require('./userRoutes');
const calculatorRoutes = require('./calculatorRoutes')

router.use('/users', userRoutes);
router.use('/orders', calculatorRoutes);

module.exports = router;