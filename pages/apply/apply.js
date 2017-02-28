// pages/apply/apply.js
var util = require('../../utils/util.js')
Page({
  data: {
    infos: [{
      avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=913836838,411507439&fm=21&gp=0.jpg',
      name: '王小二',
      action: '发起申请',
      time: '2月2日12:22',
      hidden: true,
      color: '#4a4a4a',
      bc2: '#47d39f',
      bgc1: '#f9f9f9',
      bgc2: '#47d39f',
      bgc3: '#47d39f',
      chidden: false
    }, {
      avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3106463329,2950037060&fm=21&gp=0.jpg',
      name: '欧阳正气',
      action: '—',
      hidden: true,
      time: '',
      color: '#4a4a4a',
      bc2: '#47d39f',
      bgc1: '#47d39f',
      bgc2: '#47d39f',
      bgc3: '#e7e7e7',
      chidden: false,
    }, {
      avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1521400312,565655036&fm=21&gp=0.jpg',
      name: '阿木木',
      action: '同意',
      time: '2月2日12:22',
      hidden: false,
      content: '王小二突发肠胃炎，工作上我这边可以安排过来，不会受影响。',
      color: '#4a4a4a',
      bc2: '#f9f9f9',
      bgc1: '#e7e7e7',
      bgc2: '#f9f9f9',
      bgc3: '#e7e7e7',
      chidden: true,
    }, {
      avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2898887228,1423209320&fm=21&gp=0.jpg',
      name: '小阿甘',
      action: '待审批',
      time: '2月2日12:22',
      hidden: true,
      color: '#1eb1da',
      bc2: '#c2c2c2',
      bgc1: '#e7e7e7',
      bgc2: 'white',
      bgc3: '#f9f9f9',
      chidden: false,
    }],
    type_name: '',
    start: '',
    end: '',
    hours: '',
    reason: '',
    created: '',
    approvers: ''
  },
  onLoad: function (options) {
    console.log(options)
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    var that = this
    wx.request({
      url: 'https://xiaocx.windward.cn/?a=leaveDetail',
      data: {
        leave_id:2
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data)
        var data = res.data.data;
        var startTemp = util.formatYear(util.string2Date(data.start));
        var endTemp = util.formatYear(util.string2Date(data.end));
        var createdTemp = util.formatYear(util.string2Date(data.created));
        // 审批流程
        var infos = new Array()

        infos[0] = data.applier;
        infos[0].color = '#4a4a4a';
        infos[0].bc2 = '#47d39f'
        infos[0].bgc1 = '#f9f9f9'
        infos[0].bgc2 = '#47d39f'
        infos[0].bgc3 = '#47d39f'
        infos[0].hidden = true
        infos[0].chidden = false
        infos[0].remark = '发起申请'
        infos[0].action='发起申请'

        var process = data.process[0];
        console.log(process)
        for (var i = 0; i < process.length; i++) {
          var approvers = process[i].approvers;
          for (var j = 0; j < approvers.length; j++) {
            var len = infos.length;
            infos[len] = approvers[j];
            infos[len].status = process[i].status
            if (j == 0) {
              infos[len].isHead = true
            } else {
              infos[len].isHead = false
            }
          }
        }

        //整个循环用来控制左边的流程线
        for (var i = 1; i < infos.length; i++) {
          //评论区是否隐藏
          if (infos[i].remark.length > 0) {
            infos[i].hidden = false
          } else {
            infos[i].hidden = true
          }
          //圆圈是否隐藏
          if (infos[i].isHead == true) {
            infos[i].chidden = false
          } else {
            infos[i].chidden = true
          }

          if (infos[i].status == 3) {//已同意
            infos[i].color = '#4a4a4a';
            infos[i].bc2 = '#47d39f';
            infos[i].bgc1 = '#47d39f';
            infos[i].bgc2 = '#47d39f';
            infos[i].bgc3 = '#47d39f';
            infos[i].action='同意';
            infos[i].time='2月28日 11:30'

          } else if (infos[i].status == 2 || infos[i].status == 1) {//审批中
            if (infos[i].isHead) {

              infos[i].color = '#4a4a4a';
              infos[i].bc2 = '#47d39f';
              infos[i].bgc1 = '#47d39f';
              infos[i].bgc2 = '#47d39f';
              infos[i].bgc3 = '#e7e7e7';
            } else {
              infos[i].color = '#4a4a4a';
              infos[i].bc2 = '#f9f9f9';
              infos[i].bgc1 = '#e7e7e7';
              infos[i].bgc2 = '#f9f9f9';
              infos[i].bgc3 = '#e7e7e7';
            }

          } else if (infos[i].status == 0) {//待审批

            infos[i].color = '#1eb1da';
            infos[i].bc2 = '#c2c2c2';
            if(infos[i-1].status==3){
              infos[i].bgc1 = '#47d39f';
            }else{
            infos[i].bgc1 = '#e7e7e7';
            }
            infos[i].bgc2 = 'white';
            if(i<length-1){
            infos[i].bgc3 = '#e7e7e7';
            }else{
              infos[i].bgc3 = '#f9f9f9';
            }
          }
        }

        
        console.log(infos)


        that.setData({
          type_name: data.type_name,
          hours: data.hours,
          start: startTemp,
          end: endTemp,
          reason: data.reason,
          created: createdTemp,
          approvers:infos
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
}),
  function getApplyDetail(data) {
    var applier = data.applier;

    var infos = new Array()
    infos[0].vatar = applier.avtar;
    infos[0].username = applier.username;
    return infos
  }