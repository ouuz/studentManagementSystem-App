var mongoose = require('mongoose');
var common = require('../common');
var Information = mongoose.model('information');

module.exports.login = function (req, res) {
  var user = req.query.user;
  var password = req.query.password;
  
  Information.findOne({
    "user": user
  }, function (err, data) {
    if (err) {
      common.sendJsonResponse(res, 500, err);
      return;
    }
    console.log(data);
    data.password === password 
    ? common.sendResponse(res, 200, data)
    : common.sendJsonResponse(res, 500, err);
  })
}

module.exports.changePassword = function (req, res) {
  var user = req.query.user
  var newPassword = req.query.newPassword


  Information.findOneAndUpdate({
    "user": user
  }, {
    $set: {
      password: newPassword
    }
  }, function (err, data) {
    if (err) {
      common.sendJsonResponse(res, 500, err);
      return;
    }
    console.log(data);
    common.sendResponse(res, 200, data);
  });
}

module.exports.changePhone = function (req, res) {
  var user = req.query.user
  var newPhone = req.query.newPhone

  Information.findOneAndUpdate({
    "user": user
  }, {
    $set: {
      phone: newPhone
    }
  }, function (err, data) {
    if (err) {
      common.sendJsonResponse(res, 500, err);
      return;
    }
    console.log(data);
    common.sendResponse(res, 200, data);
  });
}