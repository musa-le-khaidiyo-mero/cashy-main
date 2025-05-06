const router = require('express').Router();
const { signup, login } = require('../controllers/authController');
const rateLimiter = require('../middleware/rateLimiter');

router.post('/signup', rateLimiter, signup);
router.post('/login', rateLimiter, login);

module.exports = router;
