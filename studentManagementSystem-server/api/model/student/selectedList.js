var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const selectedListMock = require('../data/student/selectedList')

var selectedListSchema = new Schema({
  name: String,
  category: String,
  serialNumber: String,
  teacher: String,
  credits: Number,
  booking: Boolean,
  count: Number
});

const selectedList = mongoose.model('selectedList', selectedListSchema)

selectedList.find((err, data) => {
  if (!data.length) {
    for (let i = 0; i < selectedListMock.length; i++) {
      new selectedList(selectedListMock[i]).save();
    }
    console.log('数据初始化成功');
  }
});

module.exports = selectedList