function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function horiYear(date){
var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

return [year, month, day].map(formatNumber).join('-')
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  string2Date: string2Date,
  forTime: forTime,
  nowTime: nowTime,
  formatDate:formatDate,
  getMonth:getMonth,
  formatYear:formatYear,
  horiYear:horiYear
}

function string2Date(str) {
  return new Date(Date.parse(str.replace(/-/g, "/")))
}
// 获取时间的分钟数 ：2017-02-24 10:47:14 -> 10:47
function forTime(date) {
  var hour = date.getHours()
  var minute = date.getMinutes()

  return [hour, minute].map(formatNumber).join(':')
}

function nowTime() {
  var date = new Date()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [hour, minute].map(formatNumber).join(':')
}

function formatYear(date){
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()

  return year+'年'+month+'月'+day+' '+[hour, minute].map(formatNumber).join(':')
}

function getMonth(date){
  var month = date.getMonth() + 1
  var day = date.getDate()
  return month+'月'+day+'日'
}

function formatDate(date){
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  return month+'月'+day+'日'+' '+[hour, minute].map(formatNumber).join(':')
}