var express = require('express');

var router = express.Router();
var controller = require('../../../controller/student/course/selectedList');

router.get('/getSelectedList', controller.getSelectedList);

module.exports = router;
