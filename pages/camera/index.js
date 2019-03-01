// pages/camera/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode:'scanCode'
  },

  cameraError:function(e){
    console.log(e.detail.errMsg)
  },

  //拍照
  takePhoto:function(e){
     this.cameraCtx.takePhoto({
       quality:'high',
       success:(res)=>{
         this.setData({
           src:res.tempImagePath
         })
       }
     })
  },

  startRecord:function(e){
     this.cameraCtx.startRecord({
       success:(res)=>{
         console.log('开始拍摄视频')
       }
     })
  },

  stopRecord:function(e){
     this.cameraCtx.stopRecord({
       success:(res)=>{
         this.setData({
           src:res.tempThumbPath,
           videoSrc:res.tempVideoPath
         })
       }
     })
  },

  scanScope:function(e){
      this.setData({
        mode:'scanCode'
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.cameraCtx = wx.createCameraContext()
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