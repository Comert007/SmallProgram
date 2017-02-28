// var toast = require('../../toast/toast.js')
Page({
  data:{
    imagePaths:''
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },addImages:function(){
    var that = this;
    wx.chooseImage({
      count: 3, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // success
        var tempFilePaths = res.tempFilePaths
        that.setData({
          imagePaths:tempFilePaths
        })
        console.log(tempFilePaths)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },preview:function(res){
    console.log(res)
    var that = this;
    wx.previewImage({
      // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: that.data.imagePaths,
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
  },
  commit:function(){
    var images = this.data.imagePaths;
    // toast.showLoadToast();
    wx.showToast({
          title:'正在上传',
          icon:'loading'
        })
    wx.uploadFile({
      url: 'https://xiaocx.windward.cn/?a=saveLeave',
      filePath:images[0],
      name:'avatar',
      // header: {}, // 设置请求的 header
      // formData: {}, // HTTP 请求中其他额外的 form data
      success: function(res){
        // success
        console.log(res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
        // wx.hideToast();
        wx.showToast({
          title:'上传完成',
          icon:'success',
          time:1000
        })
      }
    })
  }
})