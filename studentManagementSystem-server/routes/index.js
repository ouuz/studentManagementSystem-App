var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/'; // 本地数据库地址

mongoose.connect(url, { useNewUrlParser: true });

db = mongoose.connection;
db.on('connected', () => {
  console.log('MongoDB connected success ');
});

db.on('errror', () => {
  console.error('MongoDB connected fail');
});

db.on('disconnected', () => {
  console.log('MongoDB connected to disconnected');
});

module.exports = router;


