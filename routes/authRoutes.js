const express = require('express');
const passport = require('passport');
const router = express.Router();
const { googleAuth, googleAuthCallback } = require('../controllers/authController');

router.get('/auth/google', googleAuth);
router.get('/auth/google/callback', googleAuthCallback);

module.exports = router;
