var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const informationMock = require('../data/public/user')

var informationSchema = new Schema({
  name: String,
  gender: String,
  grade: String,
  userName: String,
  password: String,
  college: String,
  phone: String
});

const information = mongoose.model('information', informationSchema)

information.find((err, data) => {
  if (!data.length) {
    for (let i = 0; i < informationMock.length; i++) {
      new information(informationMock[i]).save();
    }
    console.log('数据初始化成功');
  }
});

module.exports = information