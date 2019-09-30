const express = require('express');
const router = express.Router();

/* CONTROLLERS */
const controllerMain = require('../controllers/main');

/* GET home page. */
router.get('/', controllerMain.index);

router.post('/', controllerMain.nickname);

module.exports = router;
