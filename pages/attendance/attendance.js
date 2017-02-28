// pages/attendance.js
Page({
  data: {
    index:0,
    color1: '',
    color2: '',
    hidden1: false,
    hidden2: true,
    range: ['2017年1月','2017年2月','2017年3月','2017年4月','2017年5月','2017年6月','2017年7月','2017年8月','2017年9月','2017年10月','2017年11月','2017年12月'],
    infos: [{
      name: '异常',
      fcolor: '#dc1259',
      dhidden: true,
      style: [{
        bgc: '#ebebeb',
        color: '#c5c5c5'
      }, {
        bgc: '#ebebeb',
        color: '#c5c5c5'
      }, {
        bgc: '#ebebeb',
        color: '#c5c5c5'
      }]
    }, {
      name: '异常',
      fcolor: '#dc1259',
      dhidden: false,
      style: [{
        bgc: '#ebebeb',
        color: '#c5c5c5'
      }, {
        bgc: '#f63d7c',
        color: '#ffffff'
      }, {
        bgc: '#ebebeb',
        color: '#c5c5c5'
      }]
    }, {
      name: '异常',
      fcolor: '#dc1259',
      dhidden: false,
      style: [{
        bgc: '#ebebeb',
        color: '#c5c5c5'
      }, {
        bgc: '#f63d7c',
        color: '#ffffff'
      }, {
        bgc: '#f63d7c',
        color: '#ffffff'
      }]
    }, {
      name: '异常(已处理)',
      fcolor: '#4a4a4a',
      dhidden: true,
      style: [{
        bgc: '#ebebeb',
        color: '#c5c5c5'
      }, {
        bgc: '#f63d7c',
        color: '#ffffff'
      }, {
        bgc: '#f63d7c',
        color: '#ffffff'
      }]
    },
    {
      name: '正常',
      fcolor: '#4a4a4a',
      dhidden: true,
      style: [{
        bgc: '#ebebeb',
        color: '#c5c5c5'
      }, {
        bgc: '#f63d7c',
        color: '#ffffff'
      }, {
        bgc: '#f63d7c',
        color: '#ffffff'
      }]
    }]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }, selectionA: function (e) {
    this.setData({
      color1: '#1eb1da',
      color2: '#4a4a4a',
      hidden1: false,
      hidden2: true
    })
  }, selectionE: function (e) {
    this.setData({
      color1: '#4a4a4a',
      color2: '#1eb1da',
      hidden1: true,
      hidden2: false
    })
  }, exceptap: function (e) {
    var that = this;
    this.setData({
      
      dhidden: !dhidden
    })
  },select_sheet:function(e){
     console.log(e)
     this.setData({
       index:e.detail.value
     })
  },excepabsence:function(e){
    wx.navigateTo({
      url: '../exception/exception',
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
  },excepearly:function(){
    wx.navigateTo({
      url: '../exception/exception',
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
  },exceplate:function(e){
    wx.navigateTo({
      url: '../exception/exception',
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