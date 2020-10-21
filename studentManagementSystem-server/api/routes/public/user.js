var express = require('express');

var router = express.Router();
var controller = require('../../controller/public/user');

router.post('/login', controller.login);
router.post('/changePassword', controller.changePassword);
router.post('/changePhone', controller.changePhone);

module.exports = router;
