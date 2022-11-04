const express = require('express');
const validateEmail = require('../middlewares/authorizations/validateEmail');
const validatePassword = require('../middlewares/authorizations/validatePassword');
const tokenGenerator = require('../utils/tokenGenerator');

const router = express.Router();

router.post('/', validateEmail, validatePassword, (req, res) => {
  const tokenG = tokenGenerator();
  return res.status(200).json({ token: tokenG });
});

module.exports = router;