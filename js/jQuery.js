

/*
	作用：数组求和，
	参数 ：数组
	返回值 ： 求和的数字
*/ 
function sum(obj){
	var num = 0;
	for(var i=0;i<obj.length;i++){
		num += obj[i];
	}
	return num;	
}

/*
	作用 ： 获取元素
	参数 ：
		参数一： 字符串，是一个css选择器
		参数二：可选，是一个确定的元素
	
	返回值 ： 获取的元素
*/
 function $(name,parent){
   parent = parent || document;
   var obj = parent.querySelectorAll(name);
   
   return obj;
}

 /*
    封装一个写事件的函数 
	作用 ：给元素添加事件
	参数 ：
		参数一 ：添加事件的元素，元素
		参数二 ：不带on的事件 ， 字符串
		参数三 ：触发事件时，执行的代码，函数
	
 */ 
function bind(obj,event,fn){
  obj['on'+event] = fn;
}


 /*
 
    封装一个for循环,循环数组
	作用：通过for循环操作数组里面的每一个数据
	参数 ：
		参数一 ： 数组
		参数二 ： 函数，操作代码的函数function(el,i){}
 
		
 */ 
function forEach(obj,fn){
  for(var i=0;i<obj.length;i++){
	  fn(obj[i],i);
  }		  
}

 /*
	封装一个兼容获取样式的函数
	作用 ： 获取元素的样式
	参数 ：
		参数一 ：元素
		参数二 ：元素的样式
	返回结果 ： 样式的值
	
 */ 
   function getCSS(obj,attr){
	   
	   if(obj.currentStyle){
		   // ie
		   return obj.currentStyle[attr]
	   }else{
		   // 谷歌
		   return getComputedStyle(obj)[attr];
	   }
   }

