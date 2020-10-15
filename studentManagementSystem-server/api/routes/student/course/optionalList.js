var express = require('express');

var router = express.Router();
var controller = require('../../../controller/student/course/optionalList');

router.get('/getOptionalList', controller.getOptionalList);

module.exports = router;
