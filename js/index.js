

function aboutMe(){
	
	var box = $('header .about-content')[0];
	var last = $('.list-last')[0];
	
	
	// 写一个渲染数据的函数
	function creatDiv(arr){
		
		// 生成结构
		
		/*
			<div class="pull-left title">
				<h3>sssss</h3>
				<ul>
					<li>
						<a href="#">常见问题</a>
					</li>
					<li>
						<a href="#">常见问题</a>
					</li>
					<li>
						<a href="#">常见问题</a>
					</li>
				</ul>
			</div>
		
		*/
	   var str = '<div class="pull-left title"><h3>'+arr[0].title+'</h3><ul>'; 
	   for(var i=0;i<arr.length;i++){
		   if(i==0){
			   continue;
		   }
		   str += '<li>'+
						'<a href="'+arr[i].link+'">'+arr[i].title+'</a>'+
					'</li>';
	   }
	   
	   str += '</ul></div>';
	  
	   box.innerHTML += str; 
	}
	
	var data = oData.about.data;
	creatDiv(data[32260].list);
	creatDiv(data[32261].list);
	creatDiv(data[32262].list);
	creatDiv(data[32263].list);
	creatDiv(data[132238].list);
	creatDiv(data[132239].list);
	
	function creatBb(){
		/*
		<div class="bb">
			<h3>
				<span>gggggg</span>
			</h3>
			<div>
				<p></p>
				<p></p>
			</div>
		</div>
		
		*/
	   var str = '<div class="bb">'+
			'<h3>'+
				'<span>'+data[32163].list[10].title+'</span>'+
			'</h3>'+
			'<div>'+
				'<p>';
			
			for(var i=0;i<data[32170].list.length;i++){
				str += ' <a href="'+data[32170].list[i].link+'"> '+data[32170].list[i].title + data[32170].list[i].subTitle+' </a> ';
			}	
				
		str += '</p><p><a href="#">'+data[138809].list[0].text+'</a></p>';		
		box.innerHTML+= str;		
	}
	creatBb();
	
	
	// 给last添加移入移出事件
	
	last.onmouseenter = function(){
		box.style.display = 'block';
		
	}
	last.onmouseleave = function(){
		box.style.display = 'none';
		
	}
	
}

// 
aboutMe();

// 渲染主题
function mainFn(){
	
	var catalogContent = $('.catalog-content')[0];
	var data = oData.main.data;
	
	function creatDiv(arr){
		/*
			<div class="pull-left">
				<h3>市场</h3>
				<div>
					<a href="3">上一</a>
					<a href="3">上一</a>
				</div>
			</div>
		
		*/
		/*
			超级字符串  es6新增的
			在超级字符串里面写变量 ：
				${变量}
		*/ 
		var onoff = '<span class="pull-right">全部'+arr.list[0].title.substring(2)+'></span>';
		var str = `
				<div class="pull-left">
					<h3>${arr.list[0].title} ${arr.list.length>13?onoff:''}</h3>
					<div>
			`;
		
		for(var i=1;i<arr.list.length;i++){
			str += `<a href="${arr.list[i].link}">${arr.list[i].title}</a>`;
		}
		str += `</div>
			</div>`;
		catalogContent.innerHTML += str;
	}
	
	
	creatDiv(data[132244])
	creatDiv(data[138852])
	creatDiv(data[138851])
	
	var catalog = $('.catalog')[0];
	var timer = null;
	
	bind(catalog,'mouseenter',function(){
		clearTimeout(timer);
		catalogContent.style.display = 'block';
	})
	bind(catalog,'mouseleave',function(){
		timer = setTimeout(function(){
			catalogContent.style.display = 'none';
		},300)
		
	})
	
}

mainFn();


// 搜索框
function serchBox(){
	
	var search_box = $('.search-box')[0];
	var serch_key = $('.search-key',search_box)[0];
	var text = $('.search>input')[0];
	var list = $('.search-list',search_box)[0];
	
	
	
	var data = oData.search;
	
	bind(text,'input',function(){
		
		
		// 通过输入的内容查找数据
		
		var serachData = data[this.value];
		
		if(!serachData){
			
			serch_key.innerHTML = '';
			list.innerHTML = '';
			search_box.style.display = 'none';
			
			return ;
		}
		search_box.style.display = 'block';
		serachData = serachData.result.list;
		
		serch_key.innerHTML = '';
		// 渲染数据 关键字里面的内容
		
		for(var i=0;i<serachData[0].list.length;i++){
			serch_key.innerHTML += `
									<a href="${serachData[0].list[i].link}">
										<span style="background-image: url(${serachData[0].list[i].icon});"></span>
										${serachData[0].list[i].total}${serachData[0].list[i].desc}
									</a>`;
		}
		
		
		// 渲染列表 
		
		for(var i=1;i<serachData.length;i++){
			console.log(serachData[i])
			
			list.innerHTML += `
								<li>
									<a href="${serachData[i].link}">${serachData[i].query}</a>
									<span>
										${fn(serachData[i].tags,serachData[i].link)}
									</span>
								</li>`;
		}
		
		function fn(tags,link){
			
			var str = '';
			
			if(typeof tags == 'object'){
				
				for(var i=0;i<tags.length;i++){
					str += '<a href="'+link+'">'+tags[i].tag+'</a>';
				}
			}else{
				return '';
			}
			
			return str;
			
		}
		
		console.log(this.value,serachData)
		
	})
	console.log(data)
	
	
}
serchBox();