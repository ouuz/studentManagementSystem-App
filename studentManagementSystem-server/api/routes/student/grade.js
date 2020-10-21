var express = require('express');

var router = express.Router();
var controller = require('../../controller/student/grade');

router.get('/getGrade', controller.getGrade);

module.exports = router;
