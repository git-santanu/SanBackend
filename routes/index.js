const express = require('express');
const router = express.Router();


router.use(require('../routes/employee'));

module.exports = router