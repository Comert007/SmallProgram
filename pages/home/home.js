var util = require('../../utils/util.js')
var toast = require('../../utils/toast.js')
var interval = null


Page({
  data: {
    date: '',
    week: '',
    time: ['10:00', '18:00'],
    current: '',
    attendance: '',
    leave: '',
    over: '',
    out: ''
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    var that = this;
    toast.showLoadToast(),
    wx.request({
      url: 'https://xiaocx.windward.cn//?a=summary',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        var result = res.data;
        var data = result.data;
        if (result.status == 1) {
          console.log(result)
          var pretime = util.string2Date(data.pre_clock_time);
          var lasttime = util.string2Date(data.last_clock_time);

          var attendancetemp = data.attendance;
          var leavetemp = data.leave;
          var outtemp = data.out;
          var overtemp = data.over;

          that.data.time[0] = util.forTime(pretime);
          that.data.time[1] = util.forTime(lasttime);
          var osTime = util.nowTime();
          that.setData({
            time: that.data.time,
            current: osTime,
            attendance: attendancetemp,
            leave: leavetemp,
            out: outtemp,
            over: overtemp

          })
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        toast.hideToast()
      }
    })
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
  , toattendance: function (e) {
    wx.navigateTo({
      url: '../attendance/attendance',
      success: function (res) {
        // success
      }
    })
  }, tovacation: function (e) {
    wx.navigateTo({
      url: '../record/record',
      success: function (res) {
        // success
      }
    })
  }, punchCard: function () {
    var that = this;
    toast.showLoadToast();
    wx.request({
      url: 'https://xiaocx.windward.cn/?a=clock',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();

        that.data.time[0] = that.data.time[1];
        that.data.time[1] = hour + ':' + minute;
        that.setData({
          time: that.data.time,
          current: util.nowTime()
        });
      },
      complete: function () {
        toast.hideToast()
      }
    })
  }
})