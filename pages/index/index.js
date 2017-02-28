//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }, exception: function () {
    wx.navigateTo({
      url: '../exception/exception',
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
  }, attendance: function () {
    wx.navigateTo({
      url: '../attendance/attendance',
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
  }, vacation: function () {
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
  }, apply: function () {
    wx.navigateTo({
      url: '../apply/apply',
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
  }, home: function () {
    wx.navigateTo({
      url: '../home/home',
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
  }, record: function () {
    wx.navigateTo({
      url: '../record/record',
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
  }, test: function (e) {

    // wx.getUserInfo({
    //     success:function(res){
    //       console.log(res);
    //     }
    // })
    // ,

    wx.showToast({
      title: '正在加载...',
      icon: 'loading'
    }),
      wx.request({
        url: 'https://xiaocx.windward.cn/?a=bind',
        data: {
        },
        method: 'GET',
        success: function (res) {
          // success
          console.log('请求成功：' + res)
        },
        fail: function () {
          // fail
          console.log('请求失败：')
        },
        complete: function () {
          // complete
          wx.hideToast()
        }
      })
  }
})
