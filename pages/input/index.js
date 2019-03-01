// pages/input/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     focus:false,
     inputValue:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 同步输入的值到view中
  bindKeyInput:function(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  // 连续输入两个1变成2
  bindReplaceInput:function(e){
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if(pos !== -1){
      left = e.detail.value.slice(0,pos)
      //计算光标的位置
      pos = left.replace(/11/g,'2').length
    }

    return {
      value:value.replace(/11/g,'2'),
      cursor:pos
    }
  },
  // 输入123键盘消失
  bindHideKeyboard:function(e){
    if(e.detail.value === '123'){
      wx.hideKeyboard()
    }
  }
})