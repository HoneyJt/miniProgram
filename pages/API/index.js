// pages/API/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading({
      success:function(res){
        console.log(res)
      }  
    }),

    setTimeout(function(){
      wx.hideNavigationBarLoading()
    },2000)
  },

  navTap:function(){
    wx.setNavigationBarTitle({
      title: 'API',
    })
  },

  navColorTap:function(){
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#00FF00',
      animation:{
        duration:1000,
        timingFunc:'easeIn'
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.canUse()
    //获取系统信息
    this.getSystemInfo()

    //更新
    this.updateManage()

    this.appShow()

    //logger日志
  },

  getSystemInfo:function(){
     wx.getSystemInfo({
       success: function(res) {
         console.log(res.model)
       },
     })
     const res = wx.getSystemInfoSync()
     this.setData({
       userInfo:res
     })
  },
 
  //校验功能当前版本是不是可用
  canUse:function(){
    console.log(wx.canIUse('openBluetoothAdapter')) 
    console.log(wx.canIUse('getSystemInfoSync.return.screenWidth'))
    console.log(wx.canIUse('showToast.object.image'))
    console.log(wx.canIUse('button.open-type.contact'))
  },

  updateManage:function(){
    const UpdateManager = wx.getUpdateManager()
    UpdateManager.onCheckForUpdate(function(res){
      console.log(res)
    })

  },

  appShow:function(){
     wx.onAppShow(function(res){
       console.log(res)
     })
  },

  logger:function(){
    const logger = wx.getLogManager({level:1})
    logger.log({ str: 'hello world' }, 'basic log', 100, [1, 2, 3])
    logger.info({ str: 'hello world' }, 'info log', 100, [1, 2, 3])
    logger.debug({ str: 'hello world' }, 'debug log', 100, [1, 2, 3])
    logger.warn({ str: 'hello world' }, 'warn log', 100, [1, 2, 3])
  },

  switchTab:function(){
     wx.switchTab({
       url: '../logs/logs',
     })
  },

  launchPage:function(){
     wx.reLaunch({
       url: '../map/index',
     })
  },

  toastTap:function(){
    wx.showToast({
      title: '成功',
      icon:'success',
      duration:2000
    })
  },

  backPage:function(){
    wx:wx.navigateBack({
      delta:1
          })
  },

  loadingTap:function(){
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function(){
      wx.hideLoading()
    },2000)
  },

  refreshTap:function(){
    wx.setBackgroundTextStyle({
      textStyle: 'dark'
    })

    wx.setBackgroundColor({
      backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
      backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
    })
  },

  actionTap:function(){
    wx.showActionSheet({
      itemList: ['A','B','C','D'],
      success:function(res){
        console.log(res.tapIndex)
      }
    })
  },

  modelTap:function(){
    wx.showModal({
      title: '提示',
      content: '模态框',
      success:function(res){
        if(res.confirm){
          console.log('用户点击了确定')
        }else if(res.cancel){
          console.log('点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
     console.log(res)
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

  tabBarTap:function(){
    wx.switchTab({
      url: '../index/index',
    })
    wx.showTabBarRedDot({
      index: 0,
    })
    wx.setTabBarStyle({
      color: '#FF0000',
      selectedColor: '#00FF00',
      backgroundColor: '#0000FF',
      borderStyle: 'white'
    })
    wx.setTabBarBadge({
      index: 2,
      text: '10',
    })
  },

  fontTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/font/index',
    })
  },

  animateTap:function(){
    wx:wx.navigateTo({
      url: '/pages/animate/index',
    })
  },

  networkTap:function(){
     wx:wx.navigateTo({
       url: '/pages/network/index',
     })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  fileTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/file/index',
    })
  },
  addressTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/address/index',
    })
  },
  flexTap:function(e){
    wx:wx.navigateTo({
      url: '/pages/flex/index',
    })
  },
})