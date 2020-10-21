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

module.exports.addInformation = function (req, res) {
  var student = req.body

  StudentInformationList.findOneAndUpdate({
    "teacherId": student.teacherId
  }, {
    $push: {
      studentInformationList: student.information
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

module.exports.updateInformation = function (req, res) {
  var student = req.body

  StudentInformationList.findOneAndUpdate({
    "teacherId": student.teacherId
  }, {
    $set: {
      studentInformationList: student.information
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

module.exports.deleteInformation = function (req, res) {
  var teacherId = req.query.teacherId
  var studentId = req.query.studentId

  StudentInformationList.findOneAndUpdate({
    "teacherId": teacherId
  }, {
    $pull: {
      studentInformationList: {
        studentId: studentId
      }
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

module.exports.importInformationList = function (req, res) {
  var teacher = req.body

  StudentInformationList.findOneAndUpdate({
    "teacherId": teacher.teacherId
  }, {
    $set: {
      studentInformationList: teacher.studentInformationList
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