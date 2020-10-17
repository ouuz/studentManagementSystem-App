var mongoose = require('mongoose');
var common = require('../common');
var StudentInformationList = mongoose.model('studentInformationList');

module.exports.getStudentInformationList = function (req, res) {
  var teacherId = req.query.teacherId;
  
  StudentInformationList.findOne({
    "teacherId": teacherId
  }, function (err, data) {
    if (err) {
      common.sendJsonResponse(res, 500, err);
      return;
    }
    console.log(data);
    common.sendResponse(res, 200, data);
  })
}