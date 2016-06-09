var xiaoming={
  name:'小明',
  birth:1990,
  age:function(){
    var that=this;
    function getAgeFromBirth(){
      var y=new Date().getFullYear();
      return y-that.birth;
    }
    return getAgeFromBirth();
  }
};

var count=0;
var oldParseInt=parseInt;
window.parseInt=function(){
  count+=1;
  return oldParseInt.apply(null,arguments);
}
