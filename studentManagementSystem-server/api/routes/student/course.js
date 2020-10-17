var express = require('express');

var router = express.Router();
var controller = require('../../controller/student/course')

router.get('/getOptionalList', controller.getOptionalList);
router.get('/getSelectedList', controller.getSelectedList);
router.post('/addCourse', controller.addCourse);
router.post('/deleteCourse', controller.deleteCourse);

module.exports = router;
