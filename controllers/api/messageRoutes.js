const router = require('express').Router();
const { Message } = require('../../models');

router.post('/', async (req, res) => {
    // Post a message

    try {
        const newMessage = await Message.create(req.body);

        console.log(req.body);
    
        res.status(200).json([{ message: 'The message has been sent!' }, newMessage]);
        console.log('\n', "The message has been sent!", '\n');
    
      } catch (err) {
        res.status(500).json(err);
        console.log(err);
    
    }
});

module.exports = router;