var express = require('express');

var router = express.Router();
var controller = require('../../controller/teacher/studentInformationList');

router.get('/getStudentInformationList', controller.getStudentInformationList);

module.exports = router;
