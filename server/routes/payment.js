const router = require('express').Router();
const { verifyCard } = require('../controllers/paymentController');
const auth = require('../middleware/auth');

router.post('/verify-card', auth, verifyCard);

module.exports = router;
