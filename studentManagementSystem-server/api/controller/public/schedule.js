var mongoose = require('mongoose');
var common = require('../common');
var Schedule = mongoose.model('schedule');

module.exports.getSchedule = function (req, res) {
  var id = req.query.id;
  
  Schedule.findOne({
    "id": id
  }, function (err, data) {
    if (err) {
      common.sendJsonResponse(res, 500, err);
      return;
    }
    console.log(data);
    common.sendResponse(res, 200, data);
  })
}