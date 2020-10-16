var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const scheduleMock = require('../data/public/schedule')

var scheduleSchema = new Schema({
  "id": String,
  "schedule": Array,
});

const schedule = mongoose.model('schedule', scheduleSchema)

schedule.find((err, data) => {
  if (!data.length) {
    for (let i = 0; i < scheduleMock.length; i++) {
      new schedule(scheduleMock[i]).save();
    }
    console.log('数据初始化成功');
  }
});

module.exports = schedule