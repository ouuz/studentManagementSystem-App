var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const studentInformationListMock = require('../data/teacher/studentInformationList')

var studentInformationListSchema = new Schema({
  teacherId: String,
  studentInformationList: Array
});

const studentInformationList = mongoose.model('studentInformationList', studentInformationListSchema)

studentInformationList.find((err, data) => {
  if (!data.length) {
    for (let i = 0; i < studentInformationListMock.length; i++) {
      new studentInformationList(studentInformationListMock[i]).save();
    }
    console.log('数据初始化成功');
  }
});

module.exports = studentInformationList