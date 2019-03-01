// pages/switch/index.js
var pageData = {
  data:{
    switch1:true,
    switch2:true,
    switch1Style:'',
    switch2Style:'text-decoration:line-through'
  }
}

for(var i=1;i<=2;++i){
  (function (index){
    pageData[`switch${index}Change`] = function(e){
      console.log(`switch${index}change事件`,e.detail.value)
      var obj = {}
      obj[`switch${index}Checked`] = e.detail.value
      this.setData(obj)
      obj = {}
      obj[`switch${index}Style`] = e.detail.value ? '' :'text-decoration:line-through'
    }
  })
}


Page(pageData)