// ISO Date - 2020-10-20 21:04:10
// 2020년 10월 20일 21시 04분 10초

const moment = require('moment');

const nowDateIso = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}

const nowDateKorean = () => {
  return moment().format('YYYY년 MM월 DD일 HH시 mm분 ss초');
}

module.exports = { moment, nowDateIso, nowDateKorean }
