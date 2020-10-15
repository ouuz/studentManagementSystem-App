var mongoose = require('mongoose');
var common = require('../../common');
var SelectedList = mongoose.model('selectedList');

module.exports.getSelectedList = function(req, res) {
  SelectedList.find({}, function (err, data) {
    if (err) {
      common.sendJsonResponse(res, 500, err);
      return;
    }
    console.log(data);
    common.sendResponse(res, 200, data);
  })
}