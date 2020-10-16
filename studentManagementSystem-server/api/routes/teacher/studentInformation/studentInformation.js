var express = require('express');

var router = express.Router();
var controller = require('../../../controller/teacher/studentInformation/studentInformationList');

router.get('/getStudentInformationList', controller.getStudentInformationList);

module.exports = router;
