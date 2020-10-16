var mongoose = require('mongoose');
var common = require('../../common');
var SelectedList = mongoose.model('selectedList');

module.exports.getSelectedList = function (req, res) {
  var studentId = req.query.studentId;

  SelectedList.findOne({
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