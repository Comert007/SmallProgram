// pages/vacation/vacation.js
var util = require('../../utils/util.js')
Page({
  data:{
    disabled:true,
    txt:'',
    typeIndex:0,
    dayIndex:0,
    rangeType:['事假','病假'],
    rangeDays:['1天','2天','3天','4天','5天','6天','7天'],
    rangeStart:'',
    rangeEnd:'',
    time: '2017-2-18'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    console.log(util.horiYear(new Date()))
   this.setData({
     rangeStart:util.horiYear(new Date()),
     rangeEnd:util.horiYear(new Date())
   })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  line_change:function(e){
    this.setData({
      txt:e.detail,
      disabled:false
    })
  },toapply:function(e){
    wx.navigateTo({
      url: '../apply/apply',
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
  },type:function(e){
    this.setData({
      typeIndex:e.detail.value
    })
  },day:function(e){
    this.setData({
      dayIndex :e.detail.value
    })
  },start:function(e){
    this.setData({
      rangeStart:e.detail.value
    })
  },end:function(e){
    this.setData({
      rangeEnd:e.detail.value
    })
  }
})