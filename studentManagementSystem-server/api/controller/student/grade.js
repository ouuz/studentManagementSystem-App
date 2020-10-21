var mongoose = require('mongoose');
var common = require('../common');

var Grade = mongoose.model('grade');

module.exports.getGrade = function (req, res) {
  var studentId = req.query.studentId;

  Grade.findOne({
    "studentId": studentId
  }, function (err, data) {
    if (err) {
      common.sendJsonResponse(res, 500, err);
      return;
    }
    console.log(data);
    common.sendResponse(res, 200, data);
  })
}