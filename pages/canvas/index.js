// pages/canvas/index.js
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
     this.position = {
       x:150,
       y:150,
       vx:2,
       vy:2
     }
     this.drawBall()
     this.interval = setInterval(this.drawBall, 17)
  },

  drawBall:function(){
     var p = this.position
     p.x += p.vx
     p.y += p.vy
     if(p.x >= 300){
       p.vx = -2
     }
     if(p.x <= 7){
       p.vx = 2
     }
     if(p.y >= 300){
       p.vy = -2
     }
     if(p.y <=7){
       p.vy = 2
     }

     var context = wx.createContext()
    context.setStrokeStyle('red')
    context.strokeRect(10, 10, 150, 75)
    context.draw()

     function ball(x,y){
       context.beginPath(0)
       context.arc(x,y,5,0,Math.PI*2)
       context.setFillStyle('#1aad19')
       context.setStrokeStyle('rgba(1,1,1,0)')
       context.fill()
       context.stroke()
     }

     ball(p.x,150)
     ball(150,p.y)
     ball(300-p.x,150)
     ball(150,300-p.y)
     ball(p.x,p.y)
     ball(300-p.x,300-p.y)
     ball(p.x,300-p.y)
     ball(300-p.x,p.y)

    wx.drawCanvas({
      canvasId: 'canvas',
      actions: context.getActions()
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
     clearInterval(this.interval)
  },

  buttonTap:function(e){
    // wx.canvasToTempFilePath({
    //   x: 100,
    //   y: 200,
    //   width: 50,
    //   height: 50,
    //   destWidth: 100,
    //   destHeight: 100,
    //   canvasId: 'canvas',
    //   success(res) {
    //     console.log(res.tempFilePath)
    //   }
    // }),

    const ctx = wx.createCanvasContext('canvas')
    ctx.rect(10, 10, 100, 30)
    ctx.setStrokeStyle('yellow')
    ctx.stroke()
    ctx.draw()

    console.log(ctx)
  }

 
})