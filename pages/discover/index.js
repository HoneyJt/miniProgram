// pages/discover/index.js

var initData = 'this is first line \nthis is second line'
var extraLine = [];
var types = ['default','primary','warn']
Page({

  /**
   * 页面的初始数据
   */
  data: {
     imageUrls:[
       'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3817191486,3276892468&fm=27&gp=0.jpg',
       'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=27&gp=0.jpg',
       'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1911150647,1930869014&fm=27&gp=0.jpg'
     ],
     indicatorDots:false,
     autoplay:false,
     interval:5000,
     duration:1000,
     selectColor:"#fff",
     index:0,
     circle:false,
     text:initData,
     defaultSize:'default',
     primarySize:'default',
     warnSize:'default',
     disabled:false,
     plain:false,
     loading:false
  },

  setDisabled:function(e){
    this.setData({
      disabled:!this.data.disabled
    })
  },

  setPlain:function(e){
    this.setData({
      plain:!this.data.plain
    })
  },

  setLoading:function(e){
    this.setData({
      loading:!this.data.loading
    })
  },

  default:function(e){
    wx:wx.navigateTo({
      url: '/pages/form/index?id=123',
      success: function(res) {
      },
      fail: function(res) {
      },
      complete: function(res) {
      },
    })
  },

  primary:function(e){
    wx:wx.navigateTo({
      url: '/pages/input/index',
    })
  },

  warn:function(e){
    wx:wx.navigateTo({
      url: '/pages/label/index',
    })
  },

  picker:function(e){
    wx:wx.navigateTo({
      url: '/pages/picker/index',
    })
  },

  audioTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/audio/index',
    })
  },

  navgateTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/navgation/index',
    })
  },

  userInfo:function(e){
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },

  add:function(e){
    extraLine.push('add line')
    this.setData({
      text:initData + '\n' + extraLine.join('\n')
    })
  },



  remove:function(e){
    if(extraLine.length>0){
      extraLine.pop()
      this.setData({
        text:initData + '\n' + extraLine.join('\n')
      })
    }
  },

  // indicator-dots	是否显示面板指示点
  changeIndicatorDots:function(e){
     this.setData({
       indicatorDots:!this.data.indicatorDots,
       circle:true
     })
  },

  switchTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/switch/index',
    })
  },

  imageTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/image/index',
    })
  },

  // autoplay		是否自动切换
  changeAutoplay:function(e){
     this.setData({
       autoplay:!this.data.autoplay,
       index:1
     })
  },

  // 自动切换时间间隔
  intervalChange:function(e){
    this.setData({
      interval:e.detail.value
    })
  },

  itemChange:function(e){
    console.log(this.data.index,'---------')
  },

  durationChange:function(e){
    this.setData({
      duration:e.detail.value
    })
  },

  pickerView:function(e){
    wx:wx.navigateTo({
      url: '/pages/pickeView/index',
    })
  },

  sliderTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/slide/index',
    })
  },

  textareaTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/textarea/index',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  radioTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/radio/index',
    })
  },
  
  //video基本属性
  videoTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/video/index',
    })
  },

  cameraTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/camera/index',
    })
  },

  mapTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/map/index',
    })
  },

  canvasTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/canvas/index',
    })
  },

  webViewTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/webView/index',
    })
  },
  apiTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/API/index',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.startPullDownRefresh()
  },

  scrollTop:function(e){
    wx.pageScrollTo({
      scrollTop: 0,
      duration:500
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
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
      setTimeout(function(){
         wx.stopPullDownRefresh()
      },2000)
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