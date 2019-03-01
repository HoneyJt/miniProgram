// pages/scale/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
     x:0,
     y:0,
     scale:2,
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    items: [{ name: 'USA', value: '美国' },
    { name: 'CHN', value: '中国', checked: 'true' },
    { name: 'BRA', value: '巴西' },
    { name: 'JPN', value: '日本' },
    { name: 'ENG', value: '英国' },
    { name: 'TUR', value: '法国' }
    ]
  },

  checkboxChange:function(e){
    console.log(e.detail.value)
  },

  tap:function(e){
    this.setData({
      x:30,
      y:30
    })
  },

  tap2:function(e){
    this.setData({
      scale:3
    })
  },

  onChange:function(e){
    console.log(e.detail)
  },
   
  onScale:function(e){
    console.log(e.detail)
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

  }
})