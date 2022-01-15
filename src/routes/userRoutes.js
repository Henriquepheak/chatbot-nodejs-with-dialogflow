const { Router } = require('express');
const router = Router();
const { getSummary } = require('../controllers/user');

router.get('/summary', getSummary);

module.exports = router;
