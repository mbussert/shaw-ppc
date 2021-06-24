const router = require('express').Router();
const { Wall } = require('../../models');

router.get('/:id', async (req, res) => {
    // Find all wall orders by one customer (i.e. a customer can view their account)
console.log('wall routes get request')
    console.log(req.params.id);

    try {
      const wallData = await Wall.findAll( { where: { user_id: req.params.id } })
  
      if (!wallData) {
        res.status(404).json({ message: 'No wall orders found.' });
        return;
        console.log('no wall data here')
      }
  
      res.status(200).json(wallData);
      console.log('\n', "All of your orders have been successfully retrieved!", '\n')
      // console.log(wallData);

    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

module.exports = router;