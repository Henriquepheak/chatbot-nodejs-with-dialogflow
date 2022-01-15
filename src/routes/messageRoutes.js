const { Router } = require('express');
const router = Router();
const { getMessage, getMessages } = require('../controllers/messages');

router.get('/messages', getMessages);
router.get('/messages/:id', getMessage);

module.exports = router;
