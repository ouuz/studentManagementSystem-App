var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const optionalListMock = require('../data/student/optionalList')

var optionalListSchema = new Schema({
  name: String,
  category: String,
  teacher: String,
  credits: Number
});

const optionalList = mongoose.model('optionalList', optionalListSchema)

optionalList.find((err, data) => {
  if (!data.length) {
    for (let i = 0; i < optionalListMock.length; i++) {
      new optionalList(optionalListMock[i]).save();
    }
    console.log('数据初始化成功');
  }
});

module.exports = optionalList