// pages/video/index.js

function getRandomColor(){
  const rgb = []
  for(var i=0;i<3;i++){
    let color = Math.floor(Math.random()*256).toString(16)
    color = color.length == 1 ? '0' + color:color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  inputValue:'',
  /**
   * 页面的初始数据
   */
  data: {
    src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    danmuList:[
      {
        text:'刚开始就出现的弹幕',
        color:'#ff0000',
        time:1
      },
      {
        text: '第三秒出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ]
  },
 
  //视频发生错误的回调
  videoErrorCallback:function(e){
     console.log(e.detail.errMsg)
  },

  //发送弹幕
  bindSendDanmu:function(e){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:getRandomColor()
    })
  },
  
  //播放按钮
  bindPlay:function(e){
    this.videoContext.play()
  },

  bindPause:function(e){
    this.videoContext.pause()
  },

  bindInputBlur:function(e){
    this.inputValue = e.detail.value
    console.log('---------',this.inputValue)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log(getRandomColor())
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     this.videoContext = wx.createVideoContext('myVideo')
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