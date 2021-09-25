const express = require('express');
const { Signup, getUser, Signin } = require('../controller/user');
const router = express.Router();

router.post('/Signup', Signup);
router.post('/Signin', Signin);
router.get('/getUser', getUser)

module.exports = router;