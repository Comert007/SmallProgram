function showLoadToast() {
    wx.showToast({
        title: '正在加载',
        icon: 'loading'
    })
}

function showLoadDurToast(time) {
    wx.showToast({
        title: '正在加载',
        icon: 'loading',
        duration:time
    })
}

function hideToast() {
    wx.hideToast()
}
module.exports = {
    showLoadToast: showLoadToast,
    showLoadDurToast:showLoadDurToast,
    hideToast:hideToast
}