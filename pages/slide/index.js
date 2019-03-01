// pages/slide/index.js
var pageData = {}
for (var i=1;i<5;++i){
  (function (index){
    pageData[`slider${index}change`] = function(e){
      console.log(e.detail.value)
    }
  })(i);
}
Page(pageData)