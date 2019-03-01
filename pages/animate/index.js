// pages/animate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
     this.animation = wx.createAnimation()
  },
  rotate:function(e){
     this.animation.rotate(Math.random() * 720 - 360).step()
     this.setData({
       animation:this.animation.export()
     })
  },
  scale:function(e){
     this.animation.scale(Math.random() * 2).step()
     this.setData({
       animation:this.animation.export()
     })
  },
  translate:function(e){
     this.animation.translate(Math.random() * 100 - 50,Math.random() * 100 - 50).step()
     this.setData({
       animation:this.animation.export()
     })
  },
  skew:function(e){
    this.animation.skew(Math.random() * 90,Math.random() * 90).step()
    this.setData({
      animation:this.animation.export()
    })
  },
  rotateAndScale:function(){
     this.animation.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).step()
     this.setData({
       animation:this.animation.export()
     })
  },
  rotateThenScale:function(){
     this.animation.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2).step()
     this.setData({
       animation:this.animation.export()
     })
  },
  all:function(e){
    this.animation.rotate(Math.random() * 720 - 360).scale(Math.random() *2)
    .translate(Math.random() * 100 - 50,Math.random() * 100 - 50).skew(Math.random() * 90,Math.random() * 90).step()
    this.setData({
      animation:this.animation.export()
    })
  },
  allInQueue:function(e){
    this.animation.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2)
      .step().translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step().skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  reset:function(e){
    this.animation.rotate(0,0).scale(1).translate(0,0).skew(0,0).step({duration:0})
    this.setData({
      animation:this.animation.export()
    })
  }
})