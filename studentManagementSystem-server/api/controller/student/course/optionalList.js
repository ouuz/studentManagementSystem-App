var mongoose = require('mongoose');
var common = require('../../common');
var OptionalList = mongoose.model('optionalList');

module.exports.getOptionalList = function(req, res) {
  OptionalList.find({}, function (err, data) {
    if (err) {
      common.sendJsonResponse(res, 500, err);
      return;
    }
    console.log(data);
    common.sendResponse(res, 200, data);
  })
}