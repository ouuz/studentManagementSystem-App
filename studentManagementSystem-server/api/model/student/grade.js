var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const gradeMock = require('../data/student/grade')

var gradeSchema = new Schema({
  studentId: String,
  averageGPA: String,
  totalCredit: Number,
  haveCredit: Number,
  repairingCredits: Number,
  ranking: String,
  gradeList: Array,
});

const grade = mongoose.model('grade', gradeSchema)

grade.find((err, data) => {
  if (!data.length) {
    for (let i = 0; i < gradeMock.length; i++) {
      new grade(gradeMock[i]).save();
    }
    console.log('数据初始化成功');
  }
});

module.exports = grade