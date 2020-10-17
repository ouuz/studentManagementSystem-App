var mongoose = require('mongoose');
var common = require('../common');

var OptionalList = mongoose.model('optionalList');
var SelectedList = mongoose.model('selectedList');

module.exports.getOptionalList = function (req, res) {
  var studentId = req.query.studentId;

  OptionalList.findOne({
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

module.exports.addCourse = function (req, res) {
  var student = req.body

  SelectedList.findOneAndUpdate({
    "studentId": student.studentId
  }, {
    $push: {
      selectedList: student.course
    }
  }, function (err, data) {
    if (err) {
      common.sendJsonResponse(res, 500, err);
      return;
    }

    OptionalList.findOneAndUpdate({
      "studentId": student.studentId
    }, {
      $pull: {
        optionalList: {
          serialNumber: student.course.serialNumber
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
  });
}

module.exports.deleteCourse = function (req, res) {
  var student = req.body

  console.log(req.body.studentId)
  SelectedList.findOneAndUpdate({
    "studentId": student.studentId
  }, {
    $pull: {
      selectedList: {
        serialNumber: student.course.serialNumber
      }
    }
  }, function (err, data) {
    if (err) {
      common.sendJsonResponse(res, 500, err);
      return;
    }

    OptionalList.findOneAndUpdate({
      "studentId": student.studentId
    }, {
      $push: {
        optionalList: student.course
      }
    }, function (err, data) {
      if (err) {
        common.sendJsonResponse(res, 500, err);
        return;
      }
      console.log(data);
      common.sendResponse(res, 200, data);
    });
  });
}