const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

router.get('/', authRequired, ctrl.contacts.index);

module.exports = router;
