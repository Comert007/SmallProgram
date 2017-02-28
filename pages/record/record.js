// pages/record/record.js
var util = require('../../utils/util.js')
Page({
  data: {
    indexdate: 0,
    indextype: 0,
    rangedate: ['2017年2月(5)', '2017年3月(3)', '2017年4月(4)', '2017年5月(2)', '2017年6月(1)'],
    rangetype: ['全部', '待审核', '审批中', '已拒绝', '已审批'],

    colors: [],
    data: '',
    temp: ''

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    var that = this;
    wx.request({
      url: 'https://xiaocx.windward.cn/?a=leaveList',
      data: {},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success

        var result = res.data.data;
        console.log(result)
        for (var i = 0; i < result.length; i++) {
          var created = result[i].created;
          var start = result[i].start;
          var end = result[i].end;
          var startDate = util.string2Date(start);
          var endDate = util.string2Date(end);
          var createdDate = util.string2Date(created);
          result[i].start = util.getMonth(startDate)
          result[i].created = util.formatDate(createdDate)
          if (result[i].status == 1) {
            result[i].color = '#1eb1da'
          } else if (result[i].status == 2) {
            result[i].color = '#f76496'
          }
        }

        that.setData({
          data: result,
          temp: result
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }, tovacation: function (e) {
    wx.navigateTo({
      url: '../vacation/vacation',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }, date: function (e) {
    this.setData({
      indexdate: e.detail.value
    })

  }, type: function (e) {
    var num = e.detail.value;
    var typeData = this.data.data;
    var tempArray =[];

    if (num == 0) {
      tempArray = this.data.data
    } else {
      
      var status = num-1;
      for(var i = 0; i<typeData.length; i++){
       if(typeData[i].status==status){
         tempArray.push(typeData[i])
       }
      };
      
    }
    this.setData({
      indextype: e.detail.value,
      temp: tempArray
    })
  },
  applyDetail:function(){
    wx.navigateTo({
      url: '../apply/apply?leave_id=1',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
