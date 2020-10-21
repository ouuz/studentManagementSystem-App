var express = require('express');

var router = express.Router();
var controller = require('../../controller/teacher/studentInformationList');

router.get('/getStudentInformationList', controller.getStudentInformationList);
router.post('/addInformation', controller.addInformation);
router.post('/updateInformation', controller.updateInformation);
router.post('/deleteInformation', controller.deleteInformation);
router.post('/importInformationList', controller.importInformationList);

module.exports = router;
