const router = require('express').Router();
const { User, Wall } = require('../../models');

// These routes are for the /api/orders endpoint

router.get('/', async (req, res) => {
    // Find all wall orders

    try {
      const wallData = await Wall.findAll({
        include: [{ model: User, required: false }]
      })
  
      if (!wallData) {
        res.status(404).json({ message: 'No wall orders found.' });
        return;
      }
  
      res.status(200).json(wallData);
      console.log('\n', "All walls have been successfully retrieved!", '\n')
      // console.log(wallData);

    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

router.post('/', async (req, res) => {
    // Route to post an order

    if(req.session.loggedIn) {
      console.log("USER IS LOGGED IN")
      req.body.user_id = req.session.userId
    }

    try {
    const newWall = await Wall.create(req.body);

    res.status(200).json([{ message: 'The wall order was successfully created!' }, newWall]);
    console.log('\n', "The wall order was successfully created!", '\n');
    // console.log(newWall);

  } catch (err) {
    res.status(500).json(err);
    console.log(err);

  }

  });

module.exports = router;