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

function sum(arr){
  return arr.reduce(function(x,y){
    return x+y;
  });
}
sum([1,2,3,4,5]);

function count(){
  var arr=[];
  for(var i=1;i<=3;i++){
    arr.push((function(n){
      return function(){
        return n*n;
      }
    })(i));
  }
  return arr;
}
