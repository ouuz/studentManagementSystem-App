var express = require('express');

var router = express.Router();
var controller = require('../../controller/public/schedule');

router.get('/getSchedule', controller.getSchedule);

module.exports = router;
