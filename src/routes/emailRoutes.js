const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/emails', emailController.addEmail);
router.get('/emails', emailController.listEmails);

module.exports = router;
